<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class Logout extends CI_Controller {

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

    public function index() {
        $this->session->unset_userdata('adminid');
        $this->session->unset_userdata('adminusername');
        redirect('admincp/login');
    }

}