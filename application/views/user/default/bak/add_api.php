<div class="box grid_12">
	<div class="box-head">
		<h2>Thêm Api</h2>
	</div>
	<div class="box-content ">
		  <?php echo form_open_multipart('user/add_api'); ?>

                         <div class="form-group">
			<label>App</label>
			<div style="width:20%;" class="form-group">
				<select class="form-control" name="app_id">
					<option value="0">--- chọn app -----</option>
					<?php foreach($apps as $app):?>
						<option value="<?php echo $app->id?>"><?php echo $app->app_name?></option>
					<?php endforeach;?>
				</select>
			</div>
		</div><br>
		<div class="form-group">
			<div class="form-label">Tin nhắn trả về (
			<span><i>Max 160 kí tự</i></span> )
			</div>
			<div style="width:30%" class="form-group">
				<textarea class="form-control" maxlength='160' rows="4"  name="mess"></textarea>
			</div>
		</div>
		<div style="width:20%;" class="form-group">
			<label>Giá</label>
			<div class="form-group">
				<select class="form-control" name="cost">
					<option value="0">--chọn đầu số--</option>
					<?php foreach($shortcode as $code):?>
						<option value="<?php echo $code->id?>"><?php echo $code->shortcode.'-'.number_format($code->price);?></option>
					<?php endforeach;?>

				</select>
			</div>
		</div>
		<div class="form-group">
			<label>Ngày tạo</label>
			<div style="width:20%;" class="form-group">
				<input class="form-control" type="text" value="<?php echo date("Y-m-d h:s:m")?>"
					name="datecreate" />
			</div>
		</div>
        <div class="form-group">
               <div class="radio">
                   <label>
                       <input type="radio" name="active" id="optionsRadios1" value="0" checked>
                      Không kích hoạt
                   </label>
               </div>
               <div class="radio">
                   <label>
                      <input type="radio" name="active" id="optionsRadios1" value="1" checked>
                      Kích hoạt
                   </label>
               </div>
        </div>
		<div class="form-row">
			<br />
		</div>
        <div class="form-group">
                        <label> </label>
                        <input type="submit" name="submit" value="Tạo" class="btn btn-primary" />
                    </div>
                        <?php echo form_close(); ?>
	</div>
</div>
