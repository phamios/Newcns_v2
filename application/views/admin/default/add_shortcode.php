<div class="box grid_12">
    <div class="box-head">
        <h2>Thêm đầu số</h2>
    </div>
    <div class="box-post ">
          <?php echo form_open_multipart('admincp/add_shortcode'); ?>

        <div class="form-row">
            <div class="form-label">Đầu số</div>
            <div class="form-item">
                <input type="text" name="shortcode" />
            </div>
        </div>

        <div class="form-item">
            <div class="form-label">Giá tiền</div>
            <input type="text" name="price"/>
        </div>

        <div class="form-row">
            <div class="form-item">
                <input name="active" type="radio" value="0" checked/> <span class="lbl">
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
