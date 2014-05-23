<div class="row-fluid">
    <div class="span12">
        <!--PAGE CONTENT BEGINS-->

        <?php echo form_open_multipart('admincp/ad_store',array('class'=>"form-horizontal")); ?>
        
        <div class="control-group">
            <label class="control-label" for="form-field-1">Loại</label> 
            <div class="controls">
                <select name="type_id"  id="form-field-select-3" >
                     <option value="0">--- chọn ---</option>
                    <?php foreach ($alltype as $type): ?>
                        <option value="<?php echo $type->id; ?>">
                            <?php echo $type->nametype; ?>
                        </option>
                    <?php endforeach; ?>
                </select>
            </div>
        </div>
        
        <div class="control-group">
            <label class="control-label" for="form-field-1">Sản phẩm</label> 
            <div class="controls">
                <select name="item_id"  id="form-field-select-3" >
                    <option value="0">--- chọn ---</option>
                    <?php foreach ($items as $item): ?>
                        <option value="<?php echo $item->id; ?>">
                            <?php echo $item->namecontent; ?>
                        </option>
                    <?php endforeach; ?>
                </select>  
               
            </div>
        </div>
        
        <div class="control-group">
            <label class="control-label" for="form-field-1">Thông tin người mua</label> 
            <div class="controls"> 
               <textarea class="span12" id="form-field-8"  name="customer_name" placeholder="Thông tin người mua"></textarea>
            </div>
        </div>
         <div class="control-group">
            <label class="control-label" for="form-field-1">Thông tin nhận dạng sản phẩm</label> 
            <div class="controls"> 
               <textarea class="span12" id="form-field-8"  name="specs" placeholder="IMEI,UID..."></textarea>
            </div>
        </div>
        
         <div class="control-group">
            <label class="control-label" for="form-field-1">Giá đơn chiếc</label> 
            <div class="controls">
                 <input type="text" id="form-field-1" placeholder="Giá đơn chiếc" name="price" /> 
               
            </div>
        </div>
        
         <div class="control-group">
            <label class="control-label" for="form-field-1">Số lượng</label> 
            <div class="controls">
                 <input type="text" id="form-field-1" placeholder="Số lượng" name="amount" /> 
                
               
            </div>
        </div>
        
        <div class="control-group">
            <label class="control-label" for="form-field-1">Tình trạng</label> 
            <div class="controls">
                <select name="status"  id="form-field-select-3" >
                     <option value="0">--- chọn ---</option>
                    <option value="1"> Đã thanh toán</option>
                     <option value="2">Đặt hàng</option>
                      <option value="3">Chưa thanh toán</option>
                    
                </select>  
               
            </div>
        </div>
        
        
         
        <div class="form-actions">
            <input type="submit" name="submit" class="btn btn-info" value="Nhập"/>  
            
        </div>
        <?php echo form_close(); ?> 
    </div>
</div>
 