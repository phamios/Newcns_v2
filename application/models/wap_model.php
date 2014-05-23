<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Wap_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
		$this->load->database();
	}

	function get_detail_wap_by_name($wapname){
		$this->load->database();
		$this->db->where('wap_name',preg_replace('/\s+/', '', $wapname));
		$query=$this->db->get('tbl_wap');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}

	function get_detail_wap_by_id($id,$userid){
		$this->load->database();
		$this->db->where('id',$id);
		$this->db->where('userid',$userid);
		$query=$this->db->get('tbl_wap');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}

	function get_title_wap($wapname){
		$this->load->database();
		$this->db->where('wap_name',preg_replace('/\s+/', '', $wapname));
		$query=$this->db->get('tbl_wap');
		if ($query->num_rows() > 0)
		{
			foreach($query->result() as $row){
				return $row->wap_title;
			}
		}else{
			return false;
		}
	}

	function list_wap_user($userid){
		$this->load->database();
		$this->db->order_by("id", "desc");
		$this->db->where('userid',$userid);
		$query=$this->db->get('tbl_wap');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}

	function check_exit_wap($wapname){
		$this->load->database();
		$this->db->where('wap_name',preg_replace('/\s+/', '', $wapname));
		$query=$this->db->get('tbl_wap');
		if ($query->num_rows() > 0)
		{
			return true;
		}else{
			return false;
		}
	}

	function get_detail_wap($id){
		$this->load->database();
		$this->db->where('id',$id);
		$query=$this->db->get('tbl_wap');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}

	function add_wap($object = null){
		if($this->check_exit_wap($object['wap_name']) == true) {
			return false;
		}else{
			$data = array(
					'userid'=>$object['userid'],
					'wap_name'=>$object['wap_name'],
					'wap_title'=>$object['wap_title'],
					'wap_meta_des'=>$object['wap_meta_des'],
					'wap_meta_content'=>$object['wap_meta_content'],
					'wap_copyright'=>$object['wap_copyright'],
					'wap_script'=>$object['wap_script'],
					'wap_active'=>$object['wap_active'],
					'wap_created'=>date("Y-m-d h:s:m"),
					'wap_charging'=>$object['wap_charging'],
					'wap_template'=>$object['wap_template'],
				
			);
			$this->db->insert('tbl_wap', $data);
			return true;
		}
	}

	function update_wap($object = null){
		$this->load->database();
		$data = array(
				'wap_name'=>$object['wap_name'],
				'wap_title'=>$object['wap_title'],
				'wap_meta_des'=>$object['wap_meta_des'],
				'wap_meta_content'=>$object['wap_meta_content'],
				'wap_copyright'=>$object['wap_copyright'],
				'wap_script'=>$object['wap_script'],
				'wap_active'=>$object['wap_active'],
				'wap_update'=>date("Y-m-d h:s:m"),
				'wap_charging'=>$object['wap_charging'],
				'wap_template'=>$object['wap_template'],
			
		);
		$this->db->where('id', $object['wapid']);
		$this->db->where('userid',$object['userid']);
		$this->db->update('tbl_wap', $data);
	}

	function delwap($userid,$apiid){
		$this->load->database();
		$this->db->where('userid', $userid);
		$this->db->where('id', $apiid);
		$this->db->delete('tbl_wap');
	}

	function change_wap_status($userid,$id){
		$this->load->database();
		$this->db->select('wap_active');
		$this->db->where('userid', $userid);
		$this->db->where('id', $id);
		$this->db->from('tbl_wap');
		$query = $this->db->get();
		
		$status = $query->result_array();
		$new_status = $status[0]['wap_active'] ^ 1;
		$data = array(
		    'wap_active' => $new_status,
   		);
		$this->db->where('userid', $userid);
		$this->db->where('id', $id);
  		$this->db->update('tbl_wap', $data);
	}
}
