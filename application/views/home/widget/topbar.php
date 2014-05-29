<div class="bb-wrap">
    <?php $config_custom = $this->config->item('custom'); ?> 
    <a href="<?php echo site_url(); ?>">
        <div class="dt" id="logosite">

        </div></a>
    <div class="logo">
        <img src="<?php echo base_url('res_home/178X16.PNG'); ?>" alt="<?php echo site_url(); ?>"/>

    </div>

    <form id="search" method="get" action="<?php echo site_url(); ?>">

        <input class="search" name="s" placeholder="Bạn muốn tìm gì hôm nay ?" type="text">
        <input src="<?php echo base_url('res_home/index_files'); ?>/i_search.png" alt="Search" height="11" type="image" width="11">

    </form>

    <div id="logged-in-component-account-links">
        <div class="auth">
            <a class="login-link" rel="nofollow" href="#">Đăng nhập</a>

            <span>or</span> 
            <a class="signup-link" rel="nofollow" href="#">Đăng ký </a>

        </div>

    </div>	 			
</div>