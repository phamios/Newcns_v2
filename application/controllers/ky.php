<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class ky extends CI_Controller {

	
	function __construct() {
		parent::__construct();
		$this->load->library('session');
		$this->load->helper('url');
		$this->load->library('upload');
		$this->load->library('pagination');
		$this->load->library('parser');
		$this->load->helper('cookie');
		$this->load->helper(array('form', 'url'));
                $this->load->helper('text');
		@session_start();
	}
        
	public function index()
	{ 
            $this->load->model('post_model');
            $data['listcontent'] = $this->post_model->get_news_default();
            $this->load->model('category_model');
            $this->load->model('features_model');
            $data['features'] = $this->features_model->getAll();
            $data['category'] = $this->category_model->getAll();
            $this->load->view('welcome_message',$data);
	}
        
        
        
        
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */