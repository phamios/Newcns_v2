<ul class="breadcrumb">
                        <li>
                            <i class="icon-home home-icon"></i>
                            <a href="#">Home</a>

                            <span class="divider">
                                <i class="icon-angle-right arrow-icon"></i>
                            </span>
                        </li>
                        <?php if ($this->router->fetch_method() == 'usercp'): ?>
                        <li class="active">Thành viên</li>
                    <?php endif; ?> 

                    <?php if ($this->router->fetch_method() == 'type'): ?>
                        <li class="active">Loại</li>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_type'): ?>
                        <li class="active">Thêm loại</li>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'edit_type'): ?>
                        <li class="active">Sửa loại</li>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'categorytype'): ?>
                        <li class="active">Danh mục</li>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_cate'): ?>
                       <li class="active">Thêm danh mục</li>
                    <?php endif; ?>
                   
                    <?php if ($this->router->fetch_method() == 'sitecontent'): ?>
                        <li class="active">Danh sách sản phẩm</li>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_sitecontent'): ?>
                       <li class="active">Thêm sản phẩm</li>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'content'): ?>
                        <li class="active">Nội dung</li>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'edit_catecontent'): ?>
                         <li class="active">Sửa danh mục</li>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_news'): ?>
                        <li class="active">Thêm tin mới</li>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'blockip'): ?>
                         <li class="active">Danh sách IP bị khóa</li>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_ip'): ?>
                         <li class="active">Khóa thêm IP</li>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'adminuser'): ?>
                        <li class="active">Danh sách Admin</li>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_useradmin'): ?>
                        <li class="active">Thêm Admin</li>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'edit_useradmin'): ?>
                         <li class="active">Sửa Admin</li>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'searchadmin'): ?>
                         <li class="active">Tìm kiếm Admin</li>
                    <?php endif; ?>
 
                    <?php if ($this->router->fetch_method() == 'edit_sitecontent'): ?>
                        <li class="active">Sửa sản phẩm</li>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'edit_news'): ?>
                        <li class="active">Sửa tin</li>
                    <?php endif; ?>
                    
                    <?php if ($this->router->fetch_method() == 'site_config'): ?>
                         <li class="active">Danh sách cấu hình</li>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'add_config'): ?>
                         <li class="active">Thêm cấu hình</li>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'edit_config'): ?>
                         <li class="active">Sửa cấu hình</li>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'notification'): ?>
                         <li class="active">Danh sách thông báo</li>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'add_notification'): ?>
                         <li class="active">Thêm thông báo</li>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'newcate'): ?>
                        <li class="active">Danh mục tin tức</li>
                    <?php endif; ?>
                    
                    <?php if ($this->router->fetch_method() == 'slide'): ?>
                        <li class="active">Slide ảnh</li>
                    <?php endif; ?>
                   
                    <?php if ($this->router->fetch_method() == 'report'): ?>
                        <li class="active">Báo cáo</li>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'menufoot'): ?>
                         <li class="active">Menu hỗ trợ</li>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'menutop'): ?>
                         <li class="active">Menu giới thiệu</li>
                    <?php endif; ?>
                     <?php if ($this->router->fetch_method() == 'store'): ?>
                         <li class="active">Danh sách bán hàng</li>
                    <?php endif; ?>
                         
                          <?php if ($this->router->fetch_method() == 'ad_store'): ?>
                         <li class="active">Tạo mới đơn hàng</li>
                    <?php endif; ?>
                       
                    </ul><!--.breadcrumb-->

                    <div class="nav-search" id="nav-search">
                        <form class="form-search" />
                        <span class="input-icon">
                            <input type="text" placeholder="Search ..." class="input-small nav-search-input" id="nav-search-input" autocomplete="off" />
                            <i class="icon-search nav-search-icon"></i>
                        </span>
                        </form>
                    </div><!--#nav-search-->