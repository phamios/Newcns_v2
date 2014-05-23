<div class="box grid_12">
    <div class="box-head">
        <h2>Thêm Cate</h2>
    </div>
    <div class="box-post ">
          <?php echo form_open_multipart('admincp/add_cate'); ?>

        <div class="form-row">
            <div class="form-label">Tên Cate</div>
            <div class="form-item">
                <input type="text" name="cate_name" />
            </div>
        </div>

        <div class="form-item">
            <div class="form-label">Danh mục cha</div>
            <select name="cate_root">
                <option value=""></option>
                <?php foreach ($cates as $cate): ?>
                    <option value="<?php echo $cate->id ?>"><?php echo ucfirst($cate->cate_name) ?></option>
                <?php endforeach ?>
            </select>
        </div>

        <div class="form-row">
            <div class="form-item">
                <input name="cate_active" type="radio" value="0" /> <span class="lbl">
                    Không kích hoạt</span> <input name="cate_active" type="radio"
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
