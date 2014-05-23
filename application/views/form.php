<?php if($userinfo == null):?>
<span>Sử dụng tài khoản Payz ID</span>
<?php echo form_open_multipart('user/login',array("autocomplete"=>"off")); ?>

	<input id="username" name="uname" required="required" type="text" class="input-email" placeholder="Nhập tên đăng nhập"/>
	<input id="password" name="pass1" required="required" type="password" class="input-pw" placeholder="Nhập mật khẩu"/>
	<div class="bt-login">
		<input type="submit" class="bt-green" name="loginsmb" value="Đăng nhập" />
	</div>
	

<?php echo form_close(); ?>

<div class="notuser">
	 Chưa là thành viên của payz ?
	
                <a class="orange" href="<?php echo site_url('home/register');?>">
		<b>Đăng ký</b>
	</a>
</div>
<?php else:?>
<div class="notuser">
	<div class="txt-center">
		<strong>Thông tin cá nhân</strong> <br/>
		Tài khoản: <?php echo $userinfo;?><br/>
		Doanh thu: <?php echo number_format($profit);?><br/>
		Lợi nhuận: <?php echo number_format(($profit/100)*35);?><br/>
		
	</div>
	<a href="<?php echo site_url('user/dashboard');?>">
		<button class="bt-green" type="button">Trang quản trị</button>
	</a>
	<a href="<?php echo site_url('user/logout');?>">
		<button class="bt-green" type="button">Thoát</button>
	</a>
 		<br/>
</div>
 
<?php endif;?>

