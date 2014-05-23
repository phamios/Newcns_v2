<div class="box grid_4">
    <div class="box-head"><h2>Simple Inputs</h2></div>
    <div class="box-content ">
        <?php if (isset($details)): ?>
            <?php foreach ($details as $row): ?>
                <?php echo form_open_multipart('admincp/newcate/' . $row->id); ?>

                <div class="form-row">
                    <p class="form-label">Tên danh mục</p>
                    <div class="form-item">
                        <input type="text" name="namecategory" value="<?php echo $row->catename; ?>"/>
                    </div>
                </div>
                <div class="form-row">
                    <p class="form-label"> Loại danh mục</p>
                    <div class="form-item"> 
                        <select name="type">
                            <option value='0'>---------------</option>
                            <option value='1' <?php if($row->type == 1): ?>checked="checked"<?php endif;?> >Lên trang chủ</option>
                            <option value='2'<?php if($row->type == 2): ?>checked="checked"<?php endif;?>>Hỗ trợ</option>
                            <option value='3'<?php if($row->type == 3): ?>checked="checked"<?php endif;?>>Không hiển thị - Ẩn</option>
                            <option value='4'<?php if($row->type == 4): ?>checked="checked"<?php endif;?>>Dạng Tin VIP</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <p class="form-label"></p>
                    <div class="form-item">
                        <input type="radio" name="active" value="1" <?php
                        if ($row->visible == 1) {
                            echo 'checked';
                        }
                        ?>/> Không kích hoạt <input
                               type="radio" name="active" value="2" <?php
                               if ($row->visible == 2) {
                                   echo 'checked';
                               }
                               ?>/> Kích hoạt
                    </div>
                </div>

                <div class="form-row">
                    <p class="form-label"></p>
                    <div class="form-item">
                        <input type="submit" name="updatesubmit" value="Chấp nhận" />
                    </div>
                </div>
                <?php echo form_close(); ?>
            <?php endforeach; ?>
        <?php else: ?>
            <?php echo form_open_multipart('admincp/newcate'); ?>

            <div class="form-row">
                <p class="form-label">Tên danh mục</p>
                <div class="form-item">
                    <input type="text" name="namecategory" />
                </div>
            </div>
            <div class="form-row">
                <p class="form-label"> Loại danh mục</p>
                <div class="form-item"> 
                    <select name="type">
                        <option value='0'>---------------</option>
                        <option value='1'>Lên trang chủ</option>
                        <option value='2'>Hỗ trợ</option>
                        <option value='3'>Không hiển thị - Ẩn</option>
                        <option value='4'>Dạng Tin VIP</option>
                    </select>
                </div>
            </div>
          
            <div class="form-row">
                <p class="form-label">Tình trạng</p>
                <div class="form-item"> 
                   <input name="active" type="radio"  value="1"/>
                        <span class="lbl"> Không kích hoạt</span>
                        <input name="active" type="radio" value="2" />
                        <span class="lbl"> Kích hoạt</span>
                </div>
            </div>
            <div class="form-row">
                <div class="form-label"></div>
                <div class="form-item">
                    <input type="submit" name="submit" value="Chấp nhận" />
                </div>
            </div>

            <?php echo form_close(); ?>
        <?php endif; ?>
        <div class="clear"></div>
    </div> 
</div>

<div class="box grid_7">
    <div class="box-head"><h2>Danh sách danh mục</h2></div>
    <div class="box-content no-pad">

        <table id="sample-table-1" class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên danh mục</th> 
                    <th>Loại danh mục</th> 
                    <th>Kích hoạt</th> 
                    <th>Tùy chỉnh</th> 
                </tr>
            </thead>
            <tbody>
                <?php foreach ($allcatenews as $row): ?>
                    <tr class="odd gradeX">
                        <td><?php echo $row->id; ?></td>
                        <td><?php echo $row->catename; ?></td> 
                        <td><?php if ($row->type == 1): ?>
                                Lên trang chủ
                            <?php elseif ($row->type == 2): ?>
                                Hỗ trợ
                            <?php elseif ($row->type == 3): ?>
                                Không hiển thị - Ẩn
                            <?php elseif ($row->type == 4): ?>
                                Dạng Tin VIP
                            <?php endif; ?>

                        </td> 
                        <td><?php if ($row->visible == 2): ?>
                                <a href="<?php echo site_url('admincp/unactive_newscate/' . $row->id) ?>"> Đang hiển thị </a>
                            <?php else: ?>
                                <a href="<?php echo site_url('admincp/active_newscate/' . $row->id) ?>">Đang ẩn </a>
                            <?php endif; ?>
                        </td> 
                        <td>
                            <a href="<?php echo site_url('admincp/newcate/' . $row->id); ?>"><img src="<?php echo base_url('themes/huyxom/admin/appstore/img/icons/basic/save.png'); ?>" alt="" /> Sửa </a>
                            <a href="<?php echo site_url('admincp/del_newscate/' . $row->id); ?>"><img src="<?php echo base_url('themes/huyxom/admin/appstore/img/icons/basic/delete.png'); ?>" alt="" /> Xóa </a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>
