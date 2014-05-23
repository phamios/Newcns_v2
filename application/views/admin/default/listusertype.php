<div class="box grid_12">
	<div class="box-head">
		<h2>User Type</h2>
	</div>

	<div class="box-content no-pad">

		<table id="sample-table-1" class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th width="13">ID</th>
					<th>Name</th>
					<th>Description</th>
					<th>Status</th>

				</tr>
			</thead>
			<tbody>
				<?php if($list_user_type <> null):?>
				<?php foreach($list_user_type as $user_type):?>
				<tr class="odd gradeX">
					<td class="center"><?php echo $user_type->id;?>
					</td>
					<td class="center"><?php echo '<font color='.$user_type->color.'>'.$user_type->name.'</font>';?>
					</td>
					<td class="center"><?php echo $user_type->desc;?>
					</td>
					<td class="center"><?php echo $user_type->status;?>
					</td>

				</tr>
				<?php endforeach; ?>
				<?php endif;?>
			</tbody>
		</table>
	</div>
	
	<div class="footer">
	
		<a href="<?php echo site_url('usertype/addusertype'); ?>"
			class='button big green'>Thêm mới</a>
	</div>
</div>

