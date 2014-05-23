<div class="box grid_12"> 
	<div class="box-content no-pad">
<?php echo $pages ?>
		<table id="sample-table-1" class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th>TT</th>
					<th>Loại</th>
					<th>ICON</th>
					<th>Tên app</th>
					<th>Link</th>
					<th>Download </th>
					<th>Doanh thu</th>
					<th>Ngày tạo</th>
					<th>Developer</th>
					<th>MB</th>  
					<th>Tình trạng</th>
					<th>Tùy chọn</th>
				</tr>
			</thead>
			<tbody>
			<?php $i=0; ?>
			<?php if($apps <> null):?>
			<?php foreach($apps as $app):?>
			<?php $i = $i+1;?>
				<tr>
					 <td><?php echo $i;?></td>
					 <td><?php if($app->apptype == 1):?>
								<i class="fa fa-fw fa-android"></i>
						<?php endif; ?>
						<?php if($app->apptype == 2):?>
								<i class="fa fa-fw fa-apple"></i>
						<?php endif; ?>
						<?php if($app->apptype == 3):?>
								<i class="fa fa-fw fa-windows"></i>
						<?php endif; ?>
					 </td>
					 <td><p align="center"><img src="<?php echo $app->appicon?>" width="30px" height="auto"></p></td>
					 <td><?php echo $app->app_name?></td>
					 <td><a href="<?php echo $app->app_link; ?>"> <i class="fa fa-fw fa-cloud-upload"></i></a></td>
					 <td>10</td>
					 <td>900,000 vnd</td>
					 <td><?php echo $app->datecreated?></td>
					 <td><?php echo $app->developer?></td>
					 <td><?php echo $app->filesize?></td>  
					 <td>
					 	<?php if($app->active == 1):?>
					 	 <span class="label label-success">Kích hoạt</span>
					 	  <?php else:?>
					 	  Tạm dừng
					 	  <?php endif;?>
					 </td>
					 <td>
 					 <p style="white-space:nowrap">
					 <a href="<?php echo site_url('user/gallery/'.$app->id)?>"><i class="icon-picture bigger-120"></i></a>
					 <a href="<?php echo site_url('user/update_app/'.$app->id)?>"><span class="label label-success">Sửa</span></a>
					 <a href="<?php echo site_url('user/del_app/'.$app->id)?>"><span class="label label-success">Xoá</span></a></td> 
					 </p>
				</tr>
				<?php endforeach; ?>
				<?php endif;?>
			</tbody>
		</table>
<?php echo $pages ?>
	</div>
</div>


