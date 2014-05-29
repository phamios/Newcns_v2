<iframe style="background-color: black;" src="<?php echo base_url('res_home/box_bottom_test.html');?>" frameborder="0" height="348" scrolling="no" width="100%">

                </iframe>
<footer id="site-footer">
    

    <nav id="footer-links">
        <div class="bb-wrap"> 
            <div style="width:35%; float:left; right: 0; text-align: left; z-index: 999999; padding-right:10px; ">
                <div style="width:400px;  ">
                    <div class="copyright" id="footer_ajax"> 
                        <?php $config_custom = $this->config->item('custom'); ?>
                        <?php //echo $config_custom['meta']['footer']; ?>
                    </div>
                <div class="copyright">  
                    <?php echo $config_custom['meta']['footer2']; ?>
                </div>
                <div class="copyright">  
                    <?php //echo $config_custom['meta']['mail_support']; ?>
                </div>
                <div class="copyright">  
                    <?php echo $config_custom['meta']['contact_phone']; ?>
                </div>
            </div>
            </div>
            <div style=" float:right;  ">
                <?php $this->load->view('home/widget/link_footer'); ?>  
            </div>
            
            

        </div>
    </nav>


</footer>