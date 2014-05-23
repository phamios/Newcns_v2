<div class="box grid_12">
	<div class="box-head">
		<h2>Danh Sách IP đang bị khóa</h2>
	</div>
	<div class="box-content">
		<div class="block-fluid">
			<table class="table table-striped table-bordered table-hover" id="example">
				<thead>
					<tr>
						<th width="10%">TT</th>
						<th>IP</th>
						<th>Ngày hết hạn</th>
						<th width="30%">Tùy chọn</th>
					</tr>

				</thead>
                <?php if($ipblocks <> null): ?>
				<tbody>
			    <?php $i=0;?>
				<?php foreach($ipblocks as $ip):?>
				<?php $i=$i + 1;?>
				<tr class="odd">
					<td><?php echo $i;?></td>
					<td><?php echo $ip->ip_address;?></td>
					<td><?php echo $ip->exp_date;?> ngày</td>
					<td><a href="<?php echo site_url('admincp/del_ip/'.$ip->id);?>" class="ico del">Xoá khỏi danh sách</a>
                        <a href="#" class="ico edit">Sửa</a>
					</td>
				</tr>
				<?php endforeach;?>
                <?php endif;?>
                </tbody>
			</table>
		</div>
	</div>
</div>
