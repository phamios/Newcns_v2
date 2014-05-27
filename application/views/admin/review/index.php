<div class="row-fluid">
    <!-- .span12 -->
    <div class="span12">
        <div class="box">
            <header>
                <div class="icons"><i class="icon-edit"></i></div>
                <h5><?php echo $title; ?></h5>
            </header>
            <div id="category-list" class="body collapse in">
                <?php if(!$model): ?>
                    <?php echo "Không có sản phẩm nào"; ?>
                <?php else: ?>
                    <table class="table table-bordered responsive">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Category ID</th>
                                <th>User ID</th>
                                <th>Tiêu đề</th>
                                <th>Ngày tạo</th>
                                <th>Điểm đánh giá</th>
                                <th>Lượt xem</th>
                                <th>Like</th>
                                <th>Trạng thái</th>
                                <th>Tùy chọn</th>
                            </tr>
                        </thead>
                        <tbody>
                                
                            <?php foreach ($model as $row) : ?>
                                <tr>
                                    <td><?php echo $row->id; ?></td>
                                    <td><?php 
                                        foreach($categories as $cate){
                                            if($cate->id == $row->cate_review_id){
                                                ?> 
                                        <?php echo $cate->cate_rev_name;?>
                                        <?php 
                                            }
                                                
                                        }?>
                                    </td>
                                    <td><?php echo $row->user_id; ?></td>
                                    <td><?php echo $row->review_title; ?></td>
                                    <td><?php echo $row->review_created; ?></td>
                                    <td><?php echo $row->review_score; ?></td>
                                    <td><?php echo $row->review_view; ?></td>
                                    <td><?php echo $row->review_like; ?></td>
                                    <td><?php echo $row->review_active; ?></td>
                                    <td>
                                    <a href="<?php echo site_url('admincp/review/edit/'.$row->id)?>"><i class="icon-edit bigger-120"></i></a>
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
