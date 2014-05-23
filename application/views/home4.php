<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="de-DE" ><![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="de-DE" ><![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="de-DE" ><![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html class="csstransforms no-csstransforms3d csstransitions" lang="de-DE"><!--<![endif]--><head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">

        <!-- Basic Page Needs
                ================================================== -->

        <meta charset="UTF-8">
        <title> Kinh doanh SMS - Kiếm tiền với VMOB.VN 2014</title>  </title>

    <link rel="shortcut icon" href="<?php echo site_url(); ?>/faviconvmob n.ico">
    <!-- Mobile Specific
            ================================================== -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- CSS
            ================================================== -->
    <link rel="stylesheet" media="screen, print" href="<?php echo base_url('/themes/home/2014/vmob_v1/'); ?>/style.css">
    <link rel="stylesheet" media="screen, print" href="<?php echo base_url('/themes/home/2014/vmob_v1/'); ?>/twentytwenty.css">

    <!-- Fonts
            ================================================== -->	
    <link href="<?php echo base_url('/themes/home/2014/vmob_v1/'); ?>/css.css" rel="stylesheet" type="text/css">

    <meta property="og:url" content="<?php echo site_url(); ?>">
    <meta property="og:title" content="Kết nối nhanh, chia sẻ doanh thu hấp dẫn, thanh toán linh hoạt">
    <meta property="og:description" content="Kênh thanh toán <?php echo site_url(); ?>, cho thuê đầu số, kết nối thanh toán trực tuyến qua sms, thẻ cào, wap charging. Chia sẻ doanh thu cao, thanh toán nhanh và đúng hẹn.">
    <meta property="og:type" content="website">

    <!-- Java Script
            ================================================== -->


    <link rel="stylesheet" id="wpdm-front-css" href="<?php echo base_url('/themes/home/2014/vmob_v1/'); ?>/front.css" type="text/css" media="all">
    <link rel="stylesheet" id="jetpack-widgets-css" href="<?php echo base_url('/themes/home/2014/vmob_v1/'); ?>/widgets.css" type="text/css" media="all">
    <link rel="stylesheet" id="rs-settings-css" href="<?php echo base_url('/themes/home/2014/vmob_v1/'); ?>/settings.css" type="text/css" media="all">
    <link rel="stylesheet" id="rs-settings-css" href="<?php echo base_url('/themes/home/2014/vmob_v1/'); ?>/skeleton.css" type="text/css" media="all">
    <link rel="stylesheet" id="rs-settings-css" href="<?php echo base_url('/themes/home/2014/vmob_v1/'); ?>/base.css" type="text/css" media="all">
    <link rel="stylesheet" id="rs-captions-css" href="<?php echo base_url('/themes/home/2014/vmob_v1/'); ?>/captions.css" type="text/css" media="all">
    <link rel="stylesheet" id="rs-captions-css" href="<?php echo base_url('/themes/home/2014/vmob_v1/'); ?>/shortcodes.css" type="text/css" media="all">


    <script type="text/javascript" src="<?php echo base_url('/themes/home/2014/vmob_v1/'); ?>/jquery_002.js"></script> 
    <script type="text/javascript" src="<?php echo base_url('/themes/home/2014/vmob_v1/'); ?>/flexslider.js"></script>
    <script type="text/javascript" src="<?php echo base_url('/themes/home/2014/vmob_v1/'); ?>/custom.js"></script> 




    <!-- ------------------ -->
    <link rel="stylesheet" href="<?php echo base_url('/themes/home/2014/index_files/'); ?>/jNotify.css">
    <link rel="stylesheet" type="text/css" media="all" href="<?php echo base_url('/themes/home/2014/index_files/'); ?>/style.css" tppabs="http://www.appgrade.com/themes/site2013/css/style.css">

    <script src="<?php echo base_url('/themes/home/2014/index_files/'); ?>/analytics.js" async=""></script>

    <script type="text/javascript" src="<?php echo base_url('/themes/home/2014/index_files/'); ?>/jquery-1.js" tppabs="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

    <!-- ------------------ -->


    <link rel="stylesheet" type="text/css" id="gravatar-card-css" href="<?php echo base_url('/themes/home/2014/vmob_v1/'); ?>/hovercard.css">
    <link rel="stylesheet" type="text/css" id="gravatar-card-services-css" href="<?php echo base_url('/themes/home/2014/vmob_v1/'); ?>/services.css">
    <script src="<?php echo base_url('/themes/home/2014/vmob_v1/'); ?>/commonutilstats.js" charset="UTF-8" type="text/javascript"></script>


    <!-- ModalBox Start-->


</head>

<body class="home page page-id-182 page-template page-template-template-full-revolution-php sb style- js"> 
    <!-- Header -->
    <div id="header">
        <!-- 960 Container Start -->
        <div class="container">
            <!-- Logo -->  
            <div class="four columns">
                <a href="<?php echo site_url(); ?>" title="vmob.vn" rel="home">
                    <img id="logo-image" src="<?php echo base_url('/themes/home/vmob'); ?>/vmob.png" alt="vmob.vn">
                </a>
                <div class="menu_small_width">
                    <div onclick="#" class="login"></div>
                </div>
            </div>

            <!-- Main Navigation Start -->
            <div class="twelve columns">
                <div id="navigation">
                    <div id="mainmenu-cont" class="menu-menu-container">
                        <?php $this->load->view('menu'); ?> 
                    </div>					
                    <div class="menu_full_width"> 
                        <a  class="btn-clear btn-clear-nb dropdown-toggle" data-toggle="dropdown"  href="<?php echo site_url('user/login'); ?>">
                            Đăng nhập </a>
                        &nbsp;&nbsp;&nbsp;

                        <a  class="btn-clear" data-toggle="dropdown"  href="<?php echo site_url('user/register'); ?>">
                            Đăng ký </a>

                    </div>
                </div>

                <?php $this->load->view('sub_menu'); ?> 		

                <div  class="selectnav">
                    <a href="<?php echo site_url('user/login'); ?>">Đăng nhập </a> | <a href="<?php echo site_url('user/register'); ?>">Đăng ký </a>
                </div>


            </div>
            <!-- Main Navigation End -->

        </div>
        <!-- 960 Container End -->

    </div>

    <!-- End Header -->
    <script type="text/javascript" src="<?php echo base_url('/themes/home/2014/index_files/'); ?>/jNotify.js"></script>
    <script type="text/javascript" src="<?php echo base_url('/themes/home/2014/index_files/'); ?>/vmob.js"></script>


    <?php if ($this->router->class == "home") : ?>
        <?php $this->load->view('default'); ?>
    <?php endif; ?>
    <?php if ($this->router->class == "news") : ?>
        <?php $this->load->view('sub_default'); ?>
    <?php endif; ?>

    <!-- Post -->





    <!-- Footer Start -->
    <?php $this->load->view('footer'); ?>

</body></html>
