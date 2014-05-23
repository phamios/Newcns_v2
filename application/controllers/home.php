<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
if (!defined('BASEPATH'))
	exit('No direct script access allowed');
session_start();

class home extends CI_Controller {

	function __construct() {
		parent::__construct();
		$this->load->library('session');
		$this->load->helper('url');
		$this->load->library('upload');
		$this->load->library('pagination');
		$this->load->library('parser');
		$this->load->helper('cookie');
		$this->load->helper("text");
		$this->upload->set_allowed_types('*');
		$this->load->helper(array('form', 'url'));
		@session_start();
	}

	public function get_tracking($method){
		$this->load->model('track_model');
		$ip_address = $this->input->ip_address(); 
		$this->track_model->add_tracking($this->session->userdata('userid'),$ip_address,$method);
       
	}


	public function index() {
		//Lay gia tri class & function hien tai - xu ly tracking user
		$current_method = $this->router->class.'=>'.$this->router->method ;
		$this->get_tracking($current_method);

		$sub = array_shift(explode(".", $_SERVER['HTTP_HOST']));
		if ($sub ==  $this->config->item('site_name')) {
			$data['userinfo'] = null;
			if ($this->session->userdata('userid') <> null) {
				$userid = $this->session->userdata('userid');
				$data['userinfo'] = $this->session->userdata('username');
				$this->load->model('report_model');
				$this->load->model('user_model');
				$data['profit'] = $this->user_model->get_balance($userid);
			}
			$this->load->model('cate_model');
			$this->load->model('post_model');
			$data['listcontent'] = $this->post_model->show_all_post_active(); 
			$data['all_cate'] = $this->cate_model->list_cate_active();
			$this->load->view('home',$data);
		} else {
			$this->load->model('wap_model');
			if ($this->wap_model->check_exit_wap($sub) == true) {
				$this->load->model('wap_model');
				$result = $this->wap_model->get_detail_wap_by_name($sub);
				$data[] = null;
				foreach ($result as $row) {
					$data['title'] = $row->wap_title;
					$data['meta_des'] = $row->wap_meta_des;
					$data['meta_content'] = $row->wap_meta_content;
					$data['footer'] = $row->wap_copyright;
					$data['userid'] = $row->userid;
				}
				$this->load->model('app_model');
				$this->load->model('cate_model'); 
				$data['current_wap'] = "http://".$sub.".".$this->config->item('site_name').".vn";
				$data['sub'] = $sub;
				
				$data['apps'] = $this->app_model->list_app_user($data['userid']);
				if($data['apps'] == null ){
					$data['apps'] = $this->app_model->list_app_all();
				}
				$data['categories'] = $this->cate_model->list_cate_app();
 
				$this->load->model('video_model');
				$data['list_video'] = $this->video_model->list_video_user($data['userid']);
				$this->load->view('wap/default', $data);
			} elseif ($sub == "forum" || $sub == "blog") {
				redirect("http://forum.vmob.vn");
			} elseif ($sub == "account" ) {
				redirect("http://vmob.vn/user/login/");
			} elseif ($sub == "admincp" ) {
				redirect("http://vmob.vn/admincp/login/");
			}else {
				redirect(site_url());
			}
		}
	}

