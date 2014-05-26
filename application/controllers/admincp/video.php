<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class Video extends CI_Controller {

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
            $userid = $this->session->userdata('adminid');
            $this->load->model('video_model');
            $data['listvideo'] = $this->video_model->get_video_by_userid($userid);
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function create() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('video_model');
            if (isset($_REQUEST['submit_video'])) {

                $userid            = $this->session->userdata('adminid');
                $video_title       = $this->input->post('title', true);
                $video_link        = $this->input->post('link', true);
                $video_description = $this->input->post('description', true);
                $video_status      = $this->input->post('status', true);


                $object = array(
                    'userid'            => $userid,
                    'video_title'       => $video_title,
                    'video_link'        => $video_link,
                    'video_description' => $video_description,
                    'video_status'      => $video_status,
                    'video_datecreated' => date("Y-m-d H:i:s")
                );
                $this->video_model->add_video($object);
                redirect(site_url('admincp/video/'));
            }
            $this->load->view('admin/dashboard');
        }
    }

    public function delete($id) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            if ($this->input->is_ajax_request()) {
                $this->load->model('video_model');
                $delete = $this->video_model->delete($id);
            }
        }
    }

    public function edit($id = null) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('video_model');
            if (isset($_REQUEST['update_video'])) {

                $userid            = $this->session->userdata('adminid');
                $video_title       = $this->input->post('title', true);
                $video_link        = $this->input->post('link', true);
                $video_description = $this->input->post('description', true);
                $video_status      = $this->input->post('status', true);


                $object = array(
                    'userid'            => $userid,
                    'video_title'       => $video_title,
                    'video_link'        => $video_link,
                    'video_description' => $video_description,
                    'video_status'      => $video_status,
                    'video_datecreated' => date("Y-m-d H:i:s")
                );
                $this->video_model->update_video($id,$object);
                redirect(site_url('admincp/video/'));
            }
            $data['video'] = $this->video_model->get_video_by_id($id);
            $this->load->view('admin/dashboard', $data);
        }
    }

}
