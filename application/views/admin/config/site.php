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
                <h5>Cấu hình site</h5>
                <!-- .toolbar -->
                <div class="toolbar">
                    <ul class="nav">
                        <li><a href="#">Link</a></li>
                        <li class="dropdown">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <i class="icon-th-large"></i>
                            </a>
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
                <div class="span7">
                    <?php foreach ($site_config as $s): ?>
                    <?php echo form_open_multipart('admincp/config/site', array('id' => 'site-update', 'class' => 'form-horizontal')); ?>
                    <div class="control-group">
                        <label for="text1" class="control-label">Tiêu đề</label>

                        <div class="controls with-tooltip">
                        <input type="text" id="title" class="span10 input-tooltip" name="title"
                            value="<?php echo isset($s->title) ? $s->title : '' ?>"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="autosize" class="control-label">Meta</label>

                        <div class="controls">
                        <input type="text" id="meta" class="span10 input-tooltip" name="meta"
                            value="<?php echo isset($s->meta) ? $s->meta : '' ?>"/>
                           
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="autosize" class="control-label">Miêu tả</label>

                        <div class="controls">
                          
                             <input type="text" id="description" class="span10 input-tooltip" name="description"
                            value="<?php echo isset($s->description) ? $s->description : '' ?>"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="limiter" class="control-label">Footer</label>

                        <div class="controls">
                            <textarea class="span10" id="footer" name="footer">
                                <?php echo isset($s->footer) ? $s->footer : ''?>
                            </textarea>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="limiter" class="control-label">Footer2</label>

                        <div class="controls">
                            
                             <input type="text" id="footer2" class="span10 input-tooltip" name="footer2"
                            value="<?php echo isset($s->footer2) ? $s->footer2 : '' ?>"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="text1" class="control-label">Link facebook</label>

                        <div class="controls with-tooltip">
                        <input type="text" id="fb" class="span10 input-tooltip" name="fb" 
                            value="<?php echo isset($s->facebook_link) ? $s->facebook_link : ''?>"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="text1" class="control-label">Link Twitter</label>

                        <div class="controls with-tooltip">
                        <input type="text" id="tw" class="span10 input-tooltip" name="tw"
                            value="<?php echo isset($s->twitter_link) ? $s->twitter_link : ''?>"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="text1" class="control-label">Link Google+</label>

                        <div class="controls with-tooltip">
                        <input type="text" id="gg" class="span10 input-tooltip" name="gg"
                            value="<?php echo isset($s->googleplus_link) ? $s->googleplus_link : ''?>"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="text1" class="control-label">Địa chỉ mail hỗ trợ</label>

                        <div class="controls with-tooltip">
                        <input type="text" id="mail" class="span10 input-tooltip" name="mail"
                            value="<?php echo isset($s->mail_support) ? $s->mail_support : '' ?>"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="text1" class="control-label">Điện thoại</label>

                        <div class="controls with-tooltip">
                        <input type="text" id="phone" class="span10 input-tooltip" name="phone"
                            value="<?php echo isset($s->contact_phone) ? $s->contact_phone : '' ?>"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Logo</label>
                        <div class="controls"><input type="file" name="logo" /></div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Favorite Icon</label>
                        <div class="controls"><input type="file" name="fv_icon" /></div>
                    </div>

                    <div class="form-actions">
                        <input type="submit" value="Cập nhật" class="navigation_button btn btn-primary" name="update_site_config">
                    </div>
                    <?php echo form_close(); ?>
<?php endforeach ?>
                </div>
            </div>
        </div>
    </div>
</div>
