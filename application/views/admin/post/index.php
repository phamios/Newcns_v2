<div class="row-fluid">
                        <!-- .inner -->
                        <div class="span12 inner">
                            <!--Begin Datatables-->
                            <div class="row-fluid">
                                <div class="span12">
                                    <div class="box">
                                        <header>
                                            <div class="icons"><i class="icon-move"></i></div>
                                            <h5>Danh sách tin</h5>
                                        </header>
                                        <div id="collapse4" class="body">
                                            <table id="dataTable" class="table table-bordered table-condensed table-hover table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Cate</th>
                                                        <th>Hình ảnh</th>
                                                        <th>Tiêu đề</th>
                                                        <th>Miêu tả</th>
                                                        <th>Nội dung</th>
                                                        <th>Ngày tạo</th>
                                                        <th>Trạng thái</th>
                                                        <th>Tùy chọn</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                            <?php if ($listcontent <> null): ?>
                            <?php foreach ($listcontent as $row): ?>
                            <tr>
                                <td>
                                    <?php foreach ($allcatenews as $cate): ?>
                                    <?php if ($cate->id == $row->cateid): ?>
                                        <?php echo ucfirst($cate->cate_name); ?>
                                    <?php endif; ?>
                                    <?php endforeach; ?>
                                </td>
                                <td>
                                    <p align="center"><img src="<?php echo base_url('src/admin/' . $row->post_image); ?>" width="80px"/></p>
                                </td>
                                <td>
                                    <a href="<?php echo site_url('admincp/edit_post/' . $row->id); ?>" ><?php echo $row->post_title; ?></a>
                                </td>
                                <td>
                                    <a href="<?php echo site_url('admincp/edit_post/' . $row->id); ?>" ><?php echo $row->post_short; ?></a>
                                </td>
                                <td>
                                    <a href="<?php echo site_url('admincp/edit_post/' . $row->id); ?>" ><?php echo $row->post_content; ?></a>
                                </td>
                                <td>
                                    <?php echo $row->post_date; ?>
                                </td>
                                <td>
                                    <?php if ($row->active == 1): ?>
                                        Đang hoạt động
                                    <?php else: ?>
                                        Dừng hoạt động
                                    <?php endif; ?>
                                </td>
                                <td>
                                    <a href="<?php echo site_url('admincp/post/update_post/'.$row->id)?>"><i class="icon-edit bigger-120"></i></a>
                                    <a href="<?php echo site_url('admincp/post/del_post/'.$row->id)?>"><i class="icon-trash bigger-120"></i></a>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                            <?php endif; ?>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--End Datatables-->

