<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class ajaxdefault extends CI_Controller {

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
        @session_start();
    }

    
    function load_title(){
        $this->load->model('config_model');
        $site  = $this->config_model->get_site_config();
        foreach($site as $row){
            
        }
    }
}