<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class App_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    function list_app_user($userid, $num = null, $offset = null) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->where('user_id', $userid);
        $query = $this->db->get('tbl_app', $num, $offset);
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function list_app_userid($userid) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->where('user_id', $userid);
        $query = $this->db->get('tbl_app');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function count_app_user($userid) {
        $this->load->database();
        $this->db->where('user_id', $userid);
        $query = $this->db->get('tbl_app');
        return $query->num_rows();
    }

    function list_app_all() {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbl_app');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function list_app_by_cate_id($cateid = null) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->where('appcate', $cateid);
        $query = $this->db->get('tbl_app');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function list_app_by_search($keyword = null, $userid = null) {
        $this->db->order_by('id', 'DESC');
        $sql = "select * from tbl_app where app_name like '%" . $keyword . "%' and user_id =" . $userid;
        $query = $this->db->query($sql);
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

    function return_app_name($app_id,$user_id=null) {
        $this->load->database();
        $this->db->where('id', $app_id);
       // $this->db->where('user_id', $user_id);
        $query = $this->db->get('tbl_app');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->app_link;
            }
        }
        return $query->result();
    }

    function return_app_cate($app_id) {
        $this->load->database();
        $this->db->where('id', $app_id);
        $query = $this->db->get('tbl_app');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->catewap;
            }
        }
        return $query->result();
    }

    function get_link_download($appid){
        $this->load->database();
        $this->db->where('id', $appid);
        $query = $this->db->get('tbl_app');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->app_link;
            }
        }
        return $query->result();
    }

    function get_app_name_by_id($app_id) {
        $this->load->database();
        $this->db->where('id', $app_id); 
        $query = $this->db->get('tbl_app');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->app_name;
            }
        }
        return $query->result();
    }

    function get_app_by_cate($cateid, $userid, $currentapp) {
        $this->load->database();
        $this->db->limit(3);
        $this->db->order_by("viewcount", "desc");
        $this->db->where('catewap', $cateid);
        $this->db->where('user_id', $userid);
        $this->db->where('id !=', $currentapp);
        $query = $this->db->get('tbl_app');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function get_app($userid, $id) {
        $this->load->database();
        $this->db->where('user_id', $userid);
        $this->db->where('id', $id);
        $query = $this->db->get('tbl_app');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

	function return_appid_applink($link){
        $this->load->database();
        $this->db->where('app_link', $link); 
        $query = $this->db->get('tbl_app');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->id;
            }
        }
        return $query->result();
	}
	
	function update_appview_by_link($link){
		$id = $this->return_appid_applink($link);
		$this->update_downloadcount($id);
	}

    function check_app_name($appname) {
        $this->db->where('app_name', strtolower($appname));
        $query = $this->db->get('tbl_app');
        if ($query->num_rows() > 0) {
            return 1;
        } else {
            return 0;
        }
    }
	
	function get_appid_byname($appname){
        $this->db->where('app_name', strtolower($appname));
        $query = $this->db->get('tbl_app');
        if ($query->num_rows() > 0) {
            foreach($query->result as $row){
            	return $row->id;
            }
        } else {
            return 0;
        }
	}

    public function add_app($userid, $appcate, $appicon, $appname, $applink, $appdes, $active, $shortcode, $message, $timeactive, $apptype, $developer = null, $thumbnails = null, $score = null, $datePublished = null, $filesize = null) {

        if ($this->check_app_name($appname) == 0) {
            $data = array(
                'user_id' => $userid,
                'appcate' => $appcate,
                'app_name' => strtolower($appname),
                'app_link' => $applink,
                'appdes' => $appdes,
                'datecreated' => date("Y-m-d h:s:m"),
                'active' => $active,
                'shortcode' => $shortcode,
                'message' => $message,
                'timeactive' => $timeactive,
                'apptype' => $apptype,
                'appicon' => $appicon,
                'developer' => $developer,
                'thumbnails' => $thumbnails,
                'score' => $score,
                'datePublished' => $datePublished,
                'filesize' => $filesize,
            );
            $this->db->insert('tbl_app', $data);
            return 1;
        } else {
            return 0;
        }
    }

    function update_app($id, $userid, $appcate, $appicon = null, $appname, $applink, $appdes, $active, $shortcode, $message, $timeactive, $apptype) {
        $this->load->database();
        $data = array(
            'user_id' => $userid,
            'appcate' => $appcate,
            'app_name' => strtolower($appname),
            'app_link' => $applink,
            'active' => $active,
            'dateupdated' => date("Y-m-d h:s:m"),
        );
        $this->db->where('id', $appid);
        $this->db->update('tbl_app', $data);
    }

    public function update_viewcount($appid) {
        $this->load->database();
        $this->db->where('id', $appid);
        $count = 0;
        $query = $this->db->get('tbl_app');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $rows) {
                $count = $rows->viewcount;
            }
        }
        $this->db->query('UPDATE tbl_app SET viewcount=' . ($count + 1) . ' WHERE id=' . $appid);
    }

    public function update_downloadcount($appid) {
        $this->load->database();
        $this->db->where('id', $appid);
        $count = 0;
        $query = $this->db->get('tbl_app');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $rows) {
                $count = $rows->appview;
            }
        }
        $this->db->query('UPDATE tbl_app SET appview=' . ($count + 1) . ' WHERE id=' . $appid);
    }
	
	function update_money_app($appid){
	        $this->load->database();
	        $this->db->where('id', $appid);
	        $count = 0;
	        $query = $this->db->get('tbl_app');
	        if ($query->num_rows() > 0) {
	            foreach ($query->result() as $rows) {
	                $count = $rows->app_earn;
	            }
	        }
			$str_query = 'UPDATE tbl_app SET app_earn= app_earn + ' . 15000 .'  WHERE id=' . $appid;
	        $this->db->query($str_query);
			//return $str_query;
	}



    function add_image_for_item($userid, $itemid, $item_image, $select_type) {
        if ($select_type == "green") {
            $item_image = $item_image;
        } else {
            $item_image = base_url('src/' . $userid . '/' . $item_image);
        }
        $this->load->database();
        $data = array(
            'userid' => $userid,
            'itemid' => $itemid,
            'imageslink' => $item_image,
            'datecreated' => date("d-m-Y H:i:s"),
            'active' => 1
        );
        $this->db->insert('tbl_gallery_item', $data);
    }

    function show_allgallery($userid) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->where('userid', $userid);
        $query = $this->db->get('tbl_gallery_item');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_allgallery_details($userid, $itemid) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->where('userid', $userid);
        $this->db->where('itemid', $itemid);
        $query = $this->db->get('tbl_gallery_item');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_image_by_appid($userid,$num,$offset) {
        $this->load->database();
        $this->db->where('userid', $userid);
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbl_gallery_item',$num,$offset);
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    public function count_image_by_id($userid) {
        $query = $this->db->get_where('tbl_gallery_item', array('userid' => $userid));
        $count = $query->num_rows();
        return $count;
    }

    function del_image_gallery($id, $userid) {
        $this->load->database();
        $this->db->where('id', $id);
        $this->db->where('userid', $userid);
        $this->db->delete('tbl_gallery_item');
    }

    function del_app($userid, $appid) {
        $this->load->database();
        $this->db->where('user_id', $userid);
        $this->db->where('id', $appid);
        $this->db->delete('tbl_app');
    }

}
