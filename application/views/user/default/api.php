<div class="box grid_12">

	<div class="box-content no-pad">
		<table id="sample-table-1" class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th>TT</th>
					<th>Xem API</th>
					<th>Tên app</th>
					<th>Tin nhắn trả về</th>
					<th>Giá charge</th>
					<th>Ngày cập nhật</th>
					<th>Tình trạng</th>
					<th>Tùy chọn</th>
				</tr>
			</thead>
			<tbody>
			<?php $i=0; ?>
			<?php if($apis <> null):?>
			<?php foreach($apis as $api):?>
			<?php $i = $i+1;?>
				<tr>
					 <td><?php echo $i;?></td>
					 <td>
					 	<a target="_blank" href="<?php echo site_url('api/sms/'.$userid.'/'.$api->id);?>">Link</a>
					 </td>
					 <td>
					 <?php foreach($apps as $app):?>
							<?php if($app->id == $api->appid):?>
								 <?php echo $app->app_name?>
							<?php endif;?>
					 <?php endforeach;?>
					 </td>
					 <td><?php echo $api->mess?></td>
					 <td>
					 	<?php foreach($shortcode as $code):?>
					 		<?php if($code->id == $api->cost):?>
					 			<?php echo $code->price;?>
					 		<?php endif;?>
					 	<?php endforeach;?>
					</td>
					 <td><?php echo $api->timeupdate?></td>
					 <td>
					 	<?php if($api->active == 1):?>
					 	  Kích hoạt
					 	  <?php else:?>
					 	  Tạm dừng
					 	  <?php endif;?>
					 </td>
					 <td>
					 <a href="<?php echo site_url('user/update_api/'.$api->id)?>"><i class="icon-edit bigger-120"></i></a>
					 <a href="<?php echo site_url('user/del_api/'.$api->id)?>"><i class="icon-trash bigger-120"></i></a></td>

				</tr>
				<?php endforeach; ?>
				<?php endif;?>
			</tbody>
		</table>
	</div>
</div>
