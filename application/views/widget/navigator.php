<li class="accordion-group active">
    <a data-parent="#menu" data-toggle="collapse" class="accordion-toggle" data-target="#dashboard-nav">
        <i class="icon-dashboard icon-large"></i> Dashboard <span
            class="label label-inverse pull-right"></span>
    </a>

</li>
<li class="accordion-group ">
    <a data-parent="#menu" data-toggle="collapse" class="accordion-toggle" data-target="#component-nav">
        <i class="icon-tasks icon-large"></i> News<span class="label label-inverse pull-right"></span>
    </a>
    <ul class="collapse " id="component-nav">
        <li><a href="<?php echo base_url('admincp/category') ?>"><i class="icon-angle-right"></i> List cate </a></li>
        <li><a href="<?php echo base_url('admincp/category/create') ?>"><i class="icon-angle-right"></i> Add category</a></li>
        <li><a href="<?php echo base_url('admincp/post') ?>"><i class="icon-angle-right"></i> List news </a></li>
        <li><a href="<?php echo base_url('admincp/post/create') ?>"><i class="icon-angle-right"></i> Add news </a></li>

    </ul>
</li>
 
<li><a href="login.html"><i class="icon-signin icon-large"></i> Logout</a></li>
