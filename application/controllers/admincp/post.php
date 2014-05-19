<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class post extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('url');
        $this->load->library('upload');
        $this->load->library('pagination');
        $this->load->library('parser');
        $this->load->helper('cookie');
        $this->load->helper(array('form', 'url'));
        $this->load->helper('image_helper');
        @session_start();
    }

    public function index() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $data['title'] = "List Post";

            $this->load->model('post_model');
            $data['listcontent'] = $this->post_model->getAll();

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function create() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('post_model');
            if (isset($_REQUEST['submit_post'])) {

                $title = $this->input->post('title', true);
                $category = $this->input->post('category', true);
                $userid = $this->session->userdata('adminid');
                $post_type = $this->input->post('type', true);
                $featureid = $this->input->post('feature', true);
                $post_description = $this->input->post('post_description',true);
                $post_images = $this->do_upload_image('./src/post/', 'post_image');
                

                $object = array(
                    'post_title' =>$title,
                    'cateid' => $category,
                    'userid' => $userid,
                    'post_type' => $post_type,
                    'typeid' => $_POST['type'],
                    'featureid' => $featureid,
                    'post_description' =>$post_description,
                    'post_images' => $post_images,
                    'post_createdate' => date("Y-m-d H:i:s")
                );
                $this->post_model->addPost($object);
                //redirect('admin/post', 'refresh');
                redirect($this->config->base_url() . 'admincp/post/');
            }
            $data['title'] = "Create Post";

            $this->load->model('category_model');
            $this->load->model('user_model');
            $this->load->model('features_model');

            $data['features'] = $this->features_model->getAll();
            $data['category'] = $this->category_model->getAll();
            $data['user'] = $this->user_model->getAll();

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function delete() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            if ($this->input->is_ajax_request()) {
                $id = $_POST['id'];
                $this->load->model('post_model');
                $delete = $this->post_model->delete($id);
            }
        }
    }

    public function edit($id = null) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            if (isset($_POST['title'])) {
                $data['edit'] = 1;
                $this->load->model('post_model');
                //$this->post_model->query("INSERT ")
                if (isset($_POST['image'])) {
                    $image = $_POST['image'];
                } else {
                    $image = null;
                }
                $insert = array(
                    'post_title' => $_POST['title'],
                    'cateid' => $_POST['category'],
                    //'userid' => '1',
                    //'post_type' => '1',
                    'typeid' => $_POST['type'],
                    'featureid' => $_POST['feature'],
                    'post_description' => $_POST['description'],
                    'post_images' => $_POST['images'],
                    'post_editdate' => date("Y-m-d H:i:s")
                );
                $this->db->update('tbl_post', $insert, array('id' => $id));
                //redirect('admin/post', 'refresh');
                redirect($this->config->base_url() . 'admincp/post/edit/' . $id . '?success=1');
            } else {
                $data['edit'] = 0;
                $data['id'] = $id;
                $data['title'] = "Edit post";
                $this->load->model('post_model');
                $data['model'] = $this->post_model->getDetail($id);
                $data['model'] = $data['model'][0];

                $this->load->model('category_model');
                $this->load->model('user_model');
                $this->load->model('features_model');

                $data['features'] = $this->features_model->getAll();
                $data['category'] = $this->category_model->getAll();
                $data['user'] = $this->user_model->getAll();

                $data['post'] = $this->post_model->getAll();
                $this->load->view('admin/dashboard', $data);
            }
        }
    }

}