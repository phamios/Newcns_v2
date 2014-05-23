<div class="span10">
	<h3 class="row-fluid header smaller lighter blue">
		<span class="span7"> <i class="icon-th-large"></i> Chọn sản phẩm cần
			Copy </span>
		<!--/span-->
	</h3>

	<?php echo form_open_multipart('admincp/copy_item'); ?>
	<div class="row-fluid">
		<div class="span12">

			<div class="control-group">
				<label class="control-label" for="form-field-1">Sản phẩm gốc: </label>
				<div class="controls">
					<select name="content_id" id="content_id">
						<option value="0" selected="selected">------------</option>
						<?php foreach($allcontents as $row):?>
						<option value="<?php echo $row->id?>">
						<?php echo $row->namecontent?>
						</option>
						<?php endforeach;?>
					</select>
				</div>
			</div>
			
			<div class="control-group">
            <label class="control-label" for="form-field-1">Tên sản phẩm mới</label> 
            <div class="controls">
                  <input type="text" id="form-field-1" placeholder="Tên sản phẩm mới" name="new_name" />  
            </div>
            <div class="control-group">
            <label class="control-label" for="form-field-1"> </label> 
            <div class="controls">
                  <input type="submit" name="submit" class="btn btn-info" value="Nhập"/>  
            </div>
        </div>

		</div>

		<?php echo form_close(); ?>
		<!--/row-->
	</div>