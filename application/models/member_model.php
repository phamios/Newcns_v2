<?php

if (! defined ( 'BASEPATH' ))
	exit ( 'No direct script access allowed' );
class User_model extends CI_Model {
	function __construct() {
		// Call the Model constructor
		parent::__construct ();
		$this->load->database ();
	}
	function check_login_customer($username, $password) {
		$this->db->where ( array (
				'member_name' => $username,
				'member_pass' => md5 ( "G!K@U" . strtolower ( $password ) )
		) );
		$query = $this->db->get ( 'tbl_member' );
		if ($query->num_rows () > 0) {
			foreach($query->result() as $mem){
				return $mem->id;
			}
		} else {
			return null;
		}
	}

	function show_details_user($userid){
		$this->db->where('id',$userid);
		$query = $this->db->get('tbl_member');
		if($query->num_rows() > 0 ){
			return $query->result();

		}else{
			return null;
		}
	}

	public function type($userid){
	$this->db->where('id',$userid);
		$query = $this->db->get('tbl_member');
		if($query->num_rows() > 0 ){
			foreach($query->result() as $row ){
				return $row->member_type;
			}
		}else{
			return null;
		}	
	}

	function _listmember($num, $offset) {
		$this->load->database ();
		$this->db->order_by ( "id", "desc" );
		$query = $this->db->get ( 'tbl_member', $num, $offset );
		if ($query->num_rows () > 0) {
			return $query->result ();
		}
		return $query->result ();
	}
	
	function show_all(){
		$this->load->database ();
		$this->db->order_by ( "id", "desc" );
		$query = $this->db->get ( 'tbmember');
		if ($query->num_rows () > 0) {
			return $query->result ();
		}
		return $query->result ();
	} 

	function checkuserexit($username) {
		$this->load->database ();
		$this->db->where ( array (
				'member_name' => $username
		) );
		$query = $this->db->get ( 'tbl_member' );
		if ($query->num_rows () > 0) {
			foreach ( $query->result () as $row ) {
				return $row->id;
			}
		} else {
			return 0;
		}
	}
	
	function update_balance($type,$userid,$balance_change){
		$current_balance = $this->total_profit($userid);
		if($type==1){
			$balance = $current_balance + $balance_change;
		}else if($type == 2){
			$balance = $current_balance - $balance_change;
		}else{
			$balance = $balance;
		} 
		$data = array(
				'member_balance'=>$balance,
		);
		$this->db->where('id', $userid);
		$this->db->update('tbl_member', $data);
	}
	
	function total_profit($userid=null){
		$total = 0;
		$this->load->database();
		$this->db->order_by("id", "desc");
		$this->db->where('userid',$userid);
		$query=$this->db->get('tbl_mo');
		if ($query->num_rows() > 0)
		{
			foreach($query->result() as $row){
				$total = $total + $row->money;
			}
		}
	
		return $total;
	}
	
	function _adduser($username, $userpass, $phone,$fullname,$address,$email) {
		$this->load->database ();
		if ($this->checkuserexit ( $username ) == 0) {
			$data = array (
					'member_name' => strtolower ( $username ),
					'member_pass' => md5 ( "G!K@U" . strtolower ( $userpass ) ),
					'member_type' => 1,
					'member_created' => date ( "Y-m-d h:s:m" ),
					'member_status' => 1,
					'member_balance' => 0,
					'member_phone' => $phone,
                                        'member_fullname'=>$fullname,
                                        'member_address'=>$address,
                                        'member_email'=>$email,
			);
			$this->db->insert ( 'tbl_member', $data );
			return 1;
		} else {
			return 0;
		}
	}
 
	function total_member() {
		$this->load->database ();
		return $this->db->count_all ( 'tbl_member' );
	}

}