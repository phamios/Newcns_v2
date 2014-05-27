<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class features extends CI_Controller {

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
            $this->load->model('post_model');
            $data['listcontent'] = $this->post_model->getAll_by_User_features($this->session->userdata('adminid'));
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
            return $result;
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
            if (isset($_REQUEST['submit_features'])) {

                $title = $this->input->post('title', true);
                $userid = $this->session->userdata('adminid');
                $post_type = 2;
                $post_description = $this->input->post('post_description', true);
                $post_images = $this->do_upload_image('./src/features/', 'feature_image');


                $object = array(
                    'post_title' => $title,
                    'userid' => $userid,
                    'post_type' => 2,
                    'post_description' => $post_description,
                    'post_images' => $post_images,
                    'post_createdate' => date("Y-m-d H:i:s")
                );
                $this->post_model->addPost($object);
                redirect(site_url('admincp/features/'));
            }
            $this->load->model('user_model');
            $data['user'] = $this->user_model->getAll();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function delete($id) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            if ($this->input->is_ajax_request()) {
                $this->load->model('post_model');
                $delete = $this->post_model->delete($id);
            }
        }
    }

    public function edit($id = null) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('post_model');
            if (isset($_REQUEST['update_feature'])) {

                $title = $this->input->post('title', true);
                $userid = $this->session->userdata('adminid');
                $post_type = 2;
                $post_description = $this->input->post('post_description', true);
                $post_images = $this->do_upload_image('./src/features/', 'feature_image');


                $object = array(
                    'post_id' => $id,
                    'cateid' => null,
                    'featureid' => null,
                    'post_title' => $title,
                    'userid' => $userid,
                    'post_type' => 2,
                    'post_description' => $post_description,
                    'post_images' => $post_images,
                    'post_createdate' => date("Y-m-d H:i:s")
                );
                $this->post_model->update($object);
                redirect(site_url('admincp/features/'));
            }
            $data['details_features'] = $this->post_model->getDetail($this->session->userdata('adminid'), $id);
            $this->load->model('user_model');
            $data['user'] = $this->user_model->getAll();
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
