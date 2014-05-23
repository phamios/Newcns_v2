<div class="box grid_12">
	<div class="box-head">
		<h2>Danh mục</h2>
	</div>
	<div class="box-content no-pad"> 
		<table id="sample-table-1" class="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>                                    
                                    <th >Loại</th>
                                    <th  >Tên danh mục</th>  
                                     <th >Danh mục cha</th>     
                                     <th >kích hoạt</th>
                                     <th >Tùy chỉnh</th>                            
                                </tr>
                            </thead>
                            <tbody>
                            	<?php if($allcate <> null):?>
                            	<?php foreach($allcate as $cate):?>
                                <tr>
                                    <td> 
                                    	<?php foreach($alltype as $type):?>
                                    		 <?php if($type->id == $cate->typeid):?><?php echo $type->nametype;?> <?php endif;?> 
                                    	<?php endforeach;?>  
                                    </td>  
                                    <td><a href="<?php echo site_url('admincp/edit_catecontent/'.$cate->id);?>"><?php echo $cate->catename;?> 
                                    </a> </td>  
                                    <td>  
                                    	<?php foreach($allcate as $cateroot):?>
                                    		 <?php if( $cateroot->id == $cate->cateroot):?>
                                                    <a href="<?php echo site_url('admincp/edit_catecontent/'.$cateroot->id);?>"> <?php echo $cateroot->catename;?></a>
                                    		  <?php endif;?>  
                                    	<?php endforeach;?>  
                                    </td>
                                    <td><?php if($cate->active == 1):?>
                                    		<a href="<?php echo site_url('admincp/activecatetype/'.$cate->id.'/0');?>">Kích hoạt</a>
                                    	<?php else:?>
                                    		<a href="<?php echo site_url('admincp/activecatetype/'.$cate->id.'/1');?>">Ngừng</a>
                                    <?php endif;?>
                                    </td> 
                                    <td><a href="<?php echo site_url('admincp/edit_catecontent/'.$cate->id);?>">Sửa</a>
                                    
                                    <a href="<?php echo site_url('admincp/del_catecontent/'.$cate->id);?>">Xoá</a>
                                    </td>                                 
                                </tr>
                                <?php endforeach; ?>   
                                <?php endif;?>                           
                            </tbody>
                        </table>
	</div>
</div>
