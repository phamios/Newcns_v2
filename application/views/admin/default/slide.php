<div class="box grid_12">
	<div class="box-head">
		<h2>Quản lý slideshow trên trang chủ</h2>
	</div>

	<div class="box-content">
	<?php echo form_open_multipart('admincp/slide'); ?>
		<input type="file" name="images" size=40 />
		Link: <input type="text" value="" name="link_slide" size=100/>
		 <input type="submit" name="bttsubmit" value="Thêm mới" />
			<?php echo form_close(); ?>
	</div>
	<div class="clear"></div>

	<div class="box-content">
		<table id="sample-table-2" class="table table-striped table-bordered table-hover">
			<thead>
				<tr> 
					<th width="25%">Images</th>
					<th width="15%">Link</th>
					<th width="35%">Tuỳ chỉnh</th>
				</tr>
			</thead>
			<tbody>
			<?php if($slide_list <> null):?>
			<?php foreach($slide_list as $slide):?>
				<tr>
					<td><img
						src="<?php echo base_url("src/slidejs/".$slide->imageslink);?>"
						width="100px" />
					</td>
					<td><?php echo $slide->link?></td>
					<td><a
						href="<?php echo site_url('admincp/del_slide/'.$slide->id);?>"><i class="icon-trash bigger-120"></i> Xóa
					</a></td>
				
				</tr>
				<?php endforeach;?>
				<?php endif;?>
			</tbody>
		</table>
		<div class="clear"></div>
	</div>


</div>
