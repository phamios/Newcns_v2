<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Notify_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
		$this->load->database();
	}
//NOTIFICATION--------------------------------------
	function add_notify($title,$content){ 
		$data = array(
            'title'=>$title,
    		'content'=>$content,
    		'created'=>date("d-m-Y h:i:s") 
		);
		$this->db->insert('tbnotification', $data);
	}

	function show_notify($num,$offset){
		$this->load->database();
		$this->db->order_by("id", "desc");
		$query=$this->db->get('tbnotification',$num,$offset);
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}

	function get_last(){
		$this->load->database();
		$this->db->order_by("id", "desc");
		$this->db->limit(1);
		$query=$this->db->get('tbnotification');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		else {
			return array();
		}
	}

	function get_by_id($id=null){
		$this->load->database();
		$this->db->where('id',$id);
		$query=$this->db->get('tbnotification');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}

	function totalnotify(){
		$this->load->database();
		return $this->db->count_all('tbnotification');
	}

	function delnotify($id){
		$this->load->database();
		$this->db->where('id', $id);
		$this->db->delete('tbnotification');
	}
	
}
?>