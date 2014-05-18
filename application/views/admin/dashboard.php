<!DOCTYPE html>
<!--[if lt IE 7]>       <html class="no-js lt-ie9 lt-ie8 lt-ie7">   <![endif]-->
<!--[if IE 7]>          <html class="no-js lt-ie9 lt-ie8">          <![endif]-->
<!--[if IE 8]>          <html class="no-js lt-ie9">                 <![endif]-->
<!--[if gt IE 8]><!-->  <html class="no-js">                        <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Dashboard</title>
        <meta name="description" content="Metis: Bootstrap Responsive Admin Theme">
        <meta name="viewport" content="width=device-width">
        <link type="text/css" rel="stylesheet" href="<?php echo base_url('res/assets/');?>/css/bootstrap.min.css">
        <link type="text/css" rel="stylesheet" href="<?php echo base_url('res/assets/');?>/css/bootstrap-responsive.min.css">
        <link type="text/css" rel="stylesheet" href="<?php echo base_url('res/assets/');?>/Font-awesome/css/font-awesome.min.css">
        <link type="text/css" rel="stylesheet" href="<?php echo base_url('res/assets/');?>/css/style.css">
        <link type="text/css" rel="stylesheet" href="<?php echo base_url('res/assets/');?>/css/calendar.css">

        <link rel="stylesheet" href="<?php echo base_url('res/assets/');?>/css/theme.css">

        <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
        <!--[if IE 7]>
        <link type="text/css" rel="stylesheet" href="<?php echo base_url('res/assets/');?>/Font-awesome/css/font-awesome-ie7.min.css"/>
        <![endif]-->

        <script src="<?php echo base_url('res/assets/');?>/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    </head>
    <body>
        <!-- BEGIN WRAP -->
        <div id="wrap">


            <!-- BEGIN TOP BAR -->
            <div id="top">
                <!-- .navbar -->
              <?php //$this->load->view('widget/top_nav');?>
                <!-- /.navbar -->
            </div>
            <!-- END TOP BAR -->


            <!-- BEGIN HEADER.head -->
            <header class="head">
                <?php $this->load->view('widget/main_nav');?>
                <!-- /.main-bar -->
            </header>
            <!-- END HEADER.head -->

            <!-- BEGIN LEFT  -->
            <div id="left">
               <?php $this->load->view('widget/left');?>
            </div>
            <!-- END LEFT -->

            <!-- BEGIN MAIN CONTENT -->
            <div id="content">
                <!-- .outer -->
                <div class="container-fluid outer"> 
                 
                <?php if( $this->router->class == 'category'):?>
                    <?php if ($this->router->fetch_method() == 'index'): ?>
                        <?php $this->load->view('admin/category/index'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'create'): ?>
                        <?php $this->load->view('admin/category/create'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'edit'): ?>
                        <?php $this->load->view('admin/category/edit'); ?>
                    <?php endif; ?>
                <?php endif;?>

                <?php if( $this->router->class == 'post'):?>
                    <?php if ($this->router->fetch_method() == 'index'): ?>
                        <?php $this->load->view('admin/post/index'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'create'): ?>
                        <?php $this->load->view('admin/post/create'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'edit'): ?>
                        <?php $this->load->view('admin/post/edit'); ?>
                    <?php endif; ?>
                <?php endif;?>

                <?php if( $this->router->class == 'review'):?>
                    <?php if ($this->router->fetch_method() == 'index'): ?>
                        <?php $this->load->view('admin/review/index'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'create'): ?>
                        <?php $this->load->view('admin/review/create'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'edit'): ?>
                        <?php $this->load->view('admin/review/edit'); ?>
                    <?php endif; ?>
                <?php endif;?>

                 <?php if( $this->router->class == 'dashboard'):?>
 					<?php if ($this->router->fetch_method() == 'index'): ?>
                        <?php $this->load->view('admin/default'); ?>
                    <?php endif; ?>                
                <?php endif;?>    

                </div>
                <!-- /.outer -->
            </div>
            <!-- END CONTENT -->


            <!-- #push do not remove -->
            <div id="push"></div>
            <!-- /#push -->
        </div>
        <!-- END WRAP -->

        <div class="clearfix"></div>

        <!-- BEGIN FOOTER -->
        <div id="footer">
            <p>2013 © Metis Admin</p>
        </div>
        <!-- END FOOTER -->

        <!-- #helpModal -->
        <div id="helpModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="helpModalLabel"
             aria-hidden="true">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h3 id="helpModalLabel"><i class="icon-external-link"></i> Help</h3>
            </div>
            <div class="modal-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
            </div>
            <div class="modal-footer">

                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
            </div>
        </div>
        <!-- /#helpModal -->

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="<?php echo base_url('res/assets/');?>/js/vendor/jquery-1.10.1.min.js"><\/script>')</script>



        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
        <script>window.jQuery.ui || document.write('<script src="<?php echo base_url('res/assets/');?>/js/vendor/jquery-ui-1.10.0.custom.min.js"><\/script>')</script>


        <script src="<?php echo base_url('res/assets/');?>/js/vendor/bootstrap.min.js"></script>

        <script src="<?php echo base_url('res/assets/');?>/js/lib/jquery.tablesorter.min.js"></script>

        <script src="<?php echo base_url('res/assets/');?>/js/lib/jquery.mousewheel.js"></script>
        <script src="<?php echo base_url('res/assets/');?>/js/lib/jquery.sparkline.min.js"></script>

        <script src="<?php echo base_url('res/assets/');?>/flot/jquery.flot.js"></script>
        <script src="<?php echo base_url('res/assets/');?>/flot/jquery.flot.pie.js"></script>
        <script src="<?php echo base_url('res/assets/');?>/flot/jquery.flot.selection.js"></script>
        <script src="<?php echo base_url('res/assets/');?>/flot/jquery.flot.resize.js"></script>

        <script src="<?php echo base_url('res/assets/');?>/fullcalendar/fullcalendar/fullcalendar.min.js"></script>
        
        <script src="<?php echo base_url('res/assets/');?>/js/main.js"></script>
        

        <script type="text/javascript">
            $(function() {
                dashboard();
            });
        </script>

        <script type="text/javascript" src="<?php echo base_url('res/assets/');?>/js/style-switcher.js"></script>

    </body>
</html>
