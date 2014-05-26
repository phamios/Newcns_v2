 
<section id="river" class="standard">
    <h1>Recent Stories</h1> 
    <!--DTC HTML CACHE HIT START-->			
    <?php if($listcontent <> null):?>
    <?php foreach($listcontent as $content):?>
    <div class="post " data-post-type="post">
        <div class="thumb"> 
            <a href="<?php echo site_url('home/review/'.mb_strtolower(url_title(removesign($content->review_title.'-'.$content->id))).'.html' );?>">
                <span class="image-holder">
                    <?php $images = $this->gallery_model->get_image_by_review_id_once($content->id);?>
                    <?php foreach($images as $image):?>
                    <img src="<?php echo base_url('src/images/'.$image->image_link);?>" alt="<?php echo $content->review_title?>"/>
                    <?php endforeach;?>
                </span>							
            </a>
        </div>

        <div class="content">
            <h3>
                <a href="<?php echo site_url('home/review/'.mb_strtolower(url_title(removesign($content->review_title.'-'.$content->id))).'.html' );?>">
                    <?php echo $content->review_title?>
                </a>
            </h3>

            <p>
                <?php echo word_limiter($content->review_content, 40); ?>
            </p>

            <div class="byline"> 
                By <a class="author" href="#">Matt Smith</a> 
                <span class="dash">—</span> 
                <time datetime="<?php echo $content->review_created?>" pubdate="">
                    <?php 
                        $new_time = new DateTime($content->review_created);
                        echo $new_time->format('M-d-Y');
                    ?>
                </time>
            </div>
        </div>
    </div>
    <?php endforeach;?>
    <?php endif;?>



    <!--DTC HTML CACHE HIT STOP-->

 



    <!--DTC HTML CACHE HIT STOP-->


    <div class="river-pagination">
        <a href="#" class="button flat icon more"><span>See More</span></a>
    </div>
</section>

<?php 

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
    
?>