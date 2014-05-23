<div class="box grid_12">
    <div class="box-head">
        <h2>Danh sách</h2>
    </div>
    <div class="box-content no-pad"> 
        <table id="sample-table-1" class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th  >ID</th> 
                    <th  >Đầu số</th>
                    <th  >Giá tiền</th>
                    <th  >Trạng thái</th>
                    <th  >Tuỳ chỉnh</th>
                </tr>
            </thead>
            <tbody>
                <?php if ($shortcodes <> null): ?>
                    <?php foreach ($shortcodes as $shortcode): ?>
                        <tr>
                            <td >
                                <?php echo $shortcode->id; ?>
                            </td>
                            <td>
                                <?php echo $shortcode->shortcode; ?>
                            </td>
                            <td>
                                <?php echo $shortcode->price; ?>
                            </td>
                            <td><?php if ($shortcode->active == 1): ?>
                                    Hoạt động
                                <?php else: ?>
                                    Dừng
                                <?php endif; ?>
                            </td>
                            <td><a href="<?php echo site_url('admincp/edit_shortcode/'.$shortcode->id)?>"><span
                                    class="green"> <i class="icon-edit bigger-120"></i> </span> </a>
                                <a href="<?php echo site_url('admincp/del_shortcode/'.$shortcode->id)?>"><span
                                    class="red"> <i class="icon-trash bigger-120"></i> </span> </a>

                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</div>
