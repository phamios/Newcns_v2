<div class="box grid_12">
    <div class="box-head">
        <h2>Thêm mới tin</h2>
    </div>
    <div class="box-post ">
          <?php echo form_open_multipart('admincp/add_news'); ?>

        <div class="form-row">
            <div class="form-label">Tiêu đề</div>
            <div class="form-item">
                <input type="text" name="post_title" />
            </div>
        </div>

        <div class="form-item">
            <div class="form-label">Danh sách cate</div>
        	<select name="cateid">
                <?php foreach ($cates as $cate): ?>
                    <option value="<?php echo $cate->id ?>"><?php echo ucfirst($cate->cate_name) ?></option>
                <?php endforeach ?>
        	</select>
		</div>

        <div class="form-row">
            <div class="form-label">Ảnh minh hoạ</div>
            <div class="form-item">
                <input type="file" name="post_image" size=40 />
            </div>
        </div>

        <div class="form-row">
            <div class="form-label">Miêu tả</div>
            <div class="form-item">
                <textarea name="post_short"  cols="100" rows="10" maxlength='160' >  </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-label">Nội dung</div>
            <div class="form-item">
                <textarea name="post_content"  cols="100" rows="10" maxlength='160' >  </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-item">
                <input name="active" type="radio" value="0" /> <span class="lbl">
                    Không kích hoạt</span> <input name="active" type="radio"
                    value="1" /> <span class="lbl"> Kích hoạt</span>
            </div>
        </div>

        <div class="form-row">
            <br />
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
