<div class="box grid_12">
	<div class="box-head">
		<h2>Thêm danh mục cho wap</h2>
	</div>
	<div class="box-content ">
	<?php foreach($detailscate as $cate):?>
	<?php echo form_open_multipart('user/updatecatewap/'.$cate->id); ?>
 
		<div class="form-row">
			<div class="form-label">
				Tên danh mục 
			</div>
			<div class="form-item">
				<input type="text"  name="catename" value="<?php echo $cate->catename;?>"/>
			</div>
		</div>
		 <div class="form-row">
			<div class="form-label">
				iCon cho cate 
			</div>
			<div class="form-item">
				<input type="file" name="cateicon" size=40 />
				<img src="<?php echo base_url('src/'.$userid.'/'.$cate->cateicon);?>" width="40px" alt="icon"/>
			</div>
		</div>
		 
		<div class="form-row">

			<div class="form-item">
				<input name="active" type="radio" value="0" <?php if($cate->active ==  0):?> checked="checked"<?php endif;?>/> <span class="lbl">
					Không kích hoạt</span> <input name="active" type="radio" value="1" <?php if($cate->active ==  1):?> checked="checked"<?php endif;?> />
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
