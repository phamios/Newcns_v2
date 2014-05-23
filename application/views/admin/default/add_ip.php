<div class="box grid_12">
	<div class="box-head">
		<h2>Thêm IP vào danh sách bị chặn</h2>
	</div>
	<div class="box-content no-pad">
		<?php echo form_open_multipart('admincp/add_ip'); ?>
		<div class="box-content">
			<div class="form-row">
				<p class="form-label">IP</p>
				<div class="form-item">
					<input type="text" class="field size1" name="ipaddress" />
				</div>
                <p class="form-label">Thời gian khóa</p>
                <div class="form-item">
                    <input type="text" class="field size1" name="expired" />
                </div>
			</div>

			<div class="form-row">
				<p class="form-label"></p>
				<input type="submit" name="ipsubmit" value="Submit" />
			</div>
			<div class="clear"></div>
		</div>

		<?php echo form_close(); ?>

	</div>
</div>
