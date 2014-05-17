<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class Login extends CI_Controller {

	function __construct() { 
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('url');
        $this->load->library('upload');
        $this->load->library('pagination');
        $this->load->library('parser');
        $this->load->helper('cookie');
        $this->load->helper(array('form', 'url')); 
        @session_start();
    }
    
    public function index(){
    	
    	if(isset($_REQUEST['submit_login'])){
    		$username = $this->input->post('username',true);
    		$pass = $this->input->post('pass',true);
    		$this->load->model('admin_model');
    		$result = $this->admin_model->_auth($username,$pass);
    		if($result){
    			$data = null;
    			foreach($result as $admin){
    				$data = array(
    							'adminid'=>$admin->id,
    							'adminname'=>$admin->username,
    						);
    			}
    			
    			$this->session->set_userdata($data);
    			redirect('admincp/dashboard/index');
    		}
    		
    	}
    	$this->load->view('admin/login');
    }
    
}