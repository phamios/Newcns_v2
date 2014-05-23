<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title><?php echo $username ?> - <?php echo $this->session->userdata('userid') ?> - USER CONTROLPANEL</title>
        <script type="text/javascript" src="http://code.jquery.com/jquery.js"></script>

        <link rel="shortcut icon" href="<?php echo site_url(); ?>/faviconvmob n.ico">

        <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
        <!-- bootstrap 3.0.2 -->
        <link href="<?php echo base_url('themes/user'); ?>/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <!-- font Awesome -->
        <link href="<?php echo base_url('themes/user'); ?>/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <!-- Ionicons -->
        <link href="<?php echo base_url('themes/user'); ?>/css/ionicons.min.css" rel="stylesheet" type="text/css" />
        <!-- Morris chart -->
        <link href="<?php echo base_url('themes/user'); ?>/css/morris/morris.css" rel="stylesheet" type="text/css" />
        <!-- jvectormap -->
        <link href="<?php echo base_url('themes/user'); ?>/css/jvectormap/jquery-jvectormap-1.2.2.css" rel="stylesheet" type="text/css" />

        <!-- bootstrap wysihtml5 - text editor -->
        <link href="<?php echo base_url('themes/user'); ?>/css/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css" rel="stylesheet" type="text/css" />
        <!-- Theme style -->
        <link href="<?php echo base_url('themes/user'); ?>/css/AdminLTE.css" rel="stylesheet" type="text/css" />

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->

        <!--  START CHART--> 
        <?php if ($this->router->fetch_method() == 'dashboard'): ?>
            <?php $this->load->view('user/default/chart', $month); ?>
        <?php endif; ?>


        <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
        <script src="//code.jquery.com/jquery-1.10.2.js"></script>
        <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
        <script>
            $(function() {
                $( "#datepicker" ).datepicker(); 
                $( "#datepicker2" ).datepicker(); 
            });
        </script>


        <!--basic styles-->
        <script src="<?php echo base_url('themes/admincp') ?>/ckeditor/ckeditor.js"></script>

        <script>
            CKEDITOR.replace('editor1', {
                fullPage: true,
                allowedContent: true
            });
        </script>


    </head>
    <body class="skin-black">
        <!-- header logo: style can be found in header.less -->
        <header class="header">
            <a href="<?php echo site_url(); ?>" class="logo">
                <!-- Add the class icon to your logo image or logo icon to add the margining -->
                <?php echo $username ?> - <?php echo $this->session->userdata('userid') ?>
            </a>
            <!-- Header Navbar: style can be found in header.less -->
            <nav class="navbar navbar-static-top" role="navigation">
                <!-- Sidebar toggle button-->
                <a href="#" class="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </a>

                <section class="content-header">
                    <ol class="breadcrumb">
                        <?php $this->load->view('user/widget/breadcrumb'); ?>
                    </ol>
                </section>

            </nav>
        </header>
        <div class="wrapper row-offcanvas row-offcanvas-left">
            <!-- Left side column. contains the logo and sidebar -->
            <aside class="left-side sidebar-offcanvas">
                <!-- sidebar: style can be found in sidebar.less -->
                <section class="sidebar">
                    <!-- Sidebar user panel -->
                    <div class="user-panel">
                        <div class="pull-left image">
                            <img src="img/avatar3.png" class="img-circle" alt="User Image" />
                        </div>
                        <div class="pull-left info">
                            <p>Xin chào : <?php echo $username ?></p>

                            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <!-- search form -->
                    <!-- /.search form -->
                    <!-- sidebar menu: : style can be found in sidebar.less -->
                    <ul class="sidebar-menu">
                        <?php $this->load->view('user/widget/menu'); ?>
                    </ul>
                </section>
                <!-- /.sidebar -->
            </aside>

            <!-- Right side column. Contains the navbar and content of the page -->
            <aside class="right-side">
                <!-- Content Header (Page header) -->


                <!-- Main content -->
                <section class="content">
                    <?php if ($this->router->fetch_method() == 'dashboard'): ?>
                        <?php $this->load->view("user/default/index"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'app'): ?>
                        <?php $this->load->view("user/default/app"); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'add_app'): ?>
                        <?php $this->load->view("user/default/add_app"); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'update_app'): ?>
                        <?php $this->load->view("user/default/update_app"); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'api'): ?>
                        <?php $this->load->view("user/default/api"); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'update_api'): ?>
                        <?php $this->load->view("user/default/update_api"); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'add_api'): ?>
                        <?php $this->load->view("user/default/add_api"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'api_link'): ?>
                        <?php $this->load->view("user/default/api_link"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'report'): ?>
                        <?php $this->load->view("user/default/report"); ?>
                    <?php endif; ?>
                    
                    <?php if ($this->router->fetch_method() == 'ex_report'): ?>
                        <?php $this->load->view("user/default/ex_report"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'report_details'): ?>
                        <?php $this->load->view("user/default/report_details"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'profile'): ?>
                        <?php $this->load->view("user/default/profile"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'content'): ?>
                        <?php $this->load->view("user/default/content"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'listwap'): ?>
                        <?php $this->load->view("user/default/listwap"); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'addwap'): ?>
                        <?php $this->load->view("user/default/add_wap"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'updatewap'): ?>
                        <?php $this->load->view("user/default/update_wap"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'listwapcate'): ?>
                        <?php $this->load->view("user/default/list_cate_wap"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'addcatewap'): ?>
                        <?php $this->load->view("user/default/addcatewap"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'updatecatewap'): ?>
                        <?php $this->load->view("user/default/update_catewap"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'appwap'): ?>
                        <?php $this->load->view("user/default/appwap"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'video'): ?>
                        <?php $this->load->view("user/default/video"); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'add_video'): ?>
                        <?php $this->load->view("user/default/add_video"); ?>
                    <?php endif; ?>


                    <?php if ($this->router->fetch_method() == 'app_video'): ?>
                        <?php $this->load->view("user/default/videoapp"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'gallery'): ?>
                        <?php $this->load->view("user/default/gallery"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'withdraw'): ?>
                        <?php $this->load->view("user/default/withdraw"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'authen_withdraw'): ?>
                        <?php $this->load->view("user/default/authen_withdraw"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'deposit'): ?>
                        <?php $this->load->view("user/default/deposit"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'sendmoney'): ?>
                        <?php $this->load->view("user/default/sendmoney"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'googleplay'): ?>
                        <?php $this->load->view("user/default/googleplay"); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'yourapp'): ?>
                        <?php $this->load->view("user/default/yourapp"); ?>
                    <?php endif; ?>
                </section><!-- /.content -->
            </aside><!-- /.right-side -->
        </div><!-- ./wrapper -->

        <!-- add new calendar event modal -->


        <!-- jQuery 2.0.2 -->
       <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script> -->
        <!-- jQuery UI 1.10.3 -->
        <script src="<?php echo base_url('themes/user'); ?>/js/jquery-ui-1.10.3.min.js" type="text/javascript"></script>
        <!-- Bootstrap -->
        <script src="<?php echo base_url('themes/user'); ?>/js/bootstrap.min.js" type="text/javascript"></script>
        <!-- Morris.js charts -->
        <script src="http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
        <script src="<?php echo base_url('themes/user'); ?>/js/plugins/morris/morris.min.js" type="text/javascript"></script>
        <!-- Sparkline -->
        <script src="<?php echo base_url('themes/user'); ?>/js/plugins/sparkline/jquery.sparkline.min.js" type="text/javascript"></script>
        <!-- jvectormap -->
        <script src="<?php echo base_url('themes/user'); ?>/js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js" type="text/javascript"></script>
        <script src="<?php echo base_url('themes/user'); ?>/js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js" type="text/javascript"></script>
        <!-- fullCalendar -->
        <script src="<?php echo base_url('themes/user'); ?>/js/plugins/fullcalendar/fullcalendar.min.js" type="text/javascript"></script>
        <!-- jQuery Knob Chart -->
        <script src="<?php echo base_url('themes/user'); ?>/js/plugins/jqueryKnob/jquery.knob.js" type="text/javascript"></script>
        <!-- daterangepicker -->
        <script src="<?php echo base_url('themes/user'); ?>/js/plugins/daterangepicker/daterangepicker.js" type="text/javascript"></script>
        <!-- Bootstrap WYSIHTML5 -->
        <script src="<?php echo base_url('themes/user'); ?>/js/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js" type="text/javascript"></script>
        <!-- iCheck -->
        <script src="<?php echo base_url('themes/user'); ?>/js/plugins/iCheck/icheck.min.js" type="text/javascript"></script>

        <!-- AdminLTE App -->
        <script src="<?php echo base_url('themes/user'); ?>/js/AdminLTE/app.js" type="text/javascript"></script>

        <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
        <script src="<?php echo base_url('themes/user'); ?>/js/AdminLTE/dashboard.js" type="text/javascript"></script>        

    </body>
</html>
