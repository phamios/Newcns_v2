<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class Gift extends CI_Controller {

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
            $this->load->model('gift_model');
            $data['listgift'] = $this->gift_model->get_all();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function create() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('gift_model');
            if (isset($_REQUEST['submit_gift'])) {

                $gift_title   = $this->input->post('title', true);
                $gift_link    = $this->input->post('link', true);
                $gift_content = $this->input->post('content', true);
                $gift_video   = $this->input->post('video', true);


                $object = array(
                    'gift_title'   => $gift_title,
                    'gift_link'    => $gift_link,
                    'gift_video'   => $gift_video,
                    'gift_content' => $gift_content,
                );
                $this->gift_model->add_gift($object);
                redirect(site_url('admincp/gift/'));
            }
            $this->load->view('admin/dashboard');
        }
    }

    public function delete($id) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            if ($this->input->is_ajax_request()) {
                $this->load->model('gift_model');
                $delete = $this->gift_model->delete($id);
            }
        }
    }

    public function edit($id = null) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('gift_model');
            if (isset($_REQUEST['update_gift'])) {
                $gift_title   = $this->input->post('title', true);
                $gift_link    = $this->input->post('link', true);
                $gift_content = $this->input->post('content', true);
                $gift_video   = $this->input->post('video', true);


                $object = array(
                    'gift_title'   => $gift_title,
                    'gift_link'    => $gift_link,
                    'gift_video'   => $gift_video,
                    'gift_content' => $gift_content,
                );
                $this->gift_model->update_gift($id,$object);
                redirect(site_url('admincp/gift/'));
            }
            $data['gift'] = $this->gift_model->get_gift_by_id($id);
            $this->load->view('admin/dashboard', $data);
        }
    }

}
