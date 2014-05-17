<div class="row-fluid">
                        <!-- .inner -->
                        <div class="span12 inner">
                            <!--Begin Datatables-->
                            <div class="row-fluid">
                                <div class="span12">
                                    <div class="box">
                                        <header>
                                            <div class="icons"><i class="icon-move"></i></div>
                                            <h5>Danh sách Mã chứng khoán</h5>
                                        </header>
                                        <div id="collapse4" class="body">
                                            <table id="dataTable" class="table table-bordered table-condensed table-hover table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Mã</th>
                                                        <th>Tên</th>
                                                        <th>Giá trần</th>
                                                        <th>Giá sàn</th>
                                                        <th>Giá tham chiếu</th>
                                                        <th>Giá khớp</th>
                                                        <th>Khối lượng khớp</th>
                                                        <th>Thay đổi</th>
                                                        <th>Trạng thái</th>
                                                        <th>Tùy chọn</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                        <?php if ($codecks <> null): ?>
                        <?php foreach($codecks as $codeck):?>
                            <tr>
                                <td><?php echo $codeck->id ?></td>
                                <td><?php echo $codeck->ten_ma ?></td>
                                <td><?php echo $codeck->ten_chi_tiet ?></td>
                                <td><?php echo $codeck->price_tran ?></td>
                                <td><?php echo $codeck->price_san ?></td>
                                <td><?php echo $codeck->tham_chieu ?></td>
                                <td><?php echo $codeck->gia_khop ?></td>
                                <td><?php echo $codeck->khoi_luong_khop ?></td>
                                <td><?php echo $codeck->thay_doi ?></td>
                                <td>
                                    <?php if ($codeck->status == 1): ?>
                                        <a href="<?php echo site_url('admincp/codeck/change_codeck_status/'.$codeck->id)?>">Đang hoạt động</a>
                                    <?php else: ?>
                                        <a href="<?php echo site_url('admincp/codeck/change_codeck_status/'.$codeck->id)?>">Dừng hoạt động</a>
                                    <?php endif ?>
                                </td>
                                <td>
                                    <a href="<?php echo site_url('admincp/codeck/update_codeck/'.$codeck->id)?>"><i class="icon-edit bigger-120"></i></a>
                                    <a href="<?php echo site_url('admincp/codeck/del_codeck/'.$codeck->id)?>"><i class="icon-trash bigger-120"></i></a>
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

