<div class="box grid_12">
	<div class="box-head">
		<h2>Menu Managements</h2>
	</div>
	 
		<div class="box-content"> 
		 <?php echo form_open_multipart('admincp/fmenu'); ?>
                        <div class="form-row">
                            <div class="form-label">Thư mục cha:</div>
                            <div class="span7">
								<select name="rootmenu">
									<option selected="selected" value="0">------------------</option>
									<?php foreach($rootmenu as $menu):?>
									<option value="<?php echo $menu->menuid;?>"><?php echo $menu->menuname;?></option>
									<?php endforeach;?>
								</select>
							</div>
                            <div class="clear"></div>
                        </div>
                        <div class="form-row">
                            <div class="form-label">Tên menu</div>
                            <div class="form-item"><input type="text" name="menuname" /></div>
                            <div class="clear"></div>
                        </div> 
                        <div class="form-row">
                            <div class="form-label">Link menu</div>
                            <div class="form-item"><input type="text" name="menutext" /></div>
                            <div class="clear"></div>
                        </div> 
                         <div class="form-row"> 
                        	<div class="form-label">Kích hoạt</div>
                            <div class=""> 
                                    <input type="radio" name="active" value="1"/> Không kích hoạt 
                                    <input type="radio" name="active" value="2"/> Kích hoạt
                             </div>
                            <div class="clear"></div>
                                
                            </div> 
                         <div class="form-row">
                            <div class="form-label">Thứ tự:</div>
                            <div class="form-item"><select name="menuorder" style="width:100px;">
                            <option selected="selected" value="0">------------------</option>
                            	<?php for($i =1;$i< 10;$i++):?>
                            		<option value="<?php echo $i;?>" ><?php echo $i;?></option>
                            	<?php endfor;?>
                            	</select>
                            </div>
                            <div class="clear"></div>
                        </div>  
                        <div class="form-row">
                            <div class="form-label"> </div>
                            <div class=""><input type="submit" name="submit" value="Chấp nhận" /></div>
                            <div class="clear"></div>
                        </div> 
                        <?php echo form_close(); ?> 
		</div>
		<div class="clear"></div>
 
		<div class="box-content">  
			<table class="display" id="example">
				<thead>
					<tr>
					<th width="15%">Menu</th>
                                    <th  >Link</th>
                                    <th >root</th>
                                    <th >active </th>   
                                     <th >Order </th>  
                                     <th >Tuỳ chỉnh</th>   
					</tr>
				</thead>
				<tbody>
				<?php if($listmenu <> null):?>
                            	<?php foreach($listmenu as $menu):?>
                                <tr>                                    
                                    <td><a href="<?php echo site_url('admincp/edit_menu/'.$menu->menuid);?>"><?php echo $menu->menuname;?></a></td>
                                    <td><?php echo $menu->menutext;?></td>
                                    <td><?php foreach($rootmenu as $root):?>
                                    	<?php if($root->menuid == $menu->menuroot):?>
                                    		<?php echo $root->menuname;?> 
                                    	<?php endif;?>
                                    	<?php endforeach;?>
                                    </td>
                                    <td><?php if($menu->menuactive == 1):?>
                                    	UnActive
                                    <?php else:?>
                                    	Active
                                    <?php endif;?>
                                    </td>  
                                    <td><?php echo $menu->menuorder;?> 
                                    </td>  
                                    <td><a href="<?php echo site_url('admincp/edit_menu/'.$menu->menuid);?>">Sửa</a>
                                    
                                    <a href="<?php echo site_url('admincp/deletemenu/'.$menu->menuid);?>">Xoá</a>
                                    </td>                                 
                                </tr>
                                <?php endforeach; ?>   
                                <?php endif;?>  
				</tbody>
			</table> 
			<div class="clear"></div>
		</div>
		 
 
</div>
