<?php $this->load->view('wap/header');?>
<div style="text-align:center">
<img style="margin:5px auto;" src="<?php echo base_url('themes/wap/temp_1/img/banner.jpg') ?>" alt="Banner"/> </div>
<div style="clear:both"></div>
<ul>
	<?php if($apps<> null):?>
	<?php foreach($apps as $app):?>
	<li><?php if($app->appicon ==null):?> <img alt="+" class="thumb"
		src="<?php echo base_url('themes/wap/temp_1/details_files/') ?>/zqxCb.png">
		<?php else:?> <img alt="+" class="thumb"
		src="<?php echo $app->appicon;?>"> <?php endif;?>
		<?php $appname = explode("_", $app->app_name); 
		if(strlen($appname[0]) <= 0 ){
			$appname[0] = "Noname";
		} 
		?> 
		<a href="http://<?php echo $sub.".vmob.vn/app/". mb_strtolower(url_title(removesign($appname[0] . "-" . $app->id))) . ".html" ?>">
			<?php echo strtoupper($appname[0]);?>
		</a><br>
			<?php foreach($categories as $cate): ?>
				<?php if($cate->id == $app->appcate):?>
					<b><?php echo $cate->catename;?></b>
				<?php endif;?>
			<?php endforeach; ?>
		<br> <span> <?php echo word_limiter($app->appdes,50); ?>
	</span><br>
		<div class="tai">
			<script type="text/javascript">
                    function download(selectObj) { 
                        var id = selectObj.value;
                        var dataString = id;
                        $.ajax({
                            url: "<?php echo base_url() . 'index.php/user/downloadfile/'; ?>" + dataString,
                            type: 'POST',
                            data: dataString,
                            success: function(output_string) {
                                $(".resultajax").html(output_string);
                            },
                            error: function() {
                                alert('null');
                            }
                        });
                    }
                </script>
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

 