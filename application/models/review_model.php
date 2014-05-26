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
        //$query = $this->db->query('SELECT * FROM tbl_post INNER JOIN tbl_user ON tbl_user.id = tbl_post.userid INNER JOIN tbl_category ON tbl_category.id = tbl_post.cateid INNER JOIN tbl_features ON tbl_features.id = tbl_post.featureid');
        $query = $this->db->get('tbl_review');
        return $query->result();
    }

    function add_product_review($object) {
        $this->db->insert('tbl_review', $object);
        return $this->db->insert_id();
    }

    function update_product_review($id,$object) {
        $this->db->where('id', $id);
        $this->db->update('tbl_review', $object);
    }

    function get_product_review_by_id($id) {
        $this->db->where('id', $id);
        $query = $this->db->get('tbl_review');
        return $query->result();
    }
    
     
    function get_product_review_by_cateid($cateid) {
        $this->db->where('cate_review_id', $cateid);
        $this->db->limit(3);
        $query = $this->db->get('tbl_review');
        if ($query <> null) {
            return $query->result();
        } else {
            return null;
        }
    }

}
