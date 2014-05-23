<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class News extends CI_Controller {

    public $product_id;

    function __construct() {
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('url');
        $this->load->library('upload');
        $this->load->library('pagination');
        $this->load->library('parser');
        $this->load->helper('cookie');  
        $this->load->helper("text"); 
        $this->load->helper(array('form', 'url'));
        $this->product_id = (int) end(explode("-", $this->uri->segment(2)));
    }
    
     public function get_tracking($method){
        $this->load->model('track_model');
        $ip_address = $this->input->ip_address(); 
        $this->track_model->add_tracking($this->session->userdata('userid'),$ip_address,$method);
       
    }

    public function _remap() { 
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
			$this->load->model('cate_model');
			$this->load->model('post_model');
			$data['listcontent'] = $this->post_model->show_all_post_active(); 
			$data['all_cate'] = $this->cate_model->list_cate_active();
			$data['posts'] = $this->post_model->get_post_by_id($this->product_id); 
			$data['show_cate'] = $this->cate_model->list_cate(); 
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
				redirect("http://forum.admega.vn");
			} else {
				redirect(site_url());
			}
		}
    }
}