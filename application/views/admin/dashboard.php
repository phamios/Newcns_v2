<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Quản trị hệ thống website</title>
        <link href="<?php echo base_url('iconw.png'); ?>" rel="shortcut icon" type="image/x-icon">
        <meta name="description" content="overview &amp; stats" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="http://tinymce.cachefly.net/4.0/tinymce.min.js"></script>
        <script>
            tinymce.init({selector:'textarea'});
            tinymce.init({
                toolbar: "undo redo | styleselect | bold italic | link image"
            });
        </script>



        <!---jQuery Files-->
        <?php if ($this->router->fetch_method() == 'menutop'): ?>
            <script src="<?php echo base_url('themes/huyxom/admin/appstore/js/jquery-1.7.1.min.js') ?>"></script>
            <script src="<?php echo base_url('themes/huyxom/admin/appstore/js/jquery-ui-1.8.17.min.js') ?>"></script>
        <?php endif; ?>

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
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <!-- ------GALLERY -->


       <!-- <script type="text/javascript" src="http://malsup.github.com/jquery.form.js"></script> -->
        <script type="text/javascript">
            $(document).ready(function() {
                $('form').submit(function() {
                    var bar = $('.bar');
                    var percent = $('.percent');
                    var status = $('#status');
                    $(this).ajaxForm({
                        beforeSend: function() {
                            status.html();
                            var percentVal = '0%';
                            bar.width(percentVal)
                            percent.html(percentVal);
                        },
                        uploadProgress: function(event, position, total, percentComplete) {
                            var percentVal = percentComplete + '%';
                            bar.width(percentVal)
                            percent.html(percentVal);
                        },
                        complete: function(xhr) {
                            status.html(xhr.responseText);
                        }
                    });
                });
            });
        </script>

        <style>  
            .progress { position:relative; width:400px; border: 1px solid #ddd; padding: 1px; border-radius: 3px; }
            .bar { background-color: #B4F5B4; width:0%; height:20px; border-radius: 3px; }
            .percent { position:absolute; display:inline-block; top:3px; left:48%; }
        </style>
		
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
        <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
        <script>
            $(function() {
                $( "#datepicker" ).datepicker(); 
                $( "#datepicker2" ).datepicker(); 
            });
        </script>

    </head>

    <body>
        <div class="navbar">
            <div class="navbar-inner">
                <div class="container-fluid">
                    <a href="#" class="brand">
                        <small>
                            <i class="icon-leaf"></i>
                            Quản trị hệ thống website
                        </small>
                    </a><!--/.brand-->

                    <ul class="nav ace-nav pull-right">
                        <?php $this->load->view('admin/widget/user'); ?>

                    </ul><!--/.ace-nav-->
                </div><!--/.container-fluid-->
            </div><!--/.navbar-inner-->
        </div>

        <div class="main-container container-fluid">
            <a class="menu-toggler" id="menu-toggler" href="#">
                <span class="menu-text"></span>
            </a>

            <div class="sidebar" id="sidebar">  
                <?php $this->load->view('admin/menu'); ?> 
                <div class="sidebar-collapse" id="sidebar-collapse">
                    <i class="icon-double-angle-left"></i>
                </div>
            </div>

            <div class="main-content">
                <div class="breadcrumbs" id="breadcrumbs">
                    <?php $this->load->view('admin/breadcrumbs'); ?>
                </div>

                <div class="page-content">  
                    <?php if ($this->router->fetch_method() == 'index'): ?>
                        <?php $this->load->view("admin/index"); ?> 
                    <?php endif; ?> 

                    <?php if ($this->router->fetch_method() == 'member'): ?>
                        <?php $this->load->view('admin/default/member'); ?>
                    <?php endif; ?> 

                    <?php if ($this->router->fetch_method() == 'content'): ?>
                        <?php $this->load->view('admin/default/content'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_news'): ?>
                        <?php $this->load->view('admin/default/add_post'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'list_cate'): ?>
                        <?php $this->load->view('admin/default/list_cate'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_cate'): ?>
                        <?php $this->load->view('admin/default/add_cate'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'edit_post'): ?>
                        <?php $this->load->view('admin/default/edit_post'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'edit_cate'): ?>
                        <?php $this->load->view('admin/default/edit_cate'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'list_shortcode'): ?>
                        <?php $this->load->view('admin/default/list_shortcode'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_shortcode'): ?>
                        <?php $this->load->view('admin/default/add_shortcode'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'edit_shortcode'): ?>
                        <?php $this->load->view('admin/default/edit_shortcode'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'list_mt'): ?>
                        <?php $this->load->view('admin/default/list_mt'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_mt'): ?>
                        <?php $this->load->view('admin/default/add_mt'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'edit_mt'): ?>
                        <?php $this->load->view('admin/default/edit_mt'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'list_mo'): ?>
                        <?php $this->load->view('admin/default/list_mo'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'list_mo_by_shortcode'): ?>
                        <?php $this->load->view('admin/default/list_mo_by_shortcode'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'blockip'): ?>
                        <?php $this->load->view('admin/default/blockip'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_ip'): ?>
                        <?php $this->load->view('admin/default/add_ip'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'site_config'): ?>
                        <?php $this->load->view('admin/default/site_config'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'add_config'): ?>
                        <?php $this->load->view('admin/default/add_config'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'edit_config'): ?>
                        <?php $this->load->view('admin/default/edit_config'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'notification'): ?>
                        <?php $this->load->view('admin/default/notification'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'keycode'): ?>
                        <?php $this->load->view('admin/default/keycode'); ?>
                    <?php endif; ?>
                    
                    <?php if ($this->router->fetch_method() == 'withdraw'): ?>
                        <?php $this->load->view("admin/default/withdraw"); ?> 
                    <?php endif; ?> 


                </div>
                <!--/.page-content--> 
            </div><!--/.main-content-->
        </div><!--/.main-container-->

        <a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-small btn-inverse">
            <i class="icon-double-angle-up icon-only bigger-110"></i>
        </a>

        <!--basic scripts-->

        <!--[if !IE]>-->

        <!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script> -->

        <!--<![endif]-->

        <!--[if IE]>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<![endif]-->

        <!--[if !IE]>-->

       <!-- <script type="text/javascript">
            window.jQuery || document.write("<script src='<?php echo base_url('themes/admincp') ?>/assets/js/jquery-2.0.3.min.js'>" + "<" + "/script>");
        </script> -->

        <!--<![endif]-->

        <!--[if IE]>
<script type="text/javascript">
window.jQuery || document.write("<script src='<?php echo base_url('themes/admincp') ?>/assets/js/jquery-1.10.2.min.js'>"+"<"+"/script>");
</script>
<![endif]-->

        <script type="text/javascript">
            if ("ontouchend" in document)
                document.write("<script src='assets/js/jquery.mobile.custom.min.js'>" + "<" + "/script>");
        </script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/bootstrap.min.js"></script>

        <!--page specific plugin scripts-->

        <!--[if lte IE 8]>
          <script src="<?php echo base_url('themes/admincp') ?>/assets/js/excanvas.min.js"></script>
        <![endif]-->

      <!--  <script src="<?php echo base_url('themes/admincp') ?>/assets/js/jquery-ui-1.10.3.custom.min.js"></script> -->
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/jquery.ui.touch-punch.min.js"></script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/jquery.slimscroll.min.js"></script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/jquery.easy-pie-chart.min.js"></script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/jquery.sparkline.min.js"></script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/flot/jquery.flot.min.js"></script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/flot/jquery.flot.pie.min.js"></script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/flot/jquery.flot.resize.min.js"></script>

        <!--ace scripts-->

        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/ace-elements.min.js"></script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/ace.min.js"></script>

        <!--inline scripts related to this page-->

        <script type="text/javascript">
            $(function() {
                 
 
                
                /**
                 we saved the drawing function and the data to redraw with different position later when switching to RTL mode dynamically
                 so that's not needed actually.
                 */
                placeholder.data('chart', data);



                var $tooltip = $("<div class='tooltip top in hide'><div class='tooltip-inner'></div></div>").appendTo('body');
                var previousPoint = null;

                placeholder.on('plothover', function(event, pos, item) {
                    if (item) {
                        if (previousPoint != item.seriesIndex) {
                            previousPoint = item.seriesIndex;
                            var tip = item.series['label'] + " : " + item.series['percent'] + '%';
                            $tooltip.show().children(0).text(tip);
                        }
                        $tooltip.css({top: pos.pageY + 10, left: pos.pageX + 10});
                    } else {
                        $tooltip.hide();
                        previousPoint = null;
                    }

                });


                var d1 = [];
                for (var i = 0; i < Math.PI * 2; i += 0.5) {
                    d1.push([i, Math.sin(i)]);
                }

                var d2 = [];
                for (var i = 0; i < Math.PI * 2; i += 0.5) {
                    d2.push([i, Math.cos(i)]);
                }

                var d3 = [];
                for (var i = 0; i < Math.PI * 2; i += 0.2) {
                    d3.push([i, Math.tan(i)]);
                }
 
                $('#recent-box [data-rel="tooltip"]').tooltip({placement: tooltip_placement});
                function tooltip_placement(context, source) {
                    var $source = $(source);
                    var $parent = $source.closest('.tab-content')
                    var off1 = $parent.offset();
                    var w1 = $parent.width();

                    var off2 = $source.offset();
                    var w2 = $source.width();

                    if (parseInt(off2.left) < parseInt(off1.left) + parseInt(w1 / 2))
                        return 'right';
                    return 'left';
                }


                $('.dialogs,.comments').slimScroll({
                    height: '300px'
                });


                //Android's default browser somehow is confused when tapping on label which will lead to dragging the task
                //so disable dragging when clicking on label
                var agent = navigator.userAgent.toLowerCase();
                if ("ontouchstart" in document && /applewebkit/.test(agent) && /android/.test(agent))
                    $('#tasks').on('touchstart', function(e) {
                        var li = $(e.target).closest('#tasks li');
                        if (li.length == 0)
                            return;
                        var label = li.find('label.inline').get(0);
                        if (label == e.target || $.contains(label, e.target))
                            e.stopImmediatePropagation();
                    });

                $('#tasks').sortable({
                    opacity: 0.8,
                    revert: true,
                    forceHelperSize: true,
                    placeholder: 'draggable-placeholder',
                    forcePlaceholderSize: true,
                    tolerance: 'pointer',
                    stop: function(event, ui) {//just for Chrome!!!! so that dropdowns on items don't appear below other items after being moved
                        $(ui.item).css('z-index', 'auto');
                    }
                }
            );
                $('#tasks').disableSelection();
                $('#tasks input:checkbox').removeAttr('checked').on('click', function() {
                    if (this.checked)
                        $(this).closest('li').addClass('selected');
                    else
                        $(this).closest('li').removeClass('selected');
                });


            });
        </script>


    </body>
</html>
