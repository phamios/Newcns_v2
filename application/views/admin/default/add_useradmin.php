<div class="box grid_12">
	<div class="box-head">
		<h2>Add User Admin</h2>
	</div>
	<div class="box-content "> 
	 
                         <?php echo form_open_multipart('admincp/add_useradmin'); ?>
                        <div class="form-row">
                            <div class="form-label">Loại thành viên</div>
                            <div class="form-item">
								<select id="adminpage">
									<option value="4">--------- Lựa chọn-------------</option>
									<option value="3">Pending</option>
									<option value="2">Vỉewer</option>
									<option value="1">Moderator</option>
									<option value="0">Administrator</option>
									<!--  <option   value="0">Toàn bộ</option>
									<?php foreach($listmenu as $menu):?>
									<option value="<?php echo $menu->menuid;?>"><?php echo $menu->menuname;?></option>
									<?php endforeach;?>-->
								</select>
							</div>
                            <div class="clear"></div>
                        </div>
                        <div class="form-row">
                            <div class="form-label">Tên user</div>
                            <div class="form-item"><input type="text" name="adminname" /></div>
                            <div class="clear"></div>
                        </div> 
                        <div class="form-row">
                            <div class="form-label">Mật khẩu</div>
                            <div class="form-item"><input type="password" name="adminpass" /></div>
                            <div class="clear"></div>
                        </div> 
                         
                        <div class="form-row">
                            <div class="form-label"> </div>
                            <div class="span9"><input type="submit" name="submit" value="Tạo mới" /></div>
                            <div class="clear"></div>
                        </div> 
                        <?php echo form_close(); ?> 
	</div>
</div>
