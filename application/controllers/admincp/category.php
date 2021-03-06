<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class category extends CI_Controller {

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
            $data['title'] = "Danh sách Category";
            $this->load->model('category_model');
            $data['model'] = $this->category_model->getAll();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function create() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            if (isset($_POST['name'])) {
                $this->load->model('category_model');
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
                $this->db->insert('tbl_category', $insert);
                redirect($this->config->base_url() . 'admincp/category/');
            } else {
                $data['title'] = "Tạo mới Category";
                $this->load->model('category_model');
                $data['category'] = $this->category_model->getAll();
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
                $this->load->model('category_model');
                $delete = $this->category_model->delete($id);
            }
        }
    }

    public function edit($id = null) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            if (isset($_POST['name'])) {
                $data['edit'] = 1;
                $this->load->model('category_model');
                //$this->category_model->query("INSERT ")
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
                $this->db->update('tbl_category', $insert, array('id' => $id));

                redirect($this->config->base_url() . 'admincp/category/edit/' . $id . '?success=1');
            } else {
                $data['edit'] = 0;
                $data['id'] = $id;
                $data['title'] = "Chỉnh sửa Category";
                $this->load->model('category_model');
                $data['model'] = $this->category_model->getDetail($id);
                $data['model'] = $data['model'][0];
                $data['category'] = $this->category_model->getAll();
                $this->load->view('admin/dashboard', $data);
            }
        }
    }

}
