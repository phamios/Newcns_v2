<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Config_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    function get_all() {
        $query = $this->db->get('tbl_options');
        if ($query <> null) {
            return $query->result();
        } else {
            return null;
        }
    }

    function get_config_by_id($id) {
        $this->db->where('id', $id);
        $query = $this->db->get('tbl_options');
        if ($query <> null) {
            return $query->result();
        } else {
            return null;
        }
    }

    function add_config($object) {
        $this->db->insert('tbl_options', $object);
    }

    function update_config($id, $object) {
        $this->db->where('id', $id);
        $this->db->update('tbl_options', $object);
    }

}
