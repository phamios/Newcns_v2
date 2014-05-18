<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class Review extends CI_Controller {

    function __construct() {
        parent::__construct();
        // $this->load->library('session');
        $this->load->helper('url');
        // $this->load->library('upload');
        $this->load->library('pagination');
        // $this->load->library('parser');
        // $this->load->helper('cookie');
        $this->load->helper(array('form', 'url'));
        @session_start();
    }

    public function index() {
        $data['title'] = "List Product";
        $this->load->model('review_model');
        $data['model'] = $this->review_model->getAll(); 
        $this->load->view('admin/dashboard', $data);
    }

    public function create() {
        if (isset($_POST['submit'])) {
            $this->load->model('review_model');
            $object = array(
                'review_title'     => $_POST['title'],
                'review_content'   => $_POST['content'],
                'review_recomment' => $_POST['recommend'],
                'review_high'      => $_POST['highs'],
                'review_low'       => $_POST['lows'],
                'review_specific'  => $_POST['specs'],
                'review_created'   => date("Y-m-d H:i:s"),
                'review_active'    => $_POST['active'],
            );
            $this->review_model->add_product_review($object);
            redirect(site_url('admin/review/'));
        } else {
            $data['title'] = "Create Product Review";
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function delete() {
        if ($this->input->is_ajax_request()) {
            $id = $_POST['id'];
            $this->load->model('category_model');
            $delete = $this->category_model->delete($id);
        }
    }

    public function edit($id = null) {

    }

}
