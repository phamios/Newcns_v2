<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class option_model extends CI_Model {

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    public function list_cate_admin(){ 
        $this->db->order_by("id");
        $query=$this->db->get('tbl_options');
        return $query->result();
    }

    public function add_option($object){
        $this->db->insert('tbl_options', $object);
    }
 
}

