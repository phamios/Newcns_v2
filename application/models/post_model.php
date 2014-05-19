<?php 
if (! defined ( 'BASEPATH' ))
	exit ( 'No direct script access allowed' );
class post_model extends CI_Model {
	function __construct() {
		// Call the Model constructor
		parent::__construct ();
		$this->load->database ();
	}

	function getAll() {
		//$query = $this->db->query('SELECT * FROM tbl_post INNER JOIN tbl_user ON tbl_user.id = tbl_post.userid INNER JOIN tbl_category ON tbl_category.id = tbl_post.cateid INNER JOIN tbl_features ON tbl_features.id = tbl_post.featureid');
		$this->db->select('tbl_post.id, tbl_post.cateid, tbl_post.typeid, tbl_post.featureid, tbl_post.userid, tbl_post.post_type, tbl_post.post_title, tbl_post.post_description, tbl_post.post_images, tbl_post.post_view, tbl_post.post_like, tbl_post.post_status, tbl_user.username, tbl_category.catename, tbl_features.features_name');
		$this->db->from('tbl_post');
		$this->db->join('tbl_user', 'tbl_user.id = tbl_post.userid');
		$this->db->join('tbl_category', 'tbl_category.id = tbl_post.cateid');
		$this->db->join('tbl_features', 'tbl_features.id = tbl_post.featureid');
		$this->db->order_by('tbl_post.id', 'DESC');
		$query = $this->db->get();
		return $query->result();
	}

	function delete($id = null) {
		$delete = $this->db->delete('tbl_post', array('id' => $id));
		return $delete;
	}

	function getDetail($id=null) {
		//$query = $this->db->query('SELECT * FROM tbl_post WHERE id= $id');
		$this->db->select('*');
		$this->db->from('tbl_post');
		$this->db->join('tbl_user', 'tbl_user.id = tbl_post.userid');
		$this->db->join('tbl_category', 'tbl_category.id = tbl_post.cateid');
		$this->db->join('tbl_features', 'tbl_features.id = tbl_post.featureid');
		$this->db->where('tbl_post.id', $id);

		$query = $this->db->get();

		return $query->result();
	}
        
        function addPost($object=null){
             $this->db->insert('tbl_post', $object);
             return $this->db->insert_id();
        }
}