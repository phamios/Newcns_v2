<?php 
if (! defined ( 'BASEPATH' ))
	exit ( 'No direct script access allowed' );
class spec_model extends CI_Model {
	function __construct() {
		// Call the Model constructor
		parent::__construct ();
		$this->load->database ();
	}

	function getAll() {
		$query = $this->db->query('SELECT * FROM tbl_specification');
		return $query->result();
	}

	function delete($id = null) {
		$delete = $this->db->delete('tbl_specification', array('id' => $id));
		return $delete;
	}

	function getDetail($id=null) {
		//$query = $this->db->query('SELECT * FROM tbl_specification WHERE id= $id');
		$query = $this->db->get_where('tbl_specification', array('id' => $id));
		return $query->result();	
	}
        
 
}