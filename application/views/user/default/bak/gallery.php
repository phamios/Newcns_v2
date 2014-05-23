<form method="post" action="<?php echo base_url('user/gallery/'); ?>"
      enctype="multipart/form-data">


    <script type="text/javascript">
        $(document).ready(function(){
            $("select").change(function(){
                $( "select option:selected").each(function(){
                    if($(this).attr("value")=="red"){
                        $(".box").hide();
                        $(".red").show();
                    }
                    if($(this).attr("value")=="green"){
                        $(".box").hide();
                        $(".green").show();
                    }
                    if($(this).attr("value")=="blue"){
                        $(".box").hide();
                        $(".blue").show();
                    }
                });
            }).change();
        });
    </script>
    <div class="form-group">
        <label>CHọn nguồn ảnh</label>
        <div style="width:20%;" class="form-group">
            <select class="form-control" name="select_type">
                <option value="green" selected="selected">Link ảnh</option>
                <option value="red">Upload Ảnh</option> 
            </select>
        </div>
        <div class="green box">
            <label>Link ảnh</label></br>
            <input type="text"  value="" name="imagelink"/><br><br>
            <input class="btn btn-primary" type="submit" name="submit_gallery" id="submit_gallery" value="Upload" />
        </div>

        <div><br>
            <div class="red box">
                <label for="upload">Upload ảnh</label>
                <input type="file" name="upload[]" id="upload" multiple="multiple"/><br>
                <input type="submit" name="fsubmit" id="fsubmit" value="Upload" class="btn btn-primary"/>
            </div>
        </div>
    </div>


</form>



<div id="status"></div>

<div class="span10">
    <h3 class="row-fluid header smaller lighter blue">
        <span class="span7"> <i class="icon-th-large"></i> Danh sách ảnh đã
            tạo </span>
        <!--/span-->
    </h3>

        <div class="resultajax">
            <?php if(!$images): ?>
                Hiện tại app này chưa có ảnh đính kèm.
            <?php else: ?>
                <ul class="ace-thumbnails">
                <?php foreach ($images as $img): ?> 
                    <li style="display:inline-block;">
                    <a href="<?php echo $img->imageslink ?>">
                    <img alt="150x150" width="150" height="150" src="<?php echo $img->imageslink ?>" />
                    </a>
                    <div class="tools tools-bottom">
                    <a href="<?php echo site_url('user/del_image_gallery/' . $img->id) ?>"> <i class="icon-remove red"></i> Xóa </a>
                    </div>
                    </li>
                <?php endforeach?>
                <?php endif?>
                </ul>
        </div>
        <?php echo $pages?>





    </div>
    <!--/row-->
</div>
<br />
<br />
<br />
<br />
<br />

