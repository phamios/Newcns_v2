<?php $this->load->view('wap/header');?>
<ul>
	<?php if($apps<> null):?>
	<?php foreach($apps as $app):?>
	<li><?php if($app->appicon ==null):?> <img alt="+" class="thumb"
		src="<?php echo base_url('themes/wap/temp_1/details_files/') ?>/zqxCb.png">
		<?php else:?> <img alt="+" class="thumb"
		src="<?php echo $app->appicon;?>"> <?php endif;?>
		<a href="<?php echo $app->app_link?>">
		<?php $appname = explode("_", $app->app_name); 
		if(strlen($appname[0]) <= 0 ){
			$appname[0] = "Noname";
		} 
		?> 
		<?php echo strtoupper($appname[0]);?> </a><br>
		<br> <span> <?php echo limit_text($app->appdes,200); ?>
	</span> <br>
		<div class="tai">
			<a class="download" href="<?php echo $app->app_link?>">Tải về</a>
		</div>
		<div class="clear"></div></li>

	<?php endforeach;?>
	<?php else:?>
	<span style="padding-left: 50px;">Thành viên <b><?php echo $sub ?> </b>
		chưa có nội dung trên danh mục này !
	</span>
	<?php endif;?>

</ul>

<?php $this->load->view('wap/footer');?>
 