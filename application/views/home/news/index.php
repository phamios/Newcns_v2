<section id="river" class="standard">
    <h1>Recent Stories </h1> 
    <!--DTC HTML CACHE HIT START-->			
    <?php if($details_news <> null):?>
    <?php foreach($details_news as $content):?>
    <div class="post " data-post-type="post">
        <div class="thumb">
            <a href="#">
                <span class="image-holder">
                    <img src="<?php echo site_url('src/post/thumb_'.$content->post_images)?>" alt="<?php echo $content->post_title?>"/>
                </span>							
            </a>
        </div>

        <div class="content">
            <h3>
                <a href="#">
                    <?php echo $content->post_title?>
                </a>
            </h3>

            <p>
                <?php echo word_limiter($content->post_description, 40); ?>
            </p>

            <div class="byline">
                <div>
                    <?php foreach($category as $cate):?>
                        <?php if($cate->id == $content->cateid):?>
                            <a class="cat" href="#">
                                <?php echo $cate->catename;?>
                            </a>
                        <?php endif;?>
                    <?php endforeach;?>
                </div>

                By <a class="author" href="#">Matt Smith</a> 
                <span class="dash">—</span> 
                <time datetime="<?php echo $content->post_createdate?>" pubdate="">
                    <?php 
                        $new_time = new DateTime($content->post_createdate);
                        echo $new_time->format('M-d-Y');
                    ?>
                </time>
            </div>
        </div>
    </div>
    <?php endforeach;?>
    <?php endif;?>
 
</section>