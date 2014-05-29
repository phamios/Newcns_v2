<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class post_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    function postAll() {
        $this->db->where('post_type', "1");
        $this->db->order_by("id",'DESC');
        $query = $this->db->get('tbl_post');
        return $query->result();
    }
    
    function get_news_trend() {
       $this->db->order_by("post_view",'DESC');
       $this->db->limit(10);
        $query = $this->db->get('tbl_post');
        return $query->result();
    }

    function update_view($id) {
       $count = $this->get_view($id);
       $data  = array(
           'post_view'=>$count+1,
       ); 
        $this->db->where('id', $id);
        $this->db->update('tbl_post', $data); 
    }

    function get_view($id) {
        $this->db->select('post_view');
        $this->db->where('id', $id);
        $query = $this->db->get('tbl_post');
        foreach ($query->result() as $row) {
            return $row->post_view;
        }
    }

    function get_news_ajax() {
        $this->db->where('post_type', "1");
        $this->db->order_by("id",'DESC');
        $this->db->limit(10);
        $query = $this->db->get('tbl_post');
        return $query->result();
    }

    function get_features_ajax() {
        $this->db->where('post_type', "2");
        $this->db->order_by("id",'DESC');
        $this->db->limit(10);
        $query = $this->db->get('tbl_post');
        return $query->result();
    }

    function get_news_default() {
        $this->db->where('post_type', "1");
        $this->db->order_by("id",'DESC');
        $this->db->limit(20);
        $query = $this->db->get('tbl_post');
        return $query->result();
    }

    function get_news_by_cateid($cateid) {

        $this->db->where('post_type', "1");
        $this->db->where('cateid', $cateid);
        $this->db->order_by("id",'DESC');
        $this->db->limit(10);
        $query = $this->db->get('tbl_post');
        return $query->result();
    }

    function get_news_by_cateid_limit() {
        $this->db->where('post_type', "1");
        $this->db->order_by("id",'DESC');
        $this->db->limit(20);
        $query = $this->db->get('tbl_post');
        return $query->result();
    }

    function get_rev_by_cateid($cateid) {

        $this->db->where('post_type', "2");
        $this->db->where('cateid', $cateid);
        $this->db->order_by("id",'DESC');
        $this->db->limit(10);
        $query = $this->db->get('tbl_post');
        return $query->result();
    }

    function getAll_by_User($userid) {
        $this->db->where('userid', $userid);
        $this->db->order_by("id",'DESC');
        $query = $this->db->get('tbl_post');
        return $query->result();
    }

    function getAll_by_User_post($userid) {
        $this->db->where('userid', $userid);
        $this->db->where('post_type', 1);
        $this->db->order_by("id",'DESC');
        $query = $this->db->get('tbl_post');
        return $query->result();
    }

    function getAll_by_User_features($userid) {
        $this->db->where('userid', $userid);
        $this->db->where('post_type', 2);
        $this->db->order_by("id",'DESC');
        $query = $this->db->get('tbl_post');
        return $query->result();
    }

    public function update($object) {
        if (isset($object['post_images'])) {
            $data = array(
                'post_title' => $object['post_title'],
                'cateid' => $object['cateid'],
                'userid' => $object['userid'],
                'post_type' => $object['post_type'],
                'typeid' => $object['post_type'],
                'featureid' => $object['featureid'],
                'post_description' => $object['post_description'],
                'post_createdate' => date("Y-m-d H:i:s"),
                'post_images' => $object['post_images'],
            );
        } else {
            $data = array(
                'post_title' => $object['post_title'],
                'cateid' => $object['cateid'],
                'userid' => $object['userid'],
                'post_type' => $object['post_type'],
                'typeid' => $object['post_type'],
                'featureid' => $object['featureid'],
                'post_description' => $object['post_description'],
                'post_createdate' => date("Y-m-d H:i:s")
            );
        }

        $id = $object['post_id'];
        $this->db->where('id', $id);
        $this->db->update('tbl_post', $data);
    }

    function delete($id = null) {
        $delete = $this->db->delete('tbl_post', array('id' => $id));
        return $delete;
    }

    function getDetail($userid = null, $post_id = null) {
        $this->db->where('userid', $userid);
        $this->db->where('id', $post_id);
        $query = $this->db->get('tbl_post');
        return $query->result();
    }

    function getDetail_byID($post_id = null) {
        $this->db->where('id', $post_id);
        $query = $this->db->get('tbl_post');
        return $query->result();
    }

    function getDetail_byID_by_rev($post_id = null) {
        $this->db->where('typeid', 2);
        $this->db->where('id', $post_id);
        $query = $this->db->get('tbl_post');
        return $query->result();
    }

    function getDetail_byID_by_news($post_id = null) {
        $this->db->where('typeid', 1);
        $this->db->where('id', $post_id);
        $query = $this->db->get('tbl_post');
        return $query->result();
    }

    function addPost($object) {

        $this->db->insert('tbl_post', $object);
        return $this->db->insert_id();
    }

    function add_post_hot($object) {
        $this->db->insert('tbl_hotpost', $object);
        return $this->db->insert_id();
    }

    function getAll_hotpost() {
        $this->db->order_by("id",'DESC');
        $query = $this->db->get('tbl_hotpost');
        return $query->result();
    }

    function get_all_features() {
        $this->db->order_by('id', 'DESC');
        $this->db->where('post_type', 2);
        $query = $this->db->get('tbl_post');
        return $query->result();
    }
    
    public function total_post() {
        return $this->db->count_all('tbl_post');
    }

}
