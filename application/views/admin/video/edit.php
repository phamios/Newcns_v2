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
                <h5>Chỉnh sửa Video</h5>
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
                    <?php if ($video <> null): ?>
                    <?php foreach ($video as $v): ?>
                    <?php echo form_open_multipart('admincp/video/edit/'.$v->id,array('class'=>'form-horizontal','id'=>'video-update')); ?>
                    
                    <div class="control-group">
                        <label for="text1" class="control-label">Title<span class="require">*</span></label>

                        <div class="controls with-tooltip">
                            <input type="text" id="title" class="span6 input-tooltip" data-original-title="Please use video title" data-placement="bottom" name="title"
                             value="<?php echo $v->video_title ?>"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="text1" class="control-label">Link</label>

                        <div class="controls with-tooltip">
                            <input type="text" id="link" class="span6 input-tooltip" name="link" value="<?php echo $v->video_link ?>"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="text1" class="control-label">Description</label>

                        <div class="controls with-tooltip">
                            <textarea id="description" name="description" class="span6"><?php echo $v->video_description ?></textarea>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Status</label>
                        <div class="controls">
                            <?php if ($v->video_status == 1): ?>
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
                        <input type="submit" value="Update" id="next" name="update_video" class="navigation_button btn btn-primary">
                        <!-- onclick="create()" -->
                    </div>
                <?php echo form_close(); ?>
<?php endforeach ?>
<?php endif ?>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
function create (argument) {
	var name = $("#title").val();

    editor.post();
    var description = editor.t.value;
	if(name != '' && description != '') {
		$("#video-update").submit();
	}else{
		alert("Please enter title");
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
