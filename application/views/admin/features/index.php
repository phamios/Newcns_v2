<div class="row-fluid">
    <!-- .span12 -->
    <div class="span12">
        <div class="box">
            <header>
                <div class="icons"><i class="icon-edit"></i></div>
                <h5><?php echo $title; ?></h5>
                <a class="cate-create" href="<?php echo $this->config->base_url() . 'admincp/features/create'; ?>">Create</a>
                <!-- <div class="toolbar">
                    <a href="#actionTable" data-toggle="collapse" class="accordion-toggle minimize-box">
                        <i class="icon-chevron-up"></i>
                    </a>
                </div> -->
            </header>
            <div id="category-list" class="body collapse in">
                <?php if (!$features): ?>
                    <?php echo "No Features"; ?>
                <?php else: ?>
                    <table class="table table-bordered responsive">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Feature Name</th>
                                <th>Features Values</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($features as $row) : ?>
                                <tr>
                                    <td><?php echo $row->id; ?></td>
                                    <td><?php echo $row->features_name; ?></td>
                                    <td><?php echo $row->features_value; ?></td>

                                    <td><?php if ($row->features_status == 1): ?>
                                            Active
                                        <?php else: ?>
                                            UnActive
                                        <?php endif; ?>
                                    </td>
                                    <td>
                                        <button class="btn" onclick="edit(<?php echo $row->id ?>);"><i class="icon-edit"></i></button>
                                        <button class="btn btn-danger" data-toggle="confirmation" onclick="deleteCate(<?php echo $row->id ?>);"><i class="icon-remove"></i></button>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                <?php endif; ?>
            </div>
        </div>
    </div>
    <!-- /.span12 -->
</div>
<script type="text/javascript">
    function edit(id) {
        window.location.href = "<?php echo $this->config->base_url() . 'admincp/features/edit/'; ?>" + id;
    }

    function deleteCate(id) {
        var txt;
        var r = confirm("Do you want to delete this features?");
        if (r == true) {
            $.ajax({
                url: "<?php echo $this->config->base_url() . 'admincp/features/delete'; ?>",
                type: 'POST',
                //dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                data: {id: id},
                success: function(data) {
                    window.location.href = "<?php echo $this->config->base_url() . 'admincp/features'; ?>";
                }
            });
        }
        //document.getElementById("demo").innerHTML = txt;
    }
</script>