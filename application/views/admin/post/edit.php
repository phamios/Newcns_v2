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
            <?php if($details_post <> null):?>
            <?php foreach($details_post as $post):?>
            <div id="div-1" class="accordion-body collapse in body">
                    <?php echo form_open_multipart('admincp/post/edit'.$post->id,array('class'=>'form-horizontal','id'=>'post-create')); ?>
                    
                    <div class="control-group">
                        <label for="text1" class="control-label">Title<span class="require">*</span></label>

                        <div class="controls with-tooltip">
                            <input type="text" id="title" class="span6 input-tooltip" data-original-title="Please use post title" data-placement="bottom" name="title" value="<?php echo $post->post_title ?>"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Image</label>
                        <?php if ($post->post_images != ''): ?>
                            <img src="<?php echo $this->config->base_url() . 'img/post/' . $post->post_images; ?>" width="200">
                        <?php endif; ?>
                        <div class="controls"><input type="file" name="image" /></div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Category<span class="require">*</span></label>

                        <div class="controls">
                            <select id="post-category" name="category">
                                <option value="">No select</option>
                                <?php foreach ($category as $row): ?>
                                    <option value="<?php echo $row->id; ?>" <?php if ($row->id == $post->cateid) {
                                    echo "selected";
                                } ?> ><?php echo $row->catename ?></option>
<?php endforeach; ?>
                            </select>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Type</label>

                        <div class="controls">
                            <select id="type" name="type">
                                <?php for ($i = 1; $i <= 4; $i++) { ?>
                                    <option value="<?php echo $i; ?>" <?php if ($id == $post->typeid) {
                                    echo "selected";
                                } ?> ><?php echo $i; ?></option>
<?php } ?>
                            </select>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Feature<span class="require">*</span></label>

                        <div class="controls">
                            <select id="feature" name="feature">
                                <option value="">No select</option>
                                    <?php foreach ($features as $row): ?>
                                                                        <option value="<?php echo $row->id; ?>" <?php if ($row->id == $post->featureid) {
                                            echo "selected";
                                        } ?> ><?php echo $row->features_name ?>
                                                                        </option>
                                    <?php endforeach; ?>
                            </select>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="text1" class="control-label">Description</label>

                        <div class="controls with-tooltip">
                            <textarea id="description" name="description" class="span6"><?php echo $post->post_description ?></textarea>
                            <!-- <input type="text" id="description" class="span6 input-tooltip" data-original-title="Please use post title" data-placement="bottom" name="description"/> -->
                        </div>
                    </div>

                    <div class="form-actions">
                        <input type="reset" value="Reset" id="back" class="navigation_button btn">
                        <input type="submit" value="Update"  name="update_post" id="next" class="navigation_button btn btn-primary">
                        <!--     -->
                    </div>
                <?php echo form_close(); ?>
            </div>
            <?php endforeach;?>
            <?php endif;?>
        </div>
    </div>
</div>
