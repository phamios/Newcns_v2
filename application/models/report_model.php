<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Report_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    function list_sms_by_user($userid) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->where('userid', $userid);
        $query = $this->db->get('tbl_mo');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function list_sms_by_user_range($userid, $datefrom, $dateto) { 
        $start_array = explode("/",$datefrom);
        $end_array = explode("/",$dateto);
        $start = $start_array[2]."-".$start_array[1]."-".$start_array[0];
        $end = $end_array[2]."-".$end_array[1]."-".$end_array[0];
        $this->load->database();
        $sWhere = "userid = " . $userid . " AND STR_TO_DATE(dayaccess,'%d-%m-%Y') BETWEEN '".$start."' AND '".$end."'";
       
        $query = $this->db->query("SELECT * FROM tbl_mo WHERE ".$sWhere); 
        if ($query->num_rows() > 0) { 
            return $query->result();
        } else { 
            return null;
        }
    }

    function total_sms_by_user($userid) {
        $this->load->database();
        $this->db->where('userid', $userid);
        return $this->db->count_all('tbcatecontent');
    }

    function total_by_app($userid, $app_name) {
        
    }

    function total_profit($userid = null, $shortcode = null) {
        $total = 0;
        $this->load->database();
        $this->db->order_by("id", "desc");
        if ($shortcode <> null) {
            $this->db->where('shortcode', $shortcode);
        }
        $this->db->where('userid', $userid);
        $query = $this->db->get('tbl_mo');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $total = $total + $row->money;
            }
        }

        return $total;
    }

    function total_profit_by_year($userid = null, $shortcode = null, $month, $year) {
        $total = 0;
        $this->load->database();
        $statement = 'SELECT money from tbl_mo where userid = ' . $userid;
        if ($shortcode <> null) {
            $statement .= ' AND shortcode = ' . $shortcode;
        }
        if ($month <> null) {
            $statement .= " AND dayaccess like '%-" . $month . "-" . $year . "'";
        }
        $query = $this->db->query($statement);
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $total = $total + $row->money;
            }
        }
        return $total;
    }

    function total_profit_by_month($userid = null, $shortcode = null, $day, $month, $year) {
        $total = 0;
        $this->load->database();
        $statement = 'SELECT money from tbl_mo where userid = ' . $userid;
        if ($shortcode <> null) {
            $statement .= ' AND shortcode = ' . $shortcode;
        }
        $statement .= " AND dayaccess like '" . $day . "-" . $month . "-" . $year . "'";
        $query = $this->db->query($statement);
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $total = $total + $row->money;
            }
        }
        return $total;
    }

    function total_profit_by_day($userid = null, $shortcode = null, $day, $month, $year) {
        $total = 0;
        $this->load->database();
        $statement = 'SELECT money from tbl_mo where userid = ' . $userid;
        if ($shortcode <> null) {
            $statement .= ' AND shortcode = ' . $shortcode;
        }
        $statement .= " AND dayaccess like '" . $day . "-" . $month . "-" . $year . "'";
        $query = $this->db->query($statement);
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $total = $total + $row->money;
            }
        }
        return $total;
    }

    function list_withdraw($param = null, $num, $offset) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbl_withdraw', $num, $offset);
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function count_withdraw() {
        $this->load->database();
        return $this->db->count_all('tbl_withdraw');
    }

    function add_log_withdraw($object) { 
        $this->db->insert('tbl_withdraw', $object);
    }

    function report_details_by_user_range($userid, $datefrom, $dateto) {
        $start_array = explode("-",$datefrom);
        $end_array = explode("-",$dateto);
        $start = $start_array[2]."-".$start_array[1]."-".$start_array[0];
        $end = $end_array[2]."-".$end_array[1]."-".$end_array[0];

        $this->load->database();
        $sWhere = "userid = " . $userid . " AND STR_TO_DATE(dayaccess,'%d-%m-%Y') BETWEEN '".$start."' AND '".$end."'";

        $sAppVideo1 = $sWhere." AND LOWER(content) like '%video1%'";
        $sAppVideo2 = $sWhere." AND LOWER(content) like '%video2%'";
        $sAppPhoto  = $sWhere." AND LOWER(content) like '%photo%'";
        $sApp       = $sWhere." AND LOWER(content) not like '%video2%' AND LOWER(content) not like '%video1%' AND LOWER(content) not like '%photo%'";

        $queryAppVideo1 = $this->db->query("SELECT * FROM tbl_mo WHERE ".$sAppVideo1);
        $queryAppVideo2 = $this->db->query("SELECT * FROM tbl_mo WHERE ".$sAppVideo2);
        $queryAppPhoto  = $this->db->query("SELECT * FROM tbl_mo WHERE ".$sAppPhoto);
        $queryApp       = $this->db->query("SELECT * FROM tbl_mo WHERE ".$sApp);

        $data['App Video1'] = $queryAppVideo1->result();
        $data['App Video2'] = $queryAppVideo2->result();
        $data['App Photo']  = $queryAppPhoto->result();
        $data['Ứng dụng up lên']       = $queryApp->result();

        return $data;
    }
}
