<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class Config extends CI_Controller {

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
            $this->load->model('config_model');
            $data['listconfig'] = $this->config_model->get_all();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function create() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('config_model');
            if (isset($_REQUEST['submit_config'])) {

                $option_name         = $this->input->post('name', true);
                $option_value        = $this->input->post('value', true);
                $config_status       = $this->input->post('status', true);

                $object = array(
                    'option_name'   => $option_name,
                    'option_value'  => $option_value,
                    'option_type'   => 1,
                    'option_status' => $option_status,
                );
                $this->config_model->add_config($object);
                redirect(site_url('admincp/config/'));
            }
            $this->load->view('admin/dashboard');
        }
    }

    public function edit($id = null) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('config_model');
            if (isset($_REQUEST['update_config'])) {

                $option_name         = $this->input->post('name', true);
                $option_value        = $this->input->post('value', true);
                $config_status       = $this->input->post('status', true);

                $object = array(
                    'option_name'   => $option_name,
                    'option_value'  => $option_value,
                    'option_status' => $option_status,
                );
                $this->config_model->update_config($id,$object);
                redirect(site_url('admincp/config/'));
            }
            $data['config'] = $this->config_model->get_config_by_id($id);
            $this->load->view('admin/dashboard', $data);
        }
    }

}