	public function search(){
		//Lay gia tri class & function hien tai - xu ly tracking user
		$current_method = $this->router->class.'=>'.$this->router->method ;
		$this->get_tracking($current_method);

		$sub = array_shift(explode(".", $_SERVER['HTTP_HOST']));
		if ($sub ==  $this->config->item('site_name')) {
			$data['userinfo'] = null;
			if ($this->session->userdata('userid') <> null) {
				$userid = $this->session->userdata('userid');
				$data['userinfo'] = $this->session->userdata('username');
				$this->load->model('report_model');
				$data['profit'] = $this->report_model->total_profit($userid);
			}
			$this->load->view('home',$data);
		} else {
			if (isset($_REQUEST['submit'])) {
				$this->load->model('wap_model');
				if ($this->wap_model->check_exit_wap($sub) == true) {
					$this->load->model('wap_model');
					$result = $this->wap_model->get_detail_wap_by_name($sub);
					$data[] = null;
					foreach ($result as $row) {
						$data['title'] = $row->wap_title;
						$data['meta_des'] = $row->wap_meta_des;
						$data['meta_content'] = $row->wap_meta_content;
						$data['footer'] = $row->wap_copyright;
						$data['userid'] = $row->userid;
					}
					$this->load->model('app_model');
					$this->load->model('cate_model');
					$data['current_wap'] = "http://".$sub.".".$this->config->item('site_name').".vn";
					$data['sub'] = $sub;
					$keyword = $this->input->post('q', true);
					$data['apps'] = $this->app_model->list_app_by_search($keyword,$data['userid']);
					$data['categories'] = $this->cate_model->list_cate_app();
					$data['keyword'] = $keyword;
					$this->load->view('wap/search', $data);
				} elseif ($sub == "forum" || $sub == "blog") {
					redirect("http://forum.vmob.vn");
				} else {
					redirect('home');
				}
			}else{
				redirect('home');
			}
		}
	}
	public function category($title=null){
		//Lay gia tri class & function hien tai - xu ly tracking user
		$current_method = $this->router->class.'=>'.$this->router->method ;
		$this->get_tracking($current_method);

		$sub = array_shift(explode(".", $_SERVER['HTTP_HOST']));
		if ($sub ==  $this->config->item('site_name')) {
			$data['userinfo'] = null;
			if ($this->session->userdata('userid') <> null) {
				$userid = $this->session->userdata('userid');
				$data['userinfo'] = $this->session->userdata('username');
				$this->load->model('report_model');
				$data['profit'] = $this->report_model->total_profit($userid);
			}
			$this->load->view('home',$data);
		} else {

			$this->load->model('wap_model');
			if ($this->wap_model->check_exit_wap($sub) == true) {
				$this->load->model('wap_model');
				$result = $this->wap_model->get_detail_wap_by_name($sub);
				$data[] = null;
				foreach ($result as $row) {
					$data['title'] = $row->wap_title;
					$data['meta_des'] = $row->wap_meta_des;
					$data['meta_content'] = $row->wap_meta_content;
					$data['footer'] = $row->wap_copyright;
					$data['userid'] = $row->userid;
				}
				$this->load->model('app_model');
				$this->load->model('cate_model');
				$data['current_wap'] = "http://".$sub.".".$this->config->item('site_name').".vn";
				$data['apps'] = $this->app_model->list_app_user($data['userid']);
				$data['categories'] = $this->cate_model->list_cate_app();
				$this->load->view('wap/default', $data);
			} elseif ($sub == "forum" || $sub == "blog") {
				redirect("http://forum.vmob.vn");
			} else {
				$data['userinfo'] = null;
				if ($this->session->userdata('userid') <> null) {
					$userid = $this->session->userdata('userid');
					$data['userinfo'] = $this->session->userdata('username');
					$this->load->model('report_model');
					$data['profit'] = $this->report_model->total_profit($userid);
				}

				$this->load->view('home',$data);
			}
		}
	}

	public function about() {
		//Lay gia tri class & function hien tai - xu ly tracking user
		$current_method = $this->router->class.'=>'.$this->router->method ;
		$this->get_tracking($current_method);

		$sub = array_shift(explode(".", $_SERVER['HTTP_HOST']));
		if ($sub  == $this->config->item('site_name')) {
			$this->load->view('about');
		} else {
			$this->load->model('wap_model');
			if ($this->wap_model->check_exit_wap($sub) == true) {
				$this->load->model('wap_model');
				$result = $this->wap_model->get_detail_wap_by_name($sub);
				$data[] = null;
				foreach ($result as $row) {
					$data['title'] = $row->wap_title;
					$data['meta_des'] = $row->wap_meta_des;
					$data['meta_content'] = $row->wap_meta_content;
					$data['footer'] = $row->wap_copyright;
					$data['userid'] = $row->userid;
				}

				$this->load->model('app_model');
				$data['apps'] = $this->app_model->list_app_user($data['userid']);

				$this->load->view('wap/default', $data);
			} elseif ($sub == "forum" || $sub == "blog") {
				redirect("http://forum.vmob.vn");
			} else {
				$this->load->view('about');
			}
		}
	}

