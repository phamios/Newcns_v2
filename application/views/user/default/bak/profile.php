F<?php foreach ($profiles as $profile): ?>
<div class="row-fluid">
    <div class="span12">
        <!--PAGE CONTENT BEGINS-->
        <div class="hr dotted"></div>

        <div>

            <div id="user-profile-1" class="user-profile row-fluid">
                <div class="span3 center">
                    <div>
                        <span class="profile-picture"> <img id="avatar" class="editable"
                                                            alt="Alex's Avatar"
                                                            src="<?php echo base_url('themes/admincp'); ?>/assets/avatars/profile-pic.jpg" />
                        </span>

                        <div class="space-4"></div>

                        <div
                            class="width-80 label label-info label-large arrowed-in arrowed-in-right">
                            <div class="inline position-relative">
                                <a href="#" class="user-title-label dropdown-toggle"
                                   data-toggle="dropdown"> <i
                                        class="icon-circle light-green middle"></i> &nbsp; <span
                                        class="white middle bigger-120"><?php echo $profile->member_name; ?></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="space-6"></div>
                </div>

                <div class="span9">
              

                    <div class="space-12"></div>

                    <div class="profile-user-info profile-user-info-striped">
                            <?php if (strlen($report) > 0): ?>	

                                <div class="profile-info-row">
                                    <div class="profile-info-name">Thông báo</div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username"><?php echo $report; ?></span>
                                    </div>
                                </div>
                            <?php endif; ?>
                            <div class="profile-info-row">
                                <div class="profile-info-name">Tên User</div>

                                <div class="profile-info-value">
                                    <span class="editable" id="username"><?php echo $profile->member_name; ?></span>
                                </div>
                            </div>

                            <div class="profile-info-row">
                                <div class="profile-info-name">Số tiền đang có</div>

                                <div class="profile-info-value">
                                    <i class="icon-map-marker light-orange bigger-110"></i> <span
                                        class="editable" id="country"><?php echo number_format($profit); ?> vnđ</span>
                                </div>
                            </div>
                            <div class="profile-info-row">
                                <div class="profile-info-name">Ngày đăng ký</div>

                                <div class="profile-info-value">
                                    <span class="editable" id="signup"><?php echo $profile->member_created; ?></span>
                                </div>
                            </div>
                        </div>

                        <div class="space-20"></div>

                        <div class="widget-box transparent">
                            <div class="widget-header widget-header-small">
                                <h4 class="blue smaller">
                                    <i class="icon-rss orange"></i> Lịch sử giao dịch
                                </h4>

                                <div class="widget-toolbar action-buttons">
                                    <a href="#" data-action="reload"> <i class="icon-refresh blue"></i>
                                    </a> &nbsp; <a href="#" class="pink"> <i class="icon-trash"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="widget-body">
                                <div class="widget-main padding-8">
                                    <div id="profile-feed-1" class="profile-feed">
                                        <?php foreach ($list_sms as $money): ?>
                                            <div class="profile-activity clearfix">
                                                <div>
                                                    <img class="pull-left" alt="Alex Doe's avatar"
                                                         src="<?php echo base_url('themes/admincp'); ?>/assets/avatars/avatar5.png" />
                                                    <a class="user" href="#"> <?php echo '+' . $money->phone ?></a> Vừa nhắn tin <?php echo $money->shortcode; ?>

                                                    <div class="time">
                                                        <i class="icon-time bigger-110"></i><?php echo $money->timeaccess; ?>
                                                    </div>
                                                </div>

                                            </div>
                                        <?php endforeach; ?>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="hr hr2 hr-double"></div>

                        <div class="space-6"></div>


                    </div>
                </div>
            </div>
            <!--PAGE CONTENT ENDS-->
        </div>
        <!--/.span-->
    </div>
<?php endforeach; ?>



