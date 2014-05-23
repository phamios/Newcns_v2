<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Post_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }
<<<<<<< HEAD
    
    function add_post($post_title, $post_short, $post_content, $post_image, $active, $cateid) {
        $this->load->database();
        $data = array( 
            'post_title'   => $post_title,
            'post_short'   => $post_short,
            'post_content' => $post_content,
            'post_image'   => $post_image,
            'post_date'    => date("Y-m-d h:s:m"),
            'active'       => $active,
            'cateid'       => $cateid,
        );
        $this->db->insert('tbl_post', $data);
=======

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
>>>>>>> parent of 0940dfd... Merge pull request #16 from phamios/pr/5
    }

    function update_post($id, $post_title, $post_short, $post_content, $post_image, $active, $cateid) {
        $this->load->database();
        $data = array( 
            'post_title'   => $post_title,
            'post_short'   => $post_short,
            'post_content' => $post_content,
            'post_image'   => $post_image,
            'post_date'    => date("Y-m-d h:s:m"),
            'active'       => $active,
            'cateid'       => $cateid,
        );
        $this->db->where('id', $id);
        $this->db->update('tbl_post', $data);
    }

    function show_all_post() {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbl_post');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }
<<<<<<< HEAD
	
	function show_all_post_active() {
        $this->load->database();
		$this->db->where('active',1);
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbl_post');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }
=======
>>>>>>> parent of 0940dfd... Merge pull request #16 from phamios/pr/5

    function del_post($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $this->db->delete('tbl_post');
    }

    function get_post_by_id($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbl_post');
        if ($query->num_rows() > 0)
        {
            return $query->result();
        }
        return $query->result();
    }
	
	function get_cateid_by_post($id){
		 $this->db->select('cateid');
		 $this->db->where('id',$id);
		  $query = $this->db->get('tbl_post');
		 if($query->num_rows() > 0){
			 foreach($query->result() as $result){
				return $result->cateid;
			 }
		 }else{
			return 0;
		 }
		 
	}
	
	 
        
}
