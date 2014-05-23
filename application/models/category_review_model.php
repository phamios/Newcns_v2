<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class category_review_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    /*
     * get All result
     */

     
    public function getAll() {
        
        $query = $this->db->query('SELECT * FROM tbl_category_review');
	return $query->result();
    }
    
     

    /*
     * Delete rows by ID 
     */

    function delete($id = null) {
        $delete = $this->db->delete('tbl_category_review', array('id' => $id));
        return $delete;
    }

    /*
     * Get Details row in table
     * #Param: id values 
     * return: details of this row
     * @Sonpx
     */

    function getDetail($id = null) {
        //$query = $this->db->query('SELECT * FROM tbl_category_review WHERE id= $id');
        $query = $this->db->get_where('tbl_category_review', array('id' => $id));
        if($query->num_rows() > 0 ){
            return $query->result();
        }else{
            return null;
        }
        
    }

    /*
     * Add Category of Review 
     * #Object : all params in table tbl_category_review
     * return: the last id when inserted successful
     * @Sonpx
     */

    function add_cate_review($object) {
        $this->db->insert('tbl_category_review', $object);
        return $this->db->insert_id();
    }

    /*
     * Update Category of Review 
     * #Object : all params in table tbl_category_review 
     * @Sonpx
     */

    function update_cate_review($object) {
        $this->db->update('tbl_category_review', $data, array('id' => $id));
    }

}