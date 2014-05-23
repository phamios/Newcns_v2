<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Video_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
		$this->load->database();
	}

	function list_video_user($userid,$num=null,$offset=null){
		$this->load->database();
		$this->db->order_by("id", "desc");
		$this->db->where('userid',$userid);
		$query=$this->db->get('tbl_viewapp',$num,$offset);
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
	 
	function count_video_user($userid){
		$this->load->database();
		$this->db->where('userid',$userid);
		$query=$this->db->get('tbl_viewapp');
        return $query->num_rows();
	}

	function get_video_details($userid,$id){
		$this->load->database();
		$this->db->where('userid',$userid);
		$this->db->where('id',$id);
		$query=$this->db->get('tbl_viewapp');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}else{
			return null;
		}
	}
	
	function get_video_by_cate($userid,$id){
		$this->load->database();
		$this->db->where('userid',$userid);
		$this->db->where('cateid',$id);
		$query=$this->db->get('tbl_viewapp');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}else{
			return null;
		}
	}

	public function add_video($cateid,$userid,$video_name,$video_link,$video_content,$video_image,$video_duration,$active,$shortcode=null,$message=null,$timeactive=null){
		 

		$data = array(
				'cateid'=>$cateid,
				'userid'=>$userid,
				'video_name'=>$video_name,
				'video_link'=>$video_link,
				'video_content	'=>$video_content,
				'video_created'=>date("Y-m-d h:s:m"),
				'active'=>$active,
				'shortcode'=>$shortcode,
				'message'=>$message,
				'timeactive'=>$timeactive,
				'video_image'=>$video_image,
				'video_duration'=>$video_duration,
		);
		$this->db->insert('tbl_viewapp', $data); 
	}

	function update_api($id,$userid,$video_name,$video_link,$video_content,$active){
		$this->load->database();
		$data = array( 
				'video_name'=>$video_name,
				'video_link'=>$video_link,
				'video_content	'=>$video_content,
				'video_created'=>date("Y-m-d h:s:m"),
				'active'=>$active
		);
		$this->db->where('id', $id);
		$this->db->where('userid', $userid);
		$this->db->update('tbl_viewapp', $data);
	}

	function del_video($userid,$videoid){
		$this->load->database();
		$this->db->where('userid', $userid);
		$this->db->where('id', $videoid);
		$this->db->delete('tbl_viewapp');
	}

}
