 <?php echo form_open_multipart('admin_store/news'); ?>
title: <input type="text" name="title"/> <br/>
cateid: <select name="cate">
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
 desc: <textarea name="desc"> </textarea><br/>
  content: <textarea name="content"> </textarea><br/>
   link: <input type="text" name="link"/> <br/>
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
			<th>Cate</th> 
			<th>Active</th>
			<th>Edit</th>
		</tr>
	</thead>
	<tbody>
	<?php if($allnew <> null):?>
	<?php foreach($allnew as $new):?>
		<tr>
			<td><?php echo $new->id;?></td>
			<td><?php echo $new->title?></td>
			<td><?php echo $new->cateid?></td> 
			<td><?php echo $new->active?></td> 
			<td><a href="<?php echo site_url('admin_store/del_news/'.$new->id);?>">del</a></td>
		</tr>
		<?php endforeach; ?>
		<?php endif;?>
	</tbody>
</table>
