<?php 
 

function limit_text($text,$maxlen){
$string2Array = explode(' ', $text, ($maxlen + 1));

if( count($string2Array) > $maxlen ){
array_pop($string2Array);
$output = implode(' ', $string2Array)."...";
}else{
$output = $text;
}
return $output;
}
 
 
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
	xmlns:b="http://www.google.com/2005/gml/b"
	xmlns:data="http://www.google.com/2005/gml/data"
	xmlns:expr="http://www.google.com/2005/gml/expr" lang="vi">
<head>
<link rel="shortcut icon" href="<?php echo base_url('themes/wap/temp_1/img/payz.ico');?>" type="image/x-icon"/>
<meta charset="UTF-8">
<meta
	content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"
	name="viewport">
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type"> 
  
<meta
	content="Wap Tải Game Điện Thoại Miễn Phí, Game Hay Cho Java Android IOS, Game Online, Offline, Game Crack.."
	name="description">
<!--[if IE]> <script> (function() { var html5 = ("abbr,article,aside,audio,canvas,datalist,details," + "figure,footer,header,hgroup,mark,menu,meter,nav,output," + "progress,section,time,video").split(','); for (var i = 0; i < html5.length; i++) { document.createElement(html5[i]); } try { document.execCommand('BackgroundImageCache', false, true); } catch(e) {} })(); </script> <![endif]-->
<title><?php echo $title?></title>
<meta
	content="<?php echo $meta_des;?>"
	name="description">
<meta
	content="<?php echo $meta_content;?>"
	name="keywords">
<link type="text/css" rel="stylesheet"
	href="<?php echo base_url('themes/wap/temp_1/wap_files/css1.css');?>"> 
<script type="text/javascript" src="<?php echo base_url('themes/home/js/jquery-1.7.1.min.js');?>"></script>
 
<script type="text/Javascript"> 
function togglecomments (postid){ 
var whichpost = document.getElementById(postid); 
if (whichpost.className=="commentshown") { whichpost.className="commenthidden"; } else { whichpost.className="commentshown"; }} 
</script> 
</head>
<body>
	<div>
		<div class="nav10">
			<a class="logo" href="<?php echo $current_wap;?>"><img alt='' src='<?php echo base_url('/themes/home/vmob'); ?>/vmob.png' height="50xp"/></a>
		</div>
		<div class="menu10">
			<ul>
				<li><a href="javascript:togglecomments('category')"><img
						src="<?php echo base_url('themes/wap/temp_1/wap_files/menu_alt.png');?>"> Chuyên mục</a></li>
				<li><a href="javascript:togglecomments('ID-VIDEO')">VIDEO HOT</a>
				</li>
				<li><a href="javascript:togglecomments('search')">Tìm kiếm</a>
				</li>
			</ul>
		</div>
		<div class="clear"></div>
		<div class="commenthidden" id="search">
			<?php echo form_open_multipart($current_wap.'/home/search'); ?>
				<input class="text" name="q"> <input class="submit"
					value="Tìm kiếm" name="submit" type="submit">
			 <?php echo form_close(); ?>
		</div>
		<div class="primary section" id="primary">
			<div class="widget Label" id="Label2">
				<div class="commenthidden" id="category">
					<div class="list-cat">
						<ul>
							<?php foreach($categories as $cate):?>
							<a dir="ltr"
								href="http://<?php echo $sub.".payz.vn/cate/". mb_strtolower(url_title(removesign($cate->catename . "-" . $cate->id))) . ".html" ?>">
								<li><h2><?php echo $cate->catename;?></h2></li></a>
							 <?php endforeach;?>
						</ul>
					</div>
				</div>
			</div>
			<!--  TAB HOT NHAT -->
			<div class="widget PopularPosts" id="PopularPosts2">
				<div class="commenthidden" id="ID-Hot">
					<div class="post">
						<ul>
							 
							 
						</ul>
					</div>
				</div>
			</div>
			
			<div class="widget PopularPosts" id="PopularPosts2">
				<div class="commenthidden" id="ID-VIDEO">
					<div class="post">
						<ul>
							<?php if($list_video<> null):?>
							<?php foreach($list_video as $video):?>
							<li><?php if($video->video_image ==null):?> <img alt="+" class="thumb"
								src="<?php echo base_url('themes/wap/temp_1/wap_files/no-photo.jpg');?>">
								<?php else:?> <img alt="+" class="thumb"
								src="<?php echo $video->video_image;?>"> <?php endif;?>
								<a href="<?php echo $video->video_link?>"><?php echo $video->video_name?> </a><br>
								<br> <span> <?php echo limit_text($video->video_content,100); ?>
							</span> <br>
								<div class="tai">
									<a class="download" href="<?php echo $video->video_link?>">Xem ngay</a>
								</div>
								<div class="clear"></div></li>
						
							<?php endforeach;?>
							<?php else:?>
							<span style="padding-left: 50px;">Thành viên <b><?php echo $sub ?> </b>
								chưa có ứng dụng nào !
							</span>
							<?php endif;?>
						
						</ul>
					</div>
				</div>
			</div>
			 
			<div class="widget Blog" id="Blog1">
				<div class="blog-posts hfeed">
					<!-- google_ad_section_start -->
					<div class="post">