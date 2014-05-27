<footer id="site-footer">
    <div id="about-dt">
        <div class="bb-wrap">
            <div class="dt">
                <img src="<?php echo base_url('res_home/54X54.PNG'); ?>" alt="<?php echo site_url(); ?>"/>
                <p><?php $config_custom = $this->config->item('custom'); ?>
                <?php echo $config_custom['meta']['footer2']; ?></p>
            </div>
        </div>
    </div>

    <nav id="footer-links">
        <div class="bb-wrap">
            <?php $this->load->view('home/widget/link_footer'); ?>  
            <div class="copyright"> 
                <?php $config_custom = $this->config->item('custom'); ?>
                <?php echo $config_custom['meta']['footer']; ?>
            </div>
        </div>
    </nav>
</footer>