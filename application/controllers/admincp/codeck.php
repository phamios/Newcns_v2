<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class codeck extends CI_Controller {

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
    
    public function index(){
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('codeck_model');
            $data['codecks'] = $this->codeck_model->get_all_codeck();
    	    $this->load->view('admin/dashboard', $data);
        }
    }
    
    public function add_codeck(){ 
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('codeck_model');
            if (isset($_REQUEST['submit'])) {
                $ten_ma          = $this->input->post('ten_ma', true);
                $ten_chi_tiet    = $this->input->post('ten_chi_tiet', true);
                $price_tran      = $this->input->post('price_tran', true);
                $price_san       = $this->input->post('price_san', true);
                $tham_chieu      = $this->input->post('tham_chieu', true);
                $gia_khop        = $this->input->post('gia_khop', true);
                $khoi_luong_khop = $this->input->post('khoi_luong_khop', true);
                $thay_doi        = $this->input->post('thay_doi', true);
                $status          = $this->input->post('status', true);

                $object[]                  = null;
                $object['ten_ma']          = $ten_ma;
                $object['ten_chi_tiet']    = $ten_chi_tiet;
                $object['price_tran']      = $price_tran;
                $object['price_san']       = $price_san;
                $object['tham_chieu']      = $tham_chieu;
                $object['gia_khop']        = $gia_khop;
                $object['khoi_luong_khop'] = $khoi_luong_khop;
                $object['thay_doi']        = $thay_doi;
                $object['status']          = $status;

                $this->codeck_model->add_codeck($object);
                redirect('admincp/codeck');
            }
        }
        $this->load->view('admin/dashboard');
    }
    
    public function change_codeck_status($id) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('codeck_model');
            $this->codeck_model->change_codeck_status($id);
            redirect('admincp/codeck');
        }
    }

    public function update_codeck($id){ 
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('codeck_model');
            if (isset($_REQUEST['submit'])) {
                $ten_ma          = $this->input->post('ten_ma', true);
                $ten_chi_tiet    = $this->input->post('ten_chi_tiet', true);
                $price_tran      = $this->input->post('price_tran', true);
                $price_san       = $this->input->post('price_san', true);
                $tham_chieu      = $this->input->post('tham_chieu', true);
                $gia_khop        = $this->input->post('gia_khop', true);
                $khoi_luong_khop = $this->input->post('khoi_luong_khop', true);
                $thay_doi        = $this->input->post('thay_doi', true);
                $status          = $this->input->post('status', true);

                $object[]                  = null;
                $object['id']              = $id;
                $object['ten_ma']          = $ten_ma;
                $object['ten_chi_tiet']    = $ten_chi_tiet;
                $object['price_tran']      = $price_tran;
                $object['price_san']       = $price_san;
                $object['tham_chieu']      = $tham_chieu;
                $object['gia_khop']        = $gia_khop;
                $object['khoi_luong_khop'] = $khoi_luong_khop;
                $object['thay_doi']        = $thay_doi;
                $object['status']          = $status;

                $this->codeck_model->update_codeck($object);
                redirect('admincp/codeck');
            }
            $data['codecks'] = $this->codeck_model->get_codeck_by_id($id);
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function del_codeck($id) {
        if ($this->session->userdata('adminid') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('codeck_model');
            $this->codeck_model->del_codeck($id);
            redirect('admincp/codeck');
        }
    }

}
