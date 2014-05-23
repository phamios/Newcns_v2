<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Shortcode_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    function list_shortcode() {
        $this->db->where('active', 1);
        $this->db->order_by("id");
        $query = $this->db->get('tbl_shortcode');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function list_shortcode_admin() {
        $this->db->order_by("id");
        $query = $this->db->get('tbl_shortcode');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function check_shortcode($shortcode) {
        $this->db->where('shortcode', $shortcode);
        $result = $this->db->get('tbl_shortcode');

        if ($result->num_rows() > 0) {
            return 1;
        } else {
            return 0;
        }
    }

    function add_shortcode($shortcode, $price, $active) {
        if ($this->check_shortcode($shortcode) == 0) {
            $data = array(
                'shortcode' => $shortcode,
                'price' => $price,
                'active' => $active,
            );
            $this->db->insert('tbl_shortcode', $data);
            return 1;
        } else {
            return 0;
        }
    }

    public function get_shortcode_by_id($id) {
        $this->db->where('id', $id);
        $query = $this->db->get('tbl_shortcode');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return null;
    }

    public function get_shortcode_by_name($shortcode) {
        $this->db->where('shortcode', $shortcode);
        $query = $this->db->get('tbl_shortcode');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return null;
    }

    public function edit_shortcode($id, $shortcode, $price, $active) {
        $data = array(
            'shortcode' => $shortcode,
            'price' => $price,
            'active' => $active,
        );
        $this->db->where('id', $id);
        $this->db->update('tbl_shortcode', $data);
    }

    public function del_shortcode($id) {
        $this->db->where('id', $id);
        $this->db->delete('tbl_shortcode');
    }

    function list_keycode() {
        $this->db->order_by("id");
        $query = $this->db->get('tbl_codekey');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function add_keycode($keycode, $mess) {
        if ($this->check_keycode($keycode)) {
            return 0;
        } else {
            $data = array(
                'keycode' => $keycode,
                'mess' => $mess
            );
            $this->db->insert('tbl_codekey', $data);
            return 1;
        }
    }

    function check_keycode($keycode) {
        $this->db->where('keycode', strtolower($keycode));
        $query = $this->db->get('tbl_codekey');
        if ($query->num_rows() > 0) {
            return true;
        } else {
            return false;
        }
    }

    function get_mess_by_keycode($keycode) {
        $this->db->where('keycode', strtolower($keycode));
        $query = $this->db->get('tbl_codekey');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->mess;
            }
        }
        return $query->result();
    }

    public function get_shortcode_money($shortcode) {
        $this->db->where('shortcode', $shortcode);
        $query = $this->db->get('tbl_shortcode');
        if ($query->num_rows() > 0) {
            return $query->row()->price;
        }
        return null;
    }

    function get_rate_user() {
        $this->db->where('setting_name', 'rate_user');
        $query = $this->db->get('tbl_setting');
        return $query->row()->setting_value;
    }

    function get_rate_telco() {
        $this->db->where('setting_name', 'rate_telco');
        $query = $this->db->get('tbl_setting');
        return $query->row()->setting_value;
    }

    public function cal_user_money_per_mess($money) {
        $rate_user = $this->get_rate_user();
        $rate_telco = $this->get_rate_telco();
        $user_money = ($money - $money*$rate_telco/100) * $rate_user / 100;
        return $user_money;
    }

}
