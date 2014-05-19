<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class review_cate extends CI_Controller {

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
        $data['title'] = "List Category of Review";
        $this->load->model('category_review_model');
        $data['model'] = $this->category_review_model->getAll();
        $this->load->view('admin/dashboard', $data);
    }

    public function create() {

        $this->load->model('category_review_model');
        if (isset($_REQUEST['submit'])) {
            $object = array(
                'cateroot' => $this->input->post('cate_root', true),
                'cate_rev_name' => $this->input->post('cate_name', true),
                'cate_rev_icon' => $this->input->post('cate_icon', true),
            );
            $this->category_review_model->add_cate_review($object);

            redirect('admincp/review_cate');
        } else {
            $data['title'] = "Create Category";
            $this->load->model('category_review_model');
            $data['category'] = $this->category_review_model->getAll();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function delete() {
        if ($this->input->is_ajax_request()) {
            $id = $_POST['id'];
            $this->load->model('category_review_model');
            $delete = $this->category_review_model->delete($id);
        }
    }

    public function edit($id = null) {
        $this->load->model('category_review_model');

        if (isset($_POST['name'])) {
            $data['edit'] = 1;

            $insert = array(
                'catename' => $_POST['cate_name'],
                'cateroot' => $_POST['cate_root'],
                'cateimages' => $image
            );
            $this->db->update('tbl_category', $insert, array('id' => $id));

            redirect('admincp/review_cate/edit/' . $id . '?success=1');
        }
        $data['edit'] = 0; 
        $data['id'] = $id;
        $data['title'] = "Edit Category";
        $data['model'] = $this->category_review_model->getDetail($id);
        $data['category'] = $this->category_review_model->getAll();
        $this->load->view('admin/dashboard', $data);
    }

}