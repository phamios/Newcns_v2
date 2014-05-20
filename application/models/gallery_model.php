<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Gallery_model extends CI_Model {

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    function add_image_for_item($review_id, $item_image) {

        $this->load->database();
        $data = array(
                'review_id' => $review_id,
                'image_link' => $item_image,
        );
        $this->db->insert('tbl_review_images', $data);
    }

    function get_image_by_review_id($review_id) {
        $this->db->where('review_id', $review_id);
        $query = $this->db->get('tbl_review_images');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return null;
    }

    function del_image_review($id) {
        $this->db->where('id', $id);
        $this->db->delete('tbl_review_images');
    }
}

