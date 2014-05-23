<div class="box grid_12">
	<div class="box-head">
		<h2>Edit Administrator</h2>
	</div>
	 
		<div class="box-content"> 
				 <?php if($adminuser <> null):?>      
                    <?php foreach($adminuser as $admin):?>              
                        <?php echo form_open_multipart('admincp/edit_useradmin/'.$admin->id); ?>
                        <div class="form-row">
                            <div class="form-label">Thư mục quản lý</div>
                           <div class="form-item">
								<select id="adminpage">
									<option value="4">--------- Lựa chọn-------------</option>
									<option value="3">Pending</option>
									<option value="2">Vỉewer</option>
									<option value="1">Moderator</option>
									<option value="0">Administrator</option>
								 
								</select>
							</div>
                            <div class="clear"></div>
                        </div>
                        <div class="form-row">
                            <div class="form-label">Tên user</div>
                            <div class="form-item"><input type="text" name="adminname" value="<?php echo $admin->user;?>" /></div>
                            <div class="clear"></div>
                        </div> 
                        <div class="form-row">
                            <div class="form-label">Mật khẩu</div>
                            <div class="form-item"><input type="text" name="adminpass"  /></div>
                            <div class="clear"></div>
                        </div> 
                         
                        <div class="form-row">
                            <div class="form-label"> </div>
                            <div class=" "><input type="submit" name="submit" value="Tạo mới" /></div>
                            <div class="clear"></div>
                        </div> 
                        <?php echo form_close(); ?> 
                        <?php endforeach;?>
 				<?php endif;?>
		</div>
		<div class="clear"></div>
 
		 
		 
 
</div>
