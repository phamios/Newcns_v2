<div class="box grid_12">
	<div class="box-head">
		<h2>News</h2>
	</div>
	<div class="box-content"> 
		 <?php foreach($catedetails as $catecontent):?>                   
                        <?php echo form_open_multipart('admincp/edit_catecontent/'.$catecontent->id); ?> 
                        <div class="form-row">
                            <div class="form-label">Loại danh mục</div>
                            <div class="form-item""><?php if($alltype <> null):?>
                                    	<select name="typecate">
                                    	<option value="0" selected="selected">------------</option>
                                    	<?php foreach($alltype as $type):?>
                                    		<option <?php if($catecontent->typeid == $type->id):?>selected="selected"<?php endif;?> value="<?php echo $type->id;?>"><?php echo $type->nametype;?></option>
                                    	<?php endforeach;?> 
                                    	</select>
                                    	<?php endif;?></div>
                            <div class="clear"></div>
                        </div> 
                         <div class="form-row">
                            <div class="form-label">Tên danh mục</div>
                            <div class="form-item""><input type="text" name="namecategory" value="<?php echo $catecontent->catename;?>" /></div>
                            <div class="clear"></div>
                        </div> 
                         <div class="form-row">
                            <div class="form-label">Danh mục cha</div>
                            <div class="form-item""><select name="cateroot">
                            				<option value="0" selected="selected">------------</option>
                                    	<?php foreach($allcate as $cate):?>
                                    		<option <?php if($catecontent->cateroot == $cate->id):?>selected="selected"<?php endif;?>  value="<?php echo $cate->id;?>"><?php echo $cate->catename;?></option>
                                    	<?php endforeach;?> 
                                    	</select></div>
                            <div class="clear"></div>
                        </div> 
                        <div class="form-row"> 
                        	<div class="form-label">Kích hoạt</div>
                            <div class=" ""> 
                                    <input  <?php if($catecontent->active == 0):?>checked<?php endif;?> type="radio" name="active" value="0"/> Không kích hoạt 
                                    <input <?php if($catecontent->active == 1):?>checked<?php endif;?>  type="radio" name="active" value="1"/> Kích hoạt
                             </div>
                            <div class="clear"></div>
                                
                            </div> 
                        <div class="form-row">
                            <div class="form-label"> </div>
                            <div class=" ""><input type="submit" name="submit" value="Chấp nhận" /></div>
                            <div class="clear"></div>
                        </div> 
                        <?php echo form_close(); ?> 
 					<?php endforeach;?>
	</div>
</div>
