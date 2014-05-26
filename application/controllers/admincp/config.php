<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class Config extends CI_Controller {

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
            $this->load->model('config_model');
            $data['listconfig'] = $this->config_model->get_all();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function create() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('config_model');
            if (isset($_REQUEST['submit_config'])) {

                $option_name         = $this->input->post('name', true);
                $option_value        = $this->input->post('value', true);
                $config_status       = $this->input->post('status', true);

                $object = array(
                    'option_name'   => $option_name,
                    'option_value'  => $option_value,
                    'option_type'   => 1,
                    'option_status' => $option_status,
                );
                $this->config_model->add_config($object);
                redirect(site_url('admincp/config/'));
            }
            $this->load->view('admin/dashboard');
        }
    }

    public function edit($id = null) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('config_model');
            if (isset($_REQUEST['update_config'])) {

                $option_name         = $this->input->post('name', true);
                $option_value        = $this->input->post('value', true);
                $config_status       = $this->input->post('status', true);

                $object = array(
                    'option_name'   => $option_name,
                    'option_value'  => $option_value,
                    'option_status' => $option_status,
                );
                $this->config_model->update_config($id,$object);
                redirect(site_url('admincp/config/'));
            }
            $data['config'] = $this->config_model->get_config_by_id($id);
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function site() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('config_model');
            if (isset($_REQUEST['update_site_config'])) {

                $site_title       = $this->input->post('title', true);
                $site_meta        = $this->input->post('meta', true);
                $site_description = $this->input->post('description', true);
                $site_footer      = $this->input->post('footer', true);
                $site_footer2     = $this->input->post('footer2', true);
                $site_fb_link     = $this->input->post('fb', true);
                $site_tw_link     = $this->input->post('tw', true);
                $site_gg_link     = $this->input->post('gg', true);
                $site_support     = $this->input->post('mail', true);
                $site_phone       = $this->input->post('phone', true);
                $site_logo        = $this->do_upload_image('./src/admin/site/', 'logo');
                $site_fv_icon     = $this->do_upload_image('./src/admin/site/', 'fv_icon');

                $object = array(
                    'title'           => $site_title, 
                    'meta'            => $site_meta,
                    'description'     => $site_description,
                    'footer'          => $site_footer,
                    'footer2'         => $site_footer2,
                    'facebook_link'   => $site_fb_link,
                    'twitter_link'    => $site_tw_link,
                    'googleplus_link' => $site_gg_link,
                    'mail_support'    => $site_support,
                    'contact_phone'   => $site_phone,
                    //'logo'            => $site_logo,
                    //'favorite_icon'   => $site_fv_icon,
                );
                if ($site_logo <> null) {
                    $object['logo'] = $site_logo;
                }
                if ($site_fv_icon <> null) {
                    $object['favorite_icon'] = $site_fv_icon;
                }
                $this->config_model->update_site_config($object);
                redirect(site_url('admincp/config/site'));
            }
            $data['site_config'] = $this->config_model->get_site_config();
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
