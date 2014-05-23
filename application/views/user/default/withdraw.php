 
<script type="text/javascript">  
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
</script>    
<div class="row">
    <div class="col-md-6">
        <div class="box box-danger">
            <div class="box-header">
                <i class="fa fa-warning">
				<h3>Số dư hiện tại: <?php echo number_format($total_profit); ?> <br/>
			 		<?php echo $error; ?>
			 </h3>
			 </i>
                
            </div><!-- /.box-header -->
		<?php echo form_open_multipart('user/withdraw'); ?>
           <form role="form">
                <div class="box-body">
					<div class="form-group">
                        <label for="exampleInputEmail1">Lượng rút</label> 
						<input type="text"
							   name="balance_change" class="form-control" onkeypress="return isNumberKey(event)"/>  
                    </div> 
					<div class="form-group">
                        <label for="exampleInputEmail1">Loại hình rút</label> 
						<select name="type_transfer" class="form-control">
							<option value="1">Banking</option>
							<option value="2">Card - Thẻ cào </option>
							<option value="3">Bảo Kim</option>
							<option value="4">Ngân lượng </option>
						</select>
                    </div> 
                <div class="box-footer">
                    <input type="submit" class="btn btn-primary" name="submit" value="Đồng ý"></input>
                </div>
            </form><!-- /.box-body -->
			<?php echo form_close(); ?>
        </div><!-- /.box -->
    </div><!-- /.col -->
	</div>
</div>