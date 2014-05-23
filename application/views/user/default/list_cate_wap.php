<div class="box grid_12">

	<div class="box-content no-pad">
		<table id="sample-table-1" class="table table-bordered table-hover dataTable">
			<thead>
				<tr>
					<th>TT</th>
					<th>Tên cate</th> 
					<th>Tình trạng</th> 
					<th>ICON</th> 
					<th>Tùy chọn</th>
				</tr>
			</thead>
			<tbody>
			<?php $i=0; ?>
			<?php if($list_cate <> null):?>
			<?php foreach($list_cate as $cate):?>
			<?php $i = $i+1;?>
				<tr>
					<td><?php echo $i;?></td>
					<td><?php echo $cate->catename;?></td> 
					 <td>
					 	<?php if($cate->active == 1):?>
					 	active 
					 	<?php elseif($cate->active == 0):?>
					 	unactive
					 	<?php endif;?>
					 </td>
					 <td><img src="<?php echo base_url('src/'.$userid.'/'.$cate->cateicon);?>" width="40px" alt="icon"/></td>
					 <td>
					 <a href="<?php echo site_url('user/updatecatewap/'.$cate->id)?>"><i class="icon-edit bigger-120"></i></a>
					 <a href="<?php echo site_url('user/delcatewap/'.$cate->id)?>"><i class="icon-trash bigger-120"></i></a></td> 
				</tr>
				<?php endforeach; ?>
				<?php endif;?>
			</tbody>
		</table>
	</div>
</div>


