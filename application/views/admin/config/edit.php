<div class="row-fluid">
    <div class="span12">
        <div class="box dark">
            <header>
                <div class="icons"><i class="icon-edit"></i></div>
                <h5>Tạo mới cấu hình</h5>
                <!-- .toolbar -->
                <div class="toolbar">
                    <ul class="nav">
                        <li><a href="#">Link</a></li>
                        <li class="dropdown">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <i class="icon-th-large"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="">q</a></li>
                                <li><a href="">a</a></li>
                                <li><a href="">b</a></li>
                            </ul>
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
            <?php foreach ($config as $c): ?>
            <div id="div-1" class="accordion-body collapse in body">
                    <?php echo form_open_multipart('admincp/config/edit/'.$c->id,array('class'=>'form-horizontal','id'=>'config-edit')); ?>
                    
                    <div class="control-group">
                        <label for="text1" class="control-label">Tên cấu hình</label>

                        <div class="controls with-tooltip">
                        <input type="text" id="name" class="span6 input-tooltip" name="name" value="<?php echo $c->option_name ?>"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="text1" class="control-label">Giá trị</label>

                        <div class="controls with-tooltip">
                            <input type="text" id="value" class="span6 input-tooltip" name="value" value="<?php echo $c->option_value ?>"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Trạng thái</label>
                        <div class="controls">
                            <?php if ($c->option_status == 1): ?>
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
                        <input type="reset" value="Reset" id="back" class="navigation_button btn">
                        <input type="submit" value="Cập nhật" id="next" name="update_config" class="navigation_button btn btn-primary">
                    </div>
                <?php echo form_close(); ?>
            </div>
<?php endforeach ?>
        </div>
    </div>
</div>
