<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Api_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
		$this->load->database();
	}

	function list_api_user($userid){
		$this->load->database();
		$this->db->order_by("id", "desc");
		$this->db->where('userid',$userid);
		$query=$this->db->get('tbl_api');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}

	function get_api($userid,$id){
		$this->load->database();
		$this->db->where('userid',$userid);
		$this->db->where('id',$id);
		$query=$this->db->get('tbl_api');
		if ($query->num_rows() > 0)
		{
			foreach($query->result() as $row) {
				return $row->mess;
			}
		}else{
			return null;
		}
	}

	function get_api_details($userid,$id){
		$this->load->database();
		$this->db->where('userid',$userid);
		$this->db->where('id',$id);
		$query=$this->db->get('tbl_api');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}else{
			return null;
		}
	}

	public function add_api($userid,$apiid,$mess,$cost,$active){
		$data = array(
				'userid'=>$userid,
				'appid'=>$apiid,
				'mess'=>$mess,
				'cost'=>$cost,
				'timeupdate'=>date("Y-m-d h:s:m"),
				'active'=>$active
		);
		$this->db->insert('tbl_api', $data);
		return 1;
	}

	function update_api($id,$userid,$apiid,$mess,$cost,$active){
		$this->load->database();
		$data = array(
					'userid'=>$userid,
					'appid'=>$apiid,
					'mess'=>$mess,
					'cost'=>$cost,
					'timeupdate'=>date("Y-m-d h:s:m"),
					'active'=>$active
		);
		$this->db->where('id', $id);
		$this->db->update('tbl_api', $data);
	}

	function del_api($userid,$apiid){
		$this->load->database();
		$this->db->where('userid', $userid);
		$this->db->where('id', $apiid);
		$this->db->delete('tbl_api');
	}

}