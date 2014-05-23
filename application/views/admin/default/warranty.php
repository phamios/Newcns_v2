<div class="box grid_12">
	<div class="box-head">
		<h2>List Danh sách Bảo Hành</h2>
	</div>
	<div class="box-content no-pad">
		<table class="display" id="example">
			<thead>
				<tr>
					<th>Tên</th>
					<th>Link check</th>
					<th>Tùy chỉnh</th>
				</tr>
			</thead>
			<tbody>
			<?php if($warran <> null):?>
			<?php foreach($warran as $row):?>
				<tr>
					<td><?php echo $row->name;?>
					</td>
					<td><?php echo $row->link;?>
					</td>
					<td><a
						href="<?php echo site_url('admincp/del_warranty/'.$row->id);?>">
							Xóa </a></td>
				</tr>
				<?php endforeach; ?>
				<?php endif;?>
			</tbody>
		</table>
	</div>
</div>

<div class="box grid_12">
	<div class="box-head">
		<h2>Thêm mới bảo hành</h2>
	</div>
	<div class="box-content no-pad">
	<?php echo form_open_multipart('admincp/warranty'); ?>
		<div class="box-content">
			<div class="form-row">
				<p class="form-label">Tên</p>
				<div class="form-item">
					<input type="text" class="field size1" name="namewarra" />
				</div>
			</div>
			<div class="form-row">
				<p class="form-label">Link</p>
				<div class="form-item">
					<input type="text" class="field size1" name="linkwarra" />
				</div>
			</div>
			<div class="form-row">
				<p class="form-label"></p>
				<input type="submit" name="submit" value="Thêm" />
			</div>
			<div class="clear"></div>
		</div>

		<?php echo form_close(); ?>

	</div>
</div>


