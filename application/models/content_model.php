<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Content_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
                $this->load->database();
	}
	
	public function show_all_mt(){
	
		$this->load->database(); 
		$this->db->order_by('id','DESC');
		$query=$this->db->get('tbl_content');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}else{
			return null;
		}  
	}
	

	/**
	*	Quản lý MT SUB
	*/
	public function add_mt_by_shortcode($shortcode_id,$messCode,$title,$content){
		$data = array(
				'shortcodeid'=>$shortcode_id,
				'title'=>$title,
				'messCode'=>$messCode,
				'content'=>$content, 
				'timeupdate'=>date("Y-m-d h:s:m"),  
		);
		$this->db->insert('tbl_content', $data);
		return 1;
	}

	public function edit_mt($id,$shortcode_id,$messCode,$title,$content){
		$data = array(
				'shortcodeid'=>$shortcode_id,
				'title'=>$title,
				'messCode'=>$messCode,
				'content'=>$content, 
				'timeupdate'=>date("Y-m-d h:s:m"),  
		);
		$this->db->where('id', $id);
        $this->db->update('tbl_content', $data);
	}

	public function del_mt($mt_id){ 
		$this->db->where('id', $mt_id);
		$this->db->delete('tbl_content');
	}


	
	public function show_all($userid){
	
		$this->load->database();
		$this->db->where('userid',$userid); 
		$query=$this->db->get('tbl_content');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}else{
			return null;
		} 
	
	}

	public function add_content($userid,$title,$content){
		$data = array(
				'title'=>$title,
				'content'=>$content, 
				'timeupdate'=>date("Y-m-d h:s:m"), 
				'userid'=>$userid,
		);
		$this->db->insert('tbl_content', $data);
		return 1;
	}
	
	function get_random($userid){ 
		$this->load->database();
		$this->db->where('userid',$userid); 
		$this->db->order_by('id', 'RANDOM');
		$this->db->limit(1);
		$query=$this->db->get('tbl_content');
		if ($query->num_rows() > 0)
		{
			foreach($query->result() as $row) {
				return $row->content;
			}
		}else{
			return null;
		} 
	}
	
	function del_content($userid,$contentid){
		
		$this->db->where('userid', $userid);
		$this->db->where('id', $contentid);
		$this->db->delete('tbl_content');
	}

	
	
	 
	
	
}
	
?>