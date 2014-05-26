<script src="http://tinymce.cachefly.net/4.0/tinymce.min.js"></script>
<script type="text/javascript">
    tinymce.init({
        selector: "textarea",
        plugins : 'advlist autolink link image lists charmap print preview',
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
    });
</script>
<div class="row-fluid">
    <div class="span12">
        <div class="box dark">
            <header>
                <div class="icons"><i class="icon-edit"></i></div>
                <h5>Cập nhật quảng cáo</h5>
                <!-- .toolbar -->
                <div class="toolbar">
                    <ul class="nav">
                        <li><a href="#">Link</a></li>
                        <li class="dropdown">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <i class="icon-th-large"></i>
                            </a>
                        </li>
                        <li>
                            <a class="accordion-toggle minimize-box" data-toggle="collapse" href="#div-1">
                                <i class="icon-chevron-up"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- /.toolbar -->
            </header>
            <div id="div-1" class="accordion-body collapse in body"> 
                <div class="span7">
                    <?php foreach ($advertis as $adv): ?>
                    <?php echo form_open_multipart('admincp/advertis/edit/'.$adv->id, array('id' => 'advertis-update', 'class' => 'form-horizontal')); ?>
                    <div class="control-group">
                        <label for="text1" class="control-label">Tên quảng cáo</label>

                        <div class="controls with-tooltip">
                        <input type="text" id="name" class="span10 input-tooltip" name="name" 
                            value="<?php echo $adv->advertis_name ?>" />
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="limiter" class="control-label">Nội dung</label>

                        <div class="controls">
                            <textarea class="span10" name="content">
                            <?php echo $adv->advertis_content ?>
                            </textarea>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Thứ tự</label>

                        <div class="controls">
                            <select name="order">
                                <?php foreach(range(1,10) as $i): ?>
                                <?php if ($adv->advertis_order == $i): ?>
                                <option value="<?php echo $i ?>" selected><?php echo $i ?></option>
                                <?php else: ?>
                                <option value="<?php echo $i ?>"><?php echo $i ?></option>
                                <?php endif ?>
                                <?php endforeach; ?>
                            </select>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Trạng thái</label>
                        <div class="controls">
                            <?php if ($adv->advertis_status == 1): ?>
                            <label>
                                <input class="uniform" type="radio" name="status" value="1" checked/>Active
                            </label>
                            <label>
                                <input class="uniform" type="radio" name="status" value="0"/>Disable
                            </label>
                            <?php else: ?>
                            <label>
                                <input class="uniform" type="radio" name="status" value="1"/>Active
                            </label>
                            <label>
                                <input class="uniform" type="radio" name="status" value="0" checked/>Disable
                            </label>
                            <?php endif ?>
                        </div>
                    </div>

                    <div class="form-actions">
                        <input type="submit" value="Cập nhật" class="navigation_button btn btn-primary" name="update_advertis">
                    </div>
                    <?php echo form_close(); ?>
<?php endforeach ?>
                </div>
            </div>
        </div>
    </div>
</div>
