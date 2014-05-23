<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Mo_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
        $this->load->database();
	}
	
	public function list_mo($num,$offset,$user,$datefrom,$dateto){
        $this->load->model('user_model');
        $userid = intval($user) > 0 ? $user : $this->user_model->get_user_id($user);

        $sWhere = "";
        if ($userid <> null) {
            $sWhere = "WHERE userid = " . $userid;
        } else {
            return null;
        }

        if ($datefrom <> null and $dateto <> null) {
            $start_array = explode("-",$datefrom);
            $end_array = explode("-",$dateto);
            $start = $start_array[2]."-".$start_array[1]."-".$start_array[0];
            $end = $end_array[2]."-".$end_array[1]."-".$end_array[0];

            if ($userid <> null) {
                $sWhere .= " AND STR_TO_DATE(dayaccess,'%d-%m-%Y') BETWEEN '".$start."' AND '".$end."'";
            } else {
                $sWhere .= " WHERE STR_TO_DATE(dayaccess,'%d-%m-%Y') BETWEEN '".$start."' AND '".$end."'";
            }
        }
        $sWhere .= ' order by id LIMIT ' . $num . ' OFFSET ' . ($offset ? $offset : 0);

		$query=$this->db->query('SELECT * FROM tbl_mo '.$sWhere);
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}else{
			return null;
		}  
	}

	public function list_mo_by_shortcode($shortcode,$num,$offset,$user,$datefrom,$dateto){
        $this->load->model('user_model');
        $userid = intval($user) > 0 ? $user : $this->user_model->get_user_id($user);

        $sWhere = " WHERE shortcode = " . $shortcode;
        if ($userid <> null) {
            $sWhere .= " AND userid = " . $userid;
        } else {
            return null;
        }

        if ($datefrom <> null and $dateto <> null) {
            $start_array = explode("-",$datefrom);
            $end_array = explode("-",$dateto);
            $start = $start_array[2]."-".$start_array[1]."-".$start_array[0];
            $end = $end_array[2]."-".$end_array[1]."-".$end_array[0];

            $sWhere .= " AND STR_TO_DATE(dayaccess,'%d-%m-%Y') BETWEEN '".$start."' AND '".$end."'";
        }
        $sWhere .= ' order by id LIMIT ' . $num . ' OFFSET ' . ($offset ? $offset : 0);

        $query=$this->db->query('SELECT * FROM tbl_mo '.$sWhere);
        if ($query->num_rows() > 0)
        {
            return $query->result();
        }else{
            return null;
        }
	}

    public function count_mo($user=null,$datefrom=null,$dateto=null) {
        if ($user <> null or ($datefrom <> null and $dateto <> null)) {
            
            $this->load->model('user_model');
            $userid = intval($user) > 0 ? $user : $this->user_model->get_user_id($user);

            $sWhere = "";
            if ($userid <> null) {
                $sWhere .= ' order by id ';
                $sWhere = "WHERE userid = " . $userid;
            } else {
                return null;
            }

            if ($datefrom <> null and $dateto <> null) {
                $start_array = explode("-",$datefrom);
                $end_array = explode("-",$dateto);
                $start = $start_array[2]."-".$start_array[1]."-".$start_array[0];
                $end = $end_array[2]."-".$end_array[1]."-".$end_array[0];

                if ($userid <> null) {
                    $sWhere .= " AND STR_TO_DATE(dayaccess,'%d-%m-%Y') BETWEEN '".$start."' AND '".$end."'";
                } else {
                    $sWhere .= " WHERE STR_TO_DATE(dayaccess,'%d-%m-%Y') BETWEEN '".$start."' AND '".$end."'";
                    $sWhere .= ' order by id ';
                }
            }

            $query=$this->db->query('SELECT * FROM tbl_mo '.$sWhere);
            if ($query->num_rows() > 0)
            {
                return $query->result();
            }else{
                return null;
            }
        } else {
            return $this->db->count_all('tbl_mo');
        }
    }

    public function count_mo_by_shortcode($shortcode,$user=null,$datefrom=null,$dateto=null) {
        if ($user <> null or ($datefrom <> null and $dateto <> null)) {

            $this->load->model('user_model');
            $userid = intval($user) > 0 ? $user : $this->user_model->get_user_id($user);

            $sWhere = "";
            $sWhere = ' WHERE shortcode = ' . $shortcode;
            if ($userid <> null) {
                $sWhere .= " AND userid = " . $userid;
            } else {
                return null;
            }

            if ($datefrom <> null and $dateto <> null) {
                $start_array = explode("-",$datefrom);
                $end_array = explode("-",$dateto);
                $start = $start_array[2]."-".$start_array[1]."-".$start_array[0];
                $end = $end_array[2]."-".$end_array[1]."-".$end_array[0];

                $sWhere .= " AND STR_TO_DATE(dayaccess,'%d-%m-%Y') BETWEEN '".$start."' AND '".$end."'";
            }
            $sWhere .= ' order by id';

            $query=$this->db->query('SELECT * FROM tbl_mo '.$sWhere);
            if ($query->num_rows() > 0)
            {
                return $query->result();
            }else{
                return null;
            }
        } else {
            $query = $this->db->get_where('tbl_mo', array('shortcode' => $shortcode));
            $count = $query->num_rows();
            return $count;
        }
    }

    public function shortcode_handler($shortcode) {
        if ($shortcode == 'All') {
            $this->session->unset_userdata('shortcode');
            return $shortcode;
        }
        elseif ($shortcode) {
            $this->session->set_userdata('shortcode', $shortcode);
            return $shortcode;
        }
        elseif ($this->session->userdata('shortcode')) {
            $shortcode = $this->session->userdata('shortcode');
            return $shortcode;
        }
        else {
            $this->session->unset_userdata('shortcode');
            $shortcode = null;
            return $shortcode;
        }
    }

    public function user_search_handler($user) {
        if ($user) {
            $this->session->set_userdata('user_search', $user);
            return $user;
        }
        elseif ($this->session->userdata('user_search')) {
            $user = $this->session->userdata('user_search');
            return $user;
        }
        else {
            $this->session->unset_userdata('user_search');
            $user = null;
            return $user;
        }
    }

    public function datefrom_search_handler($datefrom) {
        if ($datefrom) {
            $this->session->set_userdata('datefrom_search', $datefrom);
            return $datefrom;
        }
        elseif ($this->session->userdata('datefrom_search')) {
            $datefrom = $this->session->userdata('datefrom_search');
            return $datefrom;
        }
        else {
            $this->session->unset_userdata('datefrom_search');
            return null;
        }
    }

    public function dateto_search_handler($dateto) {
        if ($dateto) {
            $this->session->set_userdata('dateto_search', $dateto);
            return $dateto;
        }
        elseif ($this->session->userdata('dateto_search')) {
            $dateto = $this->session->userdata('dateto_search');
            return $dateto;
        }
        else {
            $this->session->unset_userdata('dateto_search');
            return null;
        }
    }

}
	
?>
