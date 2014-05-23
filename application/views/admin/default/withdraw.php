<div class="box grid_12">

    <div class="box-mo no-pad">
        <?php echo $pages ?>
        <table id="sample-table-1" class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th></th>
                    <th>Ngày</th>
                    <th>Giờ </th>
                    <th>Tình trạng </th> 
                    <th>User </th> 
                    <th>User ID </th> 
                    <th>Số lượng </th>  
					<th>Kiểu rút</th> 
                    <th>Loại giao dịch</th> 
                    <th>Người nhận</th> 
                </tr>
            </thead>
            <tbody>
                <?php if ($list_withdraw <> null): ?>
                    <?php foreach ($list_withdraw as $row): ?>
                        <tr>
                            <td><a href="<?php echo site_url('admincp/run_withdraw');?>">Chuyển</a></td>
                            <td><?php echo $row->datecreated ?></td>
                            <td><?php echo $row->timeaccess ?></td>
                            <td><?php if($row->status == 0) :?>
                                Huỷ 
                            <?php elseif($row->status == 1): ?>
                                Holding 
                                <?php elseif($row->status == 2): ?>
                                Đang duyệt 
                                <?php elseif($row->status == 3): ?> 
                                Đã chuyển
                                <?php endif; ?>
                            </td> 
                            <td><?php echo $row->username ?></td>
                            <td><?php echo $row->userid; ?></td>
                            <td><?php echo $row->amount; ?></td>
                            <td>
								<?php if($row->type_transfer == 1): ?>
									Banking
								<?php endif;?>	
								<?php if($row->type_transfer ==2): ?>
									Card - Thẻ cào
								<?php endif;?>	
								<?php if($row->type_transfer == 3): ?>
									Bảo Kim
								<?php endif;?>	
								<?php if($row->type_transfer == 4): ?>
									Ngân lượng
								<?php endif;?>	
							</td> 
                            <td><?php if($row->type_withdraw == 1): ?>
                                    <span style="color:red">Rút tiền </span>
                                <?php elseif($row->type_withdraw == 2):?>
                                     <span style="color:black">Chuyển khoản </span>
                                <?php endif;?>
                            </td>
                            <td><?php echo $row->receiver_id; ?></td> 
                        </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
        <?php echo $pages ?>
    </div>
</div>
