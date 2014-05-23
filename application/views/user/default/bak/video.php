<div class="row-fluid">
	<div class="span12">
		<!--PAGE CONTENT BEGINS--> 
		<div class="row-fluid"> 
		
<?php echo $pages ?>
			<table id="sample-table-2"
				class="table table-striped table-bordered table-hover">
				<thead>

					<tr>
						<th class="center"><label>  Stt<span
								class="lbl"></span>
						</label> 
						</th>
						<th>Loại Video</th>
						<th>Tên Video</th>
						<th>Link</th> 
						<th>Tình trạng</th>
						<th>Lượt xem</th>
						<th>Thời lượng</th>
						<th>Thumbnail</th>
						<th>Tùy chọn</th>
					</tr>
				</thead>

				<tbody>
					<?php $i=0; ?>
					<?php if($list_video <> null):?>
					<?php foreach($list_video as $video):?>
					<?php $i = $i+1;?>
					<tr>
						<td class="center"><label> <input type="checkbox"
								value="<?php echo $video->id;?>" /> <span class="lbl"></span>
						</label>
						</td> 
						<td> <?php echo $video->shortcode;?> </td>
						<td><?php echo $video->video_name; ?></td>
						<td><?php echo $video->video_link; ?></td>
						<td><span class="label label-warning"><?php if($video->active == 1):?> Kích hoạt <?php else:?> Tạm
							dừng <?php endif;?></span>
						</td>
						<td><?php echo $video->video_count;?></td>
						<td><?php echo $video->video_duration;?> phút</td>
						 <td><img src="<?php echo $video->video_image;?>" width="20%" alt=""/></td>
					 
						<td class="td-actions">
							<div class="hidden-phone visible-desktop action-buttons">
								<a class="blue" href="<?php echo site_url('user/update_video/'.$video->id)?>"> <i class="icon-zoom-in bigger-130"></i>
								</a> 
								<a class="green" href="<?php echo site_url('user/update_video/'.$video->id)?>"> <i
									class="icon-pencil bigger-130"></i>
								</a> 
								
								<a class="red" href="<?php echo site_url('user/del_video/'.$video->id)?>"> <i class="icon-trash bigger-130"></i>
								</a>
							</div>

							 
						</td>
					</tr>
					<?php endforeach; ?>
					<?php endif;?>
				</tbody>
			</table>
<?php echo $pages ?>
		</div>


	</div>
	<!--PAGE CONTENT ENDS-->
</div>
<!--/.span-->
</div>