	public function service() {
		//Lay gia tri class & function hien tai - xu ly tracking user
		$current_method = $this->router->class.'=>'.$this->router->method ;
		$this->get_tracking($current_method);

		$sub = array_shift(explode(".", $_SERVER['HTTP_HOST']));
		if ($sub  == $this->config->item('site_name')) {
			redirect('user/login');
		} else {
			$this->load->model('wap_model');
			if ($this->wap_model->check_exit_wap($sub) == true) {
				$this->load->model('wap_model');
				$result = $this->wap_model->get_detail_wap_by_name($sub);
				$data[] = null;
				foreach ($result as $row) {
					$data['title'] = $row->wap_title;
					$data['meta_des'] = $row->wap_meta_des;
					$data['meta_content'] = $row->wap_meta_content;
					$data['footer'] = $row->wap_copyright;
					$data['userid'] = $row->userid;
				}
				$this->load->model('app_model');
				$data['apps'] = $this->app_model->list_app_user($data['userid']);

				$this->load->view('wap/default', $data);
			} elseif ($sub == "forum" || $sub == "blog") {
				redirect("http://forum.vmob.vn");
			} else {
				redirect('user/login');
			}
		}
	}

	public function payment() {
		//Lay gia tri class & function hien tai - xu ly tracking user
		$current_method = $this->router->class.'=>'.$this->router->method ;
		$this->get_tracking($current_method);

		$sub = array_shift(explode(".", $_SERVER['HTTP_HOST']));
		if ($sub  == $this->config->item('site_name')) {
			$this->load->view('payment');
		} else {
			$this->load->model('wap_model');
			if ($this->wap_model->check_exit_wap($sub) == true) {
				$this->load->model('wap_model');
				$result = $this->wap_model->get_detail_wap_by_name($sub);
				$data[] = null;
				foreach ($result as $row) {
					$data['title'] = $row->wap_title;
					$data['meta_des'] = $row->wap_meta_des;
					$data['meta_content'] = $row->wap_meta_content;
					$data['footer'] = $row->wap_copyright;
					$data['userid'] = $row->userid;
				}
				$this->load->model('app_model');
				$data['apps'] = $this->app_model->list_app_user($data['userid']);

				$this->load->view('wap/default', $data);
			} elseif ($sub == "forum" || $sub == "blog") {
				redirect("http://forum.vmob.vn");
			} else {
				$this->load->view('payment');
			}
		}
	}


