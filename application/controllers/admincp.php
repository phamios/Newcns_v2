<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class admincp extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('url');
        $this->load->library('upload');
        $this->load->library('pagination');
        $this->load->library('parser');
        $this->load->helper('cookie');
        $this->load->helper('text');
        $this->load->library('form_validation');
        //$this->load->library('sonclass');
        $this->load->helper(array('form', 'url'));
        @session_start();
    }

    public function index() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
//                 $this->load->model('user_model');
//                 $this->load->model('store_model');
//                 $data['totaluser'] = $this->user_model->totaluser();
//                 $data['total_member'] = $this->user_model->total_member();
//                 $data["total_user_list"] = $this->user_model->showalluser();
//                 $this->load->model('log_model');
//                 $config['base_url'] = site_url('admincp/index');
//                 $config['total_rows'] = $this->log_model->total_log();
//                 $config['per_page'] = 15;
//                 $config['prev_link'] = 'First';
//                 $config['next_link'] = 'Next';
//                 $this->pagination->initialize($config);
//                 $data["total_log"] = $this->log_model->show_log($config['per_page'], $this->uri->segment(3));
//                 $data['pages_logs'] = $this->pagination->create_links();
//                 $data["pageviews"] = $this->log_model->total_log();
//                 $data['user_active'] = $this->user_model->totaluseractive();
//                 $data['user_unactive'] = $this->user_model->totaluserunactive();
//                 $this->load->model("content_model");
//                 $data["totalapp"] = $this->content_model->totalappactive();
//                 $data['total_rows'] = $this->log_model->total_log();
//                 //$this->sonclass->switch_theme("huyxom");
//                 $data['total_amount'] = $this->store_model->total_amount_order();
//                 $data['total_items_ped'] = $this->store_model->total_amount_ped();
            $this->load->view('admin/dashboard');
        }
    }

    public function add_cate_hot() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('catetype_model');
            $data['alltype'] = $this->catetype_model->_showalltype();

            if (isset($_REQUEST['submit'])) {
                $nametype = $this->input->post('nametype', true);
                $this->catetype_model->add_type($nametype);
                redirect('admincp/type');
            }
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function set_type_hot($id = null, $status) {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('catetype_model');
            $this->catetype_model->set_cate_hot($id, $status);
            redirect('admincp/add_cate_hot');
        }
    }

    public function member() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('user_model');
            $this->load->model('report_model');
            $config['base_url'] = site_url('admincp/member');
            $config['total_rows'] = $this->user_model->total_member();
            $config['per_page'] = 10;
            $config['prev_link'] = 'Last';
            $config['next_link'] = 'Next';
            $this->pagination->initialize($config);
            $data['members'] = $this->user_model->_listmember($config['per_page'], $this->uri->segment(3));
            $data['pages'] = $this->pagination->create_links();
            $data['shoutbox'] = 0;
            //$data['profits'] = $this->report_model->total_profit($userid);
            $data['total_member'] = $this->user_model->total_member();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function login() {
        //echo md5('admega123!@#'.'Admin@365!@#'); die;
        if (isset($_REQUEST['submit'])) {
            $username = $this->input->post('uname', true);
            $pass1 = $this->input->post('pass1', true);
            $this->load->model('admin_model');
            $result = $this->admin_model->authen($username, $pass1);
            if ($result == null) {
                redirect('admincp/login/' . rand(1, 10)); //lÃƒÂ¡Ã‚Â»Ã¢â‚¬â€�i sai username hoÃƒÂ¡Ã‚ÂºÃ‚Â·c pass
            } else {
                $newdata = array(
                    'adminid' => $result,
                    'adminusername' => $username
                );
                $this->session->set_userdata($newdata);
                redirect('admincp/index');
            }
        }

        $this->load->view('admin/login');
    }

    public function pushmail($from, $to, $subject, $message) {
        $config = Array(
            'protocol' => 'smtp',
            'smtp_host' => 'ssl://smtp.googlemail.com',
            'smtp_port' => 465,
            'smtp_user' => 'sonpx@store8x.com',
            'smtp_pass' => 'Xuanson123!',
            'mailtype' => 'html',
            'charset' => 'utf-8'
        );
        $this->load->library('email', $config);
        $this->email->set_newline("\r\n");
        $this->email->from($from, 'M8X-Application Mobile Content-Store8x.com');
        $this->email->to($to);

        $this->email->subject($subject);
        $this->email->message($message);
        // Set to, from, message, etc.

        $result = $this->email->send();
        echo $result;
    }

    public function content() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('post_model');
            $this->load->model('cate_model');
            $data['listcontent'] = $this->post_model->show_all_post();
            $data['allcatenews'] = $this->cate_model->list_cate_admin();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function add_news() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            if (isset($_REQUEST['submit'])) {
                $post_content = $this->input->post('post_content', true);
                $post_title = $this->input->post('post_title', true);
                $post_short = $this->input->post('post_short', true);
                $post_image = $this->do_upload_image('./src/admin/', 'post_image');
                $active = $this->input->post('active', true);
                $cateid = $this->input->post('cateid', true);

                $this->load->model('post_model');
                $this->post_model->add_post($post_title, $post_short, $post_content, $post_image, $active, $cateid);
                redirect('admincp/content');
            }
            $this->load->model('cate_model');
            $data['cates'] = $this->cate_model->list_cate_admin();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function edit_post($id) {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('post_model');
            if (isset($_REQUEST['submit'])) {
                $post_content = $this->input->post('post_content', true);
                $post_title = $this->input->post('post_title', true);
                $post_short = $this->input->post('post_short', true);
                $post_image = $this->do_upload_image('./src/admin/', 'post_image');
                $active = $this->input->post('active', true);
                $cateid = $this->input->post('cateid', true);

                $this->post_model->update_post($id, $post_title, $post_short, $post_content, $post_image, $active, $cateid);
                redirect('admincp/content');
            }
            $this->load->model('cate_model');
            $data['cates'] = $this->cate_model->list_cate_admin();
            $data['posts'] = $this->post_model->get_post_by_id($id);
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function del_post($id = null) {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('post_model');
            $this->post_model->del_post($id);
            redirect('admincp/content');
        }
    }

    public function list_cate() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('cate_model');
            $data['cates'] = $this->cate_model->list_cate_admin();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function add_cate() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('cate_model');
            if (isset($_REQUEST['submit'])) {
                $cate_name = $this->input->post('cate_name', true);
                $cate_root = $this->input->post('cate_root', true);
                $active = $this->input->post('cate_active', true);

                $this->cate_model->add_cate_admin($cate_name, $cate_root, $active);
                redirect('admincp/list_cate');
            }
            $data['cates'] = $this->cate_model->list_cate_admin();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function edit_cate($id) {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('cate_model');
            $cateid = $id;
            if (isset($_REQUEST['submit'])) {
                $cate_name = $this->input->post('cate_name', true);
                $cate_root = $this->input->post('cate_root', true);
                $active = $this->input->post('cate_active', true);

                $object = null;
                $object['cate_name'] = $cate_name;
                $object['cate_root'] = $cate_root;
                $object['cate_active'] = $active;
                $object['id'] = $cateid;
                $this->cate_model->update_cate_admin($object);
                redirect('admincp/list_cate');
            }
            $data['cates'] = $this->cate_model->get_cate_by_id_admin($id);
            $data['allcates'] = $this->cate_model->list_cate_admin();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function del_cate($id = null) {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('cate_model');
            $this->cate_model->del_cate_admin($id);
            redirect('admincp/list_cate');
        }
    }

    public function list_shortcode() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('shortcode_model');
            $data['shortcodes'] = $this->shortcode_model->list_shortcode_admin();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function add_shortcode() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('shortcode_model');
            if (isset($_REQUEST['submit'])) {
                $shortcode = $this->input->post('shortcode', true);
                $price = $this->input->post('price', true);
                $active = $this->input->post('active', true);

                $this->shortcode_model->add_shortcode($shortcode, $price, $active);
                redirect('admincp/list_shortcode');
            }
            $this->load->view('admin/dashboard');
        }
    }

    public function edit_shortcode($id) {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('shortcode_model');
            $cateid = $id;
            if (isset($_REQUEST['submit'])) {
                $shortcode = $this->input->post('shortcode', true);
                $price = $this->input->post('price', true);
                $active = $this->input->post('active', true);

                $this->shortcode_model->edit_shortcode($id, $shortcode, $price, $active);
                redirect('admincp/list_shortcode');
            }
            $data['shortcodes'] = $this->shortcode_model->get_shortcode_by_id($id);
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function del_shortcode($id = null) {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('shortcode_model');
            $this->shortcode_model->del_shortcode($id);
            redirect('admincp/list_shortcode');
        }
    }

    public function list_mt() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('mt_model');
            $this->load->model('shortcode_model');
            $config['base_url'] = site_url('admincp/list_mt');
            $config['total_rows'] = $this->mt_model->count_mt();
            $config['per_page'] = 10;
            $config['prev_link'] = 'First';
            $config['next_link'] = 'Next';
            $this->pagination->initialize($config);
            $data['pages'] = $this->pagination->create_links();
            $data['mts'] = $this->mt_model->list_mt($config['per_page'], $this->uri->segment(3));
            $data['shortcodes'] = $this->shortcode_model->list_shortcode_admin();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function add_mt() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('mt_model');
            $this->load->model('shortcode_model');
            if (isset($_REQUEST['submit'])) {
                $shortcodeid = $this->input->post('shortcodeid', true);
                $messcode = $this->input->post('messcode', true);
                $title = $this->input->post('title', true);
                $content = $this->input->post('content', true);

                $this->mt_model->add_mt($shortcodeid, $messcode, $title, $content);
                redirect('admincp/list_mt');
            }
            $data['shortcodes'] = $this->shortcode_model->list_shortcode_admin();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function edit_mt($id) {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('mt_model');
            if (isset($_REQUEST['submit'])) {
                $shortcodeid = $this->input->post('shortcodeid', true);
                $messcode = $this->input->post('messcode', true);
                $title = $this->input->post('title', true);
                $content = $this->input->post('content', true);

                $this->mt_model->edit_mt($id, $shortcodeid, $messcode, $title, $content);
                redirect('admincp/list_mt');
            }
            $this->load->model('shortcode_model');
            $data['shortcodes'] = $this->shortcode_model->list_shortcode_admin();
            $data['mts'] = $this->mt_model->get_mt_by_id($id);
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function del_mt($id = null) {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('mt_model');
            $this->mt_model->del_mt($id);
            redirect('admincp/list_mt');
        }
    }

    public function list_mo() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            #$this->session->unset_userdata('dateto_search');
            #$this->session->unset_userdata('datefrom_search');
            #$this->session->unset_userdata('user_search');

            $this->load->model('mo_model');
            $this->load->model('shortcode_model');
            if(isset($_REQUEST['searchall'])) {
                $shortcode = null;
                $user = null;
                $datefrom = null;
                $dateto = null;
            } else {
                $shortcode = $this->mo_model->shortcode_handler($this->input->post('shortcode', true));
                $user = $this->mo_model->user_search_handler($this->input->post('user', true));
                $datefrom = $this->mo_model->datefrom_search_handler($this->input->post('date_from', true));
                $dateto = $this->mo_model->dateto_search_handler($this->input->post('date_to', true));
            }

            $config['per_page'] = 20;
            $config['prev_link'] = 'First';
            $config['next_link'] = 'Next';
            $config['base_url'] = site_url('admincp/list_mo');

            $data = null;
            $data['datefrom'] = $datefrom;
            $data['dateto'] = $dateto;
            $data['user'] = $user;

            if ($datefrom <> null and $dateto <> null) {
                $datefrom_array = explode("/",$datefrom);
                $datefrom = $datefrom_array[1]."-".$datefrom_array[0]."-".$datefrom_array[2];
                $dateto_array = explode("/",$dateto);
                $dateto = $dateto_array[1]."-".$dateto_array[0]."-".$dateto_array[2];
            }

            if ($shortcode <> null and $shortcode != 'All') {
                $config['total_rows'] = $this->mo_model->count_mo_by_shortcode($shortcode,$user,$datefrom,$dateto);
                $config['total_rows'] = is_int($config['total_rows']) ? $config['total_rows'] : count($config['total_rows']);
                $data['mos'] = $this->mo_model->list_mo_by_shortcode($shortcode, $config['per_page'], $this->uri->segment(3),$user,$datefrom,$dateto);
                $data['total_mo'] = $this->mo_model->count_mo_by_shortcode($shortcode,$user,$datefrom,$dateto);
                $data['total_mo'] = is_int($data['total_mo']) ? $data['total_mo'] : count($data['total_mo']);
                $data['sc'] = $shortcode;
            } else {
                $config['total_rows'] = $this->mo_model->count_mo($user,$datefrom,$dateto);
                $config['total_rows'] = is_int($config['total_rows']) ? $config['total_rows'] : count($config['total_rows']);
                $data['mos'] = $this->mo_model->list_mo($config['per_page'], $this->uri->segment(3),$user,$datefrom,$dateto);
                $data['total_mo'] = $this->mo_model->count_mo($user,$datefrom,$dateto);
                $data['total_mo'] = is_int($data['total_mo']) ? $data['total_mo'] : count($data['total_mo']);
                $data['sc'] = 'All';
            }
            $this->pagination->initialize($config);
            $data['pages'] = $this->pagination->create_links();
            $data['shortcodes'] = $this->shortcode_model->list_shortcode_admin();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function blockip() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('ip_model');
            $data['ipblocks'] = $this->ip_model->list_ip();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function add_ip() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('ip_model');
            if (isset($_REQUEST['ipsubmit'])) {
                $ip = $this->input->post('ipaddress', true);
                $expired = $this->input->post('expired', true);

                $this->ip_model->add_ip($ip, $expired);
                redirect(admincp / blockip);
            }
        }
        $this->load->view('admin/dashboard');
    }

    public function del_ip($id = null) {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('ip_model');
            $this->ip_model->del_ip($id);
            redirect('admincp/blockip');
        }
    }

    public function keycode($error = null) {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('shortcode_model');
            if (isset($_REQUEST['keycode_submit'])) {
                $keycode = $this->input->post('keycode', true);
                $mess = $this->input->post('mess', true);
                $result = $this->shortcode_model->add_keycode($keycode, $mess);
                if ($result == 1) {
                    redirect('admincp/keycode');
                } else {
                    redirect('admincp/keycode/false');
                }
            }

            if ($error == 'false') {
                $data['error'] = "Keycode đã tồn tại, tạo keycode khác.";
            } else {
                $data['error'] = "";
            }
            $data['shoutbox'] = 0;
            $data['adminname'] = $this->session->userdata('adminusername');
            $data['adminid'] = $this->session->userdata('adminid');

            $data['keycode'] = $this->shortcode_model->list_keycode();

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function notification() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('notify_model');
            if (isset($_REQUEST['notifysubmit'])) {
                $title = $this->input->post('tieude', true);
                $content = $this->input->post('noidung', true);
                if (strlen($title) <= 0 && strlen($content) <= 0) {
                    redirect('admincp/notification');
                } else {
                    $this->notify_model->add_notify($title, $content);
                    redirect('admincp/notification');
                }
            }
            $data['shoutbox'] = 0;
            $data['adminname'] = $this->session->userdata('adminusername');
            $data['adminid'] = $this->session->userdata('adminid');

            $config['base_url'] = site_url('admincp/notification');
            $config['total_rows'] = $this->notify_model->totalnotify();
            $config['per_page'] = 10;
            $config['prev_link'] = 'Đầu tiên';
            $config['next_link'] = 'Tiếp';
            $this->pagination->initialize($config);
            $data['receivesmo'] = $this->notify_model->show_notify($config['per_page'], $this->uri->segment(3));
            $data['pages'] = $this->pagination->create_links();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function delnotify($id = null) {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('notify_model');
            if ($id == null) {
                
            } else {
                $this->notify_model->delnotify($id);
                redirect('admincp/notification');
            }
            redirect('admincp/notification');
        }
    }

    public function site_config() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('site_model');
            $data['listconfig'] = $this->site_model->list_config();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function add_config() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('site_model');
            if (isset($_REQUEST['configsubmit'])) {
                $config = $this->input->post('config', true);
                $value = $this->input->post('value', true);

                $this->site_model->add_config($config, $value);
                redirect(admincp / site_config);
            }
        }
        $this->load->view('admin/dashboard');
    }

    public function edit_config($id) {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('site_model');
            if (isset($_REQUEST['configsubmit'])) {
                $config = $this->input->post('config', true);
                $value = $this->input->post('value', true);

                $this->site_model->edit_config($id, $config, $value);
                redirect('admincp/site_config');
            }
            $data['config'] = $this->site_model->get_config_by_id($id);
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function withdraw() {
        if ($this->session->userdata('adminusername') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('report_model');
            $config['base_url'] = site_url('admincp/withdraw');
            $config['total_rows'] = $this->report_model->count_withdraw();
            $config['per_page'] = 10;
            $config['prev_link'] = 'First';
            $config['next_link'] = 'Next';
            $this->pagination->initialize($config);
            $data['pages'] = $this->pagination->create_links();
            $data['list_withdraw'] = $this->report_model->list_withdraw(null, $config['per_page'], $this->uri->segment(3));

            $this->load->view('admin/dashboard', $data);
        }
    }

    function do_upload_image($mypath, $filename) {
        $config['upload_path'] = $mypath;
        $config['allowed_types'] = 'gif|jpg|png|bmp';
        $config['max_size'] = '80000';
        $this->load->library('upload', $config);
        $this->upload->initialize($config);
        if (isset($filename)) {
            if (!$this->upload->do_upload($filename)) {
                $error = array('error' => $this->upload->display_errors());
                return NULL;
            } else {
                $data = array('upload_data' => $this->upload->data());
                $imagename = $this->upload->file_name;
                $this->resize_image($mypath, 'thumb_' . $imagename, $imagename);
                return $imagename;
            }
        } else {
            echo $this->upload->display_errors();
        }
    }

    public function resize_image($dir, $new_name, $image) {
        $img_cfg_thumb['image_library'] = 'gd2';
        $img_cfg_thumb['source_image'] = "./" . $dir . "/" . $image;
        $img_cfg_thumb['maintain_ratio'] = TRUE;
        $img_cfg_thumb['new_image'] = $new_name;
        $img_cfg_thumb['width'] = 300;
        $img_cfg_thumb['height'] = 200;
        $this->load->library('image_lib');
        $this->image_lib->initialize($img_cfg_thumb);
        $this->image_lib->resize();
    }

    function do_upload_image_slide($mypath, $filename) {
        $config['upload_path'] = $mypath;
        $config['allowed_types'] = 'gif|jpg|png|bmp';
        $config['max_size'] = '80000';
        $this->load->library('upload', $config);
        $this->upload->initialize($config);
        if (isset($filename)) {
            //echo $filename; die();
            if (!$this->upload->do_upload($filename)) {
                $error = array('error' => $this->upload->display_errors());
                return NULL;
            } else {
                $data = array('upload_data' => $this->upload->data());
                $imagename = $this->upload->file_name;
                $this->resize_image_slide($mypath, 'thumb_' . $imagename, $imagename);
                return $imagename;
            }
        } else {
            echo $this->upload->display_errors();
        }
    }

    public function resize_image_slide($dir, $new_name, $image) {
        $img_cfg_thumb['image_library'] = 'gd2';
        $img_cfg_thumb['source_image'] = "./" . $dir . "/" . $image;
        $img_cfg_thumb['maintain_ratio'] = TRUE;
        $img_cfg_thumb['new_image'] = $new_name;
        $img_cfg_thumb['width'] = 540;
        $img_cfg_thumb['height'] = 210;
        $this->load->library('image_lib');
        $this->image_lib->initialize($img_cfg_thumb);
        $this->image_lib->resize();
    }

    function do_upload_file($mypath, $filename) {
        $config['upload_path'] = $mypath;
        $config['allowed_types'] = 'jar|jad|apk|ipa';
        $config['max_size'] = '500000';
        $this->load->library('upload', $config);
        $this->upload->initialize($config);
        if (isset($filename)) {
            //echo $filename; die();

            if (!$this->upload->do_upload($filename)) {
                $error = array('error' => $this->upload->display_errors());
                //print_r($error);
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

    public function logout() {
        $this->session->unset_userdata('adminid');
        $this->session->unset_userdata('adminusername');
        redirect('admincp');
    }

}
