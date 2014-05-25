<li class="accordion-group">
    <a data-parent="#menu" data-toggle="collapse" class="accordion-toggle" href="<?php echo site_url('admincp/dashboard');?>" data-target="#dashboard-nav">
        <i class="icon-dashboard icon-large"></i> Dashboard <span
            class="label label-inverse pull-right"></span>
    </a>

</li>
<li class="accordion-group">
    <a data-parent="#menu" data-toggle="collapse" class="accordion-toggle" data-target="#component-nav">
        <i class="icon-tasks icon-large"></i> News<span class="label label-inverse pull-right"></span>
    </a>
    <ul class="collapse " id="component-nav">
        <li><a href="<?php echo base_url('admincp/category') ?>"><i class="icon-angle-right"></i> List cate </a></li>
        <li><a href="<?php echo base_url('admincp/category/create') ?>"><i class="icon-angle-right"></i> Add category</a></li>
        <li><a href="<?php echo base_url('admincp/post') ?>"><i class="icon-angle-right"></i> List news </a></li>
        <li><a href="<?php echo base_url('admincp/post/create') ?>"><i class="icon-angle-right"></i> Add news </a></li>
        <li><a href="<?php echo base_url('admincp/post/hot') ?>"><i class="icon-angle-right"></i> List Hot Post </a></li>
    </ul>
</li>

<li class="accordion-group">
    <a data-parent="#menu" data-toggle="collapse" class="accordion-toggle" data-target="#component-nav-review">
        <i class="icon-tasks icon-large"></i> Review<span class="label label-inverse pull-right"></span>
    </a>
    <ul class="collapse" id="component-nav-review">
        <li><a href="<?php echo base_url('admincp/review_cate') ?>"><i class="icon-angle-right"></i> List cate </a></li>
        <li><a href="<?php echo base_url('admincp/review_cate/create') ?>"><i class="icon-angle-right"></i> Add category</a></li>
        <li><a href="<?php echo base_url('admincp/review') ?>"><i class="icon-angle-right"></i> List news </a></li>
        <li><a href="<?php echo base_url('admincp/review/create') ?>"><i class="icon-angle-right"></i> Add news </a></li>
    </ul>
</li>

<li class="accordion-group">
    <a data-parent="#menu" data-toggle="collapse" class="accordion-toggle" data-target="#component-nav-features">
        <i class="icon-tasks icon-large"></i> Features <span class="label label-inverse pull-right"></span>
    </a>
    <ul class="collapse" id="component-nav-features">
        <li><a href="<?php echo base_url('admincp/features') ?>"><i class="icon-angle-right"></i> List features </a></li>
        <li><a href="<?php echo base_url('admincp/features/create') ?>"><i class="icon-angle-right"></i> Add features</a></li> 
    </ul>
</li>

<li class="accordion-group">
    <a data-parent="#menu" data-toggle="collapse" class="accordion-toggle" data-target="#component-nav-videos">
        <i class="icon-tasks icon-large"></i> Video <span class="label label-inverse pull-right"></span>
    </a>
    <ul class="collapse" id="component-nav-videos">
        <li><a href="<?php echo base_url('admincp/video') ?>"><i class="icon-angle-right"></i> List video </a></li>
        <li><a href="<?php echo base_url('admincp/video/create') ?>"><i class="icon-angle-right"></i> Add video</a></li>
    </ul>
</li>

<li><a href="<?php echo site_url('admincp/config');?>"><i class="icon-signin icon-large"></i> Site Config</a></li>
  
<li><a href="<?php echo site_url('admincp/logout');?>"><i class="icon-signin icon-large"></i> Logout</a></li>
