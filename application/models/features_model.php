<?php 
if (! defined ( 'BASEPATH' ))
	exit ( 'No direct script access allowed' );
class features_model extends CI_Model {
	function __construct() {
		// Call the Model constructor
		parent::__construct ();
		$this->load->database ();
	}

	function getAll() {
		$query = $this->db->query('SELECT * FROM tbl_features');
		return $query->result();
	}

	function delete($id = null) {
		$delete = $this->db->delete('tbl_features', array('id' => $id));
		return $delete;
	}

	function getDetail($id=null) {
		//$query = $this->db->query('SELECT * FROM tbl_features WHERE id= $id');
		$query = $this->db->get_where('tbl_features', array('id' => $id));
		return $query->result();
	}
}