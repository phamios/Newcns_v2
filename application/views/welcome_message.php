<?php $this->load->view('home/widget/header'); ?>

<body data-twttr-rendered="true" class="home page-id-444226 blog sticky-nav stuck-nav">
    <!--<![endif]--> 

    <div id="main-wrap" class="dt-site-skin-wrap">
        <header id="site-header">
            <div id="top-bar">
                <?php $this->load->view('home/widget/topbar'); ?>
            </div>

            <?php $this->load->view('home/widget/navbar'); ?>
        </header>

        <div id="leaderboard-header" class="leaderboard">
            <?php $this->load->view('home/widget/ads'); ?>
        </div>

      
            <div id="page">
                <div class="bb-wrap"> 
                    <!--DTC HTML CACHE HIT START-->	 
                    <?php if ($this->router->class == 'ky1'): ?>
                        <?php $this->load->view('home/widget/tophotads'); ?>
                    <?php endif; ?>
                    <!--DTC HTML CACHE HIT STOP-->

                    <div id="primary-wrap"> 
                        <div id="primary">
                            <?php $this->load->view('home/router'); ?>
                        </div>
 
                        <aside class="sidebar-block"> 
                            <?php $this->load->view('home/widget/widget_right'); ?> 
                        </aside>  
                    </div> 
                </div>
            </div> 


        <?php $this->load->view('home/widget/footer') ?>
    </div>

    <?php $this->load->view('home/widget/js_footer'); ?>
</body></html>