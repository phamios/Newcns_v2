 
<div class="box grid_12">
	<div class="box-head">
		<h2>Add Content</h2>
	</div>
	<div class="box-content">
		<div class="block-fluid">
			<?php echo form_open_multipart('admincp/add_news'); ?>
			<div class="form-row">
				<div class="form-label">Chuyên mục:</div>
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
					<input type="text" name="tieude" />
				</div>
				<div class="clear"></div>
			</div>
			<div class="form-row">
				<div class="form-label">Nội dung</div>
				<div class="form-item">
					<textarea class="ckeditor" id="editor1"  name="noidung"
						style="height: 100px; width: 100%;"></textarea>
				</div>
				<div class="clear"></div>
			</div>
			<div class="form-row">
				<div class="form-label">Images:</div>
				<div class="form-item">
					<input type="file" name="images" size=40 />
				</div>

			</div>
			<div class="form-row">
				<div class="form-label">Kích hoạt</div>
				<div class="span9">
					<input name="active" type="radio"  value="1"/>
                        <span class="lbl"> Không kích hoạt</span>
                        <input name="active" type="radio" value="2" />
                        <span class="lbl"> Kích hoạt</span>
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
</div>
