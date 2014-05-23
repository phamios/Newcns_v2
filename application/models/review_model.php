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
        $this->db->select('*');
        $this->db->from('tbl_review'); 
        $this->db->order_by('id', 'DESC');
        $query = $this->db->get();
        return $query->result();
    }

    function add_product_review($object) {
        $this->db->insert('tbl_review', $object);
        return $this->db->insert_id();
    }

    function update_product_review($object) {
        $this->db->update('tbl_review', $object);
    }

    function get_product_review_by_id($id) {
        $this->db->where('id', $id);
        $query = $this->db->get('tbl_review');
        return $query->result();
    }

}
