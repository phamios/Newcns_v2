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

        menubar: false,
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

        templates: [
                {title: 'Test template 1', content: 'Test 1'},
                {title: 'Test template 2', content: 'Test 2'}
        ]
});</script>


<div class="row-fluid">
    <div class="span12">
        <div class="box dark">
            <header>
                <div class="icons"><i class="icon-edit"></i></div>
                <h5>Tạo mới quà tặng</h5>
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
                    <?php echo form_open_multipart('admincp/gift/create',array('class'=>'form-horizontal','id'=>'gift-create')); ?>
                    
                    <div class="control-group">
                        <label for="text1" class="control-label">Tiêu đề<span class="require">*</span></label>

                        <div class="controls with-tooltip">
                            <input type="text" id="title" class="span6 input-tooltip" data-original-title="Please use gift title" data-placement="bottom" name="title"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="text1" class="control-label">Link</label>

                        <div class="controls with-tooltip">
                            <input type="text" id="link" class="span6 input-tooltip" name="link"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="text1" class="control-label">Video</label>

                        <div class="controls with-tooltip">
                            <input type="text" id="video" class="span6 input-tooltip" name="video"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="text1" class="control-label">Nội dung</label>

                        <div class="controls with-tooltip">
                            <textarea id="description" name="content" class="span6"></textarea>
                        </div>
                    </div>

                    <div class="form-actions">
                        <input type="reset" value="Reset" id="back" class="navigation_button btn">
                        <input type="submit" value="Tạo mới" id="next" name="submit_gift" class="navigation_button btn btn-primary">
                        <!-- onclick="create()" -->
                    </div>
                <?php echo form_close(); ?>
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
		$("#gift-create").submit();
	}else{
		alert("Hãy điền tiêu đề cho gift!");
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
