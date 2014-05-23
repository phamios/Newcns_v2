<div class="box grid_12">

    <div class="box-content no-pad">
        <table id="sample-table-1" class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>TT</th>
                    <th>Link wap</th>
                    <th>Tên wap</th>
                    <th>Tình trạng</th>
                    <th>Wap Charging</th>
                    <th>Ngày cập nhật</th> 
                    <th>Tùy chọn</th>
                </tr>
            </thead>
            <tbody>
                <?php $i = 0; ?>
                <?php if ($list_wap <> null): ?>
                    <?php foreach ($list_wap as $wap): ?>
                        <?php $i = $i + 1; ?>
                        <tr>
                            <td><?php echo $i; ?></td>
                            <td><a href="<?php echo "http://" . $wap->wap_name . ".vmob.vn"; ?>"><?php echo $wap->wap_name ?></a></td>
                            <td><?php echo $wap->wap_title ?></td>
                            <td><?php if ($wap->wap_active): ?>
                                    <a href="<?php echo site_url('user/change_wap_status/' . $wap->id) ?>">Đang hoạt động</a></td>
                            <?php else: ?>
                        <a href="<?php echo site_url('user/change_wap_status/' . $wap->id) ?>">Không hoạt động</a></td>
                    <?php endif ?>
                    <td><?php if ($wap->wap_charging <> 0): ?>
                            Running
                        <?php else: ?>
                            Stop
                        <?php endif; ?>
                    </td>
                    <td><?php echo $wap->wap_created ?></td>
                    <td>
                        <a href="<?php echo site_url('user/updatewap/' . $wap->id) ?>"><i class="icon-edit bigger-120"></i></a>
                        <a href="<?php echo site_url('user/delwap/' . $wap->id) ?>"><i class="icon-trash bigger-120"></i></a>
                    </td>

                    </tr>
                <?php endforeach; ?>
            <?php endif; ?>
            </tbody>
        </table>
    </div>
</div>
