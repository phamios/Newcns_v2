<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Track_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
        $this->load->database();
	}
	
	public function list_track(){
		$this->db->order_by('id','desc');
		$this->db->limit(80);
		$query=$this->db->get('tbl_tracking');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}else{
			return null;
		}  
	}


	public function list_track_by_day($date=null,$num,$offset){
		$this->db->order_by('id','desc');
		$this->db->where('datecreated <=', $date.' 24:59:59');
		$this->db->where('datecreated >=', $date.' 00:00:00');
		$query=$this->db->get('tbl_tracking', $num, $offset);
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}else{
			return null;
		}  
	}

	public function count_log() {
        return $this->db->count_all('tbl_tracking');
    }

	public function add_tracking($userid,$ipaddress,$controller){
		$data = array( 
				'userid'       => $userid,
				'ipaddress'    => $ipaddress,
				'controller'     => $controller, 
				'datecreated'  => date("Y-m-d h:s:m"),  
		);
		$this->db->insert('tbl_tracking', $data); 
	}
}

