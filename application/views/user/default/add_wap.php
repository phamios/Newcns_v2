<div class="row">
      <?php echo form_open_multipart('user/addwap'); ?>
      <div class="col-md-6"> 
            <ul class="nav nav-tabs" id="myTab">
                <li class="active"><a data-toggle="tab" href="#apk"> <i
                        class="green icon-home bigger-110"></i>Tạo App </a></li>
            </ul>

            <div class="tab-content">
                <div id="apk" class="tab-pane in active">
                    <p>
                    
                     <div class="box-body">
        <div class="form-group">
            <div class="form-label">Tên wap của bạn: <i>kí tự không dấu, không có khoảng trống</i></div>
            <div class="form-group">
                <input class="form-control" type="text" name="wap_name" />
            </div>
        </div>
        <div class="form-group">
            <div class="form-label">Title:</div>
            <div class="form-group">
                <input class="form-control" type="text" name="wap_title" />
            </div>
        </div>
        <div class="form-group">
            <div class="form-label">
                Meta Des
            </div>
            <div class="form-group">
                <textarea class="form-control" rows="4" name="wap_meta_des"></textarea>
            </div>
        </div>
        <div class="form-group">
            <div class="form-label">
                Meta Content
            </div>
            <div class="form-group">
                <textarea class="form-control" rows="4" name="wap_meta_content"></textarea>
            </div>
        </div>
        <div class="form-group">
            <div class="form-label">
                Footer
            </div>
            <div class="form-group">
                <textarea class="form-control" rows="4" name="wap_copyright"></textarea>
            </div>
        </div>
        <div class="form-group">
            <div class="form-label">
                Google API
            </div>
            <div class="form-group">
                <textarea class="form-control" rows="4" name="wap_script"></textarea>
            </div>                          
                        </div>
                    
                    </p>
                </div>
            </div>
        </div>
        </div>
                   
        <div class="col-md-6"> 
            <div class="box box-warning">
                <div class="box-header">
                    <h3 class="box-title">Thay đổi thông số (tùy chọn)</h3>
                </div><!-- /.box-header -->
                <div class="box-body">
                    <div class="form-group">
                        <label>Wap Charging</label>
                        <select class="form-control" name="wap_charging">
                            <option value="1"  selected="selected">Có</option>
                            <option value="0">Không</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>
                        Giao diện
                    </label>
                    <div class="form-group">
                        <select class="form-control" name="wap_template">
                            <option value="1"  selected="selected">Mặc định</option>
                            <option value="2">Trung Thu</option>
                            <option value="3">Mùa hè</option>
                            <option value="4">Tết</option>
                            <option value="5">Rock</option>
                            <option value="6">Hacker</option>
                            <option value="7">Tình yêu</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-group">
                       <div class="radio">
                           <label>
                               <input type="radio" name="wap_active" id="optionsRadios1" value="0" checked>
                              Không kích hoạt
                           </label>
                       </div>
                       <div class="radio">
                           <label>
                              <input type="radio" name="wap_active" id="optionsRadios1" value="1" checked>
                              Kích hoạt
                           </label>
                       </div>
                </div>
                    <div class="form-group">
                        <label> </label>
                        <input type="submit" name="submit" value="Build App" class="btn btn-primary" />
                    </div>
                </div><!-- /.box-body -->
            </div><!-- /.box -->
        </div>
<?php echo form_close(); ?>
</div> 
 
