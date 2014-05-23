<div class="box grid_12">

	<div class="box-content no-pad">
<?php echo $pages ?>
		<table id="sample-table-1"
			class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th>TT</th>
					<th>Balance</th> 
					<th>fullname</th>
					<th>User_name</th>
					<th>Type</th> 
					<th>Phone</th>
					<th>Số TK</th>
					<th>Ngân hàng</th>
					<th>Address</th>
					<th>Created</th>
					<th>Status</th>
					<th>Setting</th>
				</tr>
			</thead>
			<tbody>
				<?php $i=0; ?>
				<?php if($members <> null):?>
				<?php foreach($members as $member):?>
				<?php $i = $i+1;?>
				<tr>
					<td><?php echo $i;?>
					</td>
					<td><?php echo $member->member_balance;?></td>
					<td><?php echo $member->member_fullname;?></td>
					<td><?php echo $member->member_name;?></td>
					<td><?php echo $member->member_type;?></td>
					<td><?php echo $member->member_phone;?></td>
					<td><?php echo $member->member_account;?></td>
					<td><?php echo $member->member_bank;?></td>
					<td><?php echo $member->member_address;?></td>
					<td><?php echo $member->member_created;?></td>
					<td><?php if($member->member_status == 1):?> Active <?php else:?>
						Stop <?php endif;?><td>
				
				</td>
					</tr>
				<?php endforeach; ?>
				<?php endif;?>
			</tbody>
		</table>
<?php echo $pages ?>
	</div>
</div>


