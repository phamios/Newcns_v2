<div class="row-fluid">
    <div class="span12">
        <div class="box dark">
            <div id="div-1" class="accordion-body collapse in body">
                <div class="span7">
                    <?php echo form_open_multipart('admincp/review/gallery/'.$review_id, array('id' => 'review-create', 'class' => 'form-horizontal')); ?>
                    <div class="control-group">
                        <label for="text1" class="control-label">Upload Ảnh<span class="require">*</span></label>
                        <div class="controls">
                            <div class="fileupload fileupload-new" data-provides="fileupload">
                                <div class="fileupload-preview thumbnail" style="width: 200px; height: 150px;"></div>
                                <div>
                                    <input type="file" name="upload[]" id="upload" multiple="multiple" />
                                    <input type="submit" name="fsubmit" id="fsubmit" value="Upload" class="navigation_button btn btn-primary"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php echo form_close(); ?>
                </div>
            </div>

            <div id="div-1" class="accordion-body collapse in body">
                <div class="span7">
                <?php if ($images <> null): ?>   
                    <ul class="ace-thumbnails">
                    <?php foreach($images as $img): ?>
                        <li>
                            <a href="<?php echo base_url('src/images'.$img->image_link)?>" >
                            <img alt="150x150" width="150" height="150" src="<?php echo base_url('src/images/'.$img->image_link)?>" />
                            </a>
                        <div class="tools tools-bottom">
                            <a href="<?php echo site_url('admincp/review/del_image_review/'.$img->id.'/'.$review_id)?>"> <i class="icon-remove red"></i> Xóa </a>
                        </div>
                    <?php endforeach ?>
                        </li>
                    </ul>
                <?php endif ?>   
                </div>
            </div>
        </div>
    </div>
</div>
