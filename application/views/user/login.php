<!DOCTYPE html>
<html class="bg-black">
    <head>
        <meta charset="UTF-8">
        <title>Đăng nhập hệ thống VMOB.VN</title>
        <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
        <!-- bootstrap 3.0.2 -->
        <link href="<?php echo base_url('themes/user'); ?>/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <!-- font Awesome -->
        <link href="<?php echo base_url('themes/user'); ?>/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <!-- Theme style -->
        <link href="<?php echo base_url('themes/user'); ?>/css/AdminLTE.css" rel="stylesheet" type="text/css" />

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->
    </head>
    <body class="bg-black">

        <div class="form-box" id="login-box">
            <div class="header">Sign In</div>
            <?php echo form_open_multipart('user/login',array("autocomplete"=>"on")); ?>
                <div class="body bg-gray">
                    <div class="form-group"> 
						<input id="username" name="uname"  class="form-control" type="text" placeholder="Tên đăng nhập"/>
                    </div>
                    <div class="form-group">
						<input id="password" name="pass1" class="form-control" type="password" placeholder="Mật khẩu" /> 
                    </div>    
                </div>
                <div class="footer">                                               
                    <input type="submit" name="loginsmb" class="btn bg-olive btn-block" value="Login" />
                    <p><a href="#">Quên mật khẩu</a></p>
                    
                    <a href="<?php echo site_url('user/register'); ?>" class="text-center">Đăng ký</a>
                </div>
             <?php echo form_close(); ?>

            <div class="margin text-center">
                <span>Đăng nhập bằng </span>
                <br/>
                <button class="btn bg-light-blue btn-circle"><i class="fa fa-facebook"></i></button>
                <button class="btn bg-aqua btn-circle"><i class="fa fa-twitter"></i></button>
                <button class="btn bg-red btn-circle"><i class="fa fa-google-plus"></i></button>

            </div>
        </div>


        <!-- jQuery 2.0.2 -->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
        <!-- Bootstrap -->
        <script src="<?php echo base_url('themes/user'); ?>/js/bootstrap.min.js" type="text/javascript"></script>        

    </body>
</html>