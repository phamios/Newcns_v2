<div class="row">
    <div class="col-md-6">
        <div class="box box-danger">
            <div class="box-header">
                <i class="fa fa-warning"></i>
                <h3 class="box-title">Thông tin user </h3>
            </div><!-- /.box-header -->
<?php echo form_open_multipart('user/profile'); ?>
<?php foreach ($profiles as $profile): ?>
           <form role="form">
                <div class="box-body">
					<div class="form-group">
                        <label for="exampleInputEmail1">Số tiền hiện có</label>
                        <input type="text" class="form-control" value="<?php echo $profile->member_balance .' vnđ'; ?>" disabled>
                    </div>
                 <!--   <div class="form-group">
                        <label for="exampleInputEmail1">User</label>
                        <input type="text" class="form-control" value="<?php echo $profile->member_name; ?>" disabled>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Số tiền hiện có</label>
                        <input type="text" class="form-control" value="<?php echo $profile->member_balance; ?>" disabled>
                    </div>
					 -->

                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" name="password" placeholder="************" value="">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Địa chỉ email</label>
                        <input type="text" class="form-control" name="email" placeholder="Nhập email" value="<?php echo $profile->member_email ? $profile->member_email : ""; ?>">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Họ và tên</label>
                        <input type="text" class="form-control" name="fullname" placeholder="Nhập họ và tên" value="<?php echo $profile->member_fullname ? $profile->member_fullname : ""; ?>">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Địa chỉ</label>
                        <input type="text" class="form-control" name="address" placeholder="Nhập địa chỉ" value="<?php echo $profile->member_address ? $profile->member_address : ""; ?>">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Số điện thoại</label>
                        <input type="text" class="form-control" name="phone" placeholder="Nhập số điện thoại" value="<?php echo $profile->member_phone; ?>">
                    </div>
					<div class="form-group">
                        <label for="exampleInputEmail1">Số tài khoản</label>
                        <input type="text" class="form-control" name="member_account" placeholder="Nhập số tài khoản" value="<?php echo $profile->member_account; ?>">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Tên ngân hàng</label>
                        <input type="text" class="form-control" name="bank" placeholder="Nhập tên ngân hàng" value="<?php echo $profile->member_bank ? $profile->member_bank : ""; ?>">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Chi nhánh</label>
                        <input type="text" class="form-control" name="dist_bank" placeholder="Nhập tên chi nhánh" value="<?php echo $profile->member_dist_bank ? $profile->member_dist_bank : ""; ?>">
                    </div>
                </div><!-- /.box-body -->
<?php endforeach ?>

                <div class="box-footer">
                    <input type="submit" class="btn btn-primary" name="save_profile" value="Thay đổi"></input>
                </div>
            </form><!-- /.box-body -->
        </div><!-- /.box -->
    </div><!-- /.col -->
<?php echo form_close() ?>
    <div class="col-md-6">
        <div class="box box-info">
            <div class="box-header">
                <i class="fa fa-bullhorn"></i>
                <h3 class="box-title">Lịch sử giao dịch</h3>
            </div><!-- /.box-header -->
            <div class="box-body">  
				<?php if($list_payment <> null):?>
				<?php foreach($list_payment as $payment): ?>
				<?php if($payment->status == 1 ):?>
                <div class="callout callout-info"> 
					Hình thức: <b><?php if($payment->type_withdraw == 1):?>
						Rút tiền
					<?php elseif($payment->type_withdraw == 2):?>
						Chuyển khoản
					<?php else:?>
						 Nạp
					<?php endif;?></b><br>
					Tình trạng: <b>Chờ duyệt</b>
				<?php elseif($payment->status == 3):?>
				<div class="callout callout-warning"> 
					Hình thức: <b><?php if($payment->type_withdraw == 1):?>
						Rút tiền
					<?php elseif($payment->type_withdraw == 2):?>
						Chuyển khoản
					<?php else:?>
						 Nạp
					<?php endif;?></b><br>
					Tình trạng: <b>Đã chuyển </b>
				<?php else: ?>
				<div class="callout callout-warning"> 
					Hình thức: <b><?php if($payment->type_withdraw == 1):?>
						Rút tiền
					<?php elseif($payment->type_withdraw == 2):?>
						Chuyển khoản
					<?php else:?>
						 Nạp
					<?php endif;?></b><br>
					Tình trạng: <b> Chờ duyệt </b>
				<?php endif;?>
                    <p>
					Số lượng: <b><?php echo $payment->amount;?> vnđ</b><br/>
					Ngày tạo:  <b><?php echo $payment->datecreated;?> </b><br/>
					Hình thức thanh toán:  <b>
						<?php if($payment->type_transfer == 1): ?>
									Banking
								<?php endif;?>	
								<?php if($payment->type_transfer ==2): ?>
									Card - Thẻ cào
								<?php endif;?>	
								<?php if($payment->type_transfer == 3): ?>
									Bảo Kim
								<?php endif;?>	
								<?php if($payment->type_transfer == 4): ?>
									Ngân lượng
								<?php endif;?>	
					</b><br/>
					</p>
					  
                </div>
				<?php endforeach;?>		
				<?php else:?>
					Bạn chưa có bất kì giao dịch nào. 
				<?php endif;?>
            </div><!-- /.box-body -->
        </div><!-- /.box -->
    </div><!-- /.col -->
</div> <!-- /.row -->

