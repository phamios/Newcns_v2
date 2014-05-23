<div class="row-fluid">
	<div class="span3 widget-container-span">
		<div class="widget-box">
			<div class="widget-header">
				<h5 class="smaller">Tổng thu nhập</h5>

				<div class="widget-toolbar">
					<span class="label label-success"> <?php echo number_format($profit);?><i class="icon-arrow-up"></i>
					</span>
				</div>
			</div>
		</div>
	</div>
	</div>
	<br/>
<div class="box grid_12">
	<div class="box-content no-pad">
		<table id="sample-table-1"
			class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th>TT</th>
					<th>Đầu số</th>
					<th>Khách hàng</th>
					<th>Nội dung gửi</th>
					<th>Giờ gửi</th>
					<th>Ngày gửi</th>
					<th>Random key</th>
				</tr>
			</thead>
			<tbody>
			<?php $i=0; ?>
			<?php if($list_sms <> null):?>
			<?php foreach($list_sms as $sms):?>
			<?php $i = $i+1;?>
				<tr>
					<td><?php echo $i;?></td>
					<td><?php echo $sms->shortcode;?></td>
					<td><?php echo $sms->phone;?></td>
					<td><?php echo $sms->content;?></td>
					<td><?php echo $sms->timeaccess;?></td>
					<td><?php echo $sms->dayaccess;?></td>
					<td><?php echo $sms->requestid;?></td>
				</tr>
				<?php endforeach; ?>
				<?php endif;?>
			</tbody>
		</table>
	</div>
</div>
