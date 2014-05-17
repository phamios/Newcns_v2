<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login</title>
        <link rel="stylesheet" href="<?php echo base_url('res/assets/css/bootstrap.min.css')?>">
        <link rel="stylesheet" href="<?php echo base_url('res/assets/css/login.css');?>">
        <link rel="stylesheet" href="<?php echo base_url('assets/magic/magic.css');?>">
    </head>
    <body>
        <div class="container">
            <div class="text-center">
                <!--  <img src="<?php echo base_url('res/assets/img/');?>/logo.png" alt="Metis Logo">-->
            </div>
            <div class="tab-content">
                <div id="login" class="tab-pane active">
                     <?php echo form_open_multipart('admincp/login/index',array('class'=>'form-signin')); ?>
                        <p class="muted text-center">
                          ADMIN - CONTROLPANEL 
                        </p>
                        <input type="text" placeholder="Tên đăng nhập " name="username" class="input-block-level">
                        <input type="password" placeholder="Mật khẩu " name="pass" class="input-block-level">
                        <button class="btn btn-large btn-primary btn-block" name="submit_login" type="submit">Đăng nhập</button>
                     <?php echo form_close(); ?>
                </div>
                <div id="forgot" class="tab-pane">
                    <form action="index.html" class="form-signin">
                        <p class="muted text-center">
                            Enter your valid e-mail
                        </p>
                        <input type="email" placeholder="mail@domain.com" required="required" class="input-block-level">
                        <br>
                        <br>
                        <button class="btn btn-large btn-danger btn-block" type="submit">Recover Password</button>
                    </form>
                </div>
                 
            </div>
             


        </div> <!-- /container -->

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-1.10.1.min.js"><\/script>')</script>
        <script type="text/javascript" src="assets/js/vendor/bootstrap.min.js"></script>

        
    </body>
</html>
