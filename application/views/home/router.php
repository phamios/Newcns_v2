<!-- Xu ly truong hop voi cac class va method cua class   -->
<?php if ($this->router->class == 'ky'): ?>
    <?php if ($this->router->fetch_method() == 'index'): ?>
        <?php $this->load->view('home/default/default'); ?>
    <?php endif; ?> 
<?php endif; ?>

<?php if ($this->router->class == 'news'): ?>
        <?php $this->load->view('home/news/index'); ?>
<?php endif; ?>

<?php if ($this->router->class == 'review'): ?>
        <?php $this->load->view('home/review/index'); ?>
<?php endif; ?>

<?php if ($this->router->class == 'rev_cate'): ?>  
        <?php $this->load->view('home/rev_cate/index'); ?> 
<?php endif; ?>

<?php if ($this->router->class == 'review_category'): ?>  
        <?php $this->load->view('home/rev_cate/cate'); ?> 
<?php endif; ?>

<?php if ($this->router->class == 'news_category'): ?>  
        <?php $this->load->view('home/default/default'); ?> 
<?php endif; ?>

<?php if ($this->router->class == 'features'): ?>  
        <?php $this->load->view('home/features/index'); ?> 
<?php endif; ?>

<?php if ($this->router->class == 'features_cate'): ?>  
        <?php $this->load->view('home/features_cate/index'); ?> 
<?php endif; ?>

<?php if ($this->router->class == 'news_cate'): ?> 
        <?php $this->load->view('home/default/default'); ?> 
<?php endif; ?>
