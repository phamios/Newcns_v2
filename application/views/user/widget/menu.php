<li class="active">
    <a href="<?php echo site_url("user/dashboard"); ?>"> <i class="fa fa-dashboard"></i> <span>Trang chung - <?php echo $username ?></span> </a>
</li>
<li>
</li>
<li class="treeview">
    <a href="#"> <i class="fa fa-th"></i> <span>Báo cáo</span> <i class="fa fa-angle-left pull-right"></i> </a>
    <ul class="treeview-menu">
        <li>
            <a href="<?php echo site_url("user/report"); ?>"> <i class="fa fa-angle-double-right"></i> <span> Báo cáo chung</span>  </a>
        </li>
        <li>
            <a href="<?php echo site_url('user/report_details') ?>"><i class="fa fa-angle-double-right"></i> Báo cáo chi tiết</a>
        </li>
    </ul>
</li>
<li class="treeview">
    <a href="#"> <i class="fa fa-bar-chart-o"></i> <span>Quản lý ứng dụng</span> <i class="fa fa-angle-left pull-right"></i> </a>
    <ul class="treeview-menu">
        <li>
            <a href="<?php echo site_url('user/app') ?>"><i class="fa fa-angle-double-right"></i> Danh sách</a>
        </li>
        <li>
            <a href="<?php echo site_url('user/yourapp') ?>"><i class="fa fa-angle-double-right"></i> Vmob App</a>
        </li>
        <li>
            <a href="<?php echo site_url('user/add_app') ?>"><i class="fa fa-angle-double-right"></i> Upload App</a>
        </li>
        <li>
            <a href="<?php echo site_url('user/googleplay') ?>"><i class="fa fa-angle-double-right"></i> GooglePlay App</a>
        </li>
        <li>
            <a href="<?php echo site_url('user/app_video');?>"><i class="fa fa-angle-double-right"></i> Video App </a>
        </li>
      
         <li>
            <a href="<?php echo site_url('user/yourapp');?>"><i class="fa fa-angle-double-right"></i> Photo App </a>
        </li>
    </ul>
</li>
<li class="treeview">
    <a href="#"> <i class="fa fa-laptop"></i> <span>Tuỳ biến nội dung app</span> <i class="fa fa-angle-left pull-right"></i> </a>
    <ul class="treeview-menu">
    		<li>
            <a href="<?php echo site_url('user/listwapcate');?>"><i class="fa fa-angle-double-right"></i> Quản lý danh mục</a>
        </li>
        <li>
            <a href="<?php echo site_url('user/addcatewap');?>"><i class="fa fa-angle-double-right"></i> Thêm mới danh mục</a>
        </li>
        <li>
            <a href="<?php echo site_url('user/video') ?>"><i class="fa fa-angle-double-right"></i> Quản lý Video</a>
        </li>
        <li>
            <a href="<?php echo site_url('user/add_video') ?>"><i class="fa fa-angle-double-right"></i> Thêm mới video</a>
        </li>
        <li>
            <a href="<?php echo site_url('user/gallery') ?>"><i class="fa fa-angle-double-right"></i> Quản lý ảnh Photo</a>
        </li>
        
    </ul>
</li>
<li>
    <a href="<?php echo site_url("user/content"); ?>"> <i class="fa fa-envelope"></i> <span>Tuỳ biến tin trả về</span>  </a>
</li>
<li class="treeview">
    <a href="#"> <i class="fa fa-edit"></i> <span>Developer</span> <i class="fa fa-angle-left pull-right"></i> </a>
    <ul class="treeview-menu">
        <li>
            <a href="<?php echo site_url('user/api') ?>"><i class="fa fa-angle-double-right"></i> Quản lý API</a>
        </li>
        <li>
            <a href="<?php echo site_url('user/add_api') ?>"><i class="fa fa-angle-double-right"></i> Tạo API</a>
        </li> 
    </ul>
</li>
<li class="treeview">
    <a href="#"> <i class="fa fa-table"></i> <span>ADMIN-WAPMASTER</span> <i class="fa fa-angle-left pull-right"></i> </a>
    <ul class="treeview-menu">
        <li>
            <a href="<?php echo site_url('user/addwap') ?>"><i class="fa fa-angle-double-right"></i>  Tạo WAP</a>
        </li>
        <li>
            <a href="<?php echo site_url('user/listwap') ?>"><i class="fa fa-angle-double-right"></i> Danh sách WAP</a>
        </li>
    </ul>
</li>
 
<li class="treeview">
    <a href="#"> <i class="fa fa-folder"></i> <span>Cá nhân</span> <i class="fa fa-angle-left pull-right"></i> </a>
    <ul class="treeview-menu">
        <li>
            <a href="<?php echo site_url("user/profile"); ?>"><i class="fa fa-angle-double-right"></i> Thông tin</a>
        </li>
        <li>
            <a href="<?php echo site_url('user/withdraw');?>"><i class="fa fa-angle-double-right"></i> Rút tiền</a>
        </li>
        <li>
            <a href="<?php echo site_url('user/withdraw');?>"><i class="fa fa-angle-double-right"></i> Nạp tiền</a>
        </li> 
         <li>
            <a href="<?php echo site_url('user/sendmoney');?>"><i class="fa fa-angle-double-right"></i>Chuyển tiền</a>
        </li>
    </ul>
</li>
<li>
    <a href="<?php echo site_url("user/logout"); ?>"> <i class="fa fa-envelope"></i> <span>Thoát - Logout</span>  </a>
</li>
