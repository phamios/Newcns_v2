<div class="box grid_12">
	<div class="box-head">
		<h2>Thêm Nội dung</h2>
	</div>
	<div class="box-content ">
		  <?php echo form_open_multipart('user/content'); ?>

            <div style="width:40%;" class="form-group">
			<label>Tiêu đề</label>
				<input class="form-control" type="text" name="content_title" />
		</div>
		 
		<div class="form-group">
			<label>Nội dung</label>
			<div class="form-item">
				<textarea class="form-controll" name="content_content"  cols="100" rows="10" maxlength='160' >  </textarea>
			</div>
		</div>
 
		<div class="form-row">
			<br />
		</div>
		<div class="form-group">
			<div class="form-label"></div>
			<div class="form-group">
				<input class="btn btn-primary" type="submit" name="submit" value="Tạo" />
			</div>
		</div>
                        <?php echo form_close(); ?>
	</div>
</div>


<div class="box grid_12">

	<div class="box-content no-pad">
		<table id="sample-table-1" class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th>TT</th>
					<th>Tiêu đề</th>
					<th>Nội dung</th> 
					<th>Ngày tạo</th> 
					<th>Tùy chỉnh</th> 
				</tr>
			</thead>
			<tbody>
			<?php $i=0; ?>
			<?php if($contents <> null):?>
			<?php foreach($contents as $content):?>
			<?php $i = $i+1;?>
				<tr>
					 <td><?php echo $i;?></td>
					 <td><?php echo $content->title; ?></td>
					 <td><?php echo $content->content; ?></td>
					 <td><?php echo $content->timeupdate; ?></td>
					 <td><a href="<?php echo site_url('user/del_content/'. $content->id); ?>"> Xóa </a></td>
				</tr>
				<?php endforeach; ?>
				<?php endif;?>
			</tbody>
		</table>
	</div>
</div>
