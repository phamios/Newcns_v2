<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Advertis_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    function getAll() {
        $query = $this->db->query('SELECT * FROM tbl_advertis');
        return $query->result();
    }

    function delete($id = null) {
        $delete = $this->db->delete('tbl_advertis', array('id' => $id));
        return $delete;
    }

    function getDetail($id = null) {
        $query = $this->db->get_where('tbl_advertis', array('id' => $id));
        return $query->result();
    }

    function add_adver($object) {
        $this->db->insert('tbl_advertis', $object);
        return $this->db->insert_id();
    }

    function update_adver($object, $id) {
        $this->db->where('id', $id);
        $this->db->update('tbl_advertis', $object);
    }

    function get_adver_by_id($id) {
        $this->db->where('id', $id);
        $query = $this->db->get('tbl_advertis');
        if ($query <> null) {
            return $query->result();
        } else {
            return null;
        }
    }

}
