<div class="row-fluid">
         <div class="span12">
             <div class="box dark">
                 <header>
                     <div class="icons"><i class="icon-edit"></i></div>
                     <h5>Thêm Cate</h5>
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
                     
                        <?php echo form_open_multipart('admincp/cate/add_cate',array('class'=>'form-horizontal')); ?>
                         <div class="control-group">
                             <label for="text1" class="control-label">Tên cate</label>

                             <div class="controls with-tooltip">
                                 <input type="text" id="text1" class="span6 input-tooltip"
                                        name="cate_name" data-placement="bottom"/>
                             </div>
                         </div>

                         <div class="control-group">
                             <label class="control-label">Danh mục cha</label>

                             <div class="controls">
                                 <select name="cate_root" class="validate[required]">
                                     <option value=""></option>
                                     <?php foreach ($cates as $cate): ?>
                                         <option value="<?php echo $cate->id ?>"><?php echo ucfirst($cate->cate_name) ?></option>
                                     <?php endforeach ?>
                                 </select>
                             </div>
                         </div>

                         <div class="row-fluid">
                             <div class="span6">
                                 <div class="control-group">   
                                     <label class="control-label">Trạng thái</label>
                                     <div class="controls">        
                                         <label>
                                             <input class="uniform" type="radio" value="1" name="active"> Kích hoạt
                                         </label>
                                         <label>
                                             <input class="uniform" type="radio" value="0" name="active" checked> Không kích hoạt
                                         </label>
                                     </div>
                                 </div>
                             </div>
                         </div>

                         <div class="form-actions">
                             <input type="submit" value="Đồng ý" name="submit" class="btn btn-primary">
                         </div>
                      <?php echo form_close(); ?>
                 </div>
          <!--END TEXT INPUT FIELD-->
