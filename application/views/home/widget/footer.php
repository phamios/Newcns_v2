<footer id="site-footer">
    <div id="about-dt">
        <div class="bb-wrap">
            <div class="dt">
             <img src="<?php echo base_url('res_home/54X54.PNG');?>" alt="<?php echo site_url();?>"/>
                <p>Straightforward product reviews, reliable technology news, and tools to navigate the digital world.</p>
            </div>
        </div>
    </div>

    <nav id="footer-links">
        <div class="bb-wrap">
            <?php $this->load->view('home/widget/link_footer');?> 
            <?php $config_custom = $this->config->item('custom'); ?>
            <div class="copyright"> <?php echo $config_custom['meta']['footer']; ?></div>
        </div>
    </nav>
</footer>