<div class="box grid_12">
<div class="row-fluid">
    <div class="span12">
        <div class="row-fluid">
           <div class="widget-box">
			   <div class="widget-header widget-header-small">
                	<h5>Tổng số MO:
                		<?php echo $total_mo ?>
                	</h5>
				</div>
           
           	 <div class="widget-body">
			   	<div class="widget-main"> 
                    <?php echo form_open_multipart('admincp/list_mo'); ?> 
                    Đầu số:
			        <select name="shortcode" id="form-field-select-1" >
			             <option value="All">All</option>
			             <?php foreach($shortcodes as $shortcode):?>
			             <?php if ($shortcode->shortcode == $sc): ?>
			                 <option value="<?php echo $shortcode->shortcode?>" selected>
			                 <?php echo $shortcode->shortcode?>
			                 </option>
			             <?php else: ?>
			                 <option value="<?php echo $shortcode->shortcode?>">
			                 <?php echo $shortcode->shortcode?>
			                 </option>
			             <?php endif;?>
			             <?php endforeach;?>
			         </select>
					 
    User: <input type="text" name="user" class="input-medium search-query" value="<?php echo isset($user) ? $user : ""?>" />
    Từ: <input type="text" id="datepicker" name="date_from"class="input-medium search-query"  value="<?php echo isset($datefrom) ? $datefrom : ""?>"/> 
	Đến: <input type="text" id="datepicker2" name="date_to"class="input-medium search-query"  value="<?php echo isset($dateto) ? $dateto : ""?>"/>
                    <input type="submit" name="submit" value="Tìm kiếm" class="btn btn-purple btn-small"/> 
                    <input type="submit" name="searchall" value="Xem tất cả" class="btn btn-purple btn-small"/> 
                    <?php echo form_close(); ?>
               </div>
		   	</div>
		  </div><!-- /.box-body -->
        </div><!-- /.box -->
    </div><!-- /.col -->

</div>
 
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
