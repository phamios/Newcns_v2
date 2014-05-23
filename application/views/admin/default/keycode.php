<!-- Box -->
				<div class="box"> 
					<!-- Table -->
					<div class="table">
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<th width="13">ID</th> 
								<th>Keycode </th>
								<th>Nội dung trả về </th>  
								<th width="110" class="ac">Tùy chỉnh </th>
							</tr>
							<?php foreach($keycode as $code):?>
							<tr class="odd">
								<td><?php echo $code->id;?></td> 
								<td><?php echo $code->keycode;?></td> 
								<td><?php echo $code->mess;?></td> 
								<td>#</td>
							</tr>
							 <?php endforeach;?>
						</table>
						 
					</div>
					<!-- Table -->
					
				</div>
				<!-- End Box -->
				
				<!-- Box -->
				<div class="box"> 
					<span style="font-color:red"><?php echo $error;?></span>
					<?php echo form_open_multipart('admincp/keycode'); ?>
						
						<!-- Form -->
						<div class="form">  
								<p>
									<span class="req">Keycode</span> 
									<!-- <textarea name="keycode" class="field size1" rows="10" cols="30"></textarea> -->
									<input type="text" class="field size1"  name="keycode"/>
								</p>	 
						</div>
						
						<div class="form">  
								<p>
									<span class="req">Mess trả về </span> 
									<!-- <textarea name="keycode" class="field size1" rows="10" cols="30"></textarea> -->
									<input type="text" class="field size1"  name="mess"/>
								</p>	 
						</div>
						
						<!-- End Form -->
						
						<!-- Form Buttons -->
						<div class="buttons"> 
							<input type="submit" name="keycode_submit" class="button" value="Tạo Mới" />
						</div>
						<!-- End Form Buttons -->
				 
					<?php echo form_close(); ?> 
				</div>
				<!-- End Box -->