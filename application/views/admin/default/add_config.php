<div class="box grid_12">
	<div class="box-head">
		<h2>Thêm cấu hình</h2>
	</div>
	<div class="box-content no-pad">
		<?php echo form_open_multipart('admincp/add_config'); ?>
		<div class="box-content">
			<div class="form-row">
				<p class="form-label">Tên cấu hình</p>
				<div class="form-item">
					<input type="text" class="field size1" name="config" />
				</div>
                <p class="form-label">Giá trị</p>
                <div class="form-item">
                    <input type="text" class="field size1" name="value" />
                </div>
			</div>

			<div class="form-row">
				<p class="form-label"></p>
				<input type="submit" name="configsubmit" value="Submit" />
			</div>
			<div class="clear"></div>
		</div>

		<?php echo form_close(); ?>

	</div>
</div>
