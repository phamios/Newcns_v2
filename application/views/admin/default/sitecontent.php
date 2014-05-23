<div class="box grid_12">
	 
	<div class="box-content no-pad">
		<table id="sample-table-1" class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th>No</th>
					<th>Loại</th>
					<th>Danh mục</th>
					<th>Tên sản phẩm</th> 
					<th>Ảnh</th>
					<th>Lượt xem</th>
					<th>Lượt thích</th>
					<th>Tình trạng</th>
					<th>Nổi bật</th>
					<th>Ngày nhập</th>
					<th>Tùy chọn</th>
				</tr>
			</thead>
			<tbody>
			<?php $i=0; ?>
			<?php if($allcontents <> null):?>
			<?php foreach($allcontents as $content):?>
			<?php $i = $i+1;?>
				<tr>
					<td><?php echo $i;?>
					</td>
					<td><?php foreach($alltype as $type):?> <?php if($type->id == $content->typeid):?>
					<?php echo $type->nametype;?> <?php endif;?> <?php endforeach;?></td>
					<td><?php foreach($allcate as $cate):?> <?php if($cate->id == $content->cateid):?>
					<?php echo $cate->catename;?> <?php endif;?> <?php endforeach;?></td>
					<td><a
						href="<?php echo site_url('admincp/edit_sitecontent/'.$content->id);?>"><?php echo $content->namecontent;?>
					</a></td>
				 
					<td><img
						src="<?php echo base_url('src/imagescontent/'.$content->images);?>"
						width="85px" alt="" /></td>
					<td><?php echo $content->countlog;?></td>
					<td><?php echo $content->likelog;?></td>
					<td><?php if($content->active == 1):?> <a
						href="<?php echo site_url("admincp/active_app/".$content->id."/0");?>">
							 <i class="icon-ok bigger-120"></i>  </a> <?php else:?>
						<a
						href="<?php echo site_url("admincp/active_app/".$content->id."/1");?>">
							<img src="<?php echo base_url("themes/huyxom/admin/unactive.gif");?>" /> </a> <?php endif;?>

					</td>
					<td><?php if($content->needhave == 1):?> <a
						href="<?php echo site_url("admincp/needhave/".$content->id."/0");?>">
                                                 <i class="icon-ok bigger-120"></i>  </a> <?php else:?>
						<a
						href="<?php echo site_url("admincp/needhave/".$content->id."/1");?>">
							<img src="<?php echo base_url("themes/huyxom/admin/unactive.gif");?>" /> </a> <?php endif;?>
					</td>
					<td>
                                            <span class="label label-inverse arrowed-in"> <?php echo $content->datecreated;?></span>
                                           
					</td>
					<td><a
						href="<?php echo site_url('admincp/edit_sitecontent/'.$content->id);?>"><i class="icon-edit bigger-120"></i></a>

						<a
						href="<?php echo site_url('admincp/del_sitecontent/'.$content->id);?>"><i class="icon-trash bigger-120"></i></a>
					</td>
				</tr>
				<?php endforeach; ?>
				<?php endif;?>
			</tbody>
		</table>
	</div>
</div>
