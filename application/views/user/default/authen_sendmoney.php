<div class="row-fluid">
	<div class="span10 offset1">
		<div class="widget-box transparent invoice-box">
			<div class="widget-header widget-header-large">
				<h3 class="grey lighter pull-left position-relative">
					  Xác nhận thanh toán
				</h3>

				<div class="widget-toolbar no-border invoice-info">
					<span class="invoice-info-label">Hoá đơn:</span> <span class="red">#121212</span>

					<br /> <span class="invoice-info-label">Ngày:</span> <span
						class="blue"><?php echo date('d-m-Y');?></span>
						<span class="invoice-info-label">Giờ:</span>
						<span
						class="blue"> <?php echo date('h:m:s');?></span>
				</div>

				<div class="widget-toolbar hidden-480">
					<a href="#"> <i class="icon-print"></i>
					</a>
				</div>
			</div>

			<div class="widget-body">
				<div class="widget-main padding-24">
					<div class="row-fluid">
						<div class="row-fluid">
							<div class="span6">
								<div class="row-fluid">
									<div
										class="span12 label label-large label-info arrowed-in arrowed-right">
										<b>Bên chuyển tiền</b>
									</div>
								</div>

								<div class="row-fluid">
									<ul class="unstyled spaced">
										<li><i class="icon-caret-right blue"></i>Công ty PayZ  JSC</li>

										<li><i class="icon-caret-right blue"></i>P2 L12 29 Lương Đình Của </li>

										<li><i class="icon-caret-right blue"></i>HÀ NỘI</li>

										<li><i class="icon-caret-right blue"></i> Điện thoại: <b
											class="red">(84) 4 3838888</b></li>

										<li class="divider"></li>
 
									</ul>
								</div>
							</div>
							<!--/span-->

							<div class="span6">
								<div class="row-fluid">
									<div
										class="span12 label label-large label-success arrowed-in arrowed-right">
										<b>Người nhận</b>
									</div>
								</div>
								<?php foreach($userinfo as $user):?>
								<div class="row-fluid">
									<ul class="unstyled spaced">
										<li><i class="icon-caret-right green"></i> <?php echo $user->member_address;?></li>

										<li><i class="icon-caret-right green"></i><?php echo $user->member_email;?></li>

										<li><i class="icon-caret-right green"></i> <?php echo $user->member_phone;?></li>

										<li class="divider"></li>

										<li><i class="icon-caret-right green"></i> <?php echo $user->member_fullname;?></li>
									</ul>
								</div>
								<?php endforeach;?>
							</div>
							<!--/span-->
						</div>
						<!--row-->

						<div class="space"></div>

						<div class="row-fluid">
							<table class="table table-striped table-bordered">
								<thead>
									<tr>
										<th class="center">#</th>
										<th>Dịch vụ </th>
										<th class="hidden-phone">Lý do</th>
										<th class="hidden-480">Số dư sau khi trừ</th>
										<th>Số tiền rút</th>
									</tr>
									
								</thead>

								<tbody>
									<tr>
										<td class="center">1</td> 
										<td><a href="#">Withdraw (rút tiền)</a></td>
										<td class="hidden-phone"></td>
                                        <td class="hidden-480"><?php echo number_format($total_profit - $balance_change)?> VNĐ</td>
										<td><?php echo number_format($balance_change);?> VNĐ</td>
									</tr>
 									 
								</tbody>
							</table>
						</div>

						<div class="hr hr8 hr-double hr-dotted"></div>

						<div class="row-fluid">
							<div class="span5 pull-right">
								<h4 class="pull-right">
									Số tiền rút : <span class="red"><?php echo number_format($balance_change);?> vnđ</span>
								</h4>
								<br/>
								 
							</div>
							 
						</div>
						<div class="row-fluid">
							<div class="span5 pull-left">  
								<?php echo form_open_multipart('user/authen_withdraw/'.$balance_change); ?>
									<input type="submit" value="Đồng ý" name="oksubmit" class="btn btn-small btn-success"/>
									<input type="submit" value="Huỷ" name="cancelsubmit" class="btn btn-small btn-unsuccess"/>
								<?php echo form_close(); ?>
							</div>
							 
						</div>

						<div class="space-6"></div>

						<div class="row-fluid">
							<div class="span12 well">Số tiền này sẽ được chuyển vào tài khoản của bạn nhanh nhất sau 2 giờ, chậm nhất sau 24 giờ tính từ thời điểm bạn rút tiền .</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
