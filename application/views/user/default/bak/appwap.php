<div class="row-fluid">
	<div class="span12">
		<!--PAGE CONTENT BEGINS-->
		<script type="text/javascript" language="javascript">// <![CDATA[
			function checkAll(formname, checktoggle)
			{
			  var checkboxes = new Array();
			  checkboxes = document[formname].getElementsByTagName('input');
			 
			  for (var i=0; i<checkboxes.length; i++)  {
			    if (checkboxes[i].type == 'checkbox')   {
			      checkboxes[i].checked = checktoggle;
			    }
			  }
			}
			// ]]>
		</script>
		<div class="row-fluid">
			<div class="span12">
				<select style="width: 400px;">
					<option selected="selected" value="">Chọn WAP cần set ứng dụng:</option>
					<?php foreach($list_wap as $wap):?>
					<option value="<?php echo $wap->id?>">
					<?php echo $wap->wap_name?>
					</option>
					<?php endforeach;?>
				</select>

				<form name="form3">
					<table id="sample-table-1"
						class="table table-striped table-bordered table-hover">
						<thead>
							<tr>
								<th class="center"><a
									onclick="javascript:checkAll('form3', true);"
									href="javascript:void();">check all</a><br /> <a
									onclick="javascript:checkAll('form3', false);"
									href="javascript:void();">uncheck all</a>
								</th>
								<th>Loại app</th>
								<th>Tên app</th>
								<th>Link</th>
								<th>Ngày tạo</th>
								<th>Ngày cập nhật</th>
								<th>Tình trạng</th>
								<th>Lượt xem</th>
								<th>Lượt thích</th>
								<th>Tùy chọn</th>
							</tr>
						</thead>

						<tbody>
						<?php $i=0; ?>
						<?php if($apps <> null):?>
						<?php foreach($apps as $app):?>
						<?php $i = $i+1;?>
							<tr>
								<td class="center"><input type="checkbox" class="chk" /> <span
									class="<?php echo $i;?>"></span></td>
								<td><?php if($app->apptype == 1):?> Android <?php endif; ?> <?php if($app->apptype == 2):?>
									iOS <?php endif; ?> <?php if($app->apptype == 3):?> Java <?php endif; ?>
								</td>
								<td><?php echo $app->app_name?></td>
								<td><a href="<?php echo $app->app_link; ?>">Download</a></td>
								<td><?php echo $app->datecreated?></td>
								<td><?php echo $app->dateupdated?></td>
								<td><?php if($app->active == 1):?> Kích hoạt <?php else:?> Tạm
									dừng <?php endif;?>
								</td>
								<td></td>
								<td></td>
								<td><a href="<?php echo site_url('user/update_app/'.$app->id)?>"><span
										class="green"> <i class="icon-edit bigger-120"></i> </span> </a>
									<a href="<?php echo site_url('user/del_app/'.$app->id)?>"><span
										class="red"> <i class="icon-trash bigger-120"></i> </span> </a>
										
								</td>
							</tr>
							<?php endforeach; ?>
							<?php endif;?>
						</tbody>
					</table>
				</form>
			</div>
			<!--/span-->
		</div>
		<!--/row-->


	</div>
	<!--PAGE CONTENT ENDS-->
</div>
<!--/.span-->
</div>
