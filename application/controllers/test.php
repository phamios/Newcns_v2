<?php 
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class test extends CI_Controller {

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
        $new_url = $this->get_tiny_url('http://davidwalsh.name/php-imdb-information-grabber');

 
        echo $new_url;
    }

    function get_tiny_url($url) {
        $ch = curl_init();
        $timeout = 5;
        curl_setopt($ch, CURLOPT_URL, 'http://tinyurl.com/api-create.php?url=' . $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        $data = curl_exec($ch);
        curl_close($ch);
        return $data;
    }

}
