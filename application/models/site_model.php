<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Site_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
        $this->load->database();
	}
	
	public function list_config(){
		$this->db->order_by('id', 'desc');
		$query=$this->db->get('tbl_setting');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}else{
			return null;
		}  
	}

    function add_config($config,$value) {
        $data = array(
            'setting_name'  => $config,
            'setting_value' => $value,
        );
        $this->db->insert('tbl_setting', $data);
    }

    public function edit_config($id,$config,$value){
        $data = array(
                'setting_name'  => $config,
                'setting_value' => $value,
        );
        $this->db->where('id', $id);
        $this->db->update('tbl_setting', $data);
    }

    public function get_config_by_id($id) {
        $this->db->where('id', $id);
        $query = $this->db->get('tbl_setting');
        if ($query->num_rows() > 0)
        {
            return $query->result();
        }
        return null;
    }

    function del_ip($id) {
        $this->db->where('id', $id);
        $this->db->delete('tbl_setting');
    }
}
?>
