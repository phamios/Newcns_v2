 
<div class="box grid_12">
	<div class="box-head">
		<h2>List Content</h2>
	</div>
	<div class="box-content ">
		<?php foreach($contents as $content):?>
		<div class="block-fluid">
			<?php echo form_open_multipart('admincp/edit_sitecontent/'.$content->id); ?>
			<script type="text/javascript">
							function changeitem(selectObj){  
								var id=selectObj.value;
								var dataString =  id;
						    		$.ajax({
						            url: "<?php echo base_url().'index.php/admincp/ajaxtypetocate/';?>"+ dataString ,
						            type:'POST', 
						            data: dataString, 
						            success: function(output_string){ 
						                    $(".resultajax").html(output_string);
						                },
						                error: function(){
						                    alert('null');
						                  }  
						            });  
						 
								}
						</script>
			<div class="form-row">
				<div class="form-label">Loại</div>
				<div class="form-item">
					<?php if($alltype <> null):?>
					<select name="typeid" id="typeid" onchange="changeitem(this);">
						<option value="0" selected="selected">------------</option>
						<?php foreach($alltype as $type):?>
						<option <?php if($content->typeid == $type->id):?>
							selected="selected" <?php endif;?>
							value="<?php echo $type->id;?>">
							<?php echo $type->nametype;?>
						</option>
						<?php endforeach;?>
					</select>
					<?php endif;?>
				</div>
				<div class="clear"></div>
			</div>
			<div class="form-row">
				<div class="form-label">Danh mục</div>
				<div class="form-item">
					<span style="font-weight: bold; color: red;">Sửa lại nội dung này,
						chọn LOẠI trước </span><span class="resultajax"> </span>
				</div>
				<div class="clear"></div>
			</div>

			<div class="form-row">
				<div class="form-label">Tiêu đề</div>
				<div class="form-item">
					<input type="text" name="namecontent"
						value="<?php echo $content->namecontent;?>" />
				</div>
				<div class="clear"></div>
			</div>
			<div class="form-row">
				<div class="form-label">Giá:</div>
				<div class="form-item">
					<input type="text" name="coins" size="10"
						value="<?php echo $content->coins;?>" />
				</div>
				<div class="clear"></div>
			</div>
			<div class="form-row">
				<div class="form-label">Mô tả</div>
				<div class="form-item">
					<textarea class="ckeditor" id="editor1"  name="description" style="height: 100px; width:100%;">
                            	<?php echo $content->description;?>
                            </textarea>
				</div>
				<div class="clear"></div>
			</div>
			<div class="form-row">
				<div class="form-label">Đặc điểm</div>
				<div class="form-item">
					<textarea class="ckeditor" id="editor1"  name="features" style="height: 100px; width:100%;">
                            	<?php echo $content->features;?>
                            </textarea>
				</div>
				<div class="clear"></div>
			</div>
			<div class="form-row">
				<div class="form-label">Ảnh giới thiệu:</div>
				<div class="form-item">
					<span style="font-weight: bold; color: red;"> 
					</span><input type="file" name="images" size=40 /> 
					<div class="clear"></div>
					<img src="<?php echo base_url("src/imagescontent/".$content->images);?>" width="100px" />
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>

			 
			<div class="form-row">
				<div class="form-label">Screenshot 1  :</div>
				<div class="form-item">
					<span style="font-weight: bold; color: red;">
					<img src="<?php echo base_url("src/imagescontent/".$content->ifiles_2);?>" width="100px" /> 
					</span><input type="file" name="ifiles_2" size=40 />
					<input type="hidden" name="ifiles" size=40 />
				</div>
				<div class="clear"></div>
			</div>
			<div class="form-row">
				<div class="form-label">Screenshot 2 (tùy chọn):</div>
				<div class="form-item">
					<span style="font-weight: bold; color: red;"> 
					<img src="<?php echo base_url("src/imagescontent/".$content->ifiles_3);?>" width="100px" />  
					</span><input type="file" name="ifiles_3" size=40 />
				</div>
				<div class="clear"></div>
			</div>

			<div class="form-row">
				<div class="form-label">Kích hoạt</div>
				<div class="span9">
				<input name="active" type="radio" <?php if($content->active == 0):?> checked <?php endif;?> value="0"/>
                        <span class="lbl"> Không kích hoạt</span>
                        <input name="active" type="radio" <?php if($content->active == 1):?> checked <?php endif;?> value="1" />
                        <span class="lbl"> Kích hoạt</span>
					 
				</div>
				<div class="clear"></div>

			</div>
			<div class="form-row">
				<div class="form-label"></div>
				<div class="span9">
					<input type="submit" name="submit" value="Chấp nhận" />
				</div>
				<div class="clear"></div>
			</div>
			<?php echo form_close(); ?>

		</div>

		<?php endforeach;?>
	</div>
</div>
