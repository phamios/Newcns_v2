<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class Wap extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('url');
        $this->load->library('upload');
        $this->load->library('pagination');
        $this->load->library('parser');
        $this->load->helper('cookie');
        $this->upload->set_allowed_types('*');
        $this->load->helper(array('form', 'url'));
        @session_start();
    }

    public function index() {
         
        $this->load->model('wap_model');
        if ($this->wap_model->check_exit_wap($sub) == true) {
            $this->load->model('wap_model');
            $result = $this->wap_model->get_detail_wap_by_name($sub);
            $data[] = null;
            foreach ($result as $row) {
                $data['title'] = $row->wap_title;
                $data['meta_des'] = $row->wap_meta_des;
                $data['meta_content'] = $row->wap_meta_content;
                $data['footer'] = $row->wap_copyright;
                $data['userid'] = $row->userid;
            }
            $this->load->model('app_model');
            $this->load->model('cate_model');
            $data['current_wap'] = "http://" . $sub . "." . $this->config->item('site_name') . ".vn";
            $data['sub'] = $sub;

            $data['apps'] = $this->app_model->list_app_user($data['userid']);
            if ($data['apps'] == null) {
                $data['apps'] = $this->app_model->list_app_all();
            }
            $data['categories'] = $this->cate_model->list_cate_app();

            $this->load->model('video_model');
            $data['list_video'] = $this->video_model->list_video_user($data['userid']);
            $this->load->view('wap/default', $data);
        } elseif ($sub == "forum" || $sub == "blog") {
            redirect("http://forum.admega.vn");
        } else {
            redirect(site_url());
        }
    }

}