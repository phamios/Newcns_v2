<div class="box grid_12">
	<div class="box-head">
		<h2>Thêm danh mục</h2>
	</div>
	<div class="box-content ">
	<?php echo form_open_multipart('user/addcatewap'); ?>
 
		<div class="form-group">
			<label>
				Tên danh mục 
			</label>
		    <input class="form-control" type="text"  name="catename" style="width:20%"/>
		</div>
		 <div class="form-group">
			<label>
				iCon cho cate 
			</label>
		    <input type="file" name="cateicon" size=40 />
		</div>
		 
        <div class="form-group">
               <div class="radio">
                   <label>
                       <input type="radio" name="active" id="optionsRadios1" value="0" checked>
                      Không kích hoạt
                   </label>
               </div>
               <div class="radio">
                   <label>
                      <input type="radio" name="active" id="optionsRadios1" value="1" checked>
                      Kích hoạt
                   </label>
               </div>
        </div>

		<div class="form-row">
			<br />
		</div>
        
        <div class="form-group">
            <label> </label>
            <input type="submit" name="submit" value="Build App" class="btn btn-primary" />
        </div>
		<?php echo form_close(); ?>
	</div>
</div>
