<div class="row">
    <div class="col-md-12">
        <div class="box box-solid box-primary">
            <div class="box-header">
                <h3 class="box-title">Báo cáo thống kê chi tiết</h3>
            </div>
            <br>
            <div class="box-header">
                <h3 class="box-title">Thời gian:</h3>
            </div>
            <div class="box-body">
                <p>
                    <?php echo form_open_multipart('user/report_details'); ?>
    Từ: <input type="text" id="datepicker" name="date_from" value="<?php echo isset($datefrom) ? $datefrom : ""?>"/> Đến: <input type="text" id="datepicker2" name="date_to" value="<?php echo isset($dateto) ? $dateto : ""?>"/>
                    <input type="submit" name="search_report" value="Xem doanh thu"/>
                    <?php echo form_close(); ?>
                </p>
            </div><!-- /.box-body -->
        </div><!-- /.box -->
    </div><!-- /.col -->

</div>

<div class="box grid_12">
    <div class="box-content no-pad">
        <table id="sample-table-1"
               class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Loại ứng dụng</th>
                    <th>Tổng số tin nhắn</th>
                    <th>Doanh thu</th>
                </tr>
            </thead>
            <tbody>
                <?php $i = 0; $total_count = 0; $total_profit = 0 ?>
                    <?php foreach ($content as $k => $v): ?>
                        <?php $i = $i + 1; ?>
                        <tr>
                            <td><?php echo $i ?></td>
                            <td><?php echo $k ?></td>
                            <td><?php echo $v['count'] ? $v['count'] : 0 ?></td>
                            <td><?php echo $v['profit'] ? $v['profit'] : 0 ?> Vnđ</td>
                        </tr>
                        <?php endforeach; ?>
                        <tr>
                            <td></td>
                            <td>Tổng cộng</td>
                            <td>
                                <?php foreach($content as $k => $v): ?>
                                    <?php $total_count += $v['count'] ?>
                                    <?php $total_profit += $v['profit'] ?>
                                <?php endforeach?>
                                <?php echo $total_count?>
                            </td>
                            <td>
                                <?php echo $total_profit?> Vnđ
                            </td>
                        </tr>

            </tbody>
        </table>
    </div>
</div>

<div class="box grid_12">
    <div id="chart_div" style="width: 900px; height: 500px;"></div>
</div>

<script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Ngày', 'Doanh thu', 'Tải ứng dụng'],
<?php foreach($date as $day => $money): ?>
['<?php echo date('d',$day) == "01" ? ltrim(date('d',$day),"0")."/".ltrim(date('m',$day),"0") : ltrim(date('d',$day),"0")?>',  <?php echo $money?>,      0],
<?php endforeach?>
        ]);

        var options = {
          title: 'Biểu đồ thống kê theo ngày',
          hAxis: {title: 'Thành viên: <?php echo $username ?> - Mã ID: <?php echo $this->session->userdata('userid')?>',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    </script>
