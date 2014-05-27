<div class="row-fluid">
    <div class="span12">
        <div class="box dark">
            <header>
                <div class="icons"><i class="icon-edit"></i></div>
                <h5><?php echo $title; ?></h5>
                <!-- .toolbar -->
                <div class="toolbar">
                    <ul class="nav">
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
                    <?php echo form_open_multipart('admincp/review_cate/create',array('class'=>'form-horizontal')); ?>
                    <div class="control-group">
                        <label for="text1" class="control-label">Tên<span class="require">*</span></label>

                        <div class="controls with-tooltip">
                            <input type="text" id="cate_name" class="span6 input-tooltip"  name="cate_name"/> 
                        </div>
                    </div>
                     
                    <div class="control-group">
                        <label class="control-label">Category Cha</label>

                        <div class="controls">
                            <select id="cate-root" name="cate_root">
                                <option value="0">Không có Category Cha</option>
                                <?php if($category <> null):?>
                                <?php foreach($category as $row): ?>
                                <option value="<?php echo $row->id; ?>"><?php echo $row->cate_rev_name ?></option>
                            	<?php endforeach; ?>
                                <?php endif;?>
                            </select>
                        </div>
                    </div>

                    <div class="form-actions">
                        <input type="reset" value="Reset" id="back" class="navigation_button btn">
                        <input type="submit" name="submit" onclick="create()" value="Create" id="next" class="navigation_button btn btn-primary">
                    </div>
                 <?php echo form_close(); ?>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
function create (argument) {
	var name = $("#cate_name").val();
	if(name == '') {
		alert("Hãy điền tên của Category");
	} 
}
</script>
