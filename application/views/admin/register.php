<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6 lt8"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7 lt8"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8 lt8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="UTF-8" />
        <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">  -->
        <title>SMS GATE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Login and Registration Form with HTML5 and CSS3" />
        <meta name="keywords" content="html5, css3, form, switch, animation, :target, pseudo-class" />
        <meta name="author" content="sonpx" />
        <link rel="shortcut icon" href="../favicon.ico">
        <link rel="stylesheet" type="text/css" href="<?php echo base_url('themes/register') ?>/css/demo.css" />
        <link rel="stylesheet" type="text/css" href="<?php echo base_url('themes/register') ?>/css/style.css" />
		<link rel="stylesheet" type="text/css" href="<?php echo base_url('themes/register') ?>/css/animate-custom.css" />
    </head>
    <body>
        <div class="container">
            <!-- Codrops top bar -->
            <div class="codrops-top">
                <a href="">
                    <strong>&laquo; Quay lại: </strong>Responsive Content Navigator
                </a>
                <span class="right">
                    <a href="#">
                        <strong>Back to the Codrops Article</strong>
                    </a>
                </span>
                <div class="clr"></div>
            </div><!--/ Codrops top bar -->
            <header>
                <h1>SMS <span>GATE</span></h1>
				<nav class="codrops-demos">
					<span>Hệ thống thanh toán số 1 Việt Nam</span>
					<br/><br/><span>"<strong><?php echo $error;?></strong>"</span>
				</nav>
            </header>
            <section>
                <div id="container_demo" >
                    <!-- hidden anchor to stop jump http://www.css3create.com/Astuce-Empecher-le-scroll-avec-l-utilisation-de-target#wrap4  -->
                    <a class="hiddenanchor" id="toregister"></a>
                    <a class="hiddenanchor" id="tologin"></a>
                    <div id="wrapper">
                        <div id="login" class="animate form">
                            <?php echo form_open_multipart('user/login',array("autocomplete"=>"on")); ?>
                                <h1>Log in</h1>
                                <p>
                                    <label for="username" class="uname" data-icon="u" > Tên đăng nhập </label>
                                    <input id="username" name="uname" required="required" type="text" placeholder="Tên đăng nhập"/>
                                </p>
                                <p>
                                    <label for="password" class="youpasswd" data-icon="p"> Mật khẩu </label>
                                    <input id="password" name="pass1" required="required" type="password" placeholder="Mật khẩu" />
                                </p>

                                <p class="login button">
                                    <input type="submit" name="loginsmb" value="Login" />
								</p>
                                <p class="change_link">
									Chưa phải thành viên ?
									<a href="#toregister" class="to_register">Đăng ký</a>
								</p>
                            <?php echo form_close(); ?>
                        </div>

                        <div id="register" class="animate form">
                            <?php echo form_open_multipart('user/register',array("autocomplete"=>"on")); ?>
                                <h1> Đăng ký </h1>
                                <p>
                                    <label for="usernamesignup" class="uname" data-icon="u">Tên đăng nhập</label>
                                    <input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="mysuperusername690" />
                                </p>
                                <p>
                                    <label   data-icon="e" > Số điện thoại</label>
                                    <input id="emailsignup" name="phonesignup" placeholder="+84987017822"/>
                                </p>
                                <p>
                                    <label for="passwordsignup" class="youpasswd" data-icon="p">Mật khẩu </label>
                                    <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="eg. X8df!90EO"/>
                                </p>
                                <p>
                                    <label for="passwordsignup_confirm" class="youpasswd" data-icon="p">Nhập lại mật khẩu</label>
                                    <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="eg. X8df!90EO"/>
                                </p>
                                <p class="signin button">
									<input type="submit" value="Sign up" name="registersmb"/>
								</p>
                            <?php echo form_close(); ?>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    </body>
</html>