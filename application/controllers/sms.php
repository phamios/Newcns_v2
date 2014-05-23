<?php
error_reporting(-1); 
ini_set('error_reporting', E_ALL);

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

 

class Sms extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
		
        parse_str($_SERVER['QUERY_STRING'], $_GET);
        //print_r($_GET);  die();
        //echo $_GET['smsid'];die();
        $smsid = isset($_GET['smsid']) ? $_GET['smsid'] : '';
        $mobilenumber = isset($_GET['sender']) ? $_GET['sender'] : '';
        $shortcode = isset($_GET['shortcode']) ? $_GET['shortcode'] : '';
        $content = isset($_GET['content']) ? urldecode($_GET['content']) : '';
        $content = trim($content);
        $this->load->model('api_model');
        $this->load->model('sms_model');
        $this->load->model('content_model');
        $contents = explode(" ", $content);
        $datas = "";
        $count = count($contents);
        // KY 15 => 2
        // KY 15 GAME 2314 => 4
        // KY 15 VIDEO  => 3 
		  
        switch ($count) {
            case 1:  
				$this->sms_model->add_sms($smsid,$mobilenumber,$shortcode,$content);
                //$this->update_user_balance($shortcode);
                echo "Cu phap ban nhap lai sai, he thong khong the xu ly duoc, xin vui long nhap dung cu phap, hoac lien he voi tong dai 19001818";
                break;
            case 2: // KY 15 => 2
                $this->load->model('user_model');
                $this->user_model->active_member($contents[1]);
                $username = $this->user_model->get_member_name($contents[1]);
		$this->sms_model->add_sms($smsid,$mobilenumber,$shortcode,$content);
               $this->sms_model->update_user_balance($shortcode,$contents[1]);
                echo "Thanh vien " . $username . ' Da kich hoat thanh cong tai khoan tai  VMOB.VN';
                break;
            case 3:  // KY 15 VIDEO  => 3   && 
                $this->load->model('shortcode_model');
                $keycode = $contents[2]; 
		$this->sms_model->add_sms($smsid,$mobilenumber,$shortcode,$content);
                $this->sms_model->update_user_balance($shortcode,$contents[1]);
                if ($this->shortcode_model->check_keycode($keycode)) {
                   echo $this->shortcode_model->get_mess_by_keycode($keycode);
                   
                } else {
                    echo "Dich vu ban yeu cau chua duoc thiet lap, xin vui long truy cap vmob.vn de biet them thong tin, hoac lien he voi tong dai 19001818";
                }
                break;
            case 4: // KY 15 GAME 2314 => 4 
                $this->load->model('shortcode_model');
                $keycode = $contents[2];
                $appId = $contents[3];
                $this->sms_model->add_sms($smsid,$mobilenumber,$shortcode,$content); 
                 $this->sms_model->update_user_balance($shortcode,$contents[1]); 
                if ($this->shortcode_model->check_keycode($keycode)) {
                     echo $this->shortcode_model->get_mess_by_keycode($keycode) . '. Ma dich vu ban vua dang ky la: ' . $appId;
                } else {
                    echo "Dich vu ban yeu cau chua duoc thiet lap, xin vui long truy cap vmob.vn de biet them thong tin, hoac lien he voi tong dai 19001818";
                }
                break;
        }
		
		

      
        /* $result = $this->sms_model->add_sms($smsid,$mobilenumber,$shortcode,$content);
          if(isset($contents[2])) {
          $datas = $this->api_model->get_api($contents[1],$contents[2]);
          } else {
          echo "";
          }
          $datas = $this->content_model->get_random($contents[1]);
          if($datas <> null){
          echo $datas;
          }else{
          if(isset($contents[3])){
          echo $contents[3];
          }else{
          echo "Chuc mung ban da kich hoat thanh cong game tren he thong Admega.vn. Moi thac mac xin vui long lien he 19001781";
          }
          } */

        /* $datas = "";
          $datas = $this->content_model->get_random($contents[1]);

          $count = count($contents);
          if($count === 2){
          return $datas;
          }
          if($count === 3){
          if(strtolower(trim($contents[2])) === 'video'){
          return "Chuc mung ban dang ky thanh cong dich vu XVIDEO cua Admega.vn, tai khoan cua ban da nap them 10 xu vao he thong. Moi thac mac xin vui long lien he 19001781";
          }elseif(strtolower(trim($contents[2])) === 'game'){
          return "Chuc mung ban da kich hoat thanh cong game tren he thong Admega.vn. Moi thac mac xin vui long lien he 19001781";
          }elseif(){
          return "CChuc mung ban da dang ky thanh cong dich vu cua Admega.vn. Moi thac mac xin vui long lien he 19001781";
          }else{
          $result = $this->sms_model->add_sms($smsid,$mobilenumber,$shortcode,$content);
          if(isset($contents[2])) {
          $datas = $this->api_model->get_api($contents[1],$contents[2]);
          } else {
          echo "";
          }
          }
          } */
    }

}

?>
