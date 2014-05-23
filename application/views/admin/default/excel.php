
<div class="c3_col_1" style="margin: 0;">
	 
	<div class="c3_box">
		 	<?php echo form_open_multipart('gio_hang/xac_nhan'); ?> 
				 <input type="hidden" name="customerid" value="<?php echo $this->session->userdata('customer');?>" />
				<input value="Đặt hàng" type="submit" name="bttConfirmOrder">
				 <?php echo form_close(); ?>
		<div class="clear"></div>
	</div>
	 
</div>
 