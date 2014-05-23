<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class ajax extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('url');
        $this->load->library('upload');
        $this->load->library('pagination');
        $this->load->library('parser');
        $this->load->helper('cookie');
        $this->load->helper("text");
        $this->load->helper(array('form', 'url'));
        @session_start();
    }
    
    
    public function ajax_post($type){
        if($type="post"){
            
        }
    }

    
    /**
     *  Get Category of Review
     */
    public function rev_cate_ajax() {
        $this->load->model('category_review_model');
        $rev_cate = $this->category_review_model->getAll();

        echo '<ul class="sub-menu" id="sub-menu-rev">';
        foreach ($rev_cate as $cate) {
            echo '<li id="menu-item-411306" class="menu-item menu-item-type-taxonomy menu-item-object-review_category menu-item-411306 menu-item-object-id-100008 li-hover">';
            echo '        <a id="a-hover" cateid="'.$cate->id.'" href="' . site_url('rev_cate') . '/' . mb_strtolower(url_title($this->removesign($cate->cate_rev_name . "-" . $cate->id))) . ".html" . '"> ' . $cate->cate_rev_name . '</a>';
            echo '    </li> ';
        }
        echo '   <li id="menu-item-411328" class="more menu-item menu-item-type-post_type menu-item-object-page menu-item-411328">';
        echo '        <a href="'.site_url('review_category').'">+ More Reviews</a>';
        echo '    </li>';
    }
    
    
    /**
     * Get review cate sub
     */
    public function rev_cate_sub_ajax($cateid) {
        $this->load->model('review_model');
        $newest_reviews = $this->review_model->get_product_review_by_cateid($cateid);

        echo '<div class="col-a-b">';
        echo '<h3>LASTEST REVIEWS</h3>';
        foreach ($newest_reviews as $r) {
            echo '<div class="item">';
            echo '<div class="thumb">';
            echo '</div>';
            echo '<div class="content">';
            echo '<h4><a href="#">'.$r->post_title.'</a></h4>';
            echo '<div class="rating">';
            echo 'Our Scores: '.$r->review_score;
            echo '</div>';
            echo '</div>';
            echo '</div>';
        }
        echo '</div>';
    }


    /**
     * Get Category of News
     */
    public function new_cate_ajax(){
        $this->load->model('category_model');
        $rev_cate = $this->category_model->getAll();

        echo '<ul class="sub-menu">';
        foreach ($rev_cate as $cate) {
            echo '<li id="menu-item-411306" class="menu-item menu-item-type-taxonomy menu-item-object-review_category menu-item-411306 menu-item-object-id-100008">';
            echo '        <a href="' . site_url('rev_cate') . '/' . mb_strtolower(url_title($this->removesign($cate->catename . "-" .$cate->id))) . ".html" . '"> ' . $cate->catename . '</a>';
            echo '    </li> ';
        }
        echo '   <li id="menu-item-411328" class="more menu-item menu-item-type-post_type menu-item-object-page menu-item-411328">';
        echo '        <a href="'.site_url('news_category').'">+ More Reviews</a>';
        echo '    </li>';
        echo '</ul>';
    }

    
    /**
     * Remove all sign in string and change string to url
     * @param type $str
     * @return type
     */
    function removesign($str) {
        $coDau = array("à", "á", "ạ", "ả", "ã", "â", "ầ", "ấ", "ậ", "ẩ", "ẫ", "ă", "ằ", "ắ"
            , "ặ", "ẳ", "ẵ", "è", "é", "ẹ", "ẻ", "ẽ", "ê", "ề", "ế", "ệ", "ể", "ễ", "ì", "í", "ị", "ỉ", "ĩ",
            "ò", "ó", "ọ", "ỏ", "õ", "ô", "ồ", "ố", "ộ", "ổ", "ỗ", "ơ"
            , "ờ", "ớ", "ợ", "ở", "ỡ",
            "ù", "ú", "ụ", "ủ", "ũ", "ư", "ừ", "ứ", "ự", "ử", "ữ",
            "ỳ", "ý", "ỵ", "ỷ", "ỹ",
            "đ",
            "À", "Á", "Ạ", "Ả", "Ã", "Â", "Ầ", "Ấ", "Ậ", "Ẩ", "Ẫ", "Ă"
            , "Ằ", "Ắ", "Ặ", "Ẳ", "Ẵ",
            "È", "É", "Ẹ", "Ẻ", "Ẽ", "Ê", "Ề", "Ế", "Ệ", "Ể", "Ễ",
            "Ì", "Í", "Ị", "Ỉ", "Ĩ",
            "Ò", "Ó", "Ọ", "Ỏ", "Õ", "Ô", "Ồ", "Ố", "Ộ", "Ổ", "Ỗ", "Ơ"
            , "Ờ", "Ớ", "Ợ", "Ở", "Ỡ",
            "Ù", "Ú", "Ụ", "Ủ", "Ũ", "Ư", "Ừ", "Ứ", "Ự", "Ử", "Ữ",
            "Ỳ", "Ý", "Ỵ", "Ỷ", "Ỹ",
            "Đ", "ê", "ù", "à");
        $khongDau = array("a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"
            , "a", "a", "a", "a", "a", "a",
            "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e",
            "i", "i", "i", "i", "i",
            "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"
            , "o", "o", "o", "o", "o",
            "u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u",
            "y", "y", "y", "y", "y",
            "d",
            "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"
            , "A", "A", "A", "A", "A",
            "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
            "I", "I", "I", "I", "I",
            "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"
            , "O", "O", "O", "O", "O",
            "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
            "Y", "Y", "Y", "Y", "Y",
            "D", "e", "u", "a");
        return str_replace($coDau, $khongDau, $str);
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
