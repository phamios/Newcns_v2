<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class User_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    function check_login_customer($username, $password) {
        $this->db->where(array(
            'member_name' => $username,
            'member_pass' => md5("G!K@U" . strtolower($password))
        ));
        $query = $this->db->get('tbl_member');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $mem) {
                return $mem->id;
            }
        } else {
            return null;
        }
    }

    function get_user_id($username) {
        $this->db->where(array(
            'member_name' => $username,
        ));
        $query = $this->db->get('tbl_member');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $mem) {
                return $mem->id;
            }
        } else {
            return null;
        }
    }

    function show_details_user($userid) {
        $this->db->where('id', $userid);
        $query = $this->db->get('tbl_member');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

    public function type($userid) {
        $this->db->where('id', $userid);
        $query = $this->db->get('tbl_member');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->member_type;
            }
        } else {
            return null;
        }
    }

    function _listmember($num, $offset) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbl_member', $num, $offset);
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_all() {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbmember');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }
	
	function get_lastwithdraw($userid){
		$this->db->order_by("id", "desc"); 
		$this->db->where('userid',$userid);
		 $this->db->limit(5);
		$query = $this->db->get('tbl_withdraw');
		if($query->num_rows() > 0 ){
			return $query->result();
		} else {
			return null;
		}
	}
	

    function checkuserexit($username) {
        $this->load->database();
        $this->db->where(array(
            'member_name' => $username
        ));
        $query = $this->db->get('tbl_member');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->id;
            }
        } else {
            return 0;
        }
    }

    function update_balance($type, $userid, $balance_change) {
        // 1: deposit 
        // 2: withdraw 
        $balance = $this->get_balance($userid);
        if ($type == 1) {
            $balance = $balance + $balance_change;
        } else if ($type == 2) {
            $balance = $balance - $balance_change;
        }
		
        $data = array(
            'member_balance' => intval($balance),
			 
        );
        $this->db->where('id', $userid);
        $this->db->update('tbl_member', $data);
    }

    function get_balance($userid = null) {
        $this->load->database();
        $this->db->where(array(
            'id' => $userid
        ));
        $query = $this->db->get('tbl_member');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->member_balance;
            }
        } else {
            return 0;
        }
    }

    function total_profit($userid = null) {
        $total = 0;
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->where('userid', $userid);
        $query = $this->db->get('tbl_mo');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $total = $total + $row->money;
            }
        }

        return $total;
    }

    function _adduser($username, $userpass, $phone = null, $fullname = null, $address = null, $email = null) {
        $this->load->database();
        if ($this->checkuserexit($username) == 0) {
            $data = array(
                'member_name' => strtolower($username),
                'member_pass' => md5("G!K@U" . strtolower($userpass)),
                'member_type' => 1,
                'member_created' => date("Y-m-d h:s:m"),
                'member_status' => 1,
                'member_balance' => 20000,
                'member_phone' => $phone,
                'member_fullname' => $fullname,
                'member_address' => $address,
                'member_email' => $email,
            );
            $this->db->insert('tbl_member', $data);
            return 1;
        } else {
            return 0;
        }
    }

    function total_member() {
        $this->load->database();
        return $this->db->count_all('tbl_member');
    }

    function check_active_member($member_id) {
        $this->db->where('id', $member_id);
        $query = $this->db->get('tbl_member');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->memberactive;
            }
        } else {
            return null;
        }
    }

    function get_member_name($member_id) {
        $this->db->where('id', $member_id);
        $query = $this->db->get('tbl_member');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->member_name;
            }
        } else {
            return null;
        }
    }

    function get_member_balance($member_id) {
        $this->db->where('id', $member_id);
        $query = $this->db->get('tbl_member');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->member_balance;
            }
        } else {
            return null;
        }
    }
function active_member($member_id) {
        $status = $this->check_active_member($member_id);
        if ($status == 1) {
            return 0;
        } else {
            $data = array(
                'memberactive' => 1
            );

            $this->db->where('id', $member_id);
            $this->db->update('tbl_member', $data);
        }
    }

    function check_user_exist($userid) {
        $this->load->database();
        $this->db->where(array(
            'id' => $userid
        ));
        $query = $this->db->get('tbl_member');
        if ($query->num_rows() > 0) {
            return true;
        } else {
            return false;
        }
    }

    function is_active($userid) {
        $this->load->database();
        $this->db->where('id', $userid);
        $query = $this->db->get('tbl_member');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->memberactive;
            }
        } else {
            return 0;
        }
    }

    function sendmoney($userid, $receiver_id, $balance_change) {
        // 1: deposit 
        // 2: withdraw 
        $balance = $this->get_balance($userid);
        if ($type == 1) {
            $balance = $balance + $balance_change;
        } else if ($type == 2) {
            $balance = $balance - $balance_change;
        }

        $data = array(
            'member_balance' => intval($balance),
        );
        $this->db->where('id', $userid);
        $this->db->update('tbl_member', $data);
    }

    function update_user_info($userid,$userpass=null, $phone = null, $fullname = null, $address = null, $email = null, $bank = null, $dist_bank = null,$account_bank=null) {
        $this->load->database();
		
        if($userpass <> null) {
			  $data = array(
			   'member_pass'=>md5("G!K@U" . strtolower($userpass)),
				'member_phone' => $phone,
				'member_fullname' => $fullname,
				'member_address' => $address,
				'member_email' => $email,
				'member_bank' => $bank,
				'member_dist_bank' => $dist_bank,
				'member_account' => $account_bank,
			);
		} else { 
			$data = array(
				'member_phone' => $phone,
				'member_fullname' => $fullname,
				'member_address' => $address,
				'member_email' => $email,
				'member_bank' => $bank,
				'member_dist_bank' => $dist_bank,
				'member_account' => $account_bank,
			);
		}
		
 
       
        $this->db->where('id', $userid);
        $this->db->update('tbl_member', $data);
    }
}
