<div class="row-fluid">
    <!-- .inner -->
    <div class="span12 inner">
        <!--Begin Datatables-->
        <div class="row-fluid">
            <div class="span12">
                <div class="box">
                    <header>
                        <div class="icons"><i class="icon-move"></i></div>
                        <h5>Danh sách cấu hình</h5>
                    </header>
                    <div id="collapse4" class="body">
                        <table id="dataTable" class="table table-bordered table-condensed table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Cấu hình</th>
                                    <th>Giá trị</th>
                                    <th>Trạng thái</th>
                                    <th>Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php if ($listconfig <> null): ?>
                                    <?php foreach ($listconfig as $row): ?>
                                        <tr>
                                            <td>
                                                <?php echo $row->option_name ?>
                                            </td>
                                            <td>
                                                <?php echo $row->option_value ?>
                                            </td>
                                            <td>
                                                <?php if ($row->option_status == 1): ?>
                                                    Active
                                                <?php else: ?>
                                                    Stop
                                                <?php endif; ?>
                                            </td>
                                            <td>
                                                <?php if ($row->option_type == 1): ?>
                                                <a class="btn edit" href="<?php echo site_url('admincp/config/edit/' . $row->id); ?>"><i class="icon-edit"></i></a>
                                                <?php endif ?>
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
