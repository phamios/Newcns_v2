<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Cate_model extends CI_Model {

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
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
                    'active'  => $active,
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
                'active'  => $object['active'],
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

