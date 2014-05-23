<?php $this->load->view('user/widget/select_report');?>
<div class="box grid_12">
    <div class="box-content no-pad">
        <table id="sample-table-1"
               class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>TT</th>
                    <th>Đầu số</th>
                    <th>Khách hàng</th>
                    <th>Nội dung gửi</th>
                    <th>Giờ gửi</th>
                    <th>Ngày gửi</th>
                    <th>Random key</th>
                </tr>
            </thead>
            <tbody>
                <?php $i = 0; ?>
                <?php if ($list_sms <> null): ?>
                    <?php foreach ($list_sms as $sms): ?>
                        <?php $i = $i + 1; ?>
                        <tr>
                            <td><?php echo $i; ?></td>
                            <td><?php echo $sms->shortcode; ?></td>
                            <td><?php echo $sms->phone; ?></td>
                            <td><?php echo $sms->content; ?></td>
                            <td><?php echo $sms->timeaccess; ?></td>
                            <td><?php echo $sms->dayaccess; ?></td>
                            <td><?php echo $sms->requestid; ?></td>
                        </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</div>
