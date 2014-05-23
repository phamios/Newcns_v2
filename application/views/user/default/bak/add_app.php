<div class="row">
    <div class="col-md-12">
        <div class="box box-danger"> 
            <div class="box-body">

                <div class="alert alert-success alert-dismissable">
                    <i class="fa fa-check"></i>
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    Quá trình upload có thể mất thời gian tuỳ theo độ lớn của ứng dụng. Bạn vui lòng chờ đợi.
                </div>
            </div><!-- /.box-body -->
        </div><!-- /.box -->
    </div><!-- /.col -->

    <?php echo form_open_multipart('user/add_app'); ?>
    <div class="col-md-6"> 
        <div class="box box-warning">
            <div class="box-header">
                <h3 class="box-title">Upload App</h3>
            </div><!-- /.box-header -->

            <div class="box-body">  
                <div class="form-group"> 
                    <div id="apk" class="tab-pane in active">
                         
                        <div class="box-body">
                            <input type="hidden" name="apptype" value="1" />

                            <div class="form-group">
                                <label>Loại app/game</label>  
                                <select name="cateapp" class="form-control">
                                    <?php foreach ($listcateapps as $cate): ?>
                                        <option value="<?php echo $cate->id; ?>"><?php echo $cate->catename; ?></option>
                                    <?php endforeach; ?>
                                </select>
                            </div>

                            <div class="form-row">
                                <input type="hidden" name="applink" />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Upload file</label> 
                                <input type="file" name="ifile"/> 
                                <p class="help-block">File APK.</p>
                            </div>

                            <div class="form-group">
                                <label>Đầu số</label>   
                                <select name="shortcode" class="form-control">
                                    <?php foreach ($shortcodes as $code): ?>
                                        <option value="<?php echo $code->shortcode ?>">
                                            <?php echo $code->shortcode ?>
                                        </option>
                                    <?php endforeach; ?> 
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
                    </div> 
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
                    <label>Giới thiệu app</label> 
                    <textarea name="appdes"  class="form-control" id="form-field-8" placeholder="Default Text"></textarea>
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

