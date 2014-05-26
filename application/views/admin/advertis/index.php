<div class="row-fluid">
    <!-- .span12 -->
    <div class="span12">
        <div class="box">
            <header>
                <div class="icons"><i class="icon-edit"></i></div>
                <h5><?php echo $title; ?></h5>
            </header>
            <div id="category-list" class="body collapse in">
            	<?php if(!$model): ?>
            		<?php echo "Không có quảng cáo nào"; ?>
            	<?php else: ?>
	                <table class="table table-bordered responsive">
	                    <thead>
	                        <tr>
	                            <th>ID</th>
	                            <th>Tên</th>
	                            <th>Nội dung</th>
	                            <th>Thứ tự </th>
	                            <th>Trạng thái</th>
	                            <th>Tùy chọn</th>
	                        </tr>
	                    </thead>
	                    <tbody>
	                    	<?php foreach ($model as $row) : ?>
		                        <tr>
		                            <td><?php echo $row->id; ?></td>
		                            <td><?php echo $row->advertis_name; ?></td>
		                            <td><?php echo $row->advertis_content; ?></td>
		                            <td><?php echo $row->advertis_order; ?></td>
                                    <td>
                                    <?php if ($row->advertis_status == 1): ?>
                                        Active
                                    <?php else: ?>
                                        Stop
                                    <?php endif ?>
                                    </td>
		                            <td>
		                                <button class="btn" onclick="edit(<?php echo $row->id ?>);"><i class="icon-edit"></i></button>
		                                <button class="btn btn-danger" data-toggle="confirmation" onclick="delete_adv(<?php echo $row->id ?>);"><i class="icon-remove"></i></button>
		                            </td>
		                        </tr>
	                    	<?php endforeach; ?>
	                    </tbody>
	                </table>
            	<?php endif; ?>
            </div>
        </div>
    </div>
    <!-- /.span12 -->
</div>
<script type="text/javascript">
function edit(id) {
	window.location.href = "<?php echo $this->config->base_url().'admincp/advertis/edit/';?>" + id;
}

function delete_adv(id) {
    var r = confirm("Do you want to delete this advertis?");
    if (r == true) {
      	$.ajax({
      		url: "<?php echo $this->config->base_url().'admincp/advertis/delete';?>",
      		type: 'POST',
      		data: {id: id},
      		success: function(data) {
      			window.location.href = "<?php echo $this->config->base_url().'admincp/advertis';?>";
            },
      	});
    }
}
</script>
