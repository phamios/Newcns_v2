<script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Tháng', 'Doanh thu', 'Tải ứng dụng'],
<?php foreach($month as $m => $money): ?>
['<?php echo $m?>',  <?php echo $money?>,      0],
<?php endforeach?>
        ]);

        var options = {
          title: 'Biểu đồ thống kê theo tháng',
          hAxis: {title: 'Thành viên: <?php echo $username ?> - Mã ID: <?php echo $this->session->userdata('userid')?>',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    </script>
