<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <title>Appstorevn - Dashboard</title>
        <link rel="shortcut icon" href="favicon.gif">
        <!---CSS Files-->
        <link rel="stylesheet" href="<?php echo base_url('themes/huyxom/admin/appstore/css/master.css') ?>">
        <link rel="stylesheet" href="<?php echo base_url('themes/huyxom/admin/appstore/css/tables.css') ?>">
        <!---jQuery Files-->
        <script src="<?php echo base_url('themes/huyxom/admin/appstore/js/jquery-1.7.1.min.js') ?>"></script>
        <script src="<?php echo base_url('themes/huyxom/admin/appstore/js/jquery-ui-1.8.17.min.js') ?>"></script>
        <script src="<?php echo base_url('themes/huyxom/admin/appstore/js/styler.js') ?>"></script>
        <script src="<?php echo base_url('themes/huyxom/admin/appstore/js/jquery.tipTip.js') ?>"></script>
        <script src="<?php echo base_url('themes/huyxom/admin/appstore/js/colorpicker.js') ?>"></script>
        <script src="<?php echo base_url('themes/huyxom/admin/appstore/js/sticky.full.js') ?>"></script>
        <script src="<?php echo base_url('themes/huyxom/admin/appstore/js/global.js') ?>"></script>
        <script src="<?php echo base_url('themes/huyxom/admin/appstore/js/flot/jquery.flot.min.js') ?>"></script>
        <script src="<?php echo base_url('themes/huyxom/admin/appstore/js/flot/jquery.flot.resize.min.js') ?>"></script>
        <script src="<?php echo base_url('themes/huyxom/admin/appstore/js/jquery.dataTables.min.js') ?>"></script> 
        <!---Fonts-->
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Ubuntu:500' rel='stylesheet' type='text/css'>
        <!--[if lt IE 9]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <!--[if lte IE 8]>
        <script language="javascript" type="text/javascript" src="<?php echo base_url('themes/huyxom/admin/appstore/js/flot/excanvas.min.js') ?>"></script>
        <![endif]-->
        
        <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/themes/base/jquery-ui.css" id="theme">
	
        
        
    </head>
    <body>

        <!--- HEADER -->

        <div class="header">
            <a href="dashboard.html"><img src="<?php echo base_url('themes/huyxom/admin/appstore/img/logo.png') ?>" alt="Logo" /></a> 
            <div class="styler">
                <ul class="styler-show">
                    <li><div id="colorSelector-top-bar"></div></li>
                    <li><div id="colorSelector-box-head"></div></li>
                </ul>
            </div>
        </div>

        <div class="top-bar">
            <ul id="nav">

                <li>
                    <?php $this->load->view($theme . "/admin/menu_navigator"); ?>
                </li>
            </ul>
        </div>

        <!--- CONTENT AREA -->

        <div class="content container_12">
            <?php if ($this->router->fetch_method() == 'index'): ?>
                <?php $this->load->view($theme . "/admin/home"); ?> 
            <?php endif; ?> 

            <?php if ($this->router->fetch_method() == 'usercp'): ?>
                <?php $this->load->view($theme . '/admin/usercp'); ?>
            <?php endif; ?> 

            <?php if ($this->router->fetch_method() == 'type'): ?>
                <?php $this->load->view($theme . '/admin/type'); ?>
            <?php endif; ?>

            <?php if ($this->router->fetch_method() == 'add_type'): ?>
                <?php $this->load->view($theme . '/admin/add_type'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'edit_type'): ?>
                <?php $this->load->view($theme . '/admin/edit_type'); ?>
            <?php endif; ?>

            <?php if ($this->router->fetch_method() == 'categorytype'): ?>
                <?php $this->load->view($theme . '/admin/category'); ?>
            <?php endif; ?>

            <?php if ($this->router->fetch_method() == 'add_cate'): ?>
                <?php $this->load->view($theme . '/admin/add_cate'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'add_cate_hot'): ?>
                <?php $this->load->view($theme . '/admin/cate_hot'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'sitecontent'): ?>
                <?php $this->load->view($theme . '/admin/sitecontent'); ?>
            <?php endif; ?>

            <?php if ($this->router->fetch_method() == 'add_sitecontent'): ?>
                <?php $this->load->view($theme . '/admin/add_sitecontent'); ?>
            <?php endif; ?>

            <?php if ($this->router->fetch_method() == 'content'): ?>
                <?php $this->load->view($theme . '/admin/content'); ?>
            <?php endif; ?>

            <?php if ($this->router->fetch_method() == 'edit_catecontent'): ?>
                <?php $this->load->view($theme . '/admin/edit_catecontent'); ?>
            <?php endif; ?>

            <?php if ($this->router->fetch_method() == 'add_news'): ?>
                <?php $this->load->view($theme . '/admin/add_news'); ?>
            <?php endif; ?>

            <?php if ($this->router->fetch_method() == 'blockip'): ?>
                <?php $this->load->view($theme . '/admin/blockip'); ?>
            <?php endif; ?>

            <?php if ($this->router->fetch_method() == 'add_ip'): ?>
                <?php $this->load->view($theme . '/admin/add_ip'); ?>
            <?php endif; ?>

            <?php if ($this->router->fetch_method() == 'adminuser'): ?>
                <?php $this->load->view($theme . '/admin/adminuser'); ?>
            <?php endif; ?>

            <?php if ($this->router->fetch_method() == 'add_useradmin'): ?>
                <?php $this->load->view($theme . '/admin/add_useradmin'); ?>
            <?php endif; ?>

            <?php if ($this->router->fetch_method() == 'edit_useradmin'): ?>
                <?php $this->load->view($theme . '/admin/edit_useradmin'); ?>
            <?php endif; ?>

            <?php if ($this->router->fetch_method() == 'searchadmin'): ?>
                <?php $this->load->view($theme . '/admin/searchadmin'); ?>
            <?php endif; ?>

            <?php if ($this->router->fetch_method() == 'fmenu'): ?>
                <?php $this->load->view($theme . '/admin/fmenu'); ?>
            <?php endif; ?>

            <?php if ($this->router->fetch_method() == 'edit_sitecontent'): ?>
                <?php $this->load->view($theme . '/admin/edit_sitecontent'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'edit_news'): ?>
                <?php $this->load->view($theme . '/admin/edit_news'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'listusertype'): ?>
                <?php $this->load->view($theme . '/admin/listusertype'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'site_config'): ?>
                <?php $this->load->view($theme . '/admin/site_config'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'add_config'): ?>
                <?php $this->load->view($theme . '/admin/add_config'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'edit_config'): ?>
                <?php $this->load->view($theme . '/admin/edit_config'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'notification'): ?>
                <?php $this->load->view($theme . '/admin/notification'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'add_notification'): ?>
                <?php $this->load->view($theme . '/admin/add_notification'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'newcate'): ?>
                <?php $this->load->view($theme . '/admin/newcate'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'warranty'): ?>
                <?php $this->load->view($theme . '/admin/warranty'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'slide'): ?>
                <?php $this->load->view($theme . '/admin/slide'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'banner'): ?>
                <?php $this->load->view($theme . '/admin/banner_link'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'report'): ?>
                <?php $this->load->view($theme . '/admin/report'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'menufoot'): ?>
                <?php $this->load->view($theme . '/admin/menufoot'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'menutop'): ?>
                <?php $this->load->view($theme . '/admin/menutop'); ?>
            <?php endif; ?>
            <?php if ($this->router->fetch_method() == 'notification'): ?>
                <?php $this->load->view($theme . '/admin/notification'); ?>
            <?php endif; ?>


        </div>

        <div class="footer">
            <p>&copy 2012 - Copyright by <a href="http://appngon.com">Appngon</a> - <a href="http://store8x.com">Mobile8x</a></p>
        </div>

        <script> /* SCRIPTS */
            $(function() {
                var sin = [], cos = [];
                for (var i = 0; i < 14; i += 0.5) {
                    sin.push([i, Math.sin(i)]);
                    cos.push([i, Math.cos(i)]);
                }
                var plot = $.plot($("#flot-demo"),
                        [{data: sin, label: "Green", color: "#71a100"}, {data: cos, label: "Blue", color: "#308eef"}], {
                    series: {
                        lines: {show: true},
                        points: {show: true}
                    },
                    grid: {hoverable: true},
                    yaxis: {min: -1.2, max: 1.2}
                });
                var previousPoint = null;
                $("#flot-demo").bind("plothover", function(event, pos, item) {
                    if ($("#enablePosition:checked").length > 0) {
                        var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
                        $("#hoverdata").text(str);
                    }
                });
            });/* for the flot chart demo */

            $('#example').dataTable({
                "bJQueryUI": true
            }); /* For the data tables */
        </script>

    </body>


</html>