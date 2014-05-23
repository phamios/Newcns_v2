<div class="box grid_12">
	<div class="box-head">
		<h2>Member Store</h2>
	</div>
	<div class="box-content no-pad">


		<table class="display" id="example">
			<thead>
				<tr>
					<th width="13">ID</th>
					<th>Loại user</th>
					<th>Name</th>
					<th>fullname</th>
					<th>phone</th>
					<th>Email</th>
					<th>Status</th>
					<th>Ngày</th>
					<th>IP</th>
				</tr>
			</thead>
			<tbody>
				<?php if($listusers <> null):?>
				<?php foreach($listusers as $user):?>
				<tr class="odd gradeX">
					<td class="center"><?php echo $user->id;?>
					</td>
					<td class="center"><?php foreach ($listusertype as $usertype):?> <?php $usertype_name = 'Chưa xác định'; $color='black';  if($user->usertype == $usertype->id) {
						$usertype_name = $usertype->name; 
						$color = $usertype->color;
						break;
					} ?> <?php endforeach;?> <?php echo '<font color='.$color.'>'.$usertype_name.'</font>';?></td>
					<td class="center"><?php echo $user->username;?>
					</td>
					<td><?php echo $user->fullname;?>
					</td>
					<td><?php echo $user->phone;?>
					</td>
					<td><?php echo $user->email;?>
					</td>
					<td><?php if($user->active == 1):?> <a
						href="<?php echo site_url("admincp/status_member/".$user->id."/0");?>">
							<img src="<?php echo base_url("src/active.gif");?>" /> active
					</a> <?php else:?> <a
						href="<?php echo site_url("admincp/status_member/".$user->id."/1");?>">
							<img src="<?php echo base_url("src/unactive.gif");?>" />pending/banned
					</a> <?php endif;?></td>
					<td><?php echo $user->createdate;?>
					</td>
					<td class="center"><?php echo $user->registerIP;?>
					</td>
				</tr>
				<?php endforeach; ?>
				<?php endif;?>
			</tbody>
		</table>
	</div>
</div>
