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
                                    <th>ID</th>
                                    <th>Post name</th>
                                    <th>Post Order</th> 
                                </tr>
                            </thead>
                            <tbody> 
                                <?php if ($listhot <> null): ?>
                                    <?php foreach ($listhot as $row): ?>
                                        <tr>
                                            <td><?php echo $row->id;?></td>
                                            <td>
                                                <?php foreach ($listcontent as $content): ?>
                                                    <?php if ($content->id == $row->post_id): ?>
                                                        <?php echo ucfirst($content->post_title); ?>
                                                    <?php endif; ?>
                                                <?php endforeach; ?>
                                            </td>
                                            <td><input type="text" value="<?php echo $row->post_order;?>"  name="post_order"/></td>
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
            function updateorder(id) {
                var txt;
                var nameValue = document.getElementById("post_order").value;
                var r = confirm("Do you want to delete this category?");
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


        </script>
