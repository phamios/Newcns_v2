<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();


class Tracking extends CI_Controller {

	function __construct() { 
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('url');
        $this->load->library('upload');
        $this->load->library('pagination');
        $this->load->library('parser');
        $this->load->helper('cookie');
		$this->load->helper('text');
        //$this->load->library('sonclass');
        $this->load->helper(array('form', 'url')); 
        @session_start();
    }

    public function index(){
         $this->load->view('admin/default/tracking');

    }

    public function realtime(){
       $this->load->model('track_model');
        // $config['base_url'] = site_url('tracking/index');
        // $config['total_rows'] = $this->track_model->count_log();
        // $config['per_page'] = 10;
        // $config['prev_link'] = 'Prev';
        // $config['next_link'] = 'Next';
        // $this->pagination->initialize($config);
        $data["logs"] = $this->track_model->list_track();
       // var_dump($data["logs"]); die;
        //$data['pages'] = $this->pagination->create_links();

        $this->load->view('admin/default/track',$data);
    }

}