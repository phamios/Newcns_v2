<div class="box grid_12">
	<div class="box-head">
		<h2>Sửa WAP</h2>
	 
	</div>
	<div class="box-content ">
	<?php foreach($details as $row):?>
	<?php echo form_open_multipart('user/updatewap/'.$row->id); ?> 
		<div class="form-row">
			<div class="form-label">Tên wap của bạn: <i>kí tự không dấu, không có khoảng trống</i></div>
			<div class="form-item">
				<input type="text" name="wap_name" value="<?php echo $row->wap_name?>"/>
			</div>
		</div>
		<div class="form-row">
			<div class="form-label">Title:</div>
			<div class="form-item">
				<input type="text" name="wap_title" value="<?php echo $row->wap_title?>"/>
			</div>
		</div>
		<div class="form-row">
			<div class="form-label">
				Meta Des
			</div>
			<div class="form-item">
				<textarea   rows="4" name="wap_meta_des"><?php echo $row->wap_meta_des;?></textarea>
			</div>
		</div>
		<div class="form-row">
			<div class="form-label">
				Meta Content
			</div>
			<div class="form-item">
				<textarea   rows="4" name="wap_meta_content"><?php echo $row->wap_meta_content;?></textarea>
			</div>
		</div>
		<div class="form-row">
			<div class="form-label">
				Footer
			</div>
			<div class="form-item">
				<textarea   rows="4" name="wap_copyright"><?php echo $row->wap_copyright;?></textarea>
			</div>
		</div>
		<div class="form-row">
			<div class="form-label">
				Google API
			</div>
			<div class="form-item">
				<textarea   rows="4" name="wap_script"><?php echo $row->wap_script?></textarea>
			</div>
		</div>
		<div class="form-row">
			<div class="form-label">
				WAP Charging
			</div>
			<div class="form-item">
				<select name="wap_charging">
					<option value="1" <?php if($row->wap_charging == 1):?>  selected="selected" <?php endif;?>>Có</option>
					<option value="0" <?php if($row->wap_charging <> 1):?>  selected="selected" <?php endif;?>>Không</option>
				</select>
			</div>
		</div>
		<div class="form-row">
			<div class="form-label">
				Giao diện
			</div>
			<div class="form-item">
				<select name="wap_template">
					<option value="1"  <?php if($row->wap_template == 1):?>  selected="selected" <?php endif;?>>Mặc định</option>
					<option value="2" <?php if($row->wap_template == 2):?>  selected="selected" <?php endif;?>>Trung Thu</option>
					<option value="3" <?php if($row->wap_template == 3):?>  selected="selected" <?php endif;?>>Mùa hè</option>
					<option value="4"<?php if($row->wap_template == 4):?>  selected="selected" <?php endif;?>>Tết</option>
					<option value="5"<?php if($row->wap_template == 5):?>  selected="selected" <?php endif;?>>Rock</option>
					<option value="6"<?php if($row->wap_template == 6):?>  selected="selected" <?php endif;?>>Hacker</option>
					<option value="7"<?php if($row->wap_template == 7):?>  selected="selected" <?php endif;?>>Tình yêu</option>
				</select>
			</div>
		</div> 
		<div class="form-row">
			<div class="form-label">
				Kích hoạt
			</div>
			<div class="form-item">
				<input name="wap_active" <?php if($row->wap_active == 0):?>checked="checked" <?php endif;?> type="radio" value="0" /> <span class="lbl">
					Không kích hoạt</span> <input name="wap_active" type="radio" value="1" <?php if($row->wap_active == 1):?>checked="checked" <?php endif;?> />
				<span class="lbl"> Kích hoạt</span>
			</div>
		</div> 
		 
		<div class="form-row">
			<br />
		</div>
		<div class="form-row">
			<div class="form-label"></div>
			<div class="form-item">
				<input type="submit" name="submit" value="Thay đổi" />
			</div>
		</div>
		<?php echo form_close(); ?>
		<?php endforeach;?>
	</div>
</div>
