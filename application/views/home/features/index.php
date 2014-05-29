<?php if ($details_news <> null): ?>
    <?php foreach ($details_news as $content): ?>
        <div class="bb-wrap"> 
            <header class="title-block">
                <div class="crumbs">

                    <span xmlns:v="<?php echo site_url(); ?>">
                        <span typeof="v:Breadcrumb">
                            <a href="<?php echo site_url(); ?>" rel="v:url" property="v:title">Home</a>
                        </span> 

                        <em>&gt;</em> 

                        <span typeof="v:Breadcrumb">
                            <?php foreach ($category as $cate): ?>
                                <?php if ($cate->id == $content->cateid): ?> 
                                    <a href="<?php echo site_url('home/news_cate/' . mb_strtolower(url_title(removesign($cate->catename . "-" . $cate->id))) . ".html"); ?>" rel="v:url" property="v:title"><?php echo $cate->catename ?></a>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </span> 

                        <em>&gt;</em> 

                        <span typeof="v:Breadcrumb">
                            <span class="breadcrumb_last" property="v:title"><?php echo $content->post_title ?></span> 
                        </span> 
                    </span>

                </div>
                <h1 itemprop="name"> <?php echo $content->post_title ?></h1>

                <div class="byline">

                    <cite>

                        By <span class="vcard">
                            <a class="author url fn " rel="author" href="#">Matt Smith</a>
                        </span>
                        &nbsp;<span class="dash">—</span>
                        &nbsp;<span itemprop="datePublished" content="2014-05-11" class="date dtreviewed">
                            <span class="value-title" title="2014-05-11">
                                <time datetime="<?php echo $content->post_createdate ?>" pubdate="">
                                    <?php
                                    $new_time = new DateTime($content->post_createdate);
                                    echo $new_time->format('M-d-Y');
                                    ?>
                                </time>
                            </span>
                        </span>

                        <span id="logged-in-component-single-admin-links"></span>
                    </cite>

                </div>
            </header>

            <div id="primary-wrap" style="padding-top:0px;" class="full-width-header-media">

                <div class="social-share " data-post-id="579392">

                    <div class="twitter cached full">
                        <div class="wrap">
                            <div class="expand" data-app-class="twitter-share-button">
                                <div class="widget-container">
                                    <a href="https://twitter.com/share" class="app-class" data-url="http://bit.ly/SILA8v" data-counturl="http://www.digitaltrends.com/computing/heres-what-you-need-to-know-about-buying-a-custom-built-pc/" data-text="Here's what you need to know about buying a custom built PC" data-via="DigitalTrends" data-hashtags="" target="_blank" rel="nofollow"></a>
                                </div>
                            </div>
                            <span class="icon"></span>
                            <span class="num">4</span>
                        </div>
                    </div>

                    <div class="facebook cached ">
                        <div class="wrap">
                            <div class="expand" data-app-class="fb-like">
                                <div class="app-class" data-href="http://www.digitaltrends.com/computing/heres-what-you-need-to-know-about-buying-a-custom-built-pc/" data-send="false" data-layout="button_count" data-width="90" data-show-faces="false"></div>
                            </div>
                            <span class="icon"></span>
                        </div>
                    </div>

                    <div class="gplus cached full">
                        <div class="wrap">
                            <div class="expand" data-app-class="g-plusone">
                                <div class="app-class" data-href="http://www.digitaltrends.com/computing/heres-what-you-need-to-know-about-buying-a-custom-built-pc/" data-size="medium" data-expandto="right" data-onstartinteraction="dtGplusStartInteraction" data-onendinteraction="dtGplusEndInteraction"></div>
                            </div>
                            <span class="icon"></span>
                            <span class="num">2</span>
                        </div>
                    </div>





                </div>



                <div class="header-media image full-width">
                    <a href="<?php echo base_url('src/features/' . $content->post_images); ?>" rel="post">
                        <img src="<?php echo base_url('src/features/' . $content->post_images); ?>" alt="<?php echo $content->post_title ?>" width="50%" />
                    </a>

                </div>


                <div id="primary"> 
                    <article id="content" class="single-post" itemprop="articleBody">
                        <p>
                            <?php echo $content->post_description ?>
                        </p>
                    </article>




                    <section class="followup">

                        <div class="social-share " data-post-id="579392">

                            <div class="comment ">
                                <a class="wrap" href="http://www.digitaltrends.com/computing/heres-what-you-need-to-know-about-buying-a-custom-built-pc/#comments">
                                    <span class="text">Add a comment</span>
                                    <span class="icon"></span>
                                </a>
                            </div>

                            <div class="twitter cached full">
                                <div class="wrap">
                                    <div class="expand" data-app-class="twitter-share-button">
                                        <div class="widget-container">
                                            <a href="https://twitter.com/share" class="app-class" data-url="http://bit.ly/SILA8v" data-counturl="http://www.digitaltrends.com/computing/heres-what-you-need-to-know-about-buying-a-custom-built-pc/" data-text="Here's what you need to know about buying a custom built PC" data-via="DigitalTrends" data-hashtags="" target="_blank" rel="nofollow"></a>
                                        </div>
                                    </div>
                                    <span class="icon"></span>
                                    <span class="num">4</span>
                                </div>
                            </div>

                            <div class="facebook cached ">
                                <div class="wrap">
                                    <div class="expand" data-app-class="fb-like">
                                        <div class="app-class" data-href="#" data-send="false" data-layout="button_count" data-width="90" data-show-faces="false"></div>
                                    </div>
                                    <span class="icon"></span>
                                </div>
                            </div>

                            <div class="gplus cached full">
                                <div class="wrap">
                                    <div class="expand" data-app-class="g-plusone">
                                        <div class="app-class" data-href="#" data-size="medium" data-expandto="right" data-onstartinteraction="dtGplusStartInteraction" data-onendinteraction="dtGplusEndInteraction"></div>
                                    </div>
                                    <span class="icon"></span>
                                    <span class="num">2</span>
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
                                <a class="wrap" href="javascript:void(0)" data-post-id="579392" title="Share this by email">
                                    <span class="icon"></span>
                                </a>
                            </div>

                        </div>




                        <section class="author-block" data-user-id="76988" itemscope="" itemtype="#"> 
                            <img src="<?php echo base_url('res_home/details_news_files/url-3f2f06289e34c0c057c29bf8ca91f9d7-94x94-c.jpg'); ?>" alt="Matt Smith" data-avatar-provider="uploaded">
                            <div class="wrap">

                                <div class="name">
                                    <h3>
                                        by 
                                        <a href="#" itemprop="url">
                                            <span itemprop="name">Matt Smith</span>

                                        </a>				
                                    </h3>

                                </div>

                                <p>Matt Smith is a writer, computing guru, gamer and geek hailing 
                                    from Portland, Oregon. He also writes for MakeUseOf and his personal 
                                    blog, <a href="#">@matt_on_tech</a>. You can follow him on Twitter <a href="https://twitter.com/Matt_on_tech">@Matt_on_tech</a> and <a rel="author" href="https://plus.google.com/115183690169153206030/"> Google+.</a>
                                </p>

                                <a rel="author" href="https://plus.google.com/115183690169153206030/">

                                    <meta itemprop="affiliation" content="Digital Trends">

                                </a></div>
                            <a rel="author" href="#">

                            </a>
                            <div class="social-buttons"><a rel="author" href="https://plus.google.com/115183690169153206030/">
                                </a><a rel="me nofollow" href="https://plus.google.com/115183690169153206030" target="_blank" class="simple button gplus">
                                    <span class="icon"></span>Follow
                                </a> 
                            </div> 
                        </section> 
                    </section> 
                    
                    <div class="fb-comments" data-href="<?php echo site_url('home/news/' . mb_strtolower(url_title(removesign($content->post_title . "-" . $content->id))) . ".html"); ?>" data-numposts="10" data-colorscheme="light"></div>
                </div> 
            </div> 
        </div> 
    <?php endforeach; ?>
<?php endif; ?>

 

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
