<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>SMS GATEWAY</title>

        <meta name="description" content="User login page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <!--basic styles-->

        <link href="<?php echo base_url('themes/admincp') ?>/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="<?php echo base_url('themes/admincp') ?>/assets/css/bootstrap-responsive.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="<?php echo base_url('themes/admincp') ?>/assets/css/font-awesome.min.css" />

        <!--[if IE 7]>
          <link rel="stylesheet" href="<?php echo base_url('themes/admincp') ?>/assets/css/font-awesome-ie7.min.css" />
        <![endif]-->

        <!--page specific plugin styles-->

        <!--fonts-->

        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400,300" />

        <!--ace styles-->

        <link rel="stylesheet" href="<?php echo base_url('themes/admincp') ?>/assets/css/ace.min.css" />
        <link rel="stylesheet" href="<?php echo base_url('themes/admincp') ?>/assets/css/ace-responsive.min.css" />
        <link rel="stylesheet" href="<?php echo base_url('themes/admincp') ?>/assets/css/ace-skins.min.css" />

        <!--[if lte IE 8]>
          <link rel="stylesheet" href="<?php echo base_url('themes/admincp') ?>/assets/css/ace-ie.min.css" />
        <![endif]-->

        <!--inline styles related to this page-->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>

    <body class="login-layout">
        <div class="main-container container-fluid">
            <div class="main-content">
                <div class="row-fluid">
                    <div class="span12">
                        <div class="login-container">
                            <div class="row-fluid">
                                <div class="center">
                                    <h1>
                                        <i class="icon-leaf green"></i>
                                        <span class="red">SMS LOG</span>
                                        <span class="white">Managements</span>
                                    </h1>
                                    <h4 class="blue">&copy; Gateway</h4>
                                </div>
                            </div>

                            <div class="space-6"></div>

                            <div class="row-fluid">
                                <div class="position-relative">
                                    <div id="login-box" class="login-box visible widget-box no-border">
                                        <div class="widget-body">
                                            <div class="widget-main">
                                                <h4 class="header blue lighter bigger">
                                                    <i class="icon-coffee green"></i>
                                                    Thông tin đăng nhập hệ thống
                                                </h4>

                                                <div class="space-6"></div>

                                                 <?php echo form_open_multipart('admincp/login'); ?>
                                                <fieldset>
                                                    <label>
                                                        <span class="block input-icon input-icon-right">
                                                            <input type="text" name="uname" class="span12" placeholder="Username" />
                                                            <i class="icon-user"></i>
                                                        </span>
                                                    </label>

                                                    <label>
                                                        <span class="block input-icon input-icon-right">
                                                            <input type="password" name="pass1" class="span12" placeholder="Password" />
                                                            <i class="icon-lock"></i>
                                                        </span>
                                                    </label>

                                                    <div class="space"></div>

                                                    <div class="clearfix">


                                                        <input type="submit" id="submit" value="Đăng nhập" name="submit" class="width-35 pull-right btn btn-small btn-primary"/>
                                                    </div>

                                                    <div class="space-4"></div>
                                                </fieldset>
                                                <?php echo form_close(); ?>

                                            </div><!--/widget-main-->
                                        </div><!--/widget-body-->
                                    </div><!--/login-box-->
                                </div><!--/position-relative-->
                            </div>

                        </div>
                    </div><!--/.span-->
                </div><!--/.row-fluid-->
            </div>
        </div><!--/.main-container-->

        <!--basic scripts-->

        <!--[if !IE]>-->

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>

        <!--<![endif]-->

        <!--[if IE]>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<![endif]-->

        <!--[if !IE]>-->

        <script type="text/javascript">
                                                    window.jQuery || document.write("<script src='assets/js/jquery-2.0.3.min.js'>" + "<" + "/script>");
        </script>

        <!--<![endif]-->

        <!--[if IE]>
<script type="text/javascript">
window.jQuery || document.write("<script src='assets/js/jquery-1.10.2.min.js'>"+"<"+"/script>");
</script>
<![endif]-->

        <script type="text/javascript">
            if ("ontouchend" in document)
                document.write("<script src='assets/js/jquery.mobile.custom.min.js'>" + "<" + "/script>");
        </script>
        <script src="assets/js/bootstrap.min.js"></script>

        <!--page specific plugin scripts-->

        <!--ace scripts-->

        <script src="assets/js/ace-elements.min.js"></script>
        <script src="assets/js/ace.min.js"></script>

        <!--inline scripts related to this page-->

        <script type="text/javascript">
            function show_box(id) {
                $('.widget-box.visible').removeClass('visible');
                $('#' + id).addClass('visible');
            }
        </script>
    </body>
</html>
