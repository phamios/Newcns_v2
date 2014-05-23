

<div class="row-fluid">

    <div class="box-head">
        <h2>Add Content</h2>
    </div>
    <div class="box-content">
        <div class="block-fluid">
            <?php echo form_open_multipart('admincp/add_sitecontent'); ?>
            <fieldset>
                <script type="text/javascript">
                    function changeitem(selectObj) {
                        var id = selectObj.value;
                        var dataString = id;
                        $.ajax({
                            url: "<?php echo base_url() . 'index.php/admincp/ajaxtypetocate/'; ?>" + dataString,
                            type: 'POST',
                            data: dataString,
                            success: function(output_string) {
                                $(".resultajax").html(output_string);
                            },
                            error: function() {
                                alert('null');
                            }
                        });
                    }
                </script>
                <div class="form-row">
                    <div class="form-label">Loại</div>
                    <div class="form-item">
                        <?php if ($alltype <> null): ?>
                            <select name="typeid" id="typeid" onchange="changeitem(this);">
                                <option value="0" selected="selected">------------</option>
                                <?php foreach ($alltype as $type): ?>
                                    <option value="<?php echo $type->id; ?>">
                                        <?php echo $type->nametype; ?>
                                    </option>
                                <?php endforeach; ?>
                            </select>
                        <?php endif; ?>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-label">Danh mục</div>
                    <div class="form-item">
                        <span class="resultajax"> </span>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-label">Tiêu đề</div>
                    <div class="form-item">
                        <input type="text" name="namecontent" />
                    </div>

                </div>
                <div class="form-row">
                    <div class="form-label">Giá:</div>
                    <div class="form-item">
                        <input type="text" name="coins" size="10" value="0" />
                    </div>

                </div>
                <div class="form-row">
                    <div class="form-label">Mô tả</div>
                    <div class="form-item"> 
                        <textarea class="ckeditor" id="editor1"  name="description"  style="height: 100px; width: 100%;">  </textarea>
                    </div> 
                </div>

                <div class="form-row">
                    <div class="form-label">Đặc điểm</div>
                    <div class="form-item">
                        <textarea class="ckeditor" cols="100" rows="10"  id="editor1"  name="features" style="height: 100px; width: 100%;">
                                                        <ul>
                                                    <li>Màn hình:  </li>
                                                    <li>HĐH:  </li>
                                                    <li>CPU:  </li>
                                                     <li>RAM:  </li>  
                                                    <li>Camera:  </li>
                                                    <li>Dung lượng bộ nhớ:  </li> 
                                                    <li>Dung lượng pin:  </li> 
                                                     <li>Màu sắc:  </li>  
                                                    
                                                    </ul>
                                                        
                        </textarea>
                    </div> 
                </div>
                <div class="form-row">
                    <div class="form-label">Ảnh giới thiệu:</div>
                    <div class="form-item">
                        <div class="form-label"> rộng 699px - cao 390px</div>
                        <input type="file" name="images" size=40 /> 
                    </div>

                </div>


                <div class="form-row">
                    <div class="form-label">Screenshot 1:</div>
                    <div class="form-item">
                        <div class="form-label">  rộng 699px - cao 390px</div>
                        <input type="file" name="ifiles_2" size=40 />
                        <input type="hidden" name="ifiles" size=40 />
                    </div>

                </div>
                <div class="form-row">
                    <div class="form-label">Screenshot 2 (tùy chọn):</div>
                    <div class="form-item">
                        <div class="form-label"> rộng 699px - cao 390px</div>
                        <input type="file" name="ifiles_3" size=40 />
                    </div>

                </div>

                <div class="form-row"> 
                    <p></p>
                    <div class="span9">
                        <input name="active" type="radio"  value="0"/>
                        <span class="lbl"> Không kích hoạt</span>
                        <input name="active" type="radio" value="1" />
                        <span class="lbl"> Kích hoạt</span>
                    </div>
                    <div class="clear"></div>

                </div>
                <div class="form-row">
                    <div class="form-label"></div>
                    <div class="span9">
                        <input type="submit" name="submit" value="Chấp nhận" />
                    </div>
                    <div class="clear"></div>
                </div>
            </fieldset>

            <?php echo form_close(); ?>

        </div>
    </div>
</div>



<script type="text/javascript">
    var $assets = "assets";//this will be used in loading jQuery UI if needed!
</script>

<!--page specific plugin scripts-->


