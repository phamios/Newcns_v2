<!-- Box -->
				<div class="box"> 
					<!-- Table -->
					<div class="table">
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<th width="13">ID</th> 
								<th>Tiêu đề </th>
								<th>Nội dung</th> 
								<th>Ngày</th> 
								<th width="110" class="ac">Tuỳ chỉnh</th>
							</tr>
							<?php foreach($receivesmo as $morow):?>
							<tr class="odd">
								<td><?php echo $morow->id;?></td> 
								<td><?php echo $morow->title;?></td>
								<td><?php echo substr($morow->content, 0,200);?></td>  
								<td><?php echo $morow->created;?></td> 
								<td><a href="<?php echo site_url('admincp/delnotify/'.$morow->id);?>" class="ico del">Xoá </a> </td>
							</tr>
							 <?php endforeach;?>
						</table>
						
						
						<!-- Pagging -->
						<div class="pagging">
							<div class="left"></div>
							<div class="right">
								<?php echo $pages;?>
							</div>
						</div>
						<!-- End Pagging -->
						
					</div>
					<!-- Table -->
					
				</div>
				<!-- End Box -->
				
				<!-- Box -->
				<div class="box"> 
					<?php echo form_open_multipart('admincp/notification'); ?>
						
						<!-- Form -->
						<div class="form">  
								<p>
									<span class="req"></span> 
									<textarea name="noidung" class="field size1" rows="10" cols="30"></textarea>
								</p>	
							
						</div>
						
						<!-- End Form -->
						
						<!-- Form Buttons -->
						<div class="buttons"> 
							<input type="submit" name="notifysubmit" class="button" value="Đăng Notification mới" />
						</div>
						<!-- End Form Buttons -->
				 
					<?php echo form_close(); ?> 
				</div>
				<!-- End Box -->