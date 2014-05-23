<div class="box grid_4">
    <div class="box-head">
        <h2>Thêm mới menu</h2>
    </div>
    <?php if(isset($menudetails)):?>
    <div class="box-content ">
        <?php foreach($menudetails as $row):?>
        <?php echo form_open_multipart('admincp/menufoot/'.$row->menuid); ?>

        <div class="form-row">
            <div class="form-label">Tên danh mục</div>
            <div class="form-item">
                <input type="text" name="menuname" value="<?php echo $row->menuname?>" />
            </div>
        </div>
        <div class="form-row">
            <div class="form-label">Kiểu menu <br/>

            </div>
            <div class="form-item"> 
                <Select id="colorselector" name="menutype">
                    <option value="0">---Lựa chọn------</option>
                    <option value="1" <?php if($row->typemenu == 1):?>selected="selected"<?php endif;?>>Theo Bài viết</option>
                    <option value="2" <?php if($row->typemenu == 3):?>selected="selected"<?php endif;?>>Link ngoài</option> 
                </Select>
                <div id="1" class="colors" style="display:none"> 
                    <select  name="menutext_by_news" >
                        <option value="0" selected="selected">------------</option>
                        <?php foreach ($all_post as $news): ?>
                            <?php $link = site_url('news/' . mb_strtolower(url_title(removesign($news->title . '-' . $news->id)))) . '.html'; ?>
                            <option value="<?php echo $link ?>" ><?php echo $news->title; ?></option> 
                        <?php endforeach; ?>
                    </select>    </div>
                <div id="2" class="colors" style="display:none">
                    <input type="text" value="" name="menutext_by_link" value="<?php echo $row->menutext;?>"/>
                </div> 
            </div>
        </div>
        <script >
            $(function() {
                $('#colorselector').change(function() {
                    $('.colors').hide();
                    $('#' + $(this).val()).show();
                });
            });
        </script>

        <div class="form-row">
            <div class="form-label">Độ ưu tiên</div>
            <div class="form-item">
                <select name="menuorder">
                    <?php for ($i = 1; $i <= 10; $i++): ?>
                        <option value='<?php echo $i ?>' <?php if($row->menuorder == $i):?>selected="selected" <?php endif;?>><?php echo $i ?></option>
                    <?php endfor; ?>

                </select>
            </div>
        </div>

        <div class="form-row">
            <div class="form-label">Kích hoạt</div>
            <div class="form-item">
                <input <?php if($row->menuactive == 1):?>checked='checked'<?php endif;?> name='active' type='radio' value='1' />
                <input <?php if($row->menuactive == 0):?>checked='checked'<?php endif;?> name='active' type='radio' value='0' />
            </div>
        </div>

        <div class="form-row">
            <div class="form-label"></div>
            <div class="form-item">
                <input type="submit" name="edit_submit" value="Chấp nhận" />
            </div>
        </div>
        <?php echo form_close(); ?> 
    </div>
    <?php endforeach;?>
    <?php else: ?> 
    
    
    
    <!-- Add new-->
    <div class="box-content ">
        
        <?php echo form_open_multipart('admincp/menufoot'); ?>

        <div class="form-row">
            <div class="form-label">Tên danh mục</div>
            <div class="form-item">
                <input type="text" name="menuname" />
            </div>
        </div>
        <div class="form-row">
            <div class="form-label">Kiểu menu <br/>

            </div>
            <div class="form-item"> 
                <Select id="colorselector" name="menutype">
                    <option value="0">---Lựa chọn------</option>
                    <option value="1">Theo Bài viết</option>
                    <option value="2">Link ngoài</option> 
                </Select>
                <div id="1" class="colors" style="display:none"> 
                    <select  name="menutext_by_news" >
                        <option value="0" selected="selected">------------</option>
                        <?php foreach ($all_post as $news): ?>
                            <option value="<?php echo site_url('news/' . mb_strtolower(url_title(removesign($news->title . '-' . $news->id)))) . '.html'; ?>"><?php echo $news->title; ?></option> 
                        <?php endforeach; ?>
                    </select>    </div>
                <div id="2" class="colors" style="display:none">
                    <input type="text" value="" name="menutext_by_link"/>
                </div> 
            </div>
        </div>
        <script >
            $(function() {
                $('#colorselector').change(function() {
                    $('.colors').hide();
                    $('#' + $(this).val()).show();
                });
            });
        </script>

        <div class="form-row">
            <div class="form-label">Độ ưu tiên</div>
            <div class="form-item">
                <select name="menuorder">
                    <?php for ($i = 1; $i <= 10; $i++): ?>
                        <option value='<?php echo $i ?>'><?php echo $i ?></option>
                    <?php endfor; ?> 
                </select>
            </div>
        </div>

        <div class="form-row">
            <div class="form-label">Kích hoạt</div>
            <div class="form-item">
                <input checked='checked' name='active' type='radio' value='1' />
                <input name='active' type='radio' value='0' />
            </div>
        </div>

        <div class="form-row">
            <div class="form-label"></div>
            <div class="form-item">
                <input type="submit" name="submit" value="Chấp nhận" />
            </div>
        </div>
        <?php echo form_close(); ?> 
    </div>
    <?php endif;?>
