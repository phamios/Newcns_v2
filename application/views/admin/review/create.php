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
                <h5><?php echo $title; ?></h5>
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
                    <?php echo form_open_multipart('admincp/review/create', array('id' => 'review-create', 'class' => 'form-horizontal')); ?>
                    <div class="control-group">
                        <label for="text1" class="control-label">Title<span class="require">*</span></label>

                        <div class="controls with-tooltip">
                            <input type="text" id="title" class="span10 input-tooltip" data-original-title="Please use your name" data-placement="bottom" name="title"/>
                        </div>
                    </div>
                    <div class="control-group">
                        <label for="autosize" class="control-label">Category</label>

                        <div class="controls">
                            <select name="category">
                                <?php foreach ($category as $cate): ?>
                                    <option value="<?php echo $cate->id ?>"><?php echo $cate->cate_rev_name ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="autosize" class="control-label">Specification</label>

                        <div class="controls">

                            <textarea class="span10" id="specsion" name="specs"></textarea>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="autosize" class="control-label">Content</label>

                        <div class="controls">
                            <textarea class="span10" id="autosize" name="content"></textarea>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="limiter" class="control-label">Recommend</label>

                        <div class="controls">
                            <textarea class="span10" id="limiter" name="recommend"></textarea>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="limiter" class="control-label">Highs</label>

                        <div class="controls">
                            <textarea class="span10" id="limiter" name="highs"></textarea>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="limiter" class="control-label">Lows</label>

                        <div class="controls">
                            <textarea class="span10" id="limiter" name="lows"></textarea>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="tags" class="control-label">Tags</label>

                        <div class="controls">
                            <input class="span6" name="tags" id="tags" value="foo,bar,baz"/>
                        </div>
                    </div>



                    <div class="control-group">
                        <label class="control-label">Status</label>
                        <div class="controls">
                            <label>
                                <input class="uniform" type="radio" name="active" value="1" checked/>Active
                            </label>
                            <label>
                                <input class="uniform" type="radio" name="active" value="0"/>Disable
                            </label>
                        </div>
                    </div>

                    <div class="form-actions">
                        <input type="reset" value="Reset" id="back" class="navigation_button btn">
                        <input type="submit" value="Create" id="next" class="navigation_button btn btn-primary" name="submit_review">
                    </div>
                    <?php echo form_close(); ?>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    function create (argument) {
        var title = $("#title").val();
        if(title != '') {
            $("#review-create").submit();
        }else{
            alert("Please enter review title");
        }
    }
</script>
