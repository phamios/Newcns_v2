
<div class="span10">
    <div class="tabbable">
        <ul class="nav nav-tabs" id="myTab">
            <li class="active"><a data-toggle="tab" href="#apk"> <i
                        class="green icon-home bigger-110"></i>Video Single
                </a></li>
            <li><a data-toggle="tab" href="#playlist"> <i
                        class="green icon-home bigger-110"></i> Video Playlist </a></li>
        </ul>
        <div class="tab-content">
            <div id="apk" class="tab-pane in active">
                <p>
                    <?php echo form_open_multipart('user/add_video'); ?>
                    <input type="hidden" name="videotype" value="1" />

                <div class="form-row">
                    <div class="form-label">Danh mục</div>
                    <div class="form-item">
                        <select name="cate_video">
                            <option value="0" selected="selected">-- Lựa chọn danh mục</option>
                            <?php foreach ($list_cate as $cate): ?>
                                <option value="<?php echo $cate->id; ?>"><?php echo $cate->catename; ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-label">Link youtube</div>
                    <div class="form-item">
                        <input type="text" name="video_link" width="200px;" />
                    </div>
                </div>


                <script type="text/javascript">
                    $(document).ready(function(){
                        $("select").change(function(){
                            $( "select option:selected").each(function(){
                                if($(this).attr("value")=="red"){
                                    $(".box").hide();
                                    $(".red").show();
                                }
                                if($(this).attr("value")=="green"){
                                    $(".box").hide();
                                    $(".green").show();
                                }
                                if($(this).attr("value")=="blue"){
                                    $(".box").hide();
                                    $(".blue").show();
                                }
                            });
                        }).change();
                    });
                </script>
                <div class="form-row">
                    <div class="form-label">Loại video</div>
                    <div class="form-item">
                        <select>
                            <option value="green" selected="selected">Miễn phí</option>
                            <option value="red">Gắn Thanh toán</option>

                        </select> <br />
                        <div class="red box">
                            <select name="shortcode">
                                <option value=""> Chọn đầu số</option>
                                <?php foreach ($shortcodes as $code): ?>
                                    <option value="<?php echo $code->shortcode ?>">
                                        <?php echo $code->shortcode ?>
                                    </option>
                                <?php endforeach; ?>
                            </select><br />
                            <textarea name="message" class="span8" id="form-field-8"
                                      placeholder="Cu phap sms"></textarea>
                            <br /> 
                            <select name="timeactive">
                                <option value=""> Thời gian gửi sms</option>
                                <option value="15000">15 giây</option>
                                <option value="20000">30 giây</option>
                                <option value="60000">1 phút</option>
                                <option value="300000">5 phút</option>
                                <option value="600000" selected="selected">10 phút</option>
                                <option value="900000">15 phút</option>
                                <option value="1200000">20 phút</option>
                                <option value="1800000">30 phút</option>
                                <option value="3600000">1 tiếng</option>
                                <option value="43200000">6 tiếng</option>
                                <option value="86400000">1 ngày</option>
                            </select> <input type="hidden"
                                             value="<?php echo date("Y-m-d h:s:m") ?>" name="datecreate" />
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item">
                        <input name="active" type="radio" value="0" /> <span class="lbl">
                            Không kích hoạt</span> <input name="active" type="radio"
                                                      value="1" /> <span class="lbl"> Kích hoạt</span>
                    </div>
                </div>
                <div class="form-row">
                    <br />
                </div>
                <div class="form-row">
                    <div class="form-label"></div>
                    <div class="form-item">
                        <input type="submit" name="submit" value="Tạo" />
                    </div>
                </div>
                <?php echo form_close(); ?>
                </p>
            </div>


            <div id="playlist" class="tab-pane">
                <p>
                    <?php echo form_open_multipart('user/add_multiple_video'); ?>
                    <input type="hidden" name="videotype" value="1" />

                <div class="form-row">
                    <div class="form-label">Danh mục</div>
                    <div class="form-item">
                        <select name="cate_video">
                            <option value="0" selected="selected">-- Lựa chọn danh mục</option>
                            <?php foreach ($list_cate as $cate): ?>
                                <option value="<?php echo $cate->id; ?>"><?php echo $cate->catename; ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-label">Link playlist youtube</div>
                    <div class="form-item">
                        <input type="text" name="video_link" width="200px;" />
                    </div>
                </div>


                <script type="text/javascript">
                    $(document).ready(function(){
                        $("select").change(function(){
                            $( "select option:selected").each(function(){
                                if($(this).attr("value")=="red"){
                                    $(".box").hide();
                                    $(".red").show();
                                }
                                if($(this).attr("value")=="green"){
                                    $(".box").hide();
                                    $(".green").show();
                                }
                                if($(this).attr("value")=="blue"){
                                    $(".box").hide();
                                    $(".blue").show();
                                }
                            });
                        }).change();
                    });
                </script>
                <div class="form-row">
                    <div class="form-label">Loại video</div>
                    <div class="form-item">
                        <select>
                            <option value="green" selected="selected">Miễn phí</option>
                            <option value="red">Gắn Thanh toán</option>

                        </select> <br />
                        <div class="red box">
                            <select name="shortcode">
                                <option value=""> Chọn đầu số</option>
                                <?php foreach ($shortcodes as $code): ?>
                                    <option value="<?php echo $code->shortcode ?>">
                                        <?php echo $code->shortcode ?>
                                    </option>
                                <?php endforeach; ?>
                            </select><br />
                            <textarea name="message" class="span8" id="form-field-8"
                                      placeholder="Cu phap sms"></textarea>
                            <br /> 
                            <select name="timeactive">
                                <option value=""> Thời gian gửi sms</option>
                                <option value="15000">15 giây</option>
                                <option value="20000">30 giây</option>
                                <option value="60000">1 phút</option>
                                <option value="300000">5 phút</option>
                                <option value="600000" selected="selected">10 phút</option>
                                <option value="900000">15 phút</option>
                                <option value="1200000">20 phút</option>
                                <option value="1800000">30 phút</option>
                                <option value="3600000">1 tiếng</option>
                                <option value="43200000">6 tiếng</option>
                                <option value="86400000">1 ngày</option>
                            </select> <input type="hidden"
                                             value="<?php echo date("Y-m-d h:s:m") ?>" name="datecreate" />
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item">
                        <input name="active" type="radio" value="0" /> <span class="lbl">
                            Không kích hoạt</span> <input name="active" type="radio"
                                                      value="1" /> <span class="lbl"> Kích hoạt</span>
                    </div>
                </div>
                <div class="form-row">
                    <br />
                </div>
                <div class="form-row">
                    <div class="form-label"></div>
                    <div class="form-item">
                        <input type="submit" name="submit" value="Tạo" />
                    </div>
                </div>
                <?php echo form_close(); ?>
                </p>

            </div>


        </div>
    </div>
</div>
<!--/span-->

