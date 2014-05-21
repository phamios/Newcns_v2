<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class Review extends CI_Controller {

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
            $data['title'] = "List Product";
            $this->load->model('review_model');
            $data['model'] = $this->review_model->getAll();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function create() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('review_model');
            $this->load->model('category_review_model');
            $this->load->model('features_model');
            if (isset($_REQUEST['submit_review'])) {
                
                $title = $this->input->post('title', true);
                $category = $this->input->post('category', true);
                $userid = $this->session->userdata('adminid');
                $specs = $this->input->post('specs', true);
                $featureid = $this->input->post('feature', true);
                $post_description = $this->input->post('post_description', true);
                
                $object = array(
                    'review_title' => $_POST['title'],
                    'review_content' => $_POST['content'],
                    'review_recoment' => $_POST['recommend'],
                    'review_high' => $_POST['highs'],
                    'review_low' => $_POST['lows'],
                    'review_specific' => $_POST['specs'],
                    'review_created' => date("Y-m-d H:i:s"),
                    'review_active' => $_POST['active'],
                );
                $review_id = $this->review_model->add_product_review($object);
                if ($review_id) {
                    $gallery['review_id'] = $review_id;
                    redirect(site_url('admincp/review/gallery/'.$review_id));
                }
            } else {
                $data['title'] = "Create Product Review";
                $data['features'] = $this->features_model->getAll();
                $data['category'] = $this->category_review_model->getAll();
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
                redirect(site_url('admincp/review/'));
            }
        }
    }

    public function edit($id = null) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('review_model');
            $this->load->model('category_review_model');
            $this->load->model('features_model');
            if (isset($_REQUEST['submit_review'])) {

                $title = $this->input->post('title', true);
                $category = $this->input->post('category', true);
                $userid = $this->session->userdata('adminid');
                $specs = $this->input->post('specs', true);
                $featureid = $this->input->post('feature', true);
                $post_description = $this->input->post('post_description', true);

                $object = array(
                    'review_title' => $_POST['title'],
                    'review_content' => $_POST['content'],
                    'review_recoment' => $_POST['recommend'],
                    'review_high' => $_POST['highs'],
                    'review_low' => $_POST['lows'],
                    'review_specific' => $_POST['specs'],
                    'review_active' => $_POST['active'],
                );
                $review_id = $this->review_model->update_product_review($object);
                if ($review_id) {
                    $gallery['review_id'] = $review_id;
                    redirect(site_url('admincp/review/gallery/'.$review_id));
                }
            } else {
                $data['title'] = "Edit Product Review";
                $data['features'] = $this->features_model->getAll();
                $data['category'] = $this->category_review_model->getAll();
                $data['reviews'] = $this->review_model->get_product_review_by_id($id);
                $data['id'] = $id;
                $this->load->view('admin/dashboard', $data);
            }
        }
    }

    public function gallery($review_id) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $adminid = $this->session->userdata('adminid');
            $this->load->model('gallery_model');
            if (isset($_FILES['upload']['name'])) {
                // total files //
                $count = count($_FILES['upload']['name']);
                // all uploads //
                $uploads = $_FILES['upload'];
                #$itemid= $this->input->post('itemid', true);

                for ($i = 0; $i < $count; $i++) {
                    if ($uploads['error'][$i] == 0) {
                        $name = str_replace('.jpg', '', $uploads['name'][$i]);
                        $name = $adminid.'_'.time().'_'.$name.'.jpg';
                        move_uploaded_file($uploads['tmp_name'][$i], './src/images'.'/'.$name);
                        $this->gallery_model->add_image_for_item($review_id,$name);
                    }
                }
            }
            $data['review_id'] = $review_id; 
            $data['images']    = $this->gallery_model->get_image_by_review_id($review_id);
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function del_image_review($id, $review_id){
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('gallery_model');
            $this->gallery_model->del_image_review($id);
            redirect('admincp/review/gallery/'.$review_id);
        }
    }
}
