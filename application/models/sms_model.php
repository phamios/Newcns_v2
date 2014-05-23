<?php

if (! defined ( 'BASEPATH' ))
	exit ( 'No direct script access allowed' );
class Sms_model extends CI_Model {
	function __construct() {
		// Call the Model constructor
		parent::__construct ();
		$this->load->database ();
	}
	public function add_sms($requestid, $phone, $shortcode, $content) {
		$contents = explode ( " ", $content );
		// $contents[0] : mã GKD
		// $contents[1] : mã user
		// $contents[2] : mã app
		
		 $count = count($contents);

        // KY 15 => 2
        // KY 15 GAME 2314 => 4
        // KY 15 VIDEO  => 3 
		
		$this->load->model('shortcode_model');
		$codes = $this->shortcode_model->list_shortcode();
		$money = 0;
		foreach($codes as $code){
			if($code->shortcode == $shortcode){
				$money = $code->price;
			}
		} 
		
		$userid = $contents [1];
		$app_id = 0;
		$smstype = "";
		if($count == 4) {
			if(is_numeric($contents[3]))
			{
				$app_id = $contents[3];
			}
			$smstype = $contents[2];
		}  else if($count==3){
			$smstype = $contents[2];
		}
		
		$data = array (
				'requestid' => $requestid,
				'phone' => $phone,
				'userid' => $userid,
				'app_id' => $app_id,
				'sms_type' => $smstype,
				'shortcode' => $shortcode,
				'content' => $content,
				'timeaccess' => date ( "h:m:s" ),
				'dayaccess' => date ( 'd-m-Y' ),
				'money'=>$money,
		);
		$this->db->insert ( 'tbl_mo', $data );
		if ($this->db->affected_rows () != 1) {
			return 0;
		} else {
			return 1;
		}
	}
	
	
	  public function update_user_balance($shortcode=null,$userid=null) { 
            if($userid <> null) { 
                $this->load->model('shortcode_model');
                $this->load->model('user_model');
                $shortcode_money = $this->shortcode_model->get_shortcode_money($shortcode); 
				$user_money = $this->shortcode_model->cal_user_money_per_mess($shortcode_money);  
                $this->user_model->update_balance(1,$userid,$user_money); 
                return true;
            } else {
                return false;
            }   
        }
	 
}

?>