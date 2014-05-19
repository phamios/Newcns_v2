<?php

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
        @session_start();
    }

    public function index() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $data['title'] = "List Features";
            $this->load->model('features_model');
            $data['features'] = $this->features_model->getAll();
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function create() {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('features_model');
            if (isset($_REQUEST['add_button'])) {
                 if(strlen($this->input->post('name_features',true)) <= 0 ){
                     redirect('admincp/features/create');
                 }else{
                     $name_features = $this->input->post('name_features',true);
                     $value_features = $this->input->post('value_features',true);
                     $active = $this->input->post('active',true);
                     $object = array(
                         'features_name'=>$name_features,
                         'features_value'=>$value_features,
                         'features_status'=>$active,
                     );
                     $result = $this->features_model->addFeatures($object);
                     if($result <> null ){
                         redirect('admincp/features/index');
                     } else {
                         redirect('admincp/features/create');
                     }
                 }
            } else {
                $data['title'] = "Create Features";
                
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
                $this->load->model('features_model');
                $delete = $this->features_model->delete($id);
            }
        }
    }

    public function edit($id = null) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('features_model');
           if (isset($_REQUEST['edit_button'])) {
                 if(strlen($this->input->post('name_features',true)) <= 0 ){
                     redirect('admincp/features/edit'.$id);
                 }else{
                     $name_features = $this->input->post('name_features',true);
                     $value_features = $this->input->post('value_features',true);
                     $active = $this->input->post('active',true);
                     $object = array(
                         'features_name'=>$name_features,
                         'features_value'=>$value_features,
                         'features_status'=>$active,
                     );
                     $result = $this->features_model->updateFeatures($object,$id);
                     redirect('admincp/features/index');
                 }
            } else {
                $data['edit'] = 0;
                $data['id'] = $id;
                $data['title'] = "Edit Features"; 
                $data['features_details'] = $this->features_model->getDetail($id);
             
                $this->load->view('admin/dashboard', $data);
            }
        }
    }

}