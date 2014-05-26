<div class="row-fluid">
    <!-- .inner -->
    <div class="span12 inner">
        <!--Begin Datatables-->
        <div class="row-fluid">
            <div class="span12">
                <div class="box">
                    <header>
                        <div class="icons"><i class="icon-move"></i></div>
                        <h5>Danh sách video</h5>
                    </header>
                    <div id="collapse4" class="body">
                        <table id="dataTable" class="table table-bordered table-condensed table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tiêu đề</th>
                                    <th width="30%">Link</th>
                                    <th>Miêu tả</th>
                                    <th>Ngày tạo</th>
                                    <th>Trạng thái</th>
                                    <th>Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php if ($listvideo <> null): ?>
                                    <?php foreach ($listvideo as $row): ?>
                                        <tr>
                                            <td>
                                                <?php echo $row->id ?>
                                            </td>
                                            <td>
                                                <?php echo $row->video_title ?>
                                            </td>
                                            <td>
                                                <?php echo $row->video_link ?>
                                            </td>
                                            <td>
                                                <?php echo $row->video_description ?>
                                            </td>
                                            <td>
                                                <?php echo $row->video_datecreated ?>
                                            </td>
                                            <td>
                                                <?php if ($row->video_status == 1): ?>
                                                    Active
                                                <?php else: ?>
                                                    Stop
                                                <?php endif; ?>
                                            </td>
                                            <td>
                                                <a class="btn edit" href="<?php echo site_url('admincp/video/edit/' . $row->id); ?>"><i class="icon-edit"></i></a>
                                                <button class="btn btn-danger" data-toggle="confirmation" onclick="deletevideo(<?php echo $row->id ?>)"><i class="icon-remove"></i></button>
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
 

            function deletevideo(id) { 
                var r = confirm("Do you want to delete this video?");
                if (r == true) {
                    $.ajax({
                        url: "<?php echo $this->config->base_url().'admincp/video/delete/';?>" + id,
                        type: 'POST',
                        //data: {id: id},
                        success: function(data) {
                            window.location.href = "<?php echo site_url('admincp/video') ?>";
                        }
                    });
                }
            }

        </script>
