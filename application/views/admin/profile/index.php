<div class="row-fluid">
    <div class="span12">
        <div class="box dark">
            <header>
                <div class="icons"><i class="icon-edit"></i></div>
                <h5>Thông tin cá nhân</h5>
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
            <?php foreach ($user as $u): ?>
            <div id="div-1" class="accordion-body collapse in body">
                    <?php echo form_open_multipart('admincp/profile/index/'.$u->id,array('class'=>'form-horizontal','id'=>'profile-update')); ?>
                    
                    <div class="control-group">
                        <label for="text1" class="control-label">Tên tài khoản</label>

                        <div class="controls with-tooltip">
                            <input type="text" id="username" class="span6 input-tooltip" name="username" value="<?php echo $u->username?>"/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="text1" class="control-label">Mật khẩu</label>

                        <div class="controls with-tooltip">
                            <input type="password" id="password" class="span6 input-tooltip" name="password" placeholder="************" value=""/>
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="text1" class="control-label">Xác nhận mật khẩu</label>

                        <div class="controls with-tooltip">
                            <input type="password" id="confirm_password" class="span6 input-tooltip" placeholder="************" value=""/>
                        </div>
                    </div>

                    <div class="form-actions">
                        <input type="button" onClick="check_matched_password()" id="save_profile" value="Cập nhật" name="save_profile" class="navigation_button btn btn-primary">
                        <!-- onclick="create()" -->
                    </div>
                <?php echo form_close(); ?>
            </div>
<?php endforeach ?>
        </div>
    </div>
</div>

<script type="text/javascript">
    
    function check_matched_password() {
        var username = $("#uername").val();
        var password = $("#password").val();
        var confirm_password = $("#confirm_password").val();
    
        if (password !== confirm_password) {
            alert("Password xác nhận chưa đúng!");
        } else {
            $("#profile-update").submit();
        }
    }

</script>
