<div class="box grid_12">
    <div class="box-head">
        <h2>Add Type</h2>
    </div>
    <div class="box-content no-pad"> 
        <?php echo form_open_multipart('admincp/add_type'); ?>
        <div class="box-content">
            <div class="form-row">
                <p class="form-label">Tên lọai</p>
                <div class="form-item"><input type="text" name="nametype" /></div>
            </div>
            <div class="form-row">
                <p class="form-label">Thứ tự</p>
                <div class="form-item">
                    <select name="typeorder">
                        <?php for ($i = 0; $i <= 20; $i++): ?>
                            <option value="<?php echo $i; ?>"><?php echo $i; ?></option> 
                        <?php endfor; ?> 
                    </select>
                </div>
            </div>
          <div class="form-row">
            <label class="form-label">Color Picker</label>
            <div class="form-item">
              <input type="text" id="colorpicker" name="colorpicker" />
              <span class="form-icon fugue-2 color"></span>
            </div>
          </div>

            <div class="form-row">
                <p class="form-label"> </p>
                <input type="submit" name="submit" value="Submit" />
            </div>
            <div class="clear"></div>
        </div>

        <?php echo form_close(); ?> 
    </div>
</div>

<script> /* SCRIPTS */

$(function() {
 

    $("#colorpicker").ColorPicker();

});

</script>
