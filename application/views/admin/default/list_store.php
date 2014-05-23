<div class="box grid_12"> 
    <div class="box-content no-pad"> 
         
          <span class="help-inline">Tổng số: <?php echo number_format($total_items_ped); ?> đã bán ra</span>
          <br/>
          <span class="help-inline">Tổng tiền đã có: <?php echo number_format($total_amount); ?>  vnd</span>
           <br/>
        <table id="sample-table-1" class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                	<th >Tên khách</th>
                    <th >Chuyên mục</th> 
                    <th >Sản phẩm</th>
                    <th >Giá đơn chiếc</th>
                    <th>Số lượng</th>
                    <th >Tổng</th>
                    <th >Ngày bán</th>
                    <th >Tình trạng</th>
                    <th >Tùy chỉnh</th>
                </tr>
            </thead>
            <tbody>
                <?php if ($total_store <> null): ?>
                    <?php foreach ($total_store as $row): ?>
                        <tr>
                        	<td>
                                   <?php echo $row->customer_name; ?> 
                            </td>
                            <td >
                                   <?php foreach ($alltype as $type): ?>
                                     <?php if($type->id == $row->cateid): ?>
                                        <?php echo $type->nametype; ?>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            </td>
                            <td>
                                <?php foreach ($items as $item): ?>
                                    <?php if ($item->id == $row->nameitem): ?>
                                        <?php echo $item->namecontent; ?>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            </td>
                            <td>
                                   <?php echo number_format($row->price); ?> vnd
                            </td>
                            <td style="font-size:9px;">
                                 <?php echo number_format($row->amount); ?>
                            </td>
                            <td style="font-size:9px;">
                                 <?php echo number_format($row->amount*$row->price); ?>
                            </td>
                            <td><?php echo $row->datecreated; ?></td>
                            <td><?php if ($row->status == 1): ?>
                                   <span class="btn btn-minier btn-mini"> Đã thanh toán</span>
                                <?php elseif ($row->status == 2): ?>
                                    <span class="btn btn-minier btn-yellow">Đặt hàng</span>
                                <?php else: ?>
                                    <span class="btn btn-minier btn-danger">Chưa thanh toán</span>
                                <?php endif; ?></td>
                            <td> 
                                 <a href="<?php echo site_url('admincp/del_store/' . $row->id); ?>" >  Xóa</a></td>
                               
                        </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
          <br/>
            <?php echo $pages;?> <br/>
    </div>
</div>
