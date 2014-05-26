<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class review_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    function getAll() {
       $this->db->order_by("id",'DESC');
        $query = $this->db->get('tbl_review');
        return $query->result();
    }

    function add_product_review($object) {
        $this->db->insert('tbl_review', $object);
        return $this->db->insert_id();
    }
    
    
    function get_trend() {
       $this->db->order_by("review_view",'DESC');
       $this->db->limit(10);
        $query = $this->db->get('tbl_review');
        return $query->result();
    }
    

    function update_product_review($id,$object) {
        $this->db->where('id', $id);
        $this->db->update('tbl_review', $object);
    }
    
    function update_view($id) {
       $count = $this->get_view($id);
       $data  = array(
           'review_view'=>$count+1,
       ); 
        $this->db->where('id', $id);
        $this->db->update('tbl_review', $data); 
    }

    function get_view($id) {
        $this->db->select('review_view');
        $this->db->where('id', $id);
        $query = $this->db->get('tbl_review');
        foreach ($query->result() as $row) {
            return $row->review_view;
        }
    }
    
    

    function get_product_review_by_id($id) {
        $this->db->order_by("id",'DESC');
        $this->db->where('id', $id);
        $query = $this->db->get('tbl_review');
        return $query->result();
    }
    
     
    function get_product_review_by_cateid($cateid) {
        $this->db->order_by("id",'DESC');
        $this->db->where('cate_review_id', $cateid);
        $this->db->limit(3);
        $query = $this->db->get('tbl_review');
        if ($query <> null) {
            return $query->result();
        } else {
            return null;
        }
    }
    
    function get_product_review_by_cateid_limit() { 
        $this->db->order_by("id",'DESC');
        $this->db->limit(20);
        $query = $this->db->get('tbl_review');
        if ($query <> null) {
            return $query->result();
        } else {
            return null;
        }
    }

}
