<div class="row-fluid">
    <!-- .inner -->
    <div class="span12 inner">
        <!--Begin Datatables-->
        <div class="row-fluid">
            <div class="span12">
                <div class="box">
                    <header>
                        <div class="icons"><i class="icon-move"></i></div>
                        <h5>Danh sách tin</h5>
                    </header>
                    <div id="collapse4" class="body">
                        <table id="dataTable" class="table table-bordered table-condensed table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Cate</th>
                                    <th>Hình ảnh</th>
                                    <th>Tiêu đề</th>
                                    <th>Miêu tả</th>
                                    <th>Feature</th>
                                    <th>Ngày tạo</th>
                                    <th>Trạng thái</th>
                                    <th>Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php if ($listcontent <> null): ?>
                                    <?php foreach ($listcontent as $row): ?>
                                        <tr>
                                            <td>
                                                <?php foreach ($category as $cate): ?>
                                                    <?php if ($cate->id == $row->cateid): ?>
                                                        <?php echo ucfirst($cate->catename); ?>
                                                    <?php endif; ?>
                                                <?php endforeach; ?>
                                            </td>
                                            <td>
                                                <p align="center"><img src="<?php echo base_url('src/post/' . $row->post_images); ?>" width="80px"/></p>
                                            </td>
                                            <td>
                                                <a href="<?php echo site_url('admincp/post/edit/' . $row->id); ?>" ><?php echo $row->post_title; ?></a>
                                            </td>
                                            <td>
                                                <a href="<?php echo site_url('admincp/post/edit/' . $row->id); ?>" ><?php echo word_limiter($row->post_description, 20); ?></a>
                                            </td>
                                            <td>
                                                <?php foreach ($features as $feature): ?>
                                                    <?php if ($feature->id == $row->featureid): ?>
                                                        <?php echo ucfirst($feature->features_name); ?>
                                                    <?php endif; ?>
                                                <?php endforeach; ?>
                                            </td>
                                            <td>
                                                <?php echo $row->post_createdate; ?>
                                            </td>
                                            <td>
                                                <?php if ($row->post_status == 1): ?>
                                                    Active
                                                <?php else: ?>
                                                    Stop
                                                <?php endif; ?>
                                            </td>
                                            <td>
                                                <a href="#" onclick="sethot(<?php echo $row->id ?>)">Set Hot</a>
                                                <a href="<?php echo site_url('admincp/post/edit' . $row->id); ?>"><i class="icon-edit"></i></a>
                                                <button class="btn btn-danger" data-toggle="confirmation" onclick="deletepost(<?php echo $row->id ?>);"><i class="icon-remove"></i></button>
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
 

            function deletepost(id) { 
                var r = confirm("Do you want to delete this post?");
                if (r == true) {
                    $.ajax({
                        url: "<?php echo $this->config->base_url() . 'admincp/post/delete'; ?>",
                        type: 'POST',
                        //dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                        data: {id: id},
                        success: function(data) {
                            window.location.href = "<?php echo $this->config->base_url() . 'admincp/post'; ?>";
                        }
                    });
                }
                //document.getElementById("demo").innerHTML = txt;
            }

            function sethot(id) { 
                var r = confirm("Do you want to set hot this post?");
                if (r == true) {
                    $.ajax({
                        url: "<?php echo $this->config->base_url() . 'admincp/post/hot'; ?>",
                        type: 'POST',
                        //dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                        data: {id: id},
                        success: function(data) {
                            alert('Set Hot of Post Successfully !');
                            window.location.href = "<?php echo $this->config->base_url() . 'admincp/post'; ?>";
                        }
                    });
                }
                //document.getElementById("demo").innerHTML = txt;
            }
        </script>
