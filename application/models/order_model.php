<?php
if (! defined ( 'BASEPATH' ))
	exit ( 'No direct script access allowed' );
class Order_model extends CI_Model {
	function __construct() {
		// Call the Model constructor
		parent::__construct ();
		$this->load->database ();
	}
	
	public function all_order(){ 
		$this->db->order_by('id','DESC');
		$query = $this->db->get ( 'tbl_order' );
		if ($query->num_rows () > 0) {
			foreach($query->result() as $mem){
				return $mem->id;
			}
		} else {
			return null;
		}
	}
	
	public function add_order($member_id,$trans_type,$order_type,$codeckID,$amount,$cost){
		$data = array (
				'member_ud' => strtolower ( $username ),
				'transaction_type' => $trans_type,
				'order_type' => $order_type,
				'code_ck_id' => $codeckID,
				'amount' => $amount,
				'cost' => $cost,
				'datecreated' => date ( "Y-m-d" ), 
				'timecreated'=>date('h:s:m'),
		);
		$this->db->insert ( 'tbl_order', $data ); 
	}
	
	public function get_details_id($id){
		$this->db->where('id',$id);
		$query = $this->db->get ( 'tbl_order' );
		if ($query->num_rows () > 0) {
			return $query->result();
		} else {
			return null;
		}
	}
	
	public function get_all_order(){ 
		$query = $this->db->get ( 'tbl_order' );
		if ($query->num_rows () > 0) {
			return $query->result();
		} else {
			return null;
		}
	}
	
	
	public function get_order_by_member($user,$id=null){
		if($id <> null){
			$this->db->where('id',$id);
		}
		$this->db->where('member_id',$user); 
		$query = $this->db->get ( 'tbl_order' );
		if ($query->num_rows () > 0) {
			return $query->result();
		} else {
			return null;
		}
	}
}