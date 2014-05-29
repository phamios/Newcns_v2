<div id="page" class="hreview">

    <?php foreach ($details_news as $rev): ?>   
        <div class="bb-wrap">

            <header class="title-block">

                <div class="crumbs">
                    <span xmlns:v="#">

                        <span typeof="v:Breadcrumb">
                            <a href="<?php echo site_url(); ?>" rel="v:url" property="v:title">Trang chủ</a>
                        </span> 
                        <em>&gt;</em> 

                        <span typeof="v:Breadcrumb">
                            <?php foreach ($category as $cate): ?>
                                <?php if ($rev->cate_review_id == $cate->id): ?>
                                    <a  href="<?php echo site_url('home/rev_cate') . '/' . mb_strtolower(url_title(removesign($cate->cate_rev_name . "-" . $cate->id))) . ".html" ?>"><?php echo $cate->cate_rev_name ?></a>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </span> <em>&gt;</em>  
                        <span typeof="v:Breadcrumb">
                            <span class="breadcrumb_last" property="v:title"><?php echo $rev->review_title ?></span>

                        </span>

                    </span></div>
                <h1 itemprop="itemreviewed" class="item fn"><?php echo $rev->review_title ?></h1>

                <div class="byline">

                    <cite>

                        By <span class="vcard">
                            <a class="author url fn reviewer" rel="author" href="#" itemprop="reviewer">Matt Safford</a>
                        </span>
                        &nbsp;<span class="dash">—</span>
                        &nbsp;<span itemprop="datePublished" content="2014-05-09" class="date dtreviewed">
                            <span class="value-title" title="2014-05-09">
                                <time datetime="#" pubdate="">
                                    <?php
                                    $new_time = new DateTime($rev->review_created);
                                    echo $new_time->format('M-d-Y');
                                    ?>
                                </time>
                            </span>
                        </span>

                        <span id="logged-in-component-single-admin-links"></span>
                    </cite>

                </div>
            </header>

            <div id="primary-wrap">

                <div id="primary">

                    <nav class="content-tabs"  >

                        <ul>
                            <li class="selected">
                                <a href="#tabs-1">Đánh giá sản phẩm</a>
                            </li>
                            <li class="">
                                <a href="<?php echo site_url('home/features/'.mb_strtolower(url_title(removesign($rev->review_title.'-'.$rev->id))).'.html' );?>">Đặc trưng</a>
                            </li>
                            <li class="">
                                <a href="#tabs-3">Ý kiến người dùng</a>
                            </li> 
                        </ul>

                    </nav>

                    <section id="review-block" class="standard">
                        <div id="carousel-gallery" class="carousel-gallery " style="height: 450px">
                            <div class="wrap">
                                <script type="text/javascript" src="<?php echo base_url('res_home/slide/js/jssor.core.js'); ?>"></script>
                                <script type="text/javascript" src="<?php echo base_url('res_home/slide/js/jssor.utils.js'); ?>"></script>
                                <script type="text/javascript" src="<?php echo base_url('res_home/slide/js/jssor.slider.js'); ?>"></script>
                                <script>
                                    jssor_slider1_starter = function (containerId) {
                                        var options = {
                                            $AutoPlay: false,                                   //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                                            $SlideDuration: 800,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500

                                            $ThumbnailNavigatorOptions: {                       //[Optional] Options to specify and enable thumbnail navigator or not
                                                $Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
                                                $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always

                                                $ActionMode: 1,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
                                                $SpacingX: 8,                                   //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
                                                $DisplayPieces: 10,                             //[Optional] Number of pieces to display, default value is 1
                                                $ParkingPosition: 360                           //[Optional] The offset position to park thumbnail
                                            }
                                        };

                                        var jssor_slider1 = new $JssorSlider$(containerId, options);
                                    };
                                </script>

                                <div id="slider1_container" style="position: relative; top: 0px; left: 0px; width: 600px;
                                     height: 456px; background: #24262e; overflow: hidden;">

                                    <!-- Loading Screen -->
                                    <div u="loading" style="position: absolute; top: 0px; left: 0px;">
                                        <div style="filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block;
                                             background-color: #000000; top: 0px; left: 0px;width: 100%;height:100%;">
                                        </div>
                                        <div style="position: absolute; display: block; background: url(<?php echo base_url('res_home/slide/img/loading.gif'); ?>) no-repeat center center;
                                             top: 0px; left: 0px;width: 100%;height:100%;">
                                        </div>
                                    </div>

                                    <!-- Slides Container -->
                                    <div u="slides" style="cursor: move; position: absolute; left: 0px; top: 0px; width: 600px; height: 356px; overflow: hidden;">
                                        <?php foreach ($galleries as $gallery): ?>
                                            <div>
                                                <img u="image" src="<?php echo base_url('src/images/' . $gallery->image_link) ?>" />
                                                <img u="thumb" src="<?php echo base_url('src/images/' . $gallery->image_link) ?>" width="20%"/>
                                            </div>
                                        <?php endforeach; ?>

                                    </div>

                                    <!-- Thumbnail Navigator Skin Begin -->
                                    <div u="thumbnavigator" class="jssort01" style="position: absolute; width: 600px; height: 100px; left:0px; bottom: 0px;">

                                        <!-- Thumbnail Item Skin Begin -->
                                        <style>
                                            /* jssor slider thumbnail navigator skin 01 css */
                                            /*
                                            .jssort01 .p           (normal)
                                            .jssort01 .p:hover     (normal mouseover)
                                            .jssort01 .pav           (active)
                                            .jssort01 .pav:hover     (active mouseover)
                                            .jssort01 .pdn           (mousedown)
                                            */
                                            .jssort01 .w
                                            {
                                                position: absolute;
                                                top: 0px;
                                                left: 0px;
                                                width: 100%;
                                                height: 100%;
                                            }
                                            .jssort01 .c {
                                                position: absolute;
                                                top: 0px;
                                                left: 0px;
                                                width: 68px;
                                                height: 68px;
                                                border: #000 2px solid;
                                            }
                                            .jssort01 .p:hover .c, .jssort01 .pav:hover .c, .jssort01 .pav .c {
                                                background: url(../img/t01.png) center center;
                                                border-width: 0px;
                                                top: 2px;
                                                left: 2px;
                                                width: 68px;
                                                height: 68px;
                                            }
                                            .jssort01 .p:hover .c, .jssort01 .pav:hover .c {
                                                top: 0px;
                                                left: 0px;
                                                width: 70px;
                                                height: 70px;
                                                border: #fff 1px solid;
                                            }
                                        </style>
                                        <div u="slides" style="cursor: move;">
                                            <div u="prototype" class="p" style="position: absolute; width: 72px; height: 72px; top: 0; left: 0;">
                                                <div class=w><thumbnailtemplate style=" width: 100%; height: 100%; border: none;position:absolute; top: 0; left: 0;"></thumbnailtemplate></div>
                                                <div class=c>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Thumbnail Item Skin End -->
                                    </div>
                                    <!-- Thumbnail Navigator Skin End -->

                                    <!-- Trigger -->
                                    <script>
                                        jssor_slider1_starter('slider1_container');
                                    </script>
                                </div>

                            </div>
                        </div>


                        <div class="details">

                            <h2><?php echo $rev->review_title ?></h2>


                            <div class="scorecard">

                                <div class="left">


                                    <div class="wrap">

                                        <h6 class="good">Ưu điểm</h6>

                                        <ul class="good"> 
                                            <?php $high = explode(',', $rev->review_high); ?>
                                            <?php for ($i = 1; $i < count($high); $i++): ?>
                                                <li><?php echo $high[$i]; ?></li>
                                            <?php endfor; ?>
                                        </ul>

                                    </div>

                                    <div class="wrap"> 
                                        <h6 class="bad">Nhược điểm</h6> 
                                        <ul class="bad"> 
                                            <?php $low = explode(',', $rev->review_low); ?>
                                            <?php for ($i = 1; $i < count($low); $i++): ?>
                                                <li><?php echo $low[$i]; ?></li>
                                            <?php endfor; ?>
                                        </ul>

                                    </div>


                                </div>

                                <div class="right"> 
                                    <div class="rating">
                                        <div class="dt-rating num-7">Điểm đánh giá<span><span>: <span>7</span></span></span>
                                            <div class="value" style="display:none"><span class="value-title" title="7"></span></div>
                                            <div class="best" style="display:none"><span class="value-title" title="10"></span></div>
                                        </div>
                                    </div>

                                    <div class="widget mini pricegrabber">
                                        <a href="" class="pricegrabber-link trackable" rel="nofollow" target="_blank" data-event-type="affiliate-click" data-event-action="widget" data-event-param=""></a>
                                        <h3>Giá bán</h3>
                                        <table>

                                            <tbody>
                                                <tr>
                                                    <td class="merchant">
                                                        <a href="#" rel="nofollow" class="affiliate trackable" data-event-type="affiliate-click" data-event-action="widget" data-event-param="Amazon.com">
                                                            <span class="text">Amazon.com</span>
                                                        </a>
                                                    </td>

                                                    <td class="price">
                                                        <a href="#" rel="nofollow" class="affiliate trackable" data-event-type="affiliate-click" data-event-action="widget" data-event-param="Amazon.com">$199.99</a>
                                                    </td>
                                                    <td class="link">
                                                        <a class="button shop affiliate trackable" href="#" rel="nofollow" data-event-type="affiliate-click" data-event-action="widget" data-event-param="Amazon.com">See It</a>
                                                    </td>
                                                </tr>


                                                <tr>
                                                    <td class="merchant">
                                                        <a href="#" rel="nofollow" class="affiliate trackable" data-event-type="affiliate-click" data-event-action="widget" data-event-param="pricegrabber">
                                                            <img src="<?php echo base_url('res_home/review_details_files/'); ?>/url-86d965578d67fec11298368dbbef3fde-100x0.jpg">							
                                                        </a> 
                                                    </td>

                                                    <td class="price">
                                                        <a href="#" rel="nofollow" class="affiliate trackable" data-event-type="affiliate-click" data-event-action="widget" data-event-param="pricegrabber">$699.99</a>
                                                    </td> 
                                                    <td class="link">
                                                        <a class="button shop affiliate trackable" href="#" rel="nofollow" data-event-type="affiliate-click" data-event-action="widget" data-event-param="pricegrabber">See It</a>
                                                    </td> 
                                                </tr> 
                                            </tbody> 
                                        </table> 
                                    </div> 
                                </div> 
                            </div>
                            <div class="testimonial">
                                <span class="open">“</span>
                                <blockquote><?php echo $rev->review_recoment; ?></blockquote>
                                <span class="close">”</span>
                            </div>

                        </div> 
                    </section> 




                    <div class="social-share " data-post-id="577537">


                        <div class="comment ">
                            <a class="wrap" href="#">
                                <span class="text">Add a comment</span>
                                <span class="icon"></span>
                            </a>
                        </div>

                        <div class="twitter cached full">
                            <div class="wrap">
                                <div class="expand" data-app-class="twitter-share-button">
                                    <div class="widget-container">
                                        <a href="https://twitter.com/share" class="app-class" data-url="http://bit.ly/1mwDo3K" data-counturl="#" data-text="#" data-via="DigitalTrends" data-hashtags="" target="_blank" rel="nofollow"></a>
                                    </div>
                                </div>
                                <span class="icon"></span>
                                <span class="num">6</span>
                            </div>
                        </div>

                        <div class="facebook cached full">
                            <div class="wrap">
                                <div class="expand" data-app-class="fb-like">
                                    <div class="app-class" data-href="#" data-send="false" data-layout="button_count" data-width="90" data-show-faces="false"></div>
                                </div>
                                <span class="icon"></span>
                                <span class="num">5</span>
                            </div>
                        </div>

                        <div class="gplus cached full">
                            <div class="wrap">
                                <div class="expand" data-app-class="g-plusone">
                                    <div class="app-class" data-href="#" data-size="medium" data-expandto="right" data-onstartinteraction="dtGplusStartInteraction" data-onendinteraction="dtGplusEndInteraction"></div>
                                </div>
                                <span class="icon"></span>
                                <span class="num">6</span>
                            </div>
                        </div>

                        <div class="linkedin cached ">
                            <div class="wrap">
                                <div class="expand" data-app-class="IN/Share">
                                    <script data-url="#" data-counter="right"></script>
                                </div>
                                <span class="icon"></span>
                            </div>
                        </div>

                        <div class="email">
                            <a class="wrap" href="javascript:void(0)" data-post-id="577537" title="Share this by email">
                                <span class="icon"></span>
                            </a>
                        </div>

                    </div>


                    <article id="content" itemprop="description" class="description">
                        <p><?php echo $rev->review_content; ?></p> 
                    </article>



                    <section id="comments" data-post-id="577537" data-comments-open="1" data-comments-order="desc" data-user-reviews="1">

                            <div class="fb-comments" data-href="<?php echo site_url('home/review/' . mb_strtolower(url_title(removesign($rev->review_title . "-" . $rev->id))) . ".html"); ?>" data-numposts="10" data-colorscheme="light"></div>
                    </section>


                </div>


            </div>

        </div>
    <?php endforeach; ?>
</div>

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