<div class="row-fluid">
    <!-- .span12 -->
    <div class="span12">
        <div class="box">
            <header>
                <div class="icons"><i class="icon-edit"></i></div>
                <h5><?php echo $title; ?></h5>
                <a class="cate-create" href="<?php echo $this->config->base_url().'admin/category/create';?>">Create</a>
                <!-- <div class="toolbar">
                    <a href="#actionTable" data-toggle="collapse" class="accordion-toggle minimize-box">
                        <i class="icon-chevron-up"></i>
                    </a>
                </div> -->
            </header>
            <div id="category-list" class="body collapse in">
            	<?php if(!$model): ?>
            		<?php echo "No category"; ?>
            	<?php else: ?>
	                <table class="table table-bordered responsive">
	                    <thead>
	                        <tr>
	                            <th>ID</th>
	                            <th>Name</th>
	                            <th>Image</th>
	                            <th>Category Root</th>
	                            <th>Action</th>
	                        </tr>
	                    </thead>
	                    <tbody>
	                    	<?php foreach ($model as $row) : ?>
		                        <tr>
		                            <td><?php echo $row->id; ?></td>
		                            <td><?php echo $row->catename; ?></td>
		                            <td>
		                            	<?php if($row->cateimages != ''): ?>
		                            		<img src="<?php echo $this->config->base_url().'img/category/'.$row->cateimages;?>" width="200">
		                            	<?php endif; ?>
		                            </td>
		                            <td><?php echo $row->cateroot; ?></td>
		                            <td>
		                                <button class="btn" onclick="edit(<?php echo $row->id ?>);"><i class="icon-edit"></i></button>
		                                <button class="btn btn-danger" data-toggle="confirmation" onclick="deleteCate(<?php echo $row->id ?>);"><i class="icon-remove"></i></button>
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
	window.location.href = "<?php echo $this->config->base_url().'admincp/category/edit/';?>" + id;
}

function deleteCate(id) {
	var txt;
    var r = confirm("Do you want to delete this category?");
    if (r == true) {
      	$.ajax({
      		url: "<?php echo $this->config->base_url().'admincp/category/delete';?>",
      		type: 'POST',
      		//dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
      		data: {id: id},
      		success: function(data) {
      			window.location.href = "<?php echo $this->config->base_url().'admincp/category';?>";
      		}
      	});
    }
    //document.getElementById("demo").innerHTML = txt;
}
</script>