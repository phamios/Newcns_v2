<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class Gift extends CI_Controller {

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
            $this->load->model('gift_model');
            $data['listgift'] = $this->gift_model->get_all();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function create() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('gift_model');
            if (isset($_REQUEST['submit_gift'])) {

                $gift_title   = $this->input->post('title', true);
                $gift_link    = $this->input->post('link', true);
                $gift_content = $this->input->post('content'); 
                $gift_image = $this->do_upload_image('./src/gift/', 'post_image');
                $timestart = $this->input->post('gift_start',true);
                $timeend = $this->input->post('gift_end',true);
                $phonesupport = $this->input->post('phonesupport',true);
                $sponsor = $this->input->post('sponsor',true);
                
                $object = array(
                    'gift_title'   => $gift_title,
                    'gift_link'    => $gift_link,
                    'gift_content' => $gift_content,
                    'gift_image'=>$gift_image,
                    'timestart' =>$timestart,
                    'timeend'=>$timeend,
                    'phonesupport'=>$phonesupport,
                    'sponsor' =>$sponsor,
                );
                $this->gift_model->add_gift($object);
                redirect(site_url('admincp/gift/'));
            }
            $this->load->view('admin/dashboard');
        }
    }

    public function delete($id) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            if ($this->input->is_ajax_request()) {
                $this->load->model('gift_model');
                $delete = $this->gift_model->delete($id);
            }
        }
    }

    public function edit($id = null) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('gift_model');
            if (isset($_REQUEST['update_gift'])) {
                $gift_title   = $this->input->post('title', true);
                $gift_link    = $this->input->post('link', true);
                $gift_content = $this->input->post('content', true);
                $gift_video   = $this->input->post('video', true);


                $object = array(
                    'gift_title'   => $gift_title,
                    'gift_link'    => $gift_link,
                    'gift_video'   => $gift_video,
                    'gift_content' => $gift_content,
                );
                $this->gift_model->update_gift($id,$object);
                redirect(site_url('admincp/gift/'));
            }
            $data['gift'] = $this->gift_model->get_gift_by_id($id);
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
