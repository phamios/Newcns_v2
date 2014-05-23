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
                            <?php if(intval($mon) === $m): ?>
                            <option value="<?php echo $m ?>" selected><?php echo $m ?></option>
                            <?php else: ?>
                            <option value="<?php echo $m ?>"><?php echo $m ?></option>
                            <?php endif ?>
                        <?php endforeach; ?>
                    </select> 
                    Năm: 
                    <select name="year" class="form-control">
                        <?php foreach (range(2014, date('Y')) as $year): ?>
                            <?php if(intval($y) === $year): ?>
                            <option value="<?php echo $year ?>" selected><?php echo $year ?></option>
                            <?php else: ?>
                            <option value="<?php echo $year ?>"><?php echo $year ?></option>
                            <?php endif ?>
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



