 
<div class="box grid_12">
        <?php foreach($details as $content_detail):?>
	<div class="box-head">
		<h2>Add Content</h2>
	</div>
	<div class="box-content">
		<div class="block-fluid">
			<?php echo form_open_multipart('admincp/edit_news/'. $content_detail->id); ?>
			<div class="form-row">
				<div class="form-label">Loại tin:</div>
				<div class="form-item">
					<select name="categorycontent">
						<option selected="selected" value="0">------------------</option>
						<?php foreach($allcatenews as $cate):?>
						<option value="<?php echo $cate->id;?>">
							<?php echo $cate->catename;?>
						</option>
						<?php endforeach;?>
					</select>
				</div>
				<div class="clear"></div>
			</div>
			<div class="form-row">
				<div class="form-label">Tiêu đề</div>
				<div class="form-item">
					<input type="text" name="tieude" value="<?php echo $content_detail->title?>" style="width: 100%;"/>
				</div>
				<div class="clear"></div>
			</div>
			<div class="form-row">
				<div class="form-label">Nội dung</div>
				<div class="form-item">
					<textarea class="ckeditor" id="editor1"  name="noidung"
						style="height: 100px; width: 100%;"><?php echo str_replace(chr(13), "\n", $content_detail->content);?></textarea>
				</div>
				<div class="clear"></div>
			</div>
			<div class="form-row">
				<div class="form-label">Images:</div>
				<div class="form-item">
					<img src="<?php echo base_url('src/news/thumb_'.$content_detail->images);?>"   alt="images" />
					<input type="file" name="images" size=40 />
				</div>

			</div>
			<div class="form-row">
				<div class="form-label">Kích hoạt</div>
				<div class="span9">
					<input type="radio" name="active" value="1" <?php if($content_detail->active == 1 ){echo 'checked';}?>/> Không kích hoạt <input
						type="radio" name="active" value="2" <?php if($content_detail->active == 2 ){echo 'checked';}?>/> Kích hoạt
				</div>
				<div class="clear"></div>

			</div>

			<div class="form-row">
				<div class="form-label"></div>
				<div class="span9">
					<input type="submit" name="submit" value="Chấp nhận" />
				</div>
				<div class="clear"></div>
			</div>
			<?php echo form_close(); ?>

		</div>
	</div>
    <?php endforeach; ?>
</div>
