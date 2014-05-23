<div class="box grid_12">
    <div class="box-head">
        <h2>Thay đổi tin</h2>
    </div>
    <div class="box-post ">
        <?php if ($posts <> null): ?>
        <?php foreach ($posts as $post): ?>
        <?php echo form_open_multipart('admincp/edit_post/'.$post->id); ?>
        <div class="form-row">
            <div class="form-label">Tiêu đề</div>
            <div class="form-item">
            <input type="text" name="post_title" value="<?php echo $post->post_title?>" />
            </div>
        </div>

        <div class="form-item">
            <div class="form-label">Danh sách cate</div>
        	<select name="cateid">
                <?php foreach ($cates as $cate): ?>
                    <?php if ($cate->id === $post->cateid): ?>
                        <option value="<?php echo $cate->id ?>" selected="selected"><?php echo ucfirst($cate->cate_name) ?></option>
                    <?php else: ?>
                        <option value="<?php echo $cate->id ?>"><?php echo ucfirst($cate->cate_name) ?></option>
                    <?php endif ?>
                <?php endforeach ?>
        	</select>
		</div>

        <div class="form-row">
            <div class="form-label">Ảnh minh hoạ</div>
            <div class="form-item">
                <input type="file" name="post_image" size=40 value="<?php echo $post->post_image?>" />
            </div>
        </div>

        <div class="form-row">
            <div class="form-label">Miêu tả</div>
            <div class="form-item">
                <textarea name="post_short"  cols="100" rows="10" maxlength='160' ><?php echo $post->post_short ?></textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-label">Nội dung</div>
            <div class="form-item">
                <textarea name="post_content"  cols="100" rows="10" maxlength='160' ><?php echo $post->post_content ?></textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-item">
                <?php if ($post->active == 1): ?>
                <input name="active" type="radio" value="0" /> <span class="lbl">
                    Không kích hoạt</span> <input name="active" type="radio"
                    value="1" checked/> <span class="lbl"> Kích hoạt</span>
                <?php else: ?>
                <input name="active" type="radio" value="0" checked/> <span class="lbl">
                    Không kích hoạt</span> <input name="active" type="radio"
                    value="1" /> <span class="lbl"> Kích hoạt</span>
                <?php endif; ?>
            </div>
        </div>
        <div class="form-row">
            <br />
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
