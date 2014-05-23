 <?php echo form_open_multipart('admin_store/cate'); ?>
name: <input type="text" name="catename"/> <br/>
root: <select name="cateroot">
	<?php if($allcate <> null):?>
		<option value="0" selected>---------</option>
	<?php foreach($allcate as $cate):?>
		
		<option value="<?php echo $cate->id;?>"><?php echo $cate->catename;?></option>
	<?php endforeach;?>
	<?php else:?>
		<option value="0">none</option>
	<?php endif;?>
</select><br/>
 images: <input type="file" name="images" size=40 /><br/>
 active: <input type="radio" name="active" value="1" checked> Active | 
<input type="radio" name="active" value="0" > Pending <br/>
<input type="submit" value="Submit" name="submit" />
<?php echo form_close(); ?>  
<hr/>
<table class="display" id="example">
	<thead>
		<tr>
			<th>ID</th>
			<th>Name</th>
			<th>Root</th>
			<th>Images</th>
			<th>Active</th>
			<th>Edit</th>
		</tr>
	</thead>
	<tbody>
	<?php if($allcate <> null):?>
	<?php foreach($allcate as $cate):?>
		<tr>
			<td><?php echo $cate->id;?></td>
			<td><?php echo $cate->catename?></td>
			<td><?php echo $cate->cateroot?></td>
			<td><img width="10%" src="<?php echo base_url('src/imagescontent/'.$cate->cateimages);?>" alt=""/></td>
			<td><?php echo $cate->active?></td>
			
			<td><a href="<?php echo site_url('admin_store/del_cate/'.$cate->id);?>">del</a></td>
		</tr>
		<?php endforeach; ?>
		<?php endif;?>
	</tbody>
</table>
