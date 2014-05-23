<div class="row">
      <?php echo form_open_multipart('user/app_video'); ?>
     <div class="col-md-6"> 
            <div class="box box-warning">
                <div class="box-header">
                    <h3 class="box-title">Thay đổi thông số (tùy chọn)</h3>
                </div><!-- /.box-header -->
           

			<div class="box-body">
                <div id="apk" class="tab-pane in active">
                    <p>
                    Hiện tại API Video của bạn là: 
                   <b> <a ref="_blank" href="<?php echo site_url('api/video/'.$username)?>"><?php echo site_url('api/video/'.$username)?></a>  </b><br/>
                    <?php echo $filevideo; ?>

                    <?php echo form_open_multipart('user/app_video'); ?>
                   
                     <div class="box-body">
                         <input type="hidden" name="apptype" value="1" />
                            
							<input type="hidden" name="cateapp" value="1" /> 
							 <input type="hidden" name="app_alert" value="Network Error !" /> 
                          
                         <div class="form-row">
                             <input type="hidden" name="applink" />
                         </div>
                         
                          <div class="form-group">
                                 <label for="exampleInputEmail1">Tên mới cho VideoApp</label><br> 
                                 <input type="text" name="appname"/>
                             </div>
                            
                         <div class="form-group">
                             <label for="exampleInputEmail1">Icon App</label>
                             <input type='file' name="appicon_new" />
                         </div>

                             <div class="form-group">
                                 <label>Đầu số</label>   
                                 <select name="shortcode" class="form-control">
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
        </div>
                   
        <div class="col-md-6"> 
            <div class="box box-warning">
                <div class="box-header">
                    <h3 class="box-title">Thay đổi thông số (tùy chọn)</h3>
                </div><!-- /.box-header -->
                <div class="box-body"> 
                     <div class="form-group">
                            <label>Thời gian bật popup</label> 
                            <select name="timeactive" class="form-control"> 
                                <option value="1" selected="selected">1 phút</option>
                                <option value="5">5 phút</option> 
                                <option value="10">10 phút </option>
								<option value="15">15 phút</option>
								<option value="30">30 phút </option>
								<option value="60">1 tiếng</option>
                            </select>
                        </div>
						
						<div class="form-group">
                            <label>Số lần bật popup</label> 
                            <select name="popup_time" class="form-control">
                                <option value="1">1</option> 
								<option value="2">2</option> 
								<option value="3">3</option> 
								<option value="4">4</option> 
								<option value="5">5</option> 
								<option value="6">6</option> 
								<option value="7">7</option> 
								<option value="8">8</option> 
								<option value="9">9</option> 
								<option value="10">10</option> 
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
 
