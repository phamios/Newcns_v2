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
                    <?php if ($reviews <> null): ?>
                    <?php foreach ($reviews as $review): ?>
                    <?php echo form_open_multipart('admincp/review/edit/'.$review->id, array('id' => 'review-create', 'class' => 'form-horizontal')); ?>
                    <div class="control-group">
                        <label for="text1" class="control-label">Title<span class="require">*</span></label>

                        <div class="controls with-tooltip">
                            <input type="text" id="title" class="span10 input-tooltip" data-original-title="Please use your name" data-placement="bottom" name="title"
                                   value="<?php echo $review->review_title ?>"/>
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

                            <textarea class="span10" id="specsion" name="specs"><?php echo $review->review_specific ?></textarea>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="autosize" class="control-label">Content</label>

                        <div class="controls">
                            <textarea class="span10" id="autosize" name="content"><?php echo $review->review_content ?></textarea>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="limiter" class="control-label">Recommend</label>

                        <div class="controls">
                            <textarea class="span10" id="limiter" name="recommend"><?php echo $review->review_recoment ?></textarea>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="limiter" class="control-label">Highs</label>

                        <div class="controls">
                            <textarea class="span10" id="limiter" name="highs"><?php echo $review->review_high ?></textarea>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="limiter" class="control-label">Lows</label>

                        <div class="controls">
                            <textarea class="span10" id="limiter" name="lows"><?php echo $review->review_low ?></textarea>
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
                            <?php if ($review->review_active == 1): ?>
                            <label>
                                <input class="uniform" type="radio" name="active" value="1" checked/>Active
                            </label>
                            <label>
                                <input class="uniform" type="radio" name="active" value="0"/>Disable
                            </label>
                            <?php else: ?>
                            <label>
                                <input class="uniform" type="radio" name="active" value="1"/>Active
                            </label>
                            <label>
                                <input class="uniform" type="radio" name="active" value="0" checked/>Disable
                            </label>
                            <?php endif ?>
                        </div>
                    </div>

                    <div class="form-actions">
                        <input type="reset" value="Reset" id="back" class="navigation_button btn">
                        <input type="submit" value="Create" id="next" class="navigation_button btn btn-primary" name="submit_review">
                    </div>
                    <?php echo form_close(); ?>
                </div>
<?php endforeach ?>
<?php endif ?>
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
