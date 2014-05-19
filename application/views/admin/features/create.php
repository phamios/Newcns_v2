<div class="row-fluid">
    <div class="span12">
        <div class="box dark">
            <header>
                <div class="icons"><i class="icon-edit"></i></div>
                <h5><?php echo $title; ?></h5>
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
            <div id="div-1" class="accordion-body collapse in body">
                <?php echo form_open_multipart('admincp/features/create', array('id' => 'features-create', 'class' => 'form-horizontal')); ?>
                <div class="control-group">
                    <label for="text1" class="control-label">Name Features<span class="require">*</span></label>

                    <div class="controls with-tooltip">
                        <input type="text" id="name_features" class="span6 input-tooltip" data-original-title="Please use your name" data-placement="bottom" name="name_features"/>
                    </div>
                </div>
                <div class="control-group">
                    <label for="text1" class="control-label">Value Features<span class="require">*</span></label>

                    <div class="controls with-tooltip">
                        <input type="text" id="value_features" class="span6 input-tooltip" data-original-title="Please use your name" data-placement="bottom" name="value_features"/>
                    </div>
                </div>

                <div class="control-group">
                    <label for="text1" class="control-label">Active Features<span class="require">*</span></label>

                    <div class="controls with-tooltip">
                        <input class="uniform" type="radio" name="active" value="1" checked>Active <br/>
                        <input class="uniform" type="radio" name="active" value="0" >UnActive
                    </div>
                </div>

                <div class="form-actions">
                    <input type="reset" value="Reset" id="back" class="navigation_button btn">
                    <input type="submit" name="add_button" onclick="create()" value="Create" id="next_btt" class="navigation_button btn btn-primary">
                </div>
                <?php echo form_close(); ?>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    function create (argument) {
        var name = $("#name_features").val();
        if(name != '') {
            $("#next_btt").submit();
        }else{
            alert("Please enter Features  name");
            return;
        }
    }
</script>