<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Video_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    function get_all() {
        $query = $this->db->get('tbl_video');
        if ($query <> null) {
            return $query->result();
        } else {
            return null;
        }
    }

    function get_video_by_userid($userid) {
        $this->db->where('userid', $userid);
        $query = $this->db->get('tbl_video');
        if ($query <> null) {
            return $query->result();
        } else {
            return null;
        }
    }

    function get_video_by_id($id) {
        $this->db->where('id', $id);
        $query = $this->db->get('tbl_video');
        if ($query <> null) {
            return $query->result();
        } else {
            return null;
        }
    }

    function delete($id=null) {
        $delete = $this->db->delete('tbl_video', array('id' => $id));
        return $delete;
    }

    function add_video($object) {
        $this->db->insert('tbl_video', $object);
        return $this->db->insert_id();
    }

    function update_video($id, $object) {
        $this->db->where('id', $id);
        $this->db->update('tbl_video', $object);
    }

}
