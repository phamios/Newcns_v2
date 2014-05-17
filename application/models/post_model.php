<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Post_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

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

}
