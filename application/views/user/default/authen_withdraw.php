 
<section class="content invoice">                    
                    <!-- title row -->
                    <div class="row">
                        <div class="col-xs-12">
                            <h2 class="page-header">
                                <i class="fa fa-globe"></i> <?php echo strtoupper ($sitename);?>
                                <small class="pull-right">Ngày: <?php echo date('d-m-Y');?></small>
                            </h2>                            
                        </div><!-- /.col -->
                    </div>
                    <!-- info row -->
                    <div class="row invoice-info">
                        <div class="col-sm-4 invoice-col">
                            From
                            <address>
                                <strong>CÔNG TY CỔ PHẦN TRUYỀN THÔNG KIM Ý</strong><br>
                                Địa chỉ: 2N3 TT5, Bắc Linh đàm, Phường Đại Kim, Quận Hoàng Mai, Thành Phố Hà Nội<br>
                                Điện thoại: 04. 36417809 – Fax: 04.3540 2309<br> 
                                Email: info@kimy.vn
                            </address>
                        </div><!-- /.col -->
                        <div class="col-sm-4 invoice-col">
                         
                        </div><!-- /.col -->
                        <div class="col-sm-4 invoice-col">
                              To
                            <address>
							<?php foreach($userinfo as $user):?> 
                                <strong><?php echo $user->member_fullname;?></strong><br>
                               <?php echo $user->member_address;?><br>
                                <?php echo $user->member_email;?><br>
                                <?php echo $user->member_phone;?><br/> 
								<?php endforeach;?>
                            </address>
                        </div><!-- /.col -->
                    </div><!-- /.row -->

                    <!-- Table row -->
                    <div class="row">
                        <div class="col-xs-12 table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Qty</th>
                                        <th>Lý do</th>
                                        <th>Số tiền rút</th>
                                        <th>Còn lại trong tài khoản</th>
                                        <th>Tổng</th>
                                    </tr>                                    
                                </thead>
                                <tbody>
                                     
                                    <tr>
                                        <td>1</td>
                                        <td>Rút tiền</td>
                                        <td><span class="red"><?php echo number_format($balance_change);?> vnđ</span></td>
                                        <td><?php echo number_format($total_profit - $balance_change)?> vnđ</td>
                                        <td><?php echo number_format($balance_change);?> vnđ</td>
                                    </tr>
                                </tbody>
                            </table>                            
                        </div><!-- /.col -->
                    </div><!-- /.row -->

                    <div class="row">
                        <!-- accepted payments column -->
                        <div class="col-xs-6">
                            <p class="lead">Phương thức thanh toán:</p>
                             
                            <p class="text-muted well well-sm no-shadow" style="margin-top: 10px;">
                              
							   <?php if($hinhthuc_ruttien == 1): ?>
									Banking
								<?php endif;?>	
								<?php if($hinhthuc_ruttien ==2): ?>
									Card - Thẻ cào
								<?php endif;?>	
								<?php if($hinhthuc_ruttien == 3): ?>
									Bảo Kim
								<?php endif;?>	
								<?php if($hinhthuc_ruttien == 4): ?>
									Ngân lượng
								<?php endif;?>	
                            </p>
                        </div><!-- /.col -->
                        <div class="col-xs-6">
                            <p class="lead">Ngày lập phiếu: <?php echo date('d-m-Y');?></p>
							<p class="lead">Giờ lập phiếu: <?php echo date('h:m:s');?></p>
                            <div class="table-responsive">
                                <table class="table">
                                    <tr>
                                        <th style="width:50%">Subtotal:</th>
                                        <td><?php echo number_format($balance_change);?> vnđ</td>
                                    </tr>
                                    <tr>
                                        <th>Thuế thu nhập: </th>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th>Phí giao dịch:</th>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th>Tổng:</th>
                                        <td><?php echo number_format($balance_change);?> vnđ</td>
                                    </tr>
                                </table>
                            </div>
                        </div><!-- /.col -->
                    </div><!-- /.row -->

                    <!-- this row will not appear when printing -->
                    <div class="row no-print">
                        <div class="col-xs-12">
							<?php echo form_open_multipart('user/authen_withdraw/'.$balance_change); ?>
								<input type="hidden" value="<?php echo $hinhthuc_ruttien;?>" name="type_transfer">
									<input type="submit" value="Đồng ý" name="oksubmit"  class="btn btn-success pull-right"/>
									<button class="btn btn-default" onclick="window.print();"><i class="fa fa-print"></i> In hóa đơn này</button> 
									<button class="btn btn-primary pull-right" onclick="window.print();" style="margin-right: 5px;"><i class="fa fa-download"></i> Tải bản PDF</button>
								<?php echo form_close(); ?>
                            
                            
                        </div>
                    </div>
                </section>