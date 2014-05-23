<?php
if (!defined('BASEPATH'))
exit('No direct script access allowed');
session_start();
error_reporting(-1);

class Charging extends CI_Controller {

	function __construct() {
		parent::__construct();

	}
	function index()
	{
		$msg = array( 
            'request_id' => "abc123", 
            'request_time' => '1386062440',
            'item_price' => '500', 
            'content_type' => 'GAME', 
            'item_name' => 'ten game test', 
            'item_desc' => 'mo ta game', 
            'params' => array( 
                'a' => 1, 
                'b' => 2 
            ), 
        ); 
		
	}
	
}