<div class="box grid_12">
    <div class="box-head">
        <h2>Thay đổi Cate</h2>
    </div>
    <div class="box-post ">
        <?php if ($cates <> null): ?>
        <?php foreach ($cates as $cate): ?>
        <?php echo form_open_multipart('admincp/edit_cate/'.$cate->id); ?>

        <div class="form-row">
            <div class="form-label">Tên Cate</div>
            <div class="form-item">
            <input type="text" name="cate_name" value="<?php echo $cate->cate_name?>"/>
            </div>
        </div>

        <div class="form-item">
            <div class="form-label">Danh mục cha</div>
            <select name="cate_root">
                <option value=""></option>
                <?php foreach ($allcates as $c): ?>
                    <?php if ($c->id === $cate->cate_root): ?>
                        <option value="<?php echo $c->id ?>" selected="selected"><?php echo ucfirst($c->cate_name) ?></option>
                    <?php else: ?>
                        <option value="<?php echo $c->id ?>"><?php echo ucfirst($c->cate_name) ?></option>
                    <?php endif ?>
                <?php endforeach ?>
            </select>
        </div>

        <div class="form-row">
            <div class="form-item">
                <?php if ($cate->cate_active === 0): ?>
                <input name="cate_active" type="radio" value="0" checked/> <span class="lbl">
                    Không kích hoạt</span> <input name="cate_active" type="radio"
                    value="1" /> <span class="lbl"> Kích hoạt</span>
                <?php else: ?>
                <input name="cate_active" type="radio" value="0" checked/> <span class="lbl">
                    Không kích hoạt</span> <input name="cate_active" type="radio"
                    value="1" checked/> <span class="lbl"> Kích hoạt</span>
                <?php endif ?>
            </div>
        </div>
        <?php endforeach ?>
        <?php endif ?>
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
