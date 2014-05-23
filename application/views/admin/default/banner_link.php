<div class="box grid_12">
	<div class="box-head">
		<h2>Quản lý slideshow trên trang chủ</h2>
	</div>

	<div class="box-content">
	<?php echo form_open_multipart('admincp/banner'); ?>
		<input type="file" name="images" size=40 />
		Link: <input type="text" value="" name="link_slide" size=100/>
		Vị trí <select name="position">
			<option value="1" selected="selected">Khuyến mãi</option>
			<option value="2">Sản phẩm hot</option>
			<option value="3">Sản phẩm ưa chuộng</option>
		</select>
		 <input type="submit" name="bttsubmit" value="Thêm mới" />
			<?php echo form_close(); ?>
	</div>
	<div class="clear"></div>

	<div class="box-content">
		<table id="sample-table-1" class="table table-striped table-bordered table-hover">
			<thead>
				<tr>  
					<th width="25%">Images</th>
					<th width="25%">Vị trí</th>
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
					<td>
						<?php if($slide->position == 1):?>
							Khuyến mãi
						<?php elseif($slide->position == 2):?>
							Sản phẩm hot
						<?php elseif($slide->position == 3):?>
							Sản phẩm ưa chuộng
						<?php else :?>
						<?php endif;?>
					</td>
					<td><?php echo $slide->link?></td>
					<td><a
						href="<?php echo site_url('admincp/del_slide/'.$slide->id);?>">Xoá
					</a></td>
				
				</tr>
				<?php endforeach;?>
				<?php endif;?>
			</tbody>
		</table>
		<div class="clear"></div>
	</div>


</div>
