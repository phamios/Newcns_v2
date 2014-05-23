<div class="box grid_12">
	<div class="box-head">
		<h2>List Category</h2>
	</div>
	<div class="box-content no-pad">
		<table id="sample-table-1" class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th>Ngày</th>
					<th>Email Người mua</th>
					<th>Họ và tên</th>
					<th>Điện thoại</th>
					<th>Sản phẩm mua</th>
					<th>Giá</th>
					<th>Tình trạng</th>

				</tr>
			</thead>
			<tbody>
			<?php if($allorder <> null):?>
			<?php foreach($allorder as $order):?>
				<tr>
					<td><?php echo $order->createdate;?></td>
					<?php foreach($customers as $cust):?>
					<?php if($cust->id == $order->custid):?>
					<td><?php echo $cust->email;?>
					</td>
					<td><?php echo $cust->fullname;?>
					</td>
					<td><?php echo $cust->phone;?>
					</td>
					<?php endif;?>
					<?php endforeach;?>
					<?php foreach($listitems as $item):?>
					<?php if($item->id == $order->itemid):?>
					<td><?php echo $item->namecontent;?>
					</td>
					<td><?php echo number_format($item->coins);?>
					</td>
					<?php endif;?>
					<?php endforeach;?>
					<td><?php if($order->status <> null):?> Đã giao hàng <?php else:?>
						<a
						href="<?php echo site_url('admincp/update_status_cart/'.$order->id);?>">Giao
							hàng</a> <?php endif;?></td>
				</tr>
				<?php endforeach; ?>
				<?php endif;?>
			</tbody>
		</table>
	</div>
</div>
