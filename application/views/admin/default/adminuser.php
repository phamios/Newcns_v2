<div class="box grid_12">
	<div class="box-head">
		<h2>Administrator User Management</h2>
	</div>
	 
		<div class="box-content"> 
		<?php echo form_open_multipart('admincp/searchadmin'); ?>
				<input type="text" name="username" />
				<input type="submit" name="bttSearch"  value="Search"/>
			<?php echo form_close(); ?>
		</div>
		<div class="clear"></div>
 
		<div class="box-content"> 
			<?php echo "Trang:" . $pages;?>
			<table id="sample-table-1" class="table table-striped table-bordered table-hover">
				<thead>
					<tr>
						<th width="5%">ID</th>
						<th width="25%">Name</th> 
						<th width="15%">Cấp độ</th> 
						<th width="35%">Tuỳ chỉnh</th>
					</tr>
				</thead>
				<tbody>
				<?php if($alladmin <> null):?>
				<?php foreach($alladmin as $admin):?>
					<tr>
						<td ><?php echo $admin->id;?></td>
						<td><a href="<?php echo site_url('admincp/edit_useradmin/'.$admin->id);?>" >
						<?php echo $admin->user;?></a></td> 
						<td><?php if($admin->level == 0):?>
							Admnistrator
						<?php elseif($admin->level==1):?>
							Moderator
						<?php elseif($admin->level==2):?>
							Viewer
						<?php else:?>
							Chưa xác định 
						<?php endif;?> 
						</td> 
						<td><a
							href="<?php echo site_url('admincp/del_useradmin/'.$admin->id);?>"
							 >Xoá </a>
						<a href="<?php echo site_url('admincp/edit_useradmin/'.$admin->id);?>" >Sửa</a></td>
					</tr>
					<?php endforeach;?>
					<?php endif;?>
				</tbody>
			</table>
			<?php echo "Trang:" . $pages;?>
			<div class="clear"></div>
		</div>
		 
 
</div>
