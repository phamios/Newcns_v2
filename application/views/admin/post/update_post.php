<div class="row-fluid">
         <div class="span12">
             <div class="box dark">
                 <header>
                     <div class="icons"><i class="icon-edit"></i></div>
                     <h5>Chỉnh sửa tin</h5>
                     <!-- .toolbar -->
                     <div class="toolbar">
                         <ul class="nav">
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
                     
                        <?php if ($posts <> null): ?>
                        <?php foreach ($posts as $post): ?>
                        <?php echo form_open_multipart('admincp/post/update_post/'.$post->id,array('class'=>'form-horizontal')); ?>
                         <div class="control-group">
                             <label for="text1" class="control-label">Tiêu đề</label>

                             <div class="controls with-tooltip">
                                 <input type="text" id="text1" class="span6 input-tooltip"
                                        name="post_title" data-placement="bottom"
                                        value="<?php echo $post->post_title?>"/>
                             </div>
                         </div>

                         <div class="control-group">
                             <label class="control-label">Danh sách cate</label>

                             <div class="controls">
                                 <select name="cateid" class="validate[required]">
                                     <?php foreach ($cates as $cate): ?>
                                     <?php if ($cate->id === $post->cateid): ?>
                                         <option value="<?php echo $cate->id ?>" selected="selected"><?php echo ucfirst($cate->cate_name) ?></option>
                                     <?php else: ?>
                                         <option value="<?php echo $cate->id ?>"><?php echo ucfirst($cate->cate_name) ?></option>
                                     <?php endif ?>
                                     <?php endforeach ?>
                                 </select>
                             </div>
                         </div>

                         <div class="control-group">
                             <label for="text1" class="control-label">Ảnh minh họa</label>

                             <div class="controls with-tooltip">
                                 <input type="file" id="text1" class="span6 input-tooltip"
                                        name="post_image" size=40 data-placement="bottom"
                                        value="<?php echo $post->post_image?>"/>
                             </div>
                         </div>

                         <div class="control-group">
                             <label for="text1" class="control-label">Miêu tả</label>

                             <div class="controls with-tooltip">
                                 <textarea id="text1" class="span6 input-tooltip"
                                        name="post_short" data-placement="bottom"
                                        cols="100" rows="4" maxlength='160'><?php echo $post->post_short ?></textarea>
                             </div>
                         </div>

                         <div class="control-group">
                             <label for="text1" class="control-label">Nội dung</label>

                             <div class="controls with-tooltip">
                                 <textarea id="text1" class="span6 input-tooltip"
                                        name="post_content" data-placement="bottom"
                                        cols="100" rows="16" maxlength='160'><?php echo $post->post_content ?></textarea>
                             </div>
                         </div>

                         <div class="row-fluid">
                             <div class="span6">
                                 <div class="control-group">   
                                     <label class="control-label">Trạng thái</label>
                                     <div class="controls">        
                                         <?php if ($post->active == 1): ?>
                                         <label>
                                             <input class="uniform" type="radio" value="1" name="active" checked> Kích hoạt
                                         </label>
                                         <label>
                                             <input class="uniform" type="radio" value="0" name="active"> Không kích hoạt
                                         </label>
                                         <?php else: ?>
                                         <label>
                                             <input class="uniform" type="radio" value="1" name="active"> Kích hoạt
                                         </label>
                                         <label>
                                             <input class="uniform" type="radio" value="0" name="active" checked> Không kích hoạt
                                         </label>
                                         <?php endif ?>
                                     </div>
                                 </div>
                             </div>
                         </div>

                         <div class="form-actions">
                             <input type="submit" value="Đồng ý" name="submit" class="btn btn-primary">
                         </div>
                      <?php echo form_close(); ?>
<?php endforeach ?>
<?php endif ?>
                 </div>
          <!--END TEXT INPUT FIELD-->
