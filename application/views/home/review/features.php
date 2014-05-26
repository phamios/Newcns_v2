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
                <nav class="content-tabs"> 
                    <ul>
                        <li class="">
                            <a href="<?php echo site_url('home/review/'.mb_strtolower(url_title(removesign($rev->review_title.'-'.$rev->id))).'.html' );?>">Đánh giá sản phẩm</a>
                        </li>
                        <li class="selected">
                            <a href="#">Đặc trưng</a>
                        </li>
                        <li class="">
                            <a href="#">Ý kiến người dùng</a>
                        </li>
                    </ul> 
                </nav> 
                <div class="spec-tables"> 
                       <p><?php echo $rev->review_specific; ?></p>  
                </div> 
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