 
<script type="text/javascript">  
    function isNumberKey(evt){
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
    function isNumberKey2(evt){
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
</script>   
<div class="row-fluid">
    <div class="span5">
        <div class="widget-box">
            <div class="widget-header">
                <h4>Số dư hiện tại: <?php echo number_format($total_profit); ?> <br/>
                    <?php echo $error; ?>
                </h4>
            </div>
            <?php echo form_open_multipart('user/sendmoney'); ?>
            <div class="widget-body">
                <div class="widget-main no-padding">
                    <form />
                    <!--<legend>Form</legend>--> 
                    <fieldset>  
                        <label>Số tiền cần chuyển</label> 
                        <input type="text"
                               name="balance_change" onkeypress="return isNumberKey(event)"/>  
                        <label>ID người nhận</label> 
                        <input type="text"
                               name="receiver_id" onkeypress="return isNumberKey2(event)"/> 
                    </fieldset> 
                    <div class="form-actions center"> 
                        <input type="submit" value="Xác nhận" name="submit" class="btn btn-small btn-success"> 
                    </div>
                    </form>
                </div>
            </div>
            <?php echo form_close(); ?>
        </div>
    </div>
</div>
