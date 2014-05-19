<div class="row-fluid">
    <!-- .span12 -->
    <div class="span12">
        <div class="box">
            <header>
                <div class="icons"><i class="icon-edit"></i></div>
                <h5><?php echo $title; ?></h5>
                <a class="cate-create" href="<?php echo site_url('admincp/review_cate/create'); ?>">Create</a>
                <!-- <div class="toolbar">
                    <a href="#actionTable" data-toggle="collapse" class="accordion-toggle minimize-box">
                        <i class="icon-chevron-up"></i>
                    </a>
                </div> -->
            </header>
            <div id="category-list" class="body collapse in">
                <?php if (!$model): ?>
                    <?php echo "No category"; ?>
                <?php else: ?>
                    <table class="table table-bordered responsive">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th> 
                                <th>Category Root</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php if ($model <> null): ?>
                                <?php foreach ($model as $row) : ?>
                                    <tr>
                                        <td><?php echo $row->id; ?></td>
                                        <td><?php echo $row->cate_rev_name; ?></td>

                                        <td><?php echo $row->cateroot; ?></td>
                                        <td> 
                                            <a href="<?php echo site_url('admincp/review_cate/edit/'.$row->id); ?>" class="btn"><i class="icon-edit"></i> </a>
                                            <button class="btn btn-danger" data-toggle="confirmation" onclick="deleteCate(<?php echo $row->id ?>);"><i class="icon-remove"></i></button>
                                        </td>
                                    </tr>
                                <?php endforeach; ?>
                            <?php endif; ?>
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
        window.location.href = "<?php echo site_url('admin/review_cate/edit/'); ?>/" + id;
    }

    function deleteCate(id) {
        var txt;
        var r = confirm("Do you want to delete this category?");
        if (r == true) {
            $.ajax({
                url: "<?php echo $this->config->base_url() . 'admin/review_cate/delete'; ?>",
                type: 'POST',
                //dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                data: {id: id},
                success: function(data) {
                    window.location.href = "<?php echo $this->config->base_url() . 'admin/review_cate'; ?>";
                }
            });
        }
        //document.getElementById("demo").innerHTML = txt;
    }
</script>