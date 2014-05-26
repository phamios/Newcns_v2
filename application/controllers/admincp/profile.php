<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class Profile extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('url');
        $this->load->library('upload');
        $this->load->library('pagination');
        $this->load->library('parser');
        $this->load->helper('cookie');
        $this->load->helper(array('form', 'url'));
        $this->load->library('ImageClass');
        $this->load->helper('text');
        @session_start();
    }

    public function index() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('admin_model');
            $userid = $this->session->userdata('adminid');
            $data['user'] = $this->admin_model->get_user_info_by_id($userid);
            if (isset($_REQUEST['save_profile'])) {
                $username  = $this->input->post('username',true);
                $userpass  = $this->input->post('password',true);
                $this->admin_model->update_user_info($userid,$username,$userpass);
            }
            $this->load->view('admin/dashboard', $data);
        }
    }

}
