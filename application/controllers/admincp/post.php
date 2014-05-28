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
        $this->load->library('ImageClass');
        $this->load->helper('text');
        @session_start();
    }

    public function index() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $data['title'] = "List Post";
            $this->load->model('post_model');
            
            $data['listcontent'] = $this->post_model->getAll_by_User_post($this->session->userdata('adminid'));
            $this->load->model('category_model');
            $this->load->model('features_model');
            $data['features'] = $this->features_model->getAll();
            $data['category'] = $this->category_model->getAll();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function sethot($id) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('post_model');
            $object = array(
                'post_id' => $id,
            );
            $result = $this->post_model->add_post_hot($object);
           
            redirect('admincp/post/hot');
        }
    }

    public function hot() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('post_model');
            $data['listhot'] = $this->post_model->getAll_hotpost();
            $data['listcontent'] = $this->post_model->getAll_by_User($this->session->userdata('adminid'));
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
                $post_description = $this->input->post('post_description', true);
                $post_images = $this->do_upload_image('./src/post/', 'post_image');
                
                $object = array(
                    'post_title' => $title,
                    'cateid' => $category,
                    'userid' => $userid,
                    'post_type' => 1,
                    'typeid' => $_POST['type'],
                    'featureid' => $featureid,
                    'post_description' => $post_description,
                    'post_images' => $post_images,
                    'post_createdate' => date("Y-m-d H:i:s")
                );
                $this->post_model->addPost($object);
                //redirect('admin/post', 'refresh');
                redirect($this->config->base_url() . 'admincp/post/');
            }
            $data['title'] = "Thêm mới tin";

            $this->load->model('category_model');
            $this->load->model('user_model');
            $this->load->model('features_model');

            $data['features'] = $this->features_model->getAll();
            $data['category'] = $this->category_model->getAll();
            $data['user'] = $this->user_model->getAll();

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function delete($id) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {  
                $this->load->model('post_model');
                $delete = $this->post_model->delete($id);
                redirect('admincp/post/index'); 
        }
    }

    public function edit($id = null) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('post_model');
            $this->load->model('category_model');
            $this->load->model('features_model'); 
            if (isset($_REQUEST['update_post'])) { 
                $title = $this->input->post('title', true);
                $category = $this->input->post('category', true);
                $userid = $this->session->userdata('adminid');
                $post_type = $this->input->post('type', true);
                $featureid = $this->input->post('feature', true);
                $post_description = $this->input->post('post_description', true);
                $post_images = $this->do_upload_image('./src/post/', 'post_image');
                
                if (strlen($post_images) <= 0 ) {
                    $object = array(
                        'post_id' => $id,
                        'post_title' => $title,
                        'cateid' => $category,
                        'userid' => $userid,
                        'post_type' => 1,
                        'typeid' => 1,
                        'featureid' => $featureid,
                        'post_description' => $post_description, 
                        'post_createdate' => date("Y-m-d H:i:s")
                    );
                } else {
                     
                    $object = array(
                        'post_id' => $id,
                        'post_title' => $title,
                        'cateid' => $category,
                        'userid' => $userid,
                        'post_type' => 1,
                        'typeid' => 1,
                        'featureid' => $featureid,
                        'post_description' => strip_tags($post_description, '<p>'), 
                        'post_createdate' => date("Y-m-d H:i:s"),
                        'post_images' =>$post_images,
                    );
                }
               
                $this->post_model->update($object); 
                redirect($this->config->base_url() . 'admincp/post/');
            }
            $data['edit'] = 0;
            $data['id'] = $id;
            $data['title'] = "Edit post";

            $data['details_post'] = $this->post_model->getDetail($this->session->userdata('adminid'), $id);
            $data['features'] = $this->features_model->getAll();
            $data['category'] = $this->category_model->getAll();
            // $data['post'] = $this->post_model->getAll();

            $this->load->view('admin/dashboard', $data);
        }
    }

    /**
     * Upload Image 
     * @param type $mypath
     * @param type $filename
     * @return null
     */
    function do_upload_image($mypath, $filename) {

        $this->load->library('upload');
        $config['upload_path'] = $mypath;
        $config['allowed_types'] = 'gif|jpg|png|bmp';
        $config['max_size'] = '80000';
        $this->load->library('upload', $config);
        $this->upload->initialize($config);
        if (isset($filename)) {
            if (!$this->upload->do_upload($filename)) {
                $error = array('error' => $this->upload->display_errors());

                return NULL;
            } else {
                $data = array('upload_data' => $this->upload->data());
                $imagename = $this->upload->file_name;

                $this->resize_image($mypath, 'thumb_' . $imagename, $imagename);
                return $imagename;
            }
        } else {
            echo $this->upload->display_errors();
        }
    }

    /**
     * Resize Image for Upload Images 
     * @param type $dir
     * @param type $new_name
     * @param type $image
     */
    function resize_image($dir, $new_name, $image) {
        $img_cfg_thumb['image_library'] = 'gd2';
        $img_cfg_thumb['source_image'] = "./" . $dir . "/" . $image;
        $img_cfg_thumb['maintain_ratio'] = TRUE;
        $img_cfg_thumb['new_image'] = $new_name;
        $img_cfg_thumb['width'] = 300;
        $img_cfg_thumb['height'] = 200;
        $this->load->library('image_lib');
        $this->image_lib->initialize($img_cfg_thumb);
        $this->image_lib->resize();
    }

}
