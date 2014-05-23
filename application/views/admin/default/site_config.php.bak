<div class="box grid_12">
	<div class="box-head">
		<h2>Cập nhật cấu hình website</h2>
	</div>

	<div class="box-content">
 		<?php if($listconfig <> null):?>
		<?php foreach($listconfig as $config):?>
		<?php echo form_open_multipart('admincp/site_config'); ?>
			<div class="form-row">
				<p class="form-label">Logo ( 250x50 )</p>
				<div class="form-item"><input type="file" name="logo_file" size=40 /></div>
				<div class="form-item">
					<img width="100"
						src="<?php echo base_url('src/logo/'.$config->logo);?>"> 
				</div> 
			</div>
			
			<div class="form-row">
				<p class="form-label">Tên website</p>

				<div class="form-item">
					 <input type="text" name="sitename"
					value="<?php echo $config->sitename?>" />
				</div> 
			</div>
			
			<div class="form-row">
				<p class="form-label">Thẻ Meta</p>

				<div class="form-item">
					 <input type="text" name="meta1"
					value="<?php echo $config->meta1?>" />
				</div> 
			</div>
			
			<div class="form-row">
				<p class="form-label">Thẻ Description</p>

				<div class="form-item">
					 <input type="text" name="meta2"
					value="<?php echo $config->meta2?>" />
				</div> 
			</div>
			
			
			<div class="form-row">
				<p class="form-label">Thiết lập Tax:</p>

				<div class="form-item">
					 <select name="tax">
						<option value="1">Có</option>
						<option value="0">Không</option>
					</select>
				</div> 
			</div>
 
			<div class="form-row">
				<p class="form-label">Facebook:</p> 
				<div class="form-item">
					 <input type="text" name="facebook"
					value="<?php echo $config->facebook?>" />
				</div> 
			</div>
			<div class="form-row">
				<p class="form-label">Twitter:</p> 
				<div class="form-item">
					<input type="text" name="twitter"
					value="<?php echo $config->twitter?>" />
				</div> 
			</div>
			<div class="form-row">
				<p class="form-label">Youtube: </p> 
				<div class="form-item">
					 <input type="text" name="youtube"
					value="<?php echo $config->youtube?>" />
				</div> 
			</div>
			 
			
			<div class="form-row">
				<p class="form-label">Liên hệ 1:</p> 
				<div class="form-item">
					<input type="text" name="contact_1"
					value="<?php echo $config->contact_1?>" />
				</div> 
			</div>
			
			<div class="form-row">
				<p class="form-label">Liên hệ 2:</p> 
				<div class="form-item">
					<input type="text" name="contact_2"
					value="<?php echo $config->contact_2?>" />
				</div> 
			</div>
			
			<div class="form-row">
				<p class="form-label">Liên hệ 3:</p> 
				<div class="form-item">
					<input type="text" name="contact_3"
					value="<?php echo $config->contact_3?>" />
				</div> 
			</div>
			
			<div class="form-row">
				<p class="form-label">Liên hệ 4:</p> 
				<div class="form-item">
					<input type="text" name="contact_4"
					value="<?php echo $config->contact_4?>" />
				</div> 
			</div>
			
			<div class="form-row">
				<p class="form-label">Liên hệ 5:</p> 
				<div class="form-item">
					<input type="text" name="contact_5"
					value="<?php echo $config->contact_5?>" />
				</div> 
			</div>
			
			<div class="form-row">
				<p class="form-label">Hotline 1: </p> 
				<div class="form-item">
					<input type="text" name="hotline_1"
					value="<?php echo $config->hotline_1?>" />
				</div> 
			</div>
			
			<div class="form-row">
				<p class="form-label">Hotline 2: </p> 
				<div class="form-item">
					<input type="text" name="hotline_2"
					value="<?php echo $config->hotline_2?>" />
				</div> 
			</div>
			<div class="form-row">
				<p class="form-label">Hotline 3: </p> 
				<div class="form-item">
					<input type="text" name="hotline_3"
					value="<?php echo $config->hotline_3?>" />
				</div> 
			</div>
			<div class="form-row">
				<p class="form-label">Hotline 4: </p> 
				<div class="form-item">
					<input type="text" name="hotline_4"
					value="<?php echo $config->hotline_4?>" />
				</div> 
			</div>
			<div class="form-row">
				<p class="form-label">Hotline 5: </p> 
				<div class="form-item">
					<input type="text" name="hotline_5"
					value="<?php echo $config->hotline_5?>" />
				</div> 
			</div>
			 
			 <div class="form-row">
				<p class="form-label">&nbsp;</p> 
				<div class="form-item">
					<input type="submit" name="bttEditConfig" value="Cập nhật" style="background:blue; color:white;" />
				</div> 
			</div>

			 
			<?php echo form_close(); ?>
			<?php endforeach;?>
			<?php endif;?>
		 
	</div>

	 
</div>

