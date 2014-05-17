<div class="row-fluid">
                        <!-- .inner -->
                        <div class="span12 inner">
                            <!--Begin Datatables-->
                            <div class="row-fluid">
                                <div class="span12">
                                    <div class="box">
                                        <header>
                                            <div class="icons"><i class="icon-move"></i></div>
                                            <h5>Danh sách cate</h5>
                                        </header>
                                        <div id="collapse4" class="body">
                                            <table id="dataTable" class="table table-bordered table-condensed table-hover table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Tên Cate</th>
                                                        <th>Danh mục cha</th>
                                                        <th>Ngày tạo</th>
                                                        <th>Trạng thái</th>
                                                        <th>Tùy chọn</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                        <?php if ($cates <> null): ?>
                        <?php foreach($cates as $cate):?>
                            <tr>
                                <td><?php echo $cate->id ?></td>
                                <td><?php echo ucfirst($cate->cate_name) ?></td>
                                <td>
                                    <?php foreach ($cates as $root): ?>
                                    <?php if ($cate->cate_root == $root->id): ?>
                                        <?php echo ucfirst($root->cate_name) ?>
                                    <?php else: ?>
                                    <?php endif ?>
                                    <?php endforeach ?>
                                </td>
                                <td><?php echo $cate->cate_created ?></td>
                                <td>
                                    <?php if ($cate->active == 1): ?>
                                        <!-- <a href="<?php echo site_url('admincp/cate/change_cate_status/'.$cate->id)?>">Đang hoạt động</a>-->
                                        Đang hoạt động
                                    <?php else: ?>
                                        <!-- <a href="<?php echo site_url('admincp/cate/change_cate_status/'.$cate->id)?>">Dừng hoạt động</a>-->
                                        Dừng hoạt động
                                    <?php endif ?>
                                </td>
                                <td>
                                    <a href="<?php echo site_url('admincp/cate/update_cate/'.$cate->id)?>"><i class="icon-edit bigger-120"></i></a>
                                    <a href="<?php echo site_url('admincp/cate/del_cate/'.$cate->id)?>"><i class="icon-trash bigger-120"></i></a>
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

