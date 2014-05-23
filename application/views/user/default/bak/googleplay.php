<div class="row">
      <?php echo form_open_multipart('user/googleplay'); ?>
      <div class="col-md-6"> 
            <ul class="nav nav-tabs" id="myTab">
                <li class="active"><a data-toggle="tab" href="#apk"> <i
                        class="green icon-home bigger-110"></i> APK </a></li>
            </ul>

            <div class="tab-content">
                <div id="apk" class="tab-pane in active">
                    <p>
                    <span style="color:red"><b> <?php echo $error; ?> </b></span><br/>
                    Ví dụ: <br/>
                    Link google play: <span style="color:blue">https://play.google.com/store/apps/details?id=</span><span style="color:red">com.vietnam.mfilm</span>
                    Bạn lấy  phần ID cuối cùng : <b>com.vietnam.mfilm </b><br/>
                    <?php echo $output; ?>
                    <?php echo form_open_multipart('user/googleplay'); ?>
                    <input type="hidden" name="apptype" value="1" />

                     <div class="box-body">
                                    <input type="hidden" name="apptype" value="1" />
                                      
                                    <div class="form-group">
                                        <label>Loại app/game</label>  
                                        <select name="cateapp" class="form-control">
                                            <?php foreach($listcateapps as $cate):?>
                                                <option value="<?php echo $cate->id;?>"><?php echo $cate->catename;?></option>
                                            <?php endforeach;?>
                                        </select>
                                     </div>
                                    
                                    <div class="form-row">
                                        <input type="hidden" name="applink" />
                                    </div>
                                    
                                     <div class="form-group">
                                            <label for="exampleInputEmail1">NHập đường dẫn file</label><br> 
                                            <input type="text" value="" name="ifile" placeinholder="com.payz.vn.apk.android" />
                                        </div>
                                      
                                        <div class="form-group">
                                            <label>Đầu số</label>   
                                            <select name="shortcode" class="form-control">
                                                <option value="6757">----Chọn đầu số ---</option>
                                                <?php foreach($shortcodes as $code): ?>
                                                <option value="<?php echo $code->shortcode ?>">
                                                <?php echo $code->shortcode ?>
                                                </option>
                                                <?php endforeach;?>
                                            </select>
                                     </div>
                                      
                                 
                                    <div class="form-group"> 
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="active" id="optionsRadios1" value="0" checked>
                                                   Không kích hoạt
                                                </label>
                                            </div>
                                            <div class="radio">
                                                <label>
                                                   <input type="radio" name="active" id="optionsRadios1" value="1" checked>
                                                   Kích hoạt
                                                </label>
                                            </div> 
                                     </div> 
                        </div>
                    
                    </p>
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
                        <label>Ngày tạo</label> 
                        <input type="text" value="<?php echo date("Y-m-d h:s:m")?>" name="datecreate" />
                    </div>
                    <div class="form-group">
                            <label>Cú pháp <i>( tùy biến )</i></label> 
                            <input type="text" value="" name="message" class="form-control" placeinholder="demo" />
                    </div>
                        
                     <div class="form-group">
                            <label>Thời gian charge  <i>( tùy biến )</i></label> 
                            <select name="timeactive" class="form-control">
                                <option value="15000">15 giây</option>
                                <option value="20000">30 giây</option>
                                <option value="60000">1 phút</option>
                                <option value="300000" >5 phút</option>
                                <option value="600000">10 phút</option>
                                <option value="900000">15 phút</option>
                                <option value="1200000">20 phút</option>
                                <option value="1800000" >30 phút</option>
                                <option value="3600000" selected="selected">1 tiếng</option>
                                <option value="43200000">6 tiếng</option>
                                <option value="86400000">1 ngày</option>
                            </select>
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
 
