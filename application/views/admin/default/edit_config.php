<div class="box grid_12">
    <div class="box-head">
        <h2>Thay đổi cấu hình</h2>
    </div>
    <div class="box-post ">
        <?php if ($config <> null): ?>
        <?php foreach ($config as $c): ?>
        <?php echo form_open_multipart('admincp/edit_config/'.$c->id); ?>

        <div class="form-row">
            <div class="form-label">Tên cấu hình</div>
            <div class="form-item">
            <input type="text" name="config" value="<?php echo $c->setting_name?>"/>
            </div>
        </div>

        <div class="form-item">
            <div class="form-label">Giá trị</div>
            <input type="text" name="value" value="<?php echo $c->setting_value?>"/>
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
                <input type="submit" name="configsubmit" value="Thay đổi" />
            </div>
        </div>
                        <?php echo form_close(); ?>
    </div>
</div>
