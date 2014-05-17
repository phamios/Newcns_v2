 <!-- .user-media -->
                <div class="media user-media hidden-phone">
                    <a href="" class="user-link">
                        <img src="<?php echo base_url('res/assets/');?>/img/user.gif" alt="" class="media-object img-polaroid user-img">
                        <span class="label user-label"><?php echo rand(100,9999);?></span>
                    </a>

                    <div class="media-body hidden-tablet">
                        <h5 class="media-heading">Admin</h5>
                        <ul class="unstyled user-info">
                            <li><a href="">Administrator</a></li>
                            <li>Lần truy cập cuối : <br/>
                                <small><i class="icon-calendar"></i> 16 Mar 16:32</small>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- /.user-media -->

                <!-- BEGIN MAIN NAVIGATION -->
                <ul id="menu" class="unstyled accordion collapse in">
                    <?php $this->load->view('widget/navigator');?>
                </ul>
                <!-- END MAIN NAVIGATION -->
