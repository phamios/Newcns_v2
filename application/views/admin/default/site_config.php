<div class="box grid_12">
	<div class="box-head">
		<h2>Cấu hình website</h2>
	</div>
	<div class="box-content">
		<div class="block-fluid">
			<table class="table table-striped table-bordered table-hover" id="example">
				<thead>
					<tr>
						<th width="10%">ID</th>
						<th>Setting</th>
						<th>Value</th>
						<th width="30%">Tùy chọn</th>
					</tr>

				</thead>
                <?php if($listconfig <> null): ?>
				<tbody>
			    <?php $i=0;?>
				<?php foreach($listconfig as $config):?>
				<?php $i=$i + 1;?>
				<tr class="odd">
					<td><?php echo $i;?></td>
					<td><?php echo $config->setting_name;?></td>
					<td><?php echo $config->setting_value;?></td>
					<td><a href="<?php echo site_url('admincp/edit_config/'.$config->id);?>"><i class="icon-edit bigger-120"></i></a>
                        <a href="#"><i class="icon-trash bigger-120"></i></a>
					</td>
				</tr>
				<?php endforeach;?>
                <?php endif;?>
                </tbody>
			</table>
		</div>
	</div>
</div>
