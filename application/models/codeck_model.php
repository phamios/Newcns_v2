<?php

if (! defined ( 'BASEPATH' ))
	exit ( 'No direct script access allowed' );

class Codeck_model extends CI_Model {
	function __construct() {
		// Call the Model constructor
		parent::__construct ();
		$this->load->database ();
	}

	function get_all_codeck() {
		$query = $this->db->get('tbl_code_ck');
		if ($query->num_rows () > 0) {
			return $query->result();
		} else {
			return null;
		}
	}

	function get_codeck_by_id($id) {
        $this->db->where('id', $id);
		$query = $this->db->get('tbl_code_ck');
		if ($query->num_rows () > 0) {
			return $query->result();
		} else {
			return null;
		}
	}

    function add_codeck($object) {
        $data = array(
            'ten_ma'          => $object['ten_ma'],
            'ten_chi_tiet'    => $object['ten_chi_tiet'],
            'price_tran'      => $object['price_tran'],
            'price_san'       => $object['price_san'],
            'tham_chieu'      => $object['tham_chieu'],
            'gia_khop'        => $object['gia_khop'],
            'khoi_luong_khop' => $object['khoi_luong_khop'],
            'thay_doi'        => $object['thay_doi'],
            'status'          => $object['status'],
            );
        $this->db->insert('tbl_code_ck', $data);
        return true;
    }

    function update_codeck($object) {
        $data = array(
            'ten_ma'          => $object['ten_ma'],
            'ten_chi_tiet'    => $object['ten_chi_tiet'],
            'price_tran'      => $object['price_tran'],
            'price_san'       => $object['price_san'],
            'tham_chieu'      => $object['tham_chieu'],
            'gia_khop'        => $object['gia_khop'],
            'khoi_luong_khop' => $object['khoi_luong_khop'],
            'thay_doi'        => $object['thay_doi'],
            'status'          => $object['status'],
            );
        $this->db->where('id', $object['id']);
        $this->db->update('tbl_code_ck', $data);
        return true;
    }

    function change_codeck_status($id) {
        $this->db->select('status');
        $this->db->where('id', $id);
        $this->db->from('tbl_code_ck');
        $query = $this->db->get();

        $status = $query->result_array();
        $new_status = $status[0]['status'] ^ 1;
        $data = array(
            'status' => $new_status,
        );
        $this->db->where('id', $id);
        $this->db->update('tbl_code_ck', $data);
    }

    function del_codeck($id) {
        $this->db->where('id', $id);
        $this->db->delete('tbl_code_ck');
    }
}
