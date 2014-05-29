<li class="accordion-group">
    <a data-parent="#menu" data-toggle="collapse" class="accordion-toggle" href="<?php echo site_url('admincp/dashboard');?>" data-target="#dashboard-nav">
        <i class="icon-dashboard icon-large"></i> Trang chung <span
            class="label label-inverse pull-right"></span>
    </a>

</li>
<li class="accordion-group">
    <a data-parent="#menu" data-toggle="collapse" class="accordion-toggle" data-target="#component-nav">
        <i class="icon-tasks icon-large"></i> Tin tức<span class="label label-inverse pull-right"></span>
    </a>
    <ul class="collapse " id="component-nav">
        <li><a href="<?php echo base_url('admincp/category') ?>"><i class="icon-angle-right"></i> Danh sách Category </a></li>
        <li><a href="<?php echo base_url('admincp/category/create') ?>"><i class="icon-angle-right"></i> Thêm mới Category</a></li>
        <li><a href="<?php echo base_url('admincp/post') ?>"><i class="icon-angle-right"></i> Danh sách tin </a></li>
        <li><a href="<?php echo base_url('admincp/post/create') ?>"><i class="icon-angle-right"></i> Thêm mới tin </a></li>
        <li><a href="<?php echo base_url('admincp/post/hot') ?>"><i class="icon-angle-right"></i> Danh sách tin hot </a></li>
    </ul>
</li>

<li class="accordion-group">
    <a data-parent="#menu" data-toggle="collapse" class="accordion-toggle" data-target="#component-nav-review">
        <i class="icon-tasks icon-large"></i> Đánh giá<span class="label label-inverse pull-right"></span>
    </a>
    <ul class="collapse" id="component-nav-review">
        <li><a href="<?php echo base_url('admincp/review_cate') ?>"><i class="icon-angle-right"></i> Danh sách Category </a></li>
        <li><a href="<?php echo base_url('admincp/review_cate/create') ?>"><i class="icon-angle-right"></i> Thêm mới Category</a></li>
        <li><a href="<?php echo base_url('admincp/review') ?>"><i class="icon-angle-right"></i> Danh sách tin </a></li>
        <li><a href="<?php echo base_url('admincp/review/create') ?>"><i class="icon-angle-right"></i> Thêm mới tin </a></li>
    </ul>
</li>

<li class="accordion-group">
    <a data-parent="#menu" data-toggle="collapse" class="accordion-toggle" data-target="#component-nav-features">
        <i class="icon-tasks icon-large"></i> Shop <span class="label label-inverse pull-right"></span>
    </a>
    <ul class="collapse" id="component-nav-features">
        <li><a href="<?php echo base_url('admincp/features') ?>"><i class="icon-angle-right"></i> Danh sách Shop </a></li>
        <li><a href="<?php echo base_url('admincp/features/create') ?>"><i class="icon-angle-right"></i> Thêm mới Shop</a></li> 
    </ul>
</li>
<li class="accordion-group">
    <a data-parent="#menu" data-toggle="collapse" class="accordion-toggle" data-target="#component-nav-video">
        <i class="icon-tasks icon-large"></i> Video <span class="label label-inverse pull-right"></span>
    </a>
    <ul class="collapse" id="component-nav-video">
        <li><a href="<?php echo base_url('admincp/video') ?>"><i class="icon-angle-right"></i> Danh sách video  </a></li>
        <li><a href="<?php echo base_url('admincp/video/create') ?>"><i class="icon-angle-right"></i> Thêm mới Video</a></li> 
    </ul>
</li>
<li class="accordion-group">
    <a data-parent="#menu" data-toggle="collapse" class="accordion-toggle" data-target="#component-nav-advertis">
        <i class="icon-tasks icon-large"></i> Quảng cáo <span class="label label-inverse pull-right"></span>
    </a>
    <ul class="collapse" id="component-nav-advertis">
        <li><a href="<?php echo base_url('admincp/advertis') ?>"><i class="icon-angle-right"></i> Danh sách quảng cáo  </a></li>
        <li><a href="<?php echo base_url('admincp/advertis/create') ?>"><i class="icon-angle-right"></i> Thêm mới quảng cáo</a></li> 
    </ul>
</li>

<li class="accordion-group">
    <a data-parent="#menu" data-toggle="collapse" class="accordion-toggle" data-target="#component-nav-gift">
        <i class="icon-tasks icon-large"></i> Quà tặng <span class="label label-inverse pull-right"></span>
    </a>
    <ul class="collapse" id="component-nav-gift">
        <li><a href="<?php echo base_url('admincp/gift') ?>"><i class="icon-angle-right"></i> Danh sách quà tặng  </a></li>
        <li><a href="<?php echo base_url('admincp/gift/create') ?>"><i class="icon-angle-right"></i> Thêm mới quà tặng</a></li>
    </ul>
</li>

<li class="accordion-group">
    <a data-parent="#menu" data-toggle="collapse" class="accordion-toggle" data-target="#component-nav-config">
        <i class="icon-tasks icon-large"></i> Cấu hình <span class="label label-inverse pull-right"></span>
    </a>
    <ul class="collapse" id="component-nav-config">
        <li><a href="<?php echo base_url('admincp/config') ?>"><i class="icon-angle-right"></i> Danh sách cấu hình  </a></li>
        <li><a href="<?php echo base_url('admincp/config/create') ?>"><i class="icon-angle-right"></i> Thêm cấu hình  </a></li>
        <li><a href="<?php echo base_url('admincp/config/site') ?>"><i class="icon-angle-right"></i> Cấu hình site  </a></li>
    </ul>
</li>

<li class="accordion-group">
    <a data-parent="#menu" data-toggle="collapse" class="accordion-toggle" data-target="#component-nav-profile">
        <i class="icon-tasks icon-large"></i> Cá nhân <span class="label label-inverse pull-right"></span>
    </a>
    <ul class="collapse" id="component-nav-profile">
        <li><a href="<?php echo base_url('admincp/profile') ?>"><i class="icon-angle-right"></i> Thông tin cá nhân  </a></li>
    </ul>
</li>
  
<li><a href="<?php echo site_url('admincp/logout');?>"><i class="icon-signin icon-large"></i> Logout</a></li>
