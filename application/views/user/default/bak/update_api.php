<div class="box grid_12">
	<div class="box-head">
		<h2>Thêm Api</h2>
	</div>
	<div class="box-content ">
		<?php foreach($apis as $api):?>
		  <?php echo form_open_multipart('user/update_api/'.$api->id); ?>
                         <div class="form-row">
			<div class="form-label">App</div>
			<div class="form-item">
				<select name="app_id">
					<option value="0">--- chọn app -----</option>
					<?php foreach($apps as $app):?>
						<option <?php if($api->appid == $app->id):?>selected<?php endif;?> value="<?php echo $app->id?>"><?php echo $app->app_name?></option>
					<?php endforeach;?>
				</select>
			</div>
		</div>
		<div class="form-row">
			<div class="form-label">Tin nhắn trả về (
			<span><i>Max 160 kí tự</i></span> )
			</div>
			<div class="form-item"> 
				<textarea name="mess"  cols="100" rows="10" maxlength='160' > <?php echo  $api->mess; ?></textarea>
			</div>
		</div>
		<div class="form-row">
			<div class="form-label">Giá</div>
			<div class="form-item">
				<select name="cost">
					 <option value="0">--chọn đầu số--</option>
					<?php foreach($shortcode as $code):?>
						<option <?php if($code->id == $api->cost):?>selected<?php endif;?> value="<?php echo $code->id?>"><?php echo  number_format($code->price);?></option>
					<?php endforeach;?>


				</select>
			</div>
		</div>
		<div class="form-row">
			<div class="form-label">Ngày tạo</div>
			<div class="form-item">
				<input type="text" value="<?php echo date("Y-m-d h:s:m")?>"
					name="datecreate" />
			</div>
		</div>
		<div class="form-row">

			<div class="form-item">
				 <input name="active" type="radio" <?php if($app->active == 0):?> checked <?php endif;?>  value="0"/>
                        <span class="lbl"> Không kích hoạt</span>
                        <input name="active" type="radio" value="1"   <?php if($app->active == 1):?> checked <?php endif;?>/>
                        <span class="lbl"> Kích hoạt</span>
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
	</div>
</div>
