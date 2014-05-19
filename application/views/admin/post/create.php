<link rel="stylesheet" href="<?php echo $this->config->base_url();?>css/tinyeditor.css">
<script src="<?php echo $this->config->base_url();?>js/tiny.editor.packed.js"></script>


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
                    <?php echo form_open_multipart('admincp/post/create',array('class'=>'form-horizontal','id'=>'post-create')); ?>
                    <div class="control-group">
                        <label for="text1" class="control-label">Title<span class="require">*</span></label>

                        <div class="controls with-tooltip">
                            <input type="text" id="title" class="span6 input-tooltip" data-original-title="Please use post title" data-placement="bottom" name="title"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Image</label>
                        <div class="controls"><input type="file" name="post_image" /></div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Category<span class="require">*</span></label>

                        <div class="controls">
                            <select id="post-category" name="category">
                                <option value="">No select</option>
                                <?php foreach($category as $row): ?>
                                <option value="<?php echo $row->id; ?>"><?php echo $row->catename ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Type</label>

                        <div class="controls">
                            <select id="type" name="type">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Feature<span class="require">*</span></label>

                        <div class="controls">
                            <select id="feature" name="feature">
                                <option value="">No select</option>
                                <?php foreach($features as $row): ?>
                                <option value="<?php echo $row->id; ?>"><?php echo $row->features_name ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="text1" class="control-label">Description</label>

                        <div class="controls with-tooltip">
                            <textarea id="description" name="description" class="span6"></textarea>
                            <!-- <input type="text" id="description" class="span6 input-tooltip" data-original-title="Please use post title" data-placement="bottom" name="description"/> -->
                        </div>
                    </div>

                    <div class="form-actions">
                        <input type="reset" value="Reset" id="back" class="navigation_button btn">
                        <input type="submit" value="Create" id="next" name="submit_post" class="navigation_button btn btn-primary">
                        <!-- onclick="create()" -->
                    </div>
                <?php echo form_close(); ?>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
$(function () {
    $('#post-create').validate({
        rules: {
            'title': 'required',
            'category' : {
                required: true,
                digits: true
            },
            'feature' : {
                required: true,
                digits: true
            },
        },
        ignore: [],
        messages: {
            title: "Please enter title",
            category: "Please select category",
            feature: "Please select feature"
        },
        submitHandler: function(form) {
            editor.post();
            //var description = editor.t.value;
            var description = $("<input>")
               .attr("type", "hidden")
               .attr("name", "description").val(editor.t.value);
            $('#post-create').append($(input));
            form.submit();
        }
    });
});
function create (argument) {
	var name = $("#name").val();
    var category = $("#post-category").val();
    var feature = $("#feature").val();

    editor.post();
    var description = editor.t.value;
    console.log(description);
	if(name != '' && category != 0 && feature != 0 && description != '') {
		$("#post-create").submit();
	}else{
		alert("Please enter");
	}
}
</script>
<script>
new TINY.editor.edit('editor',{
    id: 'description',
    width: '584',
    height: 175,
    cssclass: 'tinyeditor',
    controlclass: 'tinyeditor-control',
    rowclass: 'tinyeditor-header',
    dividerclass: 'tinyeditor-divider',
    controls: ['bold', 'italic', 'underline', 'strikethrough', '|', 'subscript', 'superscript', '|',
        'orderedlist', 'unorderedlist', '|', 'outdent', 'indent', '|', 'leftalign',
        'centeralign', 'rightalign', 'blockjustify', '|', 'unformat', '|', 'undo', 'redo', 'n',
        'font', 'size', 'style', '|', 'image', 'hr', 'link', 'unlink', '|', 'print'],
    footer: true,
    fonts: ['Verdana','Arial','Georgia','Trebuchet MS'],
    xhtml: true,
    cssfile: 'custom.css',
    bodyid: 'editor',
    footerclass: 'tinyeditor-footer',
    toggle: {text: 'source', activetext: 'wysiwyg', cssclass: 'toggle'},
    resize: {cssclass: 'resize'}
});
</script>
<script type="text/javascript">

</script>