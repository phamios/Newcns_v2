<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class config extends CI_Controller {

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
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $data['title'] = "List Config";
            $this->load->model('config_model');
            $data['features'] = $this->config_model->getAll();
            $this->load->view('admin/dashboard', $data);
        }
    }
    
    
}