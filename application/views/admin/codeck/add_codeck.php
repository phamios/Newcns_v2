<script type="text/javascript">
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
</script>
<div class="row-fluid">
         <div class="span12">
             <div class="box dark">
                 <header>
                     <div class="icons"><i class="icon-edit"></i></div>
                     <h5>Thêm Mã chứng khoán</h5>
                     <!-- .toolbar -->
                     <div class="toolbar">
                         <ul class="nav">
                             <li>
                                 <a class="accordion-toggle minimize-box" data-toggle="collapse" href="#div-1">
                                     <i class="icon-chevron-up"></i>
                                 </a>
                             </li>
                         </ul>
                     </div>
                     <!-- /.toolbar -->
                 </header>
                 <div id="div-1" class="accordion-body collapse in body">
                     
                        <?php echo form_open_multipart('admincp/codeck/add_codeck',array('class'=>'form-horizontal')); ?>
                         <div class="control-group">
                             <label for="text1" class="control-label">Mã chứng khoán</label>

                             <div class="controls with-tooltip">
                                 <input type="text" id="text1" class="span6 input-tooltip"
                                        name="ten_ma" data-placement="bottom"/>
                             </div>
                         </div>

                         <div class="control-group">
                             <label for="text1" class="control-label">Tên chi tiết</label>

                             <div class="controls with-tooltip">
                                 <input type="text" id="text1" class="span6 input-tooltip"
                                        name="ten_chi_tiet" data-placement="bottom"/>
                             </div>
                         </div>

                         <div class="control-group">
                             <label for="text1" class="control-label">Giá trần</label>

                             <div class="controls with-tooltip">
                                 <input type="text" id="text1" class="span6 input-tooltip"
                                        name="price_tran" onkeyup="return isNumberKey(event)" data-placement="bottom"/>
                             </div>
                         </div>

                         <div class="control-group">
                             <label for="text1" class="control-label">Giá sàn</label>

                             <div class="controls with-tooltip">
                                 <input type="text" id="text1" class="span6 input-tooltip"
                                        name="price_san" data-placement="bottom"/>
                             </div>
                         </div>

                         <div class="control-group">
                             <label for="text1" class="control-label">Giá tham chiếu</label>

                             <div class="controls with-tooltip">
                                 <input type="text" id="text1" class="span6 input-tooltip"
                                        name="tham_chieu" data-placement="bottom"/>
                             </div>
                         </div>

                         <div class="control-group">
                             <label for="text1" class="control-label">Giá khớp</label>

                             <div class="controls with-tooltip">
                                 <input type="text" id="text1" class="span6 input-tooltip"
                                        name="gia_khop" data-placement="bottom"/>
                             </div>
                         </div>

                         <div class="control-group">
                             <label for="text1" class="control-label">Khối lượng khớp</label>

                             <div class="controls with-tooltip">
                                 <input type="text" id="text1" class="span6 input-tooltip"
                                        name="khoi_luong_khop" data-placement="bottom"/>
                             </div>
                         </div>

                         <div class="control-group">
                             <label for="text1" class="control-label">Thay đổi</label>

                             <div class="controls with-tooltip">
                                 <input type="text" id="text1" class="span6 input-tooltip"
                                        name="thay_doi" data-placement="bottom"/>
                             </div>
                         </div>

                         <div class="row-fluid">
                             <div class="span6">
                                 <div class="control-group">   
                                     <label class="control-label">Trạng thái</label>
                                     <div class="controls">        
                                         <label>
                                             <input class="uniform" type="radio" value="1" name="status"> Kích hoạt
                                         </label>
                                         <label>
                                             <input class="uniform" type="radio" value="0" name="status"> Không kích hoạt
                                         </label>
                                     </div>
                                 </div>
                             </div>
                         </div>

                         <div class="form-actions">
                             <input type="submit" value="Đồng ý" name="submit" class="btn btn-primary">
                         </div>
                      <?php echo form_close(); ?>
                 </div>
          <!--END TEXT INPUT FIELD-->
