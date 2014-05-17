<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class Post extends CI_Controller {

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
            $this->load->model('post_model');
            $this->load->model('cate_model');
            $data['listcontent'] = $this->post_model->show_all_post();
            $data['allcatenews'] = $this->cate_model->list_cate_admin();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function add_post() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            if (isset($_REQUEST['submit'])) {
                $post_content = $this->input->post('post_content', true);
                $post_title   = $this->input->post('post_title', true);
                $post_short   = $this->input->post('post_short', true);
                $post_image   = $this->do_upload_image('./src/admin/','post_image');
                $active       = $this->input->post('active', true);
                $cateid       = $this->input->post('cateid', true);

                $this->load->model('post_model');
                $this->post_model->add_post($post_title,$post_short,$post_content,$post_image,$active,$cateid);
                redirect('admincp/post');
            }
            $this->load->model('cate_model');
            $data['cates'] = $this->cate_model->list_cate_admin();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function update_post($id) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('post_model');
            if (isset($_REQUEST['submit'])) {
                $post_content = $this->input->post('post_content', true);
                $post_title   = $this->input->post('post_title', true);
                $post_short   = $this->input->post('post_short', true);
                $post_image   = $this->do_upload_image('./src/admin/','post_image');
                $active       = $this->input->post('active', true);
                $cateid       = $this->input->post('cateid', true);

                $this->post_model->update_post($id, $post_title,$post_short,$post_content,$post_image,$active,$cateid);
                redirect('admincp/post');
            }
            $this->load->model('cate_model');
            $data['cates'] = $this->cate_model->list_cate_admin();
            $data['posts'] = $this->post_model->get_post_by_id($id);
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function del_post($id=null) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('post_model');
            $this->post_model->del_post($id);
            redirect('admincp/post');
        }
    }

    function do_upload_image($mypath, $filename) {
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

    public function resize_image($dir, $new_name, $image) {
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

    function do_upload_image_slide($mypath, $filename) {
        $config['upload_path'] = $mypath;
        $config['allowed_types'] = 'gif|jpg|png|bmp';
        $config['max_size'] = '80000';
        $this->load->library('upload', $config);
        $this->upload->initialize($config);
        if (isset($filename)) {
            //echo $filename; die();
            if (!$this->upload->do_upload($filename)) {
                $error = array('error' => $this->upload->display_errors());
                return NULL;
            } else {
                $data = array('upload_data' => $this->upload->data());
                $imagename = $this->upload->file_name;
                $this->resize_image_slide($mypath, 'thumb_' . $imagename, $imagename);
                return $imagename;
            }
        } else {
            echo $this->upload->display_errors();
        }
    }

    public function resize_image_slide($dir, $new_name, $image) {
        $img_cfg_thumb['image_library'] = 'gd2';
        $img_cfg_thumb['source_image'] = "./" . $dir . "/" . $image;
        $img_cfg_thumb['maintain_ratio'] = TRUE;
        $img_cfg_thumb['new_image'] = $new_name;
        $img_cfg_thumb['width'] = 540;
        $img_cfg_thumb['height'] = 210;
        $this->load->library('image_lib');
        $this->image_lib->initialize($img_cfg_thumb);
        $this->image_lib->resize();
    }

    function do_upload_file($mypath, $filename) {
        $config['upload_path'] = $mypath;
        $config['allowed_types'] = 'jar|jad|apk|ipa';
        $config['max_size'] = '500000';
        $this->load->library('upload', $config);
        $this->upload->initialize($config);
        if (isset($filename)) {
            //echo $filename; die();

            if (!$this->upload->do_upload($filename)) {
                $error = array('error' => $this->upload->display_errors());
                //print_r($error);
                return null;
            } else {
                $data = array('upload_data' => $this->upload->data());
                $imagename = $this->upload->file_name;
                return $imagename;
            }
        } else {
            echo $this->upload->display_errors();
        }
    }
}
