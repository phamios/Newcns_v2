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
            if (isset($_POST['name'])) {
                $this->load->model('advertis_model');
                //$this->advertis_model->query("INSERT ")
                if (isset($_POST['image'])) {
                    $image = $_POST['image'];
                } else {
                    $image = null;
                }
                $insert = array(
                    'catename' => $_POST['name'],
                    'cateroot' => $_POST['cate-root'],
                    'cateimages' => $image
                );
                $this->db->insert('tbl_advertis', $insert);
                //redirect('admin/advertis', 'refresh');
                redirect($this->config->base_url() . 'admincp/advertis/');
            } else {
                $data['title'] = "Create Advertis";
                $this->load->model('advertis_model');
                $data['advertis'] = $this->advertis_model->getAll();
                $this->load->view('admin/dashboard', $data);
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
            if (isset($_POST['name'])) {
                $data['edit'] = 1;
                $this->load->model('advertis_model');
                //$this->advertis_model->query("INSERT ")
                if (isset($_POST['image'])) {
                    $image = $_POST['image'];
                } else {
                    $image = null;
                }
                $insert = array(
                    'catename' => $_POST['name'],
                    'cateroot' => $_POST['cate-root'],
                    'cateimages' => $image
                );
                $this->db->update('tbl_advertis', $insert, array('id' => $id));

                redirect($this->config->base_url() . 'admincp/advertis/edit/' . $id . '?success=1');
            } else {
                $data['edit'] = 0;
                $data['id'] = $id;
                $data['title'] = "Sửa quảng cáo";
                $this->load->model('advertis_model');
                $data['model'] = $this->advertis_model->getDetail($id);
                $data['model'] = $data['model'][0];
                $data['advertis'] = $this->advertis_model->getAll();
                $this->load->view('admin/dashboard', $data);
            }
        }
    }

}