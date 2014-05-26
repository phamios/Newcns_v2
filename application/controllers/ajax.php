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

    public function trend_ajax() {
        $this->load->model('review_model');
        $result = $this->review_model->get_trend();
        foreach($result as $row){
            echo '<div class="item">';
            echo '    <h4><a href="' . site_url('home/review/' . mb_strtolower(url_title($this->removesign($row->review_title . '-' . $row->id))) . '.html') . '">'.$row->review_title.'</a></h4>';
            echo '    <span class="extra"></span>';
            echo '<span class="count">';
            echo ' <span class="icon"></span>';
            echo  $row->review_view;											
            echo '</span>';
            echo '    <div class="gauge standard" data-percent="'.$row->review_view.'">';
            echo '        <span style="width: '.$row->review_view.'%"></span>';
            echo '    </div>';
            echo '</div>';
        }
    }
    
    
    public function news_hot_ajax() {
        $this->load->model('post_model');
        $result = $this->post_model->get_news_trend();
        foreach($result as $row){
            echo '<div class="item">';
            echo '    <h4><a href="' . site_url('home/news/' . mb_strtolower(url_title($this->removesign($row->post_title . '-' . $row->id))) . '.html') . '">'.$row->post_title.'</a></h4>';
            echo '    <span class="extra"></span>';
             echo '<span class="count">';
            echo ' <span class="icon"></span>';
            echo  $row->post_view;											
            echo '</span>';
            echo '    <div class="gauge standard" data-percent="'.$row->post_view.'">';
            echo '        <span style="width: '.$row->post_view.'%"></span>';
            echo '    </div>';
            echo '</div>';
        }
    }
    
    

    public function last_new() {
        $this->load->model('post_model');
        $result = $this->post_model->get_news_ajax();
        foreach ($result as $content) {
            echo '<div class="item">';
            echo '     <a href="' . site_url('home/news/' . mb_strtolower(url_title($this->removesign($content->post_title . '-' . $content->id))) . '.html') . '" class="thumb alt">';
            echo '        <img src="' . base_url('src/post/thumb_' . $content->post_images) . '" class="attachment-width=76&amp;height=76&amp;crop=1" alt="Canon SX600 front open">';
            echo '    </a>';
            echo '    <h4><a href="' . site_url('home/news/' . mb_strtolower(url_title($this->removesign($content->post_title . '-' . $content->id))) . '.html') . '">' . $content->post_title . '</a></h4>';
            echo '    <div class="rating"> ';
            echo '        <div class="dt-rating num-6" style="color:grey;">Điểm đánh giá<span><span>: ' . $content->post_view . '</span></span></div> ';
            echo '    </div> ';
            echo ' </div>';
        }
    }

    public function last_features() {
        $this->load->model('post_model');
        $result = $this->post_model->get_features_ajax();
        foreach ($result as $content) {
            echo '<div class="item">';
            echo '     <a href="' . site_url('home/news/' . mb_strtolower(url_title($this->removesign($content->post_title . '-' . $content->id))) . '.html') . '" class="thumb alt">';
            echo '        <img src="' . base_url('src/post/thumb_' . $content->post_images) . '" class="attachment-width=76&amp;height=76&amp;crop=1" alt="Canon SX600 front open">';
            echo '    </a>';
            echo '    <h4><a href="' . site_url('home/news/' . mb_strtolower(url_title($this->removesign($content->post_title . '-' . $content->id))) . '.html') . '">' . $content->post_title . '</a></h4>';
            echo '    <div class="rating"> ';
            echo '        <div class="dt-rating" style="color:grey;"> ' . $content->post_createdate . '</div> ';
            echo '    </div> ';
            echo ' </div>';
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
            echo '<li id="menu-item-411306" class="menu-item menu-item-type-taxonomy menu-item-object-review_category menu-item-411306 menu-item-object-id-100008">';
            echo '        <a cateid = "' . $cate->id . '" id="a-hover" href="' . site_url('home/rev_cate') . '/' . mb_strtolower(url_title($this->removesign($cate->cate_rev_name . "-" . $cate->id))) . ".html" . '"> ' . $cate->cate_rev_name . '</a>';
            echo '    </li> ';
        }
        echo '   <li id="menu-item-411328" class="more menu-item menu-item-type-post_type menu-item-object-page menu-item-411328">';
        echo '        <a href="' . site_url('home/review_category') . '">+ More Reviews</a>';
        echo '    </li>';
        echo '</ul>';
        echo '<div id="rev_cate_sub" class="mega-container reviews"> </div>';
    }

    /**
     * Get review cate sub
     */
    public function rev_cate_sub_ajax($cateid) {
        $this->load->model('review_model');
        $this->load->model('gallery_model');
        $newest_reviews = $this->review_model->get_product_review_by_cateid($cateid);
        $i = 1;
        foreach ($newest_reviews as $r) {
            if ($i == 1) {
                echo '<div class="col-b" style="color:white;">';
            } else {
                echo '<div class="col-a" style="color:white;">';
            }


            echo '<div class="item">';
            echo '<div class="thumb">';
            $images = $this->gallery_model->get_image_by_review_id_once($r->id);
            foreach ($images as $image) {
                if ($image->review_id == $r->id) {
                    if ($i == 1) {
                        echo '<img src="' . base_url('src/images/' . $image->image_link) . '" width="50%"/>';
                    } else {
                        echo '<img src="' . base_url('src/images/' . $image->image_link) . '" width="20%"/>';
                    }
                }
            }
            echo '</div>';
            echo '<div class="content">';
            echo '<h4><a href="' . site_url('home/review/' . mb_strtolower(url_title($this->removesign($r->review_title . '-' . $r->id))) . '.html') . '" >' . $r->review_title . '</a></h4>';
            echo '</div>';
            echo '<div class="rating">';
            $new_time = new DateTime($r->review_created); 
            echo '<span style="font-size:9px; color:grey;">'.$new_time->format('M-d-Y').'</span>';
            echo '</div>';
            echo '</div>';
            echo '</div>';

            $i = $i + 1;
        }
    }

    /**
     * Get Category of News
     */
    public function new_cate_ajax() {
        $this->load->model('category_model');
        $rev_cate = $this->category_model->getAll();

        echo '<ul class="sub-menu">';
        foreach ($rev_cate as $cate) {
            echo '<li id="menu-item-411306" class="menu-item menu-item-type-taxonomy menu-item-object-review_category menu-item-411306 menu-item-object-id-100008">';
            echo '        <a  cateid = "' . $cate->id . '" id="a-hover2" href="' . site_url('home/news_cate') . '/' . mb_strtolower(url_title($this->removesign($cate->catename . "-" . $cate->id))) . ".html" . '"> ' . $cate->catename . '</a>';
            echo '    </li> ';
        }
        echo '   <li id="menu-item-411328" class="more menu-item menu-item-type-post_type menu-item-object-page menu-item-411328">';
        echo '        <a href="' . site_url('home/news_category') . '">+ More Reviews</a>';
        echo '    </li>';
        echo '</ul>';
        echo '<div id="news_cate_sub" class="mega-container reviews"> </div>';
    }

    /**
     * Get review cate sub
     */
    public function news_cate_sub_ajax($cateid) {
        $this->load->model('post_model');
        $newest = $this->post_model->get_news_by_cateid($cateid);
        $i = 1;

        foreach ($newest as $r) {
            if ($i == 1) {
                echo '<div class="col-b" style="color:white;">';
            } else {
                echo '<div class="col-a" style="color:white;">';
            }

            echo '<div class="item">';
            echo '<div class="thumb">';
            if ($i == 1) {
                echo '<img src="' . base_url('src/post/thumb_' . $r->post_images) . '" width="50%"/>';
            } else {
                echo '<img src="' . base_url('src/post/thumb_' . $r->post_images) . '" width="20%"/>';
            }

            echo '</div>';
            echo '<div class="content">';
            echo '<h4><a href="' . site_url('home/news/' . mb_strtolower(url_title($this->removesign($r->post_title . '-' . $r->id))) . '.html') . '" >' . $r->post_title . '</a></h4>';
            echo '<div class="rating">';
            $new_time = new DateTime($r->post_createdate);
            echo '<span style="font-size:9px; color:grey;">'.$new_time->format('M-d-Y').'</span>';
            echo '</div>';
            echo '</div>';
            echo '</div>';
            echo '</div>';

            $i = $i + 1;
        }
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
