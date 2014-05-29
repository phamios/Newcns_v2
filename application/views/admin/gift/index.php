<div class="row-fluid">
    <!-- .inner -->
    <div class="span12 inner">
        <!--Begin Datatables-->
        <div class="row-fluid">
            <div class="span12">
                <div class="box">
                    <header>
                        <div class="icons"><i class="icon-move"></i></div>
                        <h5>Danh sách quà tặng</h5>
                    </header>
                    <div id="collapse4" class="body">
                        <table id="dataTable" class="table table-bordered table-condensed table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tiêu đề</th>
                                    <th width="30%">Link</th>
                                    <th>Bắt đầu</th>
                                    <th>Kết thúc </th>
                                    <th>Nội dung</th>
                                    <th>Video</th>
                                    <th width="10%">Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php if ($listgift <> null): ?>
                                    <?php foreach ($listgift as $row): ?>
                                        <tr>
                                            <td>
                                                <?php echo $row->id ?>
                                            </td>
                                            <td>
                                                <?php echo $row->gift_title ?>
                                            </td>
                                            <td>
                                                <?php echo $row->gift_link ?>
                                            </td>
                                            <td><?php echo $row->timestart ?></td>
                                            <td><?php echo $row->timeend ?></td>
                                            <td>
                                                <?php echo $row->gift_content ?>
                                            </td>
                                            <td>
                                              <img src="<?php echo base_url('src/gift/thumb_'.$row->gift_image);?>" />
                                            </td>
                                            <td>
                                                <a class="btn edit" href="<?php echo site_url('admincp/gift/edit/' . $row->id); ?>"><i class="icon-edit"></i></a>
                                                <button class="btn btn-danger" data-toggle="confirmation" onclick="deletegift(<?php echo $row->id ?>)"><i class="icon-remove"></i></button>
                                            </td>
                                        </tr>
                                    <?php endforeach; ?>
                                <?php endif; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!--End Datatables-->
        <script type="text/javascript">
            function deletegift(id) { 
                var r = confirm("Bạn có muốn xóa quà tặng này không?");
                if (r == true) {
                    $.ajax({
                        url: "<?php echo $this->config->base_url().'admincp/gift/delete/';?>" + id,
                        type: 'POST',
                        success: function(data) {
                            window.location.href = "<?php echo site_url('admincp/gift') ?>";
                        }
                    });
                }
            }
        </script>
