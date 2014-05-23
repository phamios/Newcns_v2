<select class="selectnav">
<?php foreach($all_cate as $cate): ?>
	<option value="<?php echo  site_url("cate/".mb_strtolower(url_title(removesign($cate->cate_name. "-" . $cate->id))) . ".html") ?>"><?php echo ucfirst($cate->cate_name) ?></option>
 
	<?php foreach($listcontent as $content): ?>
			<?php if($content->cateid == $cate->id):?>
                          <option value="<?php echo  site_url("news/".mb_strtolower(url_title(removesign($content->post_title. "-" . $content->id))) . ".html") ?>">  <?php echo ucfirst($content->post_title) ?></option>
			<?php endif;?>
	<?php endforeach; ?> 
<?php endforeach; ?>
	 </select>