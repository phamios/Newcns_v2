<div class="box grid_12">
	<div class="box-head">
		<h2>List Type</h2>
	</div>
	<div class="box-content no-pad"> 
		 <table id="sample-table-1" class="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>                                    
                                    <th width="15%">ID</th>
                                    <th width="35%">Tên loại</th>  
                                     <th width="35%">Tuỳ chỉnh</th>                             
                                </tr>
                            </thead>
                            <tbody>
                            	<?php if($alltype <> null):?>
                            	<?php foreach($alltype as $type):?>
                                <tr>
                                    <td><?php echo $type->id;?></td> 
                                    <td><a href="<?php echo site_url('admincp/edit_type/'.$type->id);?>"><?php echo $type->nametype;?> 
                                    </a> </td> 
                                    
                                    <td>
                                    	<?php if($type->sethome != 0):?>
                                    	<a href="<?php echo site_url('admincp/set_type_hot/'.$type->id.'/0');?>">Ẩn</a>
                                    	<?php else:?>
                                    	<a href="<?php echo site_url('admincp/set_type_hot/'.$type->id.'/1');?>">Hiện</a>
                                    	<?php endif;?>
                                    </td> 
                                    
                                    <td><a href="<?php echo site_url('admincp/edit_type/'.$type->id);?>">Sửa</a>
                                    
                                    <a href="<?php echo site_url('admincp/del_type/'.$type->id);?>">Xoá</a>
                                    </td>                                 
                                </tr>
                                <?php endforeach; ?>   
                                <?php endif;?>                           
                            </tbody>
                        </table>
	</div>
</div>
