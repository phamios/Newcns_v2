<?php $this->load->view('wap/header');?>
						<ul>
							<?php if($apps<> null):?>
							<?php foreach($apps as $app):?>
							<li><?php if($app->appicon ==null):?> <img alt="+" class="thumb"
								src="<?php echo base_url('themes/wap/temp_1/wap_files/no-photo.jpg');?>">
								<?php else:?> <img alt="+" class="thumb"
								src="<?php echo base_url('src/wap/'.$app->appicon);?>"> <?php endif;?>
								<a href="<?php echo $app->app_link?>"><?php echo $app->app_name?> </a><br> <br> 
								<span> <?php echo limit_text($app->appdes,100); ?>
							</span>
							<br>
								<div class="tai">
									<a class="download" href="<?php echo $app->app_link?>">Tải về</a>
								</div>
								<div class="clear"></div></li>

							<?php endforeach;?>
							<?php else:?>
							   Không có dữ liệu bạn vừa tìm kiếm với từ khoá: <?php echo $keyword;?>
							<?php endif;?>

						</ul>
		<?php $this->load->view('wap/footer');?>			