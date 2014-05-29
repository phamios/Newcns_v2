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
                <h5>Chỉnh sửa quà tặng</h5>
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
            <?php foreach ($gift as $g): ?>
            <div id="div-1" class="accordion-body collapse in body">
                    <?php echo form_open_multipart('admincp/gift/edit/'.$g->id,array('class'=>'form-horizontal','id'=>'gift-update')); ?>
                    
                    <div class="control-group">
                        <label for="text1" class="control-label">Tiêu đề<span class="require">*</span></label>

                        <div class="controls with-tooltip">
                            <input type="text" id="title" class="span6 input-tooltip" data-original-title="Please use gift title" data-placement="bottom" name="title"
                             value="<?php echo $g->gift_title ?>"/>
                        </div>
                    </div>

                   <div class="control-group">
                    <label for="text1" class="control-label">Đường dẫn đến sản phẩm</label>

                    <div class="controls with-tooltip">
                        <input type="text" id="link" class="span6 input-tooltip" name="link" value="<?php echo $g->gift_link ?>"/>
                    </div>
                </div>
                
                

                <div class="control-group">
                    <label class="control-label">
                        <img src="<?php echo base_url('src/gift/thumb_'.$g->gift_image);?>" width="15%" />
                    </label>
                    <div class="controls">
                        
                        <input type="file" name="gift_image" />
                    </div>
                </div>
                
                <div class="control-group">
                    <label for="text1" class="control-label">Thời gian bắt đầu</label>

                    <div class="controls with-tooltip">
                        
                        <input type="text" id="gift_start" class="span6 input-tooltip" name="gift_start" value="<?php echo $g->timestart ?>"/>
                    </div>
                </div>
                
                <div class="control-group">
                    <label for="text1" class="control-label">Thời gian kết thúc</label>

                    <div class="controls with-tooltip">
                        <input type="text" id="gift_end" class="span6 input-tooltip" name="gift_end" value="<?php echo $g->timeend ?>"/>
                    </div>
                </div>
 

                <div class="control-group">
                    <label for="text1" class="control-label">Nội dung</label>

                    <div class="controls with-tooltip">
                        <textarea id="description" name="content" class="span6" >value="<?php echo $g->gift_content ?>"</textarea>
                    </div>
                </div>
                
                
                <div class="control-group">
                    <label for="text1" class="control-label">Phone liên hệ: </label>

                    <div class="controls with-tooltip">
                        <input type="text" id="phonesupport" class="span6 input-tooltip" name="phonesupport" value="<?php echo $g->phonesupport ?>"/>
                    </div>
                </div>
                
                
                <div class="control-group">
                    <label for="text1" class="control-label">Nhà tài trợ</label>

                    <div class="controls with-tooltip">
                        <input type="text" id="sponsor" class="span6 input-tooltip" name="sponsor" value="<?php echo $g->sponsor ?>"/>
                    </div>
                </div>
                

                    <div class="form-actions">
                        <input type="reset" value="Reset" id="back" class="navigation_button btn">
                        <input type="submit" value="Thay đổi" id="next" name="update_gift" class="navigation_button btn btn-primary">
                    </div>
                <?php echo form_close(); ?>
            </div>
<?php endforeach ?>
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