<script src="<?php echo base_url('themes/admincp') ?>/assets/js/jquery-ui-1.10.3.custom.min.js"></script>
<script src="<?php echo base_url('themes/admincp') ?>/assets/js/jquery.ui.touch-punch.min.js"></script>
<script src="<?php echo base_url('themes/admincp') ?>/assets/js/markdown/markdown.min.js"></script>
<script src="<?php echo base_url('themes/admincp') ?>/assets/js/markdown/bootstrap-markdown.min.js"></script>
<script src="<?php echo base_url('themes/admincp') ?>/assets/js/jquery.hotkeys.min.js"></script>
<script src="<?php echo base_url('themes/admincp') ?>/assets/js/bootstrap-wysiwyg.min.js"></script>
<script src="<?php echo base_url('themes/admincp') ?>/assets/js/bootbox.min.js"></script>

<!--ace scripts-->

<script src="<?php echo base_url('themes/admincp') ?>/assets/js/ace-elements.min.js"></script>
<script src="<?php echo base_url('themes/admincp') ?>/assets/js/ace.min.js"></script>

<!--inline scripts related to this page-->

<script type="text/javascript">
    $(function() {

        function showErrorAlert(reason, detail) {
            var msg = '';
            if (reason === 'unsupported-file-type') {
                msg = "Unsupported format " + detail;
            }
            else {
                console.log("error uploading file", reason, detail);
            }
            $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
                    '<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#alerts');
        }

//$('#editor1').ace_wysiwyg();//this will create the default editor will all buttons

//but we want to change a few buttons colors for the third style
        $('#editor1').ace_wysiwyg({
            toolbar:
                    [
                        'font',
                        null,
                        'fontSize',
                        null,
                        {name: 'bold', className: 'btn-info'},
                        {name: 'italic', className: 'btn-info'},
                        {name: 'strikethrough', className: 'btn-info'},
                        {name: 'underline', className: 'btn-info'},
                        null,
                        {name: 'insertunorderedlist', className: 'btn-success'},
                        {name: 'insertorderedlist', className: 'btn-success'},
                        {name: 'outdent', className: 'btn-purple'},
                        {name: 'indent', className: 'btn-purple'},
                        null,
                        {name: 'justifyleft', className: 'btn-primary'},
                        {name: 'justifycenter', className: 'btn-primary'},
                        {name: 'justifyright', className: 'btn-primary'},
                        {name: 'justifyfull', className: 'btn-inverse'},
                        null,
                        {name: 'createLink', className: 'btn-pink'},
                        {name: 'unlink', className: 'btn-pink'},
                        null,
                        {name: 'insertImage', className: 'btn-success'},
                        null,
                        'foreColor',
                        null,
                        {name: 'undo', className: 'btn-grey'},
                        {name: 'redo', className: 'btn-grey'}
                    ],
            'wysiwyg': {
                fileUploadError: showErrorAlert
            }
        }).prev().addClass('wysiwyg-style2');


        $('[data-toggle="buttons-radio"]').on('click', function(e) {
            var target = $(e.target);
            var which = parseInt($.trim(target.text()));
            var toolbar = $('#editor1').prev().get(0);
            if (which == 1 || which == 2 || which == 3) {
                toolbar.className = toolbar.className.replace(/wysiwyg\-style(1|2)/g, '');
                if (which == 1)
                    $(toolbar).addClass('wysiwyg-style1');
                else if (which == 2)
                    $(toolbar).addClass('wysiwyg-style2');
            }
        });


        if (typeof jQuery.ui !== 'undefined' && /applewebkit/.test(navigator.userAgent.toLowerCase())) {

            var lastResizableImg = null;
            function destroyResizable() {
                if (lastResizableImg == null)
                    return;
                lastResizableImg.resizable("destroy");
                lastResizableImg.removeData('resizable');
                lastResizableImg = null;
            }

            var enableImageResize = function() {
                $('.wysiwyg-editor')
                        .on('mousedown', function(e) {
                            var target = $(e.target);
                            if (e.target instanceof HTMLImageElement) {
                                if (!target.data('resizable')) {
                                    target.resizable({
                                        aspectRatio: e.target.width / e.target.height,
                                    });
                                    target.data('resizable', true);

                                    if (lastResizableImg != null) {//disable previous resizable image
                                        lastResizableImg.resizable("destroy");
                                        lastResizableImg.removeData('resizable');
                                    }
                                    lastResizableImg = target;
                                }
                            }
                        })
                        .on('click', function(e) {
                            if (lastResizableImg != null && !(e.target instanceof HTMLImageElement)) {
                                destroyResizable();
                            }
                        })
                        .on('keydown', function() {
                            destroyResizable();
                        });
            };

            enableImageResize();
        }


    });
</script>
