<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Cate_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
		$this->load->database();
	}
	
	function list_cate_app(){
		$query=$this->db->get('tbl_appcate');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}

	function list_cate_user($userid){
		$this->load->database();
		$this->db->order_by("id", "desc");
		$this->db->where('userid',$userid);
		$query=$this->db->get('tbl_wap_cate');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}

	function detail_catewap($userid,$id){
		$this->load->database();
		$this->db->where('userid',$userid);
		$this->db->where('id',$id);
		$query=$this->db->get('tbl_wap_cate');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}

	function return_cate_name($cate_id){
		$this->load->database();
		$this->db->where('id',$cate_id);
		$query=$this->db->get('tbl_wap_cate');
		if ($query->num_rows() > 0)
		{
			foreach($query->result() as $row){
				return $row->catename;
			}
		}
		return $query->result();
	}

	function list_cate(){
		$this->load->database();
		$this->db->where('active',1);
		$query=$this->db->get('tbl_wap_cate');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}

	function check_cate_name($catename){
		$this->db->where('catename',strtolower(trim($catename)));
		$query=$this->db->get('tbl_wap_cate');
		if ($query->num_rows() > 0)
		{
			return 1;
		}else{
			return 0;
		}
	}

	public function add_cate($userid,$catename,$cateicon,$active){
		if($this->check_cate_name($catename) == 0){
			$data = array(
					'userid'=>$userid,
					'catename'=>strtolower(trim($catename)),
					'cateicon'=>$cateicon,
					'active'=>$active,
					'datecreated'=>date("Y-m-d h:s:m"), 
			);
			$this->db->insert('tbl_wap_cate', $data);
			return 1;
		} else {
			return 0;
		}
	}

	function update_cate($id,$userid,$catename,$cateicon,$active){ 
		if($cateicon <> null){
			$data = array( 
				'catename'=>strtolower(trim($catename)),
				'cateicon'=>$cateicon,
				'active'=>$active,
				'datecreated'=>date("Y-m-d h:s:m"), 
			);
		}else{
			$data = array( 
				'catename'=>strtolower(trim($catename)), 
				'active'=>$active,
				'datecreated'=>date("Y-m-d h:s:m"), 
			);
		}
	 
		$this->db->where('id', $id);
		$this->db->where('userid', $userid);
		$this->db->update('tbl_wap_cate', $data);
	}

	function delcatewap($userid,$cateid){
		$this->load->database();
		$this->db->where('userid', $userid);
		$this->db->where('id', $cateid);
		$this->db->delete('tbl_wap_cate');
	}
	
	public function list_cate_active(){
		$this->load->database();
		$this->db->where('cate_active',1);
		$this->db->order_by("id",'ASC');
		$query=$this->db->get('tbl_cate_post');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}

    public function list_cate_admin(){
		$this->load->database();
		$this->db->order_by("id");
		
		$query=$this->db->get('tbl_cate_post');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}

	public function add_cate_admin($catename,$cateroot,$active){
		if($this->check_cate_name_admin($catename) == 0){
			$data = array(
					'cate_name'    => strtolower(trim($catename)),
					'cate_root'    => $cateroot,
                    'cate_created' => date("Y-m-d h:s:m"),
					'cate_active'  => $active,
			);
			$this->db->insert('tbl_cate_post', $data);
			return 1;
		} else {
			return 0;
		}
	}

    public function del_cate_admin($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $this->db->delete('tbl_cate_post');
    }

    public function get_cate_by_id_admin($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbl_cate_post');
        if ($query->num_rows() > 0)
        {
            return $query->result();
        }
        return $query->result();
    }

	public function update_cate_admin($object=null){
	    $data = array(
	    		'cate_name'    => strtolower(trim($object['cate_name'])),
	    		'cate_root'    => $object['cate_root'],
                'cate_created' => date("Y-m-d h:s:m"),
	    		'cate_active'  => $object['cate_active'],
	    );
        $id = $object['id'];
        $this->db->where('id', $id);
	    $this->db->update('tbl_cate_post', $data);
	}

	function check_cate_name_admin($catename){
		$this->db->where('cate_name',strtolower(trim($catename)));
		$query=$this->db->get('tbl_cate_post');
		if ($query->num_rows() > 0)
		{
			return 1;
		}else{
			return 0;
		}
	}

}
