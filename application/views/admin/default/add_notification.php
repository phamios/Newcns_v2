<script type="text/javascript" src="<?php echo base_url('src/tinymce/js/tinymce/tinymce.min.js');?>"></script>
	
<script type="text/javascript">
(function($) {
	$(document).ready(function() {
		tinymce.init({
		    selector: "textarea#wysiwyg",
		    //theme: "simple",
		
		    plugins: [
		         "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
		         "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
		         "save table contextmenu directionality emoticons template paste textcolor"
		   ],
		   content_css: "css/content.css",
		   toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons", 
		   style_formats: [
		        {title: 'Bold text', inline: 'b'},
		        {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
		        {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
		        {title: 'Example 1', inline: 'span', classes: 'example1'},
		        {title: 'Example 2', inline: 'span', classes: 'example2'},
		        {title: 'Table styles'},
		        {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
		    ]
	    });
	});
})(jQuery);
</script>
<div class="box grid_12">
	<div class="box-head">
		<h2>Add Content</h2>
	</div>
	<div class="box-content">
		<div class="block-fluid">
			<?php echo form_open_multipart('admincp/notification'); ?> 
			<div class="form-row">
				<div class="form-label">Tiêu đề</div>
				<div class="form-item">
					<input type="text" name="tieude" />
				</div>
				<div class="clear"></div>
			</div>
			<div class="form-row">
				<div class="form-label">Nội dung</div>
				<div class="form-item">
					<textarea id="wysiwyg" name="noidung"
						style="height: 100px; width: 100%;"></textarea>
				</div>
				<div class="clear"></div>
			</div> 
                        <div class="form-row">
				<div class="form-label">Images:</div>
				<div class="form-item">
					<input type="file" name="images" size=40 />
				</div>

			</div>
			<div class="form-row">
				<div class="form-label"></div>
				<div class="span9">
					<input type="submit" name="notifysubmit" value="Chấp nhận" />
				</div>
				<div class="clear"></div>
			</div>
			<?php echo form_close(); ?>

		</div>
	</div>
</div>
