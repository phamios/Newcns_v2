<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Ip_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
        $this->load->database();
	}
	
	public function list_ip(){
		$this->db->order_by('id', 'desc');
		$query=$this->db->get('tbl_ipblock');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}else{
			return null;
		}  
	}

    function add_ip($ip,$expired) {
        $data = array(
            'ip_address' => $ip,
            //'exp_date'   => date("d-m-Y H:i:s",strtotime($expired."days")),
            'exp_date'   => $expired,
        );
        $this->db->insert('tbl_ipblock', $data);
    }

    function del_ip($id) {
        $this->db->where('id', $id);
        $this->db->delete('tbl_ipblock');
    }
}
?>
