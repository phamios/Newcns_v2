<div id="wrapper">
    <div id="page-wrapper"> 
        <div class="alert alert-success alert-dismissable">
            <button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>
            <a class="alert-link" href="<?php echo site_url(); ?>">Thông báo <?php echo date('d-m-Y'); ?></a>
            <?php foreach ($notifies as $notify): ?>
                <?php echo $notify->content; ?>
            <?php endforeach; ?> 
        </div>


    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="box box-danger"> 
            <div class="box-body"> 
                <?php echo form_open_multipart('user/dashboard'); ?>
                <div class="form-group"> 
                    Tháng: 
                    <select name="month" class="form-control">
                        <?php foreach (range(1, 12) as $m): ?>
                            <option value="<?php echo $m ?>"><?php echo $m ?></option>
                        <?php endforeach; ?>
                    </select> 
                    Năm: 
                    <select name="year" class="form-control">
                        <?php foreach (range(2014, date('Y')) as $y): ?>
                            <option value="<?php echo $y ?>"><?php echo $y ?></option>
                        <?php endforeach; ?>
                    </select>  
                    <br/>
                    <input type="submit" name="submit" value="Xem" class="btn btn-primary" /> 
                </div>
                <?php echo form_close() ?>
            </div><!-- /.box-body -->
        </div><!-- /.box -->
    </div><!-- /.col -->
</div>
<div class="row">
    <div class="col-md-12">
        <div class="box box-danger"> 
            <div class="box-body"> 
                <div id="chart_div" style="width: 900px; height: 500px;"></div>
            </div><!-- /.box-body -->
        </div><!-- /.box -->
    </div><!-- /.col -->
</div>



