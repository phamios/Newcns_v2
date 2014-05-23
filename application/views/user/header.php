<!DOCTYPE html>
<html lang="vn">
<head>
<meta charset="utf-8" />
<title>Quản trị hệ thống website</title>
<link href="<?php echo base_url('iconw.png');?>" rel="shortcut icon" type="image/x-icon">
<meta name="description" content="overview &amp; stats" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!---jQuery Files-->
<?php if ($this->router->fetch_method() == 'menutop'): ?>
<script src="<?php echo base_url('themes/huyxom/admin/appstore/js/jquery-1.7.1.min.js') ?>"></script>
<script src="<?php echo base_url('themes/huyxom/admin/appstore/js/jquery-ui-1.8.17.min.js') ?>"></script>
<?php endif; ?>
<script type="text/javascript" src="http://code.jquery.com/jquery.js"></script>

<!--basic styles-->
<script src="<?php echo base_url('themes/admincp') ?>/ckeditor/ckeditor.js"></script>

		<script>
            CKEDITOR.replace('editor1', {
                fullPage: true,
                allowedContent: true
            });
        </script>

<link href="<?php echo base_url('themes/admincp') ?>/assets/css/bootstrap.min.css" rel="stylesheet" />
<link href="<?php echo base_url('themes/admincp') ?>/assets/css/bootstrap-responsive.min.css" rel="stylesheet" />
<link rel="stylesheet" href="<?php echo base_url('themes/admincp') ?>/assets/css/font-awesome.min.css" />

<!--[if IE 7]>
<link rel="stylesheet" href="<?php echo base_url('themes/admincp') ?>/assets/css/font-awesome-ie7.min.css" />
![endif]--> 
<!--page specific plugin styles--> 
<!--fonts--> 
<link rel="stylesheet" href="<?php echo base_url('themes/admincp/font.css'); ?>" /> 
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

</style>


<!-- ----------------------------------------------------------------------------------------- -->

</head>
<body>