<div class="box grid_12">
    <div class="box-head">
        <h2>Danh sách</h2>
    </div>
    <div class="box-content no-pad"> 
        <table id="sample-table-1" class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th  >ID</th> 
                    <th  >Tên Cate</th>
                    <th  >Danh mục cha</th>
                    <th  >Ngày tạo</th>
                    <th  >Trạng thái</th>
                    <th  >Tuỳ chỉnh</th>
                </tr>
            </thead>
            <tbody>
                <?php if ($cates <> null): ?>
                    <?php foreach ($cates as $cate): ?>
                        <tr>
                            <td >
                                <?php echo $cate->id; ?>
                            </td>
                            <td>
                                <?php echo ucfirst($cate->cate_name); ?>
                            </td>
                            <td>
                                <?php foreach ($cates as $root): ?>
                                <?php if ($cate->cate_root == $root->id): ?>
                                    <?php echo ucfirst($root->cate_name) ?>
                                <?php else: ?>
                                <?php endif ?>
                                <?php endforeach ?>
                            </td>
                            <td>
                                <?php echo $cate->cate_created; ?>
                            </td>
                            <td><?php if ($cate->cate_active == 1): ?>
                                    Active
                                <?php else: ?>
                                    Unactive
                                <?php endif; ?>
                            </td>
                            <td><a href="<?php echo site_url('admincp/edit_cate/'.$cate->id)?>"><span
                                    class="green"> <i class="icon-edit bigger-120"></i> </span> </a>
                                <a href="<?php echo site_url('admincp/del_cate/'.$cate->id)?>"><span
                                    class="red"> <i class="icon-trash bigger-120"></i> </span> </a>

                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</div>
