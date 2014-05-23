<div class="box grid_12">
    <div class="box-head">
        <h2>Nội dung</h2>
    </div>
    <div class="box-content no-pad"> 
        <table id="sample-table-1" class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th  >Cate</th> 
                    <th  >Hình ảnh</th>
                    <th  >Tiêu đề</th>
                    <th  >Miêu tả</th> 
                    <th  >Nội dung</th> 
                    <th  >Ngày tạo</th>
                    <th  >Trạng thái</th>
                    <th  >Tuỳ chỉnh</th>
                </tr>
            </thead>
            <tbody>
                <?php if ($listcontent <> null): ?>
                    <?php foreach ($listcontent as $row): ?>
                        <tr>
                            <td ><?php foreach ($allcatenews as $cate): ?>
                                    <?php if ($cate->id == $row->cateid): ?>
                                        <?php echo ucfirst($cate->cate_name); ?>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            </td>
                            <td>
                                <p align="center"><img src="<?php echo base_url('src/admin/' . $row->post_image); ?>" width="80px"/></p>
                            </td>
                            <td><a href="<?php echo site_url('admincp/edit_post/' . $row->id); ?>" ><?php echo $row->post_title; ?></a></td>
                            <td> <?php echo word_limiter($row->post_short,10); ?></td>
                            <td> <?php //echo word_limiter($row->post_content,10); ?> </td>
                          
                            <td><?php echo $row->post_date; ?></td>
                            <td><?php if ($row->active == 1): ?>
                                    Active
                                <?php else: ?>
                                    UnActive
        <?php endif; ?></td>
                            <td><a href="<?php echo site_url('admincp/edit_post/'.$row->id)?>"><span
                                        class="green"> <i class="icon-edit bigger-120"></i> </span> </a>
                                    <a href="<?php echo site_url('admincp/del_post/'.$row->id)?>"><span
                                        class="red"> <i class="icon-trash bigger-120"></i> </span> </a>

                            </td>
    <?php endforeach; ?>
<?php endif; ?>
            </tbody>
        </table>
    </div>
</div>