</div>

<div class="box grid_7">
    <div class="box-head"><h2>Danh sách menu footer</h2></div>
    <div class="box-content no-pad">

        <table id="sample-table-1" class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>Tên menu</th>
                    <th>Đường dẫn</th> 
                    <th>Thứ tự</th> 
                    <th>Tình trạng</th> 
                    <th>Tùy chỉnh</th> 
                </tr>
            </thead>
            <tbody>
                <?php if ($allmenu_foot <> NULL): ?>
                    <?php foreach ($allmenu_foot as $row): ?>	 
                        <tr class="odd gradeX">
                            <td><?php echo $row->menuname; ?></td>
                            <td>
                                <?php if ($row->typemenu == 1): ?>
                                <?php else: ?>
                                <?php endif; ?>
                                <?php echo $row->menutext; ?>
                            </td> 
                            <td><?php echo $row->menuorder; ?></td>
                            <td><?php echo $row->menuactive; ?></td>
                            <td>
                                <a href="<?php echo site_url('admincp/menufoot/' . $row->menuid); ?>"><img src="<?php echo base_url('themes/huyxom/admin/appstore/img/icons/basic/save.png'); ?>" alt="" /> Sửa </a>
                                <a href="<?php echo site_url('admincp/del_menufoot/' . $row->menuid); ?>"><img src="<?php echo base_url('themes/huyxom/admin/appstore/img/icons/basic/delete.png'); ?>" alt="" /> Xóa </a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</div>


<?php 
function removesign($str) {
        $coDau = array("à", "á", "ạ", "ả", "ã", "â", "ầ", "ấ", "ậ", "ẩ", "ẫ", "ă", "ằ", "ắ"
            , "ặ", "ẳ", "ẵ", "è", "é", "ẹ", "ẻ", "ẽ", "ê", "ề", "ế", "ệ", "ể", "ễ", "ì", "í", "ị", "ỉ", "ĩ",
            "ò", "ó", "ọ", "ỏ", "õ", "ô", "ồ", "ố", "ộ", "ổ", "ỗ", "ơ"
            , "ờ", "ớ", "ợ", "ở", "ỡ",
            "ù", "ú", "ụ", "ủ", "ũ", "ư", "ừ", "ứ", "ự", "ử", "ữ",
            "ỳ", "ý", "ỵ", "ỷ", "ỹ",
            "đ",
            "À", "Á", "Ạ", "Ả", "Ã", "Â", "Ầ", "Ấ", "Ậ", "Ẩ", "Ẫ", "Ă"
            , "Ằ", "Ắ", "Ặ", "Ẳ", "Ẵ",
            "È", "É", "Ẹ", "Ẻ", "Ẽ", "Ê", "Ề", "Ế", "Ệ", "Ể", "Ễ",
            "Ì", "Í", "Ị", "Ỉ", "Ĩ",
            "Ò", "Ó", "Ọ", "Ỏ", "Õ", "Ô", "Ồ", "Ố", "Ộ", "Ổ", "Ỗ", "Ơ"
            , "Ờ", "Ớ", "Ợ", "Ở", "Ỡ",
            "Ù", "Ú", "Ụ", "Ủ", "Ũ", "Ư", "Ừ", "Ứ", "Ự", "Ử", "Ữ",
            "Ỳ", "Ý", "Ỵ", "Ỷ", "Ỹ",
            "Đ", "ê", "ù", "à");
        $khongDau = array("a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"
            , "a", "a", "a", "a", "a", "a",
            "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e",
            "i", "i", "i", "i", "i",
            "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"
            , "o", "o", "o", "o", "o",
            "u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u",
            "y", "y", "y", "y", "y",
            "d",
            "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"
            , "A", "A", "A", "A", "A",
            "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
            "I", "I", "I", "I", "I",
            "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"
            , "O", "O", "O", "O", "O",
            "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
            "Y", "Y", "Y", "Y", "Y",
            "D", "e", "u", "a");
        return str_replace($coDau, $khongDau, $str);
    }

?>