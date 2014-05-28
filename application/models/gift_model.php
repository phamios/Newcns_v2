<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Gift_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    function get_all() {
        $query = $this->db->get('tbl_gift');
        if ($query <> null) {
            return $query->result();
        } else {
            return null;
        }
    }

    function get_gift_by_id($id) {
        $this->db->where('id', $id);
        $query = $this->db->get('tbl_gift');
        if ($query <> null) {
            return $query->result();
        } else {
            return null;
        }
    }

    function delete($id=null) {
        $delete = $this->db->delete('tbl_gift', array('id' => $id));
        return $delete;
    }

    function add_gift($object) {
        $this->db->insert('tbl_gift', $object);
        return $this->db->insert_id();
    }

    function update_gift($id, $object) {
        $this->db->where('id', $id);
        $this->db->update('tbl_gift', $object);
    }

}
