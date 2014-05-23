<div class="box grid_12">
    <div class="box-head">
        <h2>Thêm mới MT</h2>
    </div>
    <div class="box-post ">
          <?php echo form_open_multipart('admincp/add_mt'); ?>

        
        <div class="form-item">
            <div class="form-label">Danh sách đầu số</div>
        	<select name="shortcodeid">
                    <option value="" selected></option>
                <?php foreach ($shortcodes as $shortcode): ?>
                    <option value="<?php echo $shortcode->id ?>"><?php echo $shortcode->shortcode ?></option>
                <?php endforeach ?>
        	</select>
		</div>

        <div class="form-row">
            <div class="form-label">Tiêu đề</div>
            <div class="form-item">
                <input type="text" name="title" />
            </div>
        </div>

        <div class="form-row">
            <div class="form-label">MessCode</div>
            <div class="form-item">
                <input type="text" name="messcode"/>
            </div>
        </div>

        <div class="form-row">
            <div class="form-label">Nội dung</div>
            <div class="form-item">
                <textarea name="content"  cols="100" rows="10" maxlength='160' >  </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-label"></div>
            <div class="form-item">
                <input type="submit" name="submit" value="Tạo" />
            </div>
        </div>
                        <?php echo form_close(); ?>
    </div>
</div>
