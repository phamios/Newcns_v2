<div class="box grid_12">

	<div class="box-mt no-pad">
<?php echo $pages ?>
		<table id="sample-table-1" class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th>ID</th>
					<th>Đầu số</th>
					<th>MessCode</th>
					<th>Tiêu đề</th>
					<th>Nội dung</th> 
					<th>Ngày tạo</th> 
					<th>User ID</th> 
					<th>Tùy chỉnh</th> 
				</tr>
			</thead>
			<tbody>
			<?php if($mts <> null):?>
			<?php foreach($mts as $mt):?>
				<tr>
					 <td><?php echo $mt->id?></td>
                     <td>
                        <?php foreach ($shortcodes as $code): ?>
                        <?php if ($mt->shortcodeid == $code->id): ?>
                        <?php echo $code->shortcode ?>
                        <?php endif ?>
                        <?php endforeach ?>
                     </td>
					 <td><?php echo $mt->messCode ?></td>
					 <td><?php echo $mt->title ?></td>
					 <td><?php echo $mt->content ?></td>
					 <td><?php echo $mt->timeupdate; ?></td>
					 <td><?php echo $mt->userid; ?></td>
                     <td><a href="<?php echo site_url('admincp/edit_mt/'.$mt->id)?>"><span
                             class="green"> <i class="icon-edit bigger-120"></i> </span> </a>
                         <a href="<?php echo site_url('admincp/del_mt/'.$mt->id)?>"><span
                             class="red"> <i class="icon-trash bigger-120"></i> </span> </a>

                     </td>
				</tr>
				<?php endforeach; ?>
				<?php endif;?>
			</tbody>
		</table>
<?php echo $pages ?>
	</div>
</div>
