<?php

if (! defined ( 'BASEPATH' ))
	exit ( 'No direct script access allowed' );
class Admin_model extends CI_Model {
	function __construct() {
		// Call the Model constructor
		parent::__construct ();
		$this->load->database ();
	}
	function _auth($username, $password) {
		$this->db->where ( array (
				'username' => $username,
				'password' => md5 ( "G!K@U" . $password)
		) );
		$query = $this->db->get ( 'tbl_admin' );
		if ($query->num_rows () > 0) {
			return $query->result();
		} else {
			return null;
		}
	}

    function get_user_info_by_id($userid) {
        $this->db->where('id', $userid);
        $query = $this->db->get('tbl_admin');
        if ($query->num_rows () > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

    function update_user_info($userid,$username,$userpass) {
        if ($userpass <> null) {
            $data = array(
                'username' => $username,
                'password' => md5 ("G!K@U" . $userpass)
            );
        } else {
            $data = array (
                'username' => $username
            );
        }
        $this->db->where('id', $userid);
        $this->db->update('tbl_admin', $data);
    }
}
