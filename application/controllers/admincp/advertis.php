<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class advertis extends CI_Controller {

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
            $data['title'] = "Danh sách quảng cáo";
            $this->load->model('advertis_model');
            $data['model'] = $this->advertis_model->getAll();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function create() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('advertis_model');
            if (isset($_REQUEST['create_advertis'])) {
                $insert = array(
                    'advertis_name'    => $this->input->post('name', true),
                    'advertis_content' => $this->input->post('content', true),
                    'advertis_order'   => $this->input->post('order', true),
                    'advertis_status'  => $this->input->post('status', true),
                );
                $this->db->insert('tbl_advertis', $insert);
                redirect('admincp/advertis');
            } else {
                $this->load->view('admin/dashboard');
            }
        }
    }

    public function delete() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            if ($this->input->is_ajax_request()) {
                $id = $_POST['id'];
                $this->load->model('advertis_model');
                $delete = $this->advertis_model->delete($id);
            }
        }
    }

    public function edit($id = null) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('advertis_model');
            if (isset($_REQUEST['update_advertis'])) {
                $object = array(
                    'advertis_name'    => $this->input->post('name', true),
                    'advertis_content' => $this->input->post('content', true),
                    'advertis_order'   => $this->input->post('order', true),
                    'advertis_status'  => $this->input->post('status', true),
                );
                $this->advertis_model->update_adver($object, $id);
                redirect('admincp/advertis');
            } else {
                $data['advertis'] = $this->advertis_model->getDetail($id);
                $this->load->view('admin/dashboard', $data);
            }
        }
    }

}
