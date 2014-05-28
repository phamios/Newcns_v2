<script src="http://tinymce.cachefly.net/4.0/tinymce.min.js"></script>
<script type="text/javascript">
tinymce.init({
        selector: "textarea",
        plugins: [
                "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "table contextmenu directionality emoticons template textcolor paste fullpage textcolor"
        ],

        toolbar1: "newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
        toolbar2: "cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media code | inserttime preview | forecolor backcolor",
        toolbar3: "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft",

        menubar: true,
        toolbar_items_size: 'small',

        style_formats: [
                {title: 'Bold text', inline: 'b'},
                {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
                {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
                {title: 'Example 1', inline: 'span', classes: 'example1'},
                {title: 'Example 2', inline: 'span', classes: 'example2'},
                {title: 'Table styles'},
                {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
        ],

        
});</script>




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
                    <?php echo form_open_multipart('admincp/post/create',array('class'=>'form-horizontal','id'=>'post-create')); ?>
                    
                    <div class="control-group">
                        <label class="control-label">Loại tin</label>

                        <div class="controls">
                            <select id="type" name="type">
                                <option value="1" selected>News</option> 
                            </select>
                        </div>
                    </div>
                
                    <div class="control-group">
                        <label for="text1" class="control-label">Tiêu đề<span class="require">*</span></label>

                        <div class="controls with-tooltip">
                            <input type="text" id="title" class="span6 input-tooltip" data-original-title="Please use post title" data-placement="bottom" name="title"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Hình ảnh</label>
                        <div class="controls"><input type="file" name="post_image" /></div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Category<span class="require">*</span></label>

                        <div class="controls">
                            <select id="post-category" name="category">
                                <option value="">KHông chọn</option>
                                <?php foreach($category as $row): ?>
                                <option value="<?php echo $row->id; ?>"><?php echo $row->catename ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                    </div>
                    
 
                    <div class="control-group">
                        <label for="text1" class="control-label">Miêu tả</label>

                        <div class="controls with-tooltip">
							<?php $config_custom = $this->config->item('custom');?>
                            <textarea id="description" name="post_description" name="description" class="span6"> ( <?php echo $config_custom['meta']['title']?> ) -  </textarea>
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
 
