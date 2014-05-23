<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Admin_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
		$this->load->database();
	}

	function list_all_member(){
		$this->load->database();
		$this->db->order_by("id", "desc"); 
		$query=$this->db->get('tbl_member');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}

	function authen($username,$password,$usertype=null,$status=null) {
		$this->load->database ();
		$this->db->where ( array (
				'username'=>$username,
				'userpass'=>md5('admega123!@#'.$password),
		) );
		$query = $this->db->get ( 'tbl_admin' );
		if ($query->num_rows () > 0) {
			return 1;
		} else {
			return 0;
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

	function list_cate(){
                $this->load->database();
                $this->db->order_by("id", "desc");
                $query=$this->db->get('tbl_cate_post');
                if ($query->num_rows() > 0)
                {
                        return $query->result();
                }
		else {
                	return null;
		}
        }

}
