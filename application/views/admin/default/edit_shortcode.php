<div class="box grid_12">
    <div class="box-head">
        <h2>Thay đổi đầu số</h2>
    </div>
    <div class="box-post ">
        <?php if ($shortcodes <> null): ?>
        <?php foreach ($shortcodes as $shortcode): ?>
        <?php echo form_open_multipart('admincp/edit_shortcode/'.$shortcode->id); ?>

        <div class="form-row">
            <div class="form-label">Đầu số</div>
            <div class="form-item">
            <input type="text" name="shortcode" value="<?php echo $shortcode->shortcode?>"/>
            </div>
        </div>

        <div class="form-item">
            <div class="form-label">Giá tiền</div>
            <input type="text" name="price" value="<?php echo $shortcode->price?>"/>
        </div>

        <div class="form-row">
            <div class="form-item">
                <?php if ($shortcode->active == 0): ?>
                <input name="active" type="radio" value="0" checked/> <span class="lbl">
                    Không kích hoạt</span> <input name="active" type="radio"
                    value="1" /> <span class="lbl"> Kích hoạt</span>
                <?php else: ?>
                <input name="active" type="radio" value="0"/> <span class="lbl">
                    Không kích hoạt</span> <input name="active" type="radio"
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
                <input type="submit" name="submit" value="Thay đổi" />
            </div>
        </div>
                        <?php echo form_close(); ?>
    </div>
</div>