	public function register($error=null){
		//Lay gia tri class & function hien tai - xu ly tracking user
		$current_method = $this->router->class.'=>'.$this->router->method ;
		$this->get_tracking($current_method);

		$sub = array_shift(explode(".", $_SERVER['HTTP_HOST']));
		if ($sub  == $this->config->item('site_name')) {
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

							if($pass <> $pass2){
								redirect('user/register/pass');
							}else{
								$this->load->model('user_model');
								$result = $this->user_model->_adduser($name,$pass,$phone,$fullname,$address,$email );

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
								
								if($result == 1){
									redirect('user/login/');
								}else{
									redirect('user/register/exit');
								}
							}
						}

						$request_captcha = htmlspecialchars($_REQUEST['captcha']);
						unset($_SESSION['captcha']);
					}
				}
				if($error == "pass"){
					$data['error'] = "Mật khẩu chưa trùng khớp";
				}elseif($error=="exit"){
					$data['error'] = "Tài khoản đã tồn tại";
				}else{
					$data['error'] = "";
				}

				$this->load->view('register',$data);
			}
		} else {
			$this->load->model('wap_model');
			if ($this->wap_model->check_exit_wap($sub) == true) {
				$this->load->model('wap_model');
				$result = $this->wap_model->get_detail_wap_by_name($sub);
				$data[] = null;
				foreach ($result as $row) {
					$data['title'] = $row->wap_title;
					$data['meta_des'] = $row->wap_meta_des;
					$data['meta_content'] = $row->wap_meta_content;
					$data['footer'] = $row->wap_copyright;
					$data['userid'] = $row->userid;
				}

				$this->load->model('app_model');
				$data['apps'] = $this->app_model->list_app_user($data['userid']);

				$this->load->view('wap/default', $data);
			} elseif ($sub == "forum" || $sub == "blog") {
				redirect($this->config->item('forum_link'));
			}
		}
	}

	public function lostpass(){
		//Lay gia tri class & function hien tai - xu ly tracking user
		$current_method = $this->router->class.'=>'.$this->router->method ;
		$this->get_tracking($current_method);
		
		$sub = array_shift(explode(".", $_SERVER['HTTP_HOST']));
		if ($sub  == $this->config->item('site_name')) {
			 $data['userinfo'] = null;
			if ($this->session->userdata('userid') <> null) {
				$userid = $this->session->userdata('userid');
				$data['userinfo'] = $this->session->userdata('username');
				$this->load->model('report_model');
				$data['profit'] = $this->report_model->total_profit($userid);
			}
			$this->load->model('cate_model');
			$this->load->model('post_model');
			$data['listcontent'] = $this->post_model->show_all_post_active(); 
			$data['all_cate'] = $this->cate_model->list_cate_active();
			$this->load->view('home',$data);
		} else {
			$this->load->model('wap_model');
			if ($this->wap_model->check_exit_wap($sub) == true) {
				$this->load->model('wap_model');
				$result = $this->wap_model->get_detail_wap_by_name($sub);
				$data[] = null;
				foreach ($result as $row) {
					$data['title'] = $row->wap_title;
					$data['meta_des'] = $row->wap_meta_des;
					$data['meta_content'] = $row->wap_meta_content;
					$data['footer'] = $row->wap_copyright;
					$data['userid'] = $row->userid;
				}

				$this->load->model('app_model');
				$data['apps'] = $this->app_model->list_app_user($data['userid']);

				$this->load->view('wap/default', $data);
			} elseif ($sub == "forum" || $sub == "blog") {
				redirect("http://forum.vmob.vn");
			} else {

				$this->load->view('home');
			}
		}
	}

	function removesign($str) {
		$coDau = array("à", "á", "ạ", "ả", "ã", "â", "ầ", "ấ", "ậ", "ẩ", "ẫ", "ă", "ằ", "ắ"
				, "ặ", "ẳ", "ẵ", "è", "é", "ẹ", "ẻ", "ẽ", "ê", "ề", "ế", "ệ", "ể", "ễ", "ì", "í", "ị", "ỉ", "ĩ",
				"ò", "ó", "ọ", "ỏ", "õ", "ô", "ồ", "ố", "ộ", "ổ", "ỗ", "ơ"
				, "ờ", "ớ", "ợ", "ở", "ỡ",
				"ù", "ú", "ụ", "ủ", "ũ", "ư", "ừ", "ứ", "ự", "ử", "ữ",
				"ỳ", "ý", "ỵ", "ỷ", "ỹ",
				"đ",
				"À", "Á", "Ạ", "Ả", "Ã", "Â", "Ầ", "Ấ", "Ậ", "Ẩ", "Ẫ", "Ă"
				, "Ằ", "Ắ", "Ặ", "Ẳ", "Ẵ",
				"È", "É", "Ẹ", "Ẻ", "Ẽ", "Ê", "Ề", "Ế", "Ệ", "Ể", "Ễ",
				"Ì", "Í", "Ị", "Ỉ", "Ĩ",
				"Ò", "Ó", "Ọ", "Ỏ", "Õ", "Ô", "Ồ", "Ố", "Ộ", "Ổ", "Ỗ", "Ơ"
				, "Ờ", "Ớ", "Ợ", "Ở", "Ỡ",
				"Ù", "Ú", "Ụ", "Ủ", "Ũ", "Ư", "Ừ", "Ứ", "Ự", "Ử", "Ữ",
				"Ỳ", "Ý", "Ỵ", "Ỷ", "Ỹ",
				"Đ", "ê", "ù", "à");
		$khongDau = array("a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"
				, "a", "a", "a", "a", "a", "a",
				"e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e",
				"i", "i", "i", "i", "i",
				"o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"
				, "o", "o", "o", "o", "o",
				"u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u",
				"y", "y", "y", "y", "y",
				"d",
				"A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"
				, "A", "A", "A", "A", "A",
				"E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
				"I", "I", "I", "I", "I",
				"O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"
				, "O", "O", "O", "O", "O",
				"U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
				"Y", "Y", "Y", "Y", "Y",
				"D", "e", "u", "a");
		return str_replace($coDau, $khongDau, $str);
	}
}
