<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class post_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

   

    function getAll_by_User($userid) {
        $this->db->where('userid', $userid);
        $this->db->order_by("id");
        $query = $this->db->get('tbl_post');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }
    
    function getAll_by_User_post($userid) {
        $this->db->where('userid', $userid);
        $this->db->where('post_type', 1);
        $this->db->order_by("id");
        $query = $this->db->get('tbl_post');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }
    
    function getAll_by_User_features($userid) {
        $this->db->where('userid', $userid);
        $this->db->where('post_type', 2);
        $this->db->order_by("id");
        $query = $this->db->get('tbl_post');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }
    
    public function update($object=null){ 
        $id = $object['post_id'];
        $this->db->where('id', $id);
        $this->db->update('tbl_post', $object);
    }

    function delete($id = null) {
        $delete = $this->db->delete('tbl_post', array('id' => $id));
        return $delete;
    }

    function getDetail($userid = null, $post_id = null) {
        $this->db->where('userid', $userid);
        $this->db->where('id', $post_id);
        $query = $this->db->get('tbl_post');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

    function addPost($object) {

        $this->db->insert('tbl_post', $object);
        return $this->db->insert_id();
    }
    
    function add_post_hot($object){
         $this->db->insert('tbl_hotpost', $object);
        return $this->db->insert_id();
    }
    
    function getAll_hotpost() { 
        $this->db->order_by("id");
        $query = $this->db->get('tbl_hotpost');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

}