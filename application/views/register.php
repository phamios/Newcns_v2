<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.0//EN" "http://www.wapforum.org/DTD/xhtml-mobile10.dtd">
<!-- saved from url=(0019)http://payz.vn/ -->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Payz.vn</title>
	<link rel="shortcut icon" href="<?php echo base_url('themes/home/img/payz.ico');?>" type="image/x-icon"/>	
    <meta name="description" content="Kênh thanh toán <?php echo site_url();?>, cho thuê đầu số, kết nối thanh toán trực tuyến qua sms, thẻ cào, wap charging. Chia sẻ doanh thu cao, thanh toán nhanh và đúng hẹn.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link type="text/css" rel="stylesheet" href="<?php echo base_url('themes/home/css/bootstrap.css');?>">
    <link type="text/css" rel="stylesheet" href="<?php echo base_url('themes/home/css/jquery.fancybox.css');?>">
    <link type="text/css" rel="stylesheet" href="<?php echo base_url('themes/home/css/datepicker.css');?>">
    <link type="text/css" rel="stylesheet" href="<?php echo base_url('themes/home/css/daterangepicker-bs3.css');?>">
    <link type="text/css" rel="stylesheet" href="<?php echo base_url('themes/home/css/previousnext.css');?>">
    <link type="text/css" rel="stylesheet" href="<?php echo base_url('themes/home/css/style.css');?>">
    <script async="" src="js/analytics.js"></script>
    <script type="text/javascript" src="<?php echo base_url('themes/home/js/jquery.min.js');?>"></script>
    <script type="text/javascript" src="<?php echo base_url('themes/home/js/bootstrap.min.js');?>"></script>
    <script type="text/javascript" src="<?php echo base_url('themes/home/js/jquery.fancybox.pack.js');?>"></script>
    <script type="text/javascript" src="<?php echo base_url('themes/home/js/bootstrap-datepicker.js');?>"></script>
    
    <script type="text/javascript" src="<?php echo base_url('themes/home/js/daterangepicker.js');?>"></script>
    <script type="text/javascript" src="<?php echo base_url('themes/home/js/control.js');?>"></script>
    <script type="text/javascript" src="<?php echo base_url('themes/home/js/previousnext.js');?>"></script>
    <script type="text/javascript" src="<?php echo base_url('themes/home/js/common.js');?>"></script>
    <meta property="og:url" content="<?php echo site_url();?>">
    <meta property="og:title" content="Kết nối nhanh, chia sẻ doanh thu hấp dẫn, thanh toán linh hoạt">
    <meta property="og:description" content="Kênh thanh toán <?php echo site_url();?>, cho thuê đầu số, kết nối thanh toán trực tuyến qua sms, thẻ cào, wap charging. Chia sẻ doanh thu cao, thanh toán nhanh và đúng hẹn.">
    <meta property="og:type" content="website">
    
</head>

<body>
<div class="row header">
        <div class="container">
            <a class="floatleft" href="http://payz.vn">
                <img src="<?php echo base_url('themes/home/img/logo.png');?>" width="80%" style="padding: 5px">
            </a>
            <div class="navbar">
                <ul>
                    <li class="li-lienhe"><a class="a-navbar" href="/lien-he.html">Liên hệ</a></li>
                    <li class="li-tintuc"><a class="a-navbar" href="/tin-tuc.html">Tin tức</a></li>
                    <li class="li-dev dropdown"><a href="/#" class="a-navbar" id="nha-phat-trien">Nhà phát
                        triển</a>
                        <ul class="dropdown-menu" aria-labelledby="nha-phat-trien">
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="" target="_blank">Hướng
                                dẫn</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="" target="_blank">Diễn
                                đàn thảo luận</a></li>
                            <li role="presentation" class="divider"></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="/sms-charging" target="_blank">
                                API tích hợp SMS</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="/card-charging" target="_blank">
                                API tích hợp thẻ cào</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="/wap-charging" target="_blank">
                                API tích hợp wapcharge</a></li>
                            <li role="presentation" class="divider"></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="/code-sample" target="_blank">
                                Code mẫu</a></li>
                        </ul>
                    </li>
                    <li class="li-hoptac dropdown"><a href="/#" class="a-navbar" id="hop-tac">Hợp tác</a>
                        <ul class="dropdown-menu" aria-labelledby="hop-tac" style="display: none;">
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="/hop-tac/qui-trinh-hop-tac.html">
                                Qui trình hợp tác</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="/hop-tac/qui-dinh-hop-tac.html">
                                Qui định hợp tác</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="/hop-tac/qui-dinh-spam.html">
                                Qui định spam</a></li>
                            <li role="presentation" class="divider"></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="/hop-tac/chinh-sach-thanh-toan.html">
                                Chính sách thanh toán</a></li>
                        </ul>
                    </li>
                    <li class="li-giaiphap dropdown"><a href="/#" class="a-navbar" id="giai-phap">Giải pháp</a>
                        <ul class="dropdown-menu" aria-labelledby="giai-phap" style="display: none;">
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="/giai-phap/tich-hop-website-forum.html">
                                Tích hợp website, forum</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="/giai-phap/java-android-ios.html">
                                Tích hợp apps java, android, ios</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="/giai-phap/game-online.html">
                                Tích hợp game online</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="/giai-phap/sms.html">
                                Cho thuê đầu số sms</a></li>
                        </ul>
                    </li>
                    <li class="li-dichvu"><a class="a-navbar" href="/dich-vu.html">Dịch vụ</a></li>
                </ul>
            </div>
        </div>
        <!--nav-bar-->
    </div>
<script type="text/javascript">
        $(function () {
            $('.navbar').each(function () {
                var href = $(this).find('a').attr('href');
                var cur_href = '/';
                if (href == cur_href) {
                    $(this).find('a').addClass('active');
                }
            });
        });

        $('div.navbar li.dropdown').hover(function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn();
        }, function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut();
        });
</script>
<!-- end header -->


    <div class="container">
       <div class="pagelogin clearfix">
        <div class="fr form-loggin">
            <div class="s24"><span class="ic ic-lock mag-r15"></span>Thông tin của bạn</div>
            <?php echo form_open_multipart('home/register',array("autocomplete"=>"on")); ?>
                                
                <ul class="register">
                    
                    <li class="magb10">
                        <label class="mag-b5"><strong>Tên đăng nhập</strong> <span class="clred">*</span></label>
                        <input id="usernamesignup" name="usernamesignup" required="required" type="text"   />                    
                        <em class="cl9">Tên đăng nhập từ 4-20 kí tự, chỉ bao gồm chữ cái thường và số</em>
                    </li>
                    <li class="magb10">
                        <label class="mag-b5"><strong>Mật khẩu</strong> <span class="clred">*</span></label>
                        <input id="passwordsignup" name="passwordsignup" required="required" type="password"  />           
                        <em class="cl9">Mật khẩu từ 6-15 kí tự</em>
                    </li>
                    <li class="magb10">
                        <label class="mag-b5"><strong>Nhập lại mật khẩu</strong> <span class="clred">*</span></label>
                        <input id="passwordsignup" name="passwordsignup_confirm" required="required" type="password"  />     
                    </li>
                    <li class="magb10">
                        <label class="mag-b5"><strong>Số điện thoại</strong> <span class="clred">*</span></label>
                        <input id="emailsignup" name="phonesignup" placeholder="+84987017822"/>
                        <em class="cl9">Số điện thoại này sẽ được sử dụng để kích hoạt tài khoản của bạn. Vui lòng nhập chính xác! Viết liền không dùng khoảng trắng, VD: 01685266464 hoặc 841685266464</em>
                    </li>
                     
                    <li class="magb10">
                        <label class="mag-b5"><strong>Họ tên</strong> <span class="clred">*</span></label>
                        <input type="text" name="memberfullname" value="">
                    </li>
                    <li class="magb10">
                        <label class="mag-b5"><strong>Địa chỉ</strong> <span class="clred">*</span></label>
                        <input type="text" name="memberaddress" value="">
                    </li>
                    <li class="magb10">
                        <label class="mag-b5"><strong>Email</strong> <span class="clred">*</span></label>
                        <input type="text" name="memberemail" value="">
                    </li>
                    
                    <li class="magb10" style="height: 120px;">
                        <label class="mag-b5"><strong>Mã xác thực</strong> <span class="clred">*</span></label>
                        <div class="codebeb table"> 
                             <img src="<?php echo base_url('captcha.php'); ?>"    class="table-Hcell" id="captcha" />  <br/>
                             <a href="#" onclick="
    document.getElementById('captcha').src='<?php echo base_url('captcha.php'); ?>?'+Math.random();
    document.getElementById('captcha-form').focus();"
    id="change-image">Làm mới </a><br/><br/>
                        </div> 
                    </li>
                    <li class="magb10">
                         
                        <div class="codebeb table"> 
                           <input type="text" name="captcha"   autocomplete="off" /> 
                        </div>
                        <em class="cl9">Không phân biệt HOA thường</em>
                           
                    </li>
                    <li class="magb10">
                        <input type="checkbox" name="confirm" value="1" class="mag-r5">Tôi đã đọc và đồng ý với <a target="_blank" href="#"><strong class="clred under">thỏa ước thành viên</strong></a> của PAYZ
                    </li>
                    <li class="registe-btn" >  
                        <input type="submit" class="bt-blue mag0" value="Đăng ký" name="registersmb"/>
                    </li>

                </ul>
            <?php echo form_close(); ?> 
        </div>
        <ul class="list-ulti fl">
            <li class="clearfix">
                <span class="ic ic-money fl"></span>
                <div class="table-cell">
                    <div class="s18 cl-org mag-b5">Bạn đã biết</div>
                    <p style="text-align: justify;">Đăng ký thành viên và hợp tác kinh doanh cùng PAYZ.com, bạn sẽ được cung cấp đầy đủ các dịch vụ HOT  nhất, RA TIỀN nhất hiện nay. Và được sử dụng nền tảng kỹ thuật  tiên tiến, hiện đại.</p>
                    <p style="text-align: justify;">Đồng thời bạn sẽ được  sự hỗ trợ tận tình, chi tiết  từ BQT để kinh doanh đạt hiệu quả nhất.Vì thế, cơ hội kiếm tiền của bạn là vô cùng dễ dàng.</p>
                </div>
            </li>
            <li class="clearfix">
                <span class="ic ic-quesanser fl"></span>
                <div class="table-cell">
                    <div class="s18 cl-org mag-b5">Thành viên</div>
                    <p style="text-align: justify;">PAYZ là kênh cung cấp các nội dung trên di động gồm có: Game, Ứng dụng, Hình nền, Video, Truyện, Nhạc chờ … uy tín nhất Việt Nam.</p>
                    <p style="text-align: justify;">Với phương châm Uy tín là số 1. PAYZ đã có hàng ngàn người đang hợp tác kinh doanh. Đến với PAYZ bạn sẽ được hưởng tỷ lệ chia sẻ doanh thu cao nhất thị trường, cùng cơ chế thanh toán chuyên nghiệp, nhanh, sớm và chính xác nhất.</p>
                </div>
            </li>
        </ul>
    </div>
    </div>
    
    
   
<?php echo $this->load->view('footer');?>


</body></html>