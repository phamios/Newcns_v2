<div class="box grid_12">

<?php echo form_open_multipart('admincp/list_mo_by_shortcode')?>
<div class="row-fluid">
 <div class="span10">
       <p>Lựa chọn đầu số</p>
       <select name="shortcode">
            <option value="0" selected="selected">------------</option>
            <?php foreach($shortcodes as $shortcode):?>
            <option value="<?php echo $shortcode->shortcode?>">
            <?php echo $shortcode->shortcode?>
            </option>
            <?php endforeach;?>
        </select> 
        <input type="submit"/>
        </div>
</div>
</form>
<?php //echo form_close() ?>
	<div class="box-mo no-pad">
<?php echo $pages ?>
		<table id="sample-table-1" class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th>ID</th>
					<th>Request ID</th>
					<th>User ID</th>
					<th>App ID</th>
					<th>Số điện thoại</th> 
					<th>Đầu số</th> 
					<th>Giá tiền</th> 
					<th>Số tiền thật</th> 
					<th>Nội dung</th> 
					<th>Ngày</th> 
					<th>Thời gian</th> 
				</tr>
			</thead>
			<tbody>
			<?php if($mos <> null):?>
			<?php foreach($mos as $mo):?>
				<tr>
					 <td><?php echo $mo->id?></td>
                     <td><?php echo $mo->requestid?></td>
					 <td><?php echo $mo->userid ?></td>
					 <td><?php echo $mo->app_id ?></td>
					 <td><?php echo $mo->phone ?></td>
					 <td><?php echo $mo->shortcode; ?></td>
					 <td><?php echo $mo->money; ?></td>
					 <td><?php echo $mo->realmoney; ?></td>
					 <td><?php echo $mo->content; ?></td>
					 <td><?php echo $mo->dayaccess; ?></td>
					 <td><?php echo $mo->timeaccess; ?></td>
				</tr>
				<?php endforeach; ?>
				<?php endif;?>
			</tbody>
		</table>
<?php echo $pages ?>
	</div>
</div>
