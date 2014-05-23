 
<div class="row">
    <div class="col-md-4"> 
        <div class="box box-solid box-primary">
            <div class="box-header">
                <h3 class="box-title">Tổng thu nhập </h3> 
            </div>
            <div class="box-body">
                <?php echo number_format($profit); ?> Vnđ
            </div><!-- /.box-body -->
        </div><!-- /.box -->
    </div><!-- /.col -->
    <div class="col-md-4"> 

    </div><!-- /.col -->
    <div class="col-md-6"> 
        <div class="box box-solid box-primary">
            <div class="box-header">
                <h3 class="box-title">Thời gian:</h3> 
            </div>
            <div class="box-body">
                <p>
                    <?php echo form_open_multipart('user/ex_report'); ?>
                   Từ: <input type="text" id="datepicker" name="date_from" value="<?php echo isset($datefrom) ? $datefrom : ""?>"/> Đến: <input type="text" id="datepicker2" name="date_to" value="<?php echo isset($dateto) ? $dateto : ""?>"/> 
                    <input type="submit" name="search_report" value="Xem doanh thu"/>
                    <?php echo form_close(); ?>
                </p>  
            </div><!-- /.box-body -->
        </div><!-- /.box -->
    </div><!-- /.col -->

</div>
<p> 
<!--    
    Lựa chọn nhanh:  &nbsp;
    <a href="<?php echo site_url('user/ex_report');?>">Hôm nay</a> | 
    <a href="<?php echo site_url('user/ex_report/2');?>">Hôm qua</a> | 
    <a href="<?php echo site_url('user/ex_report/3');?>"> Tuần này </a> | 
    <a href="<?php echo site_url('user/ex_report/4');?>"> Tháng này </a> |
    <a href="<?php echo site_url('user/ex_report/5');?>">Tháng trước </a>  -->
   
</p>
