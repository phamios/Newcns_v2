<div class="box grid_12">
    <div class="box-head">
        <h2>Thay đổi MT</h2>
    </div>
    <div class="box-post ">
<?php if ($mts <> null): ?>
<?php foreach ($mts as $mt): ?>
          <?php echo form_open_multipart('admincp/edit_mt/'.$mt->id); ?>

        
        <div class="form-item">
            <div class="form-label">Danh sách đầu số</div>
        	<select name="shortcodeid">
                <?php foreach ($shortcodes as $shortcode): ?>
                <?php if ($shortcode->id == $mt->shortcodeid): ?>
                    <option value="<?php echo $shortcode->id ?>" selected><?php echo $shortcode->shortcode ?></option>
                <?php else: ?>
                    <option value="<?php echo $shortcode->id ?>"><?php echo $shortcode->shortcode ?></option>
                <?php endif ?>
                <?php endforeach ?>
        	</select>
		</div>

        <div class="form-row">
            <div class="form-label">Tiêu đề</div>
            <div class="form-item">
                <input type="text" name="title" value="<?php echo $mt->title ?>"/>
            </div>
        </div>

        <div class="form-row">
            <div class="form-label">MessCode</div>
            <div class="form-item">
                <input type="text" name="messcode" value="<?php echo $mt->messCode ?>"/>
            </div>
        </div>

        <div class="form-row">
            <div class="form-label">Nội dung</div>
            <div class="form-item">
                <textarea name="content" cols="100" rows="10" maxlength='160' ><?php echo $mt->content ?> </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-label"></div>
            <div class="form-item">
                <input type="submit" name="submit" value="Thay đổi" />
            </div>
        </div>
                        <?php echo form_close(); ?>
    </div>
<?php endforeach ?>
<?php endif ?>
</div>
