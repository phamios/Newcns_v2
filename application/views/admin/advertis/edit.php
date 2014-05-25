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
                <form class="form-horizontal" id="category-create" action="<?php echo $this->config->base_url().'admincp/category/edit/'.$id;?>" method="post">
                    <?php if(isset($_GET['success']) && $_GET['success'] == 1): ?>
                        <div id="edit-success">Edit Category Success</div>
                    <?php endif; ?>
                    <div class="control-group">
                        <label for="text1" class="control-label">Name<span class="require">*</span></label>

                        <div class="controls with-tooltip">
                            <input type="text" id="name" class="span6 input-tooltip" data-original-title="Please use your name" data-placement="bottom" name="name" value="<?php echo $model->catename ?>"/>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Image</label>
                        <?php if($model->cateimages != ''): ?>
                            <img src="<?php echo $this->config->base_url().'img/category/'.$model->cateimages;?>" width="200">
                        <?php endif; ?>
                        <div class="controls"><input type="file" name="image" /></div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Category Root</label>

                        <div class="controls">
                            <select id="cate-root" name="cate-root">
                                <option value="0">No Category Root</option>
                                <?php foreach($category as $row): ?>
                                <option value="<?php echo $row->id; ?>" <?php if($model->cateroot == $row->id) {echo "selected";} ?> ><?php echo $row->catename ?></option>
                            	<?php endforeach; ?>
                            </select>
                        </div>
                    </div>

                    <div class="form-actions">
                        <input type="reset" value="Reset" id="back" class="navigation_button btn">
                        <input type="button" onclick="create()" value="Update" id="next" class="navigation_button btn btn-primary">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
function create (argument) {
	var name = $("#name").val();
	if(name != '') {
		$("#category-create").submit();
        //document.getElementById("edit-success").style.display="block";
	}else{
		alert("Please enter catogory name");
	}
}
</script>