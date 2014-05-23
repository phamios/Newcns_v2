<div class="box grid_12"> 
    <div class="box-content no-pad"> 
        <table id="sample-table-2" class="table table-striped table-bordered table-hover">
            <thead>
                <tr>                                    
                    <th width="15%">ID</th>
                    <th width="35%">Tên loại</th>  
                    <th width="35%">Thứ tự</th>  
                    <th width="35%">Tình trạng</th>
                    <th width="35%">Tuỳ chỉnh</th>                             
                </tr>
            </thead>
            <tbody>
                <?php if ($alltype <> null): ?>
                    <?php foreach ($alltype as $type): ?>
                        <tr>
                            <td><?php echo $type->id; ?></td> 
                            <td><a href="<?php echo site_url('admincp/edit_type/' . $type->id); ?>"><?php echo $type->nametype; ?> 
                                </a> </td> 
                            <td><?php echo $type->sethome ?></td>
                            <td>
                                <?php if ($type->active != 0): ?>
                                    <a href="<?php echo site_url('admincp/statuschange/' . $type->id . '/0'); ?>">
                                    
                                    <span class="label label-success">Dừng</span></a>
                                <?php else: ?>
                                    <a href="<?php echo site_url('admincp/statuschange/' . $type->id . '/1'); ?>">
                                    <span class="label label-warning">Kích hoạt</span></a>
                                <?php endif; ?>
                            </td> 
 
                            <td><a href="<?php echo site_url('admincp/edit_type/' . $type->id); ?>"><i class="icon-edit bigger-120"></i></a>

                                <a href="<?php echo site_url('admincp/del_type/' . $type->id); ?>"><i class="icon-trash bigger-120"></i></a>
                            </td>                                 
                        </tr>
                    <?php endforeach; ?>   
                <?php endif; ?>                           
            </tbody>
        </table>
    </div>
</div>
