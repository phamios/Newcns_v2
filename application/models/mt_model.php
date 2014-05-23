<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Mt_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
        $this->load->database();
	}
	
	public function list_mt($num,$offset){
		$this->db->order_by('id');
		$query=$this->db->get('tbl_content', $num, $offset);
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}else{
			return null;
		}  
	}

	public function add_mt($shortcodeid,$messcode,$title,$content){
		$data = array(
				'shortcodeid' => $shortcodeid,
				'title'       => $title,
				'messCode'    => $messcode,
				'content'     => $content, 
				'timeupdate'  => date("Y-m-d h:s:m"),  
		);
		$this->db->insert('tbl_content', $data);
		return 1;
	}

	public function edit_mt($id,$shortcodeid,$messcode,$title,$content){
		$data = array(
				'shortcodeid' => $shortcode_id,
				'title'       => $title,
				'messCode'    => $messcode,
				'content'     => $content, 
				'timeupdate'  => date("Y-m-d h:s:m"),  
		);
		$this->db->where('id', $id);
        $this->db->update('tbl_content', $data);
	}

	public function del_mt($id){ 
		$this->db->where('id', $id);
		$this->db->delete('tbl_content');
	}

    public function get_mt_by_id($id) {
        $this->db->where('id', $id);
        $query=$this->db->get('tbl_content');
        if ($query->num_rows() > 0)
        {
            return $query->result();
        }else{
            return null;
        }

    }

    public function count_mt() {
        return $this->db->count_all('tbl_content');
    }
}
	
?>
