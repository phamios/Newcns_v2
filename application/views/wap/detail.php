<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Payz.vn - <?php echo $appname_title ?> - <?php echo $title;?></title>
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta http-equiv="cleartype" content="on">
<meta name="keywords" content="">
<meta name="description" content="">
<meta
	content="width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
	name="viewport">
<link rel="stylesheet" type="text/css"
	href="<?php echo base_url('themes/wap/temp_1/details_files/') ?>/global.css">
<link
	href="<?php echo base_url('themes/wap/temp_1/details_files/') ?>/idangerous.css"
	rel="stylesheet" media="screen">
<link rel="shortcut icon" href="<?php echo base_url('themes/wap/temp_1/img/payz.ico');?>" type="image/x-icon"/>	
</head>
<body>
	<div id="wrapper">
		<header>
			<div class="nav">
				<a href="<?php echo $current_wap.'/home/search';?>" class="find"><img
					src="<?php echo base_url('themes/wap/temp_1/details_files/') ?>/find.png">
				</a> <a href="<?php echo $current_wap?>" class="logo"><img alt='' src='<?php echo base_url('/themes/home/vmob'); ?>/vmob.png' height="50xp"/></a>
				<div class="left"></div>
			</div>
		</header>
	</div>
	<div id="wrapper">
		<div class="app-detail">
			<?php foreach($apps as $app):?>
			<div class="app-top-info" style="min-height: 70px;">
				<div class="logo">
				<?php if($app->appicon == null):?>
					<img
						src="<?php echo base_url('themes/wap/temp_1/details_files/') ?>/zqxCb.png"
						alt="<?php echo $app->app_name?>">
				<?php else:?>
					<img
						src="<?php echo $app->appicon ?>"
						alt="<?php echo $app->app_name?>">
				<?php endif;?>
					
				</div>
				<div class="info">
					<?php $appname = explode("_", $app->app_name); 
					if(strlen($appname[0]) <= 0 ){
						$appname[0] = "Noname";
					} 
					?> 
					<h1><?php echo $appname[0];?></h1>
					<div class="vendor"><?php foreach($categories as $cate):?>
						<?php if($cate->id == $app->catewap):?>
							<?php echo $cate->catename;?>
						<?php endif;?>
					<?php endforeach;?>
					</div>
				</div>
				<div class="download">
					<a
						href="<?php echo $app->app_link;?>"
						class="btn btn-down">Tải miễn phí</a>

				</div>

			</div>
			<div class="app-img">
				<div style="cursor: -moz-grab;" class="swiper-container">
					<div style="width: 6275px;" class="swiper-wrapper">
						<?php $image = explode("@0@", $app->thumbnails); ?>
 
						<div style="width: 1255px;"
							class="swiper-slide swiper-slide-visible swiper-slide-active">
							<img alt="150x150"  src="<?php echo $image[0];?>"  alt="<?php echo $appname[0];?>"/>
						</div>
						<div style="width: 1255px;"
							class="swiper-slide swiper-slide-visible swiper-slide-active">
							<img alt="150x150"  src="<?php echo $image[1];?>"  alt="<?php echo $appname[0];?>"/>
						</div>
						<div style="width: 1255px;"
							class="swiper-slide swiper-slide-visible swiper-slide-active">
							<img alt="150x150"  src="<?php echo $image[2];?>"  alt="<?php echo $appname[0];?>"/>
						</div>
						 
					</div>
					<div class="pagination">
						<span
							class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span><span
							class="swiper-pagination-switch"></span><span
							class="swiper-pagination-switch"></span><span
							class="swiper-pagination-switch"></span><span
							class="swiper-pagination-switch"></span>
					</div>
				</div>
			</div>
			<div class="app-info-more">
				<div class="info-1">
					<img
						src="<?php echo base_url('themes/wap/temp_1/details_files/') ?>/4.png"
						border="0"> <br> 
						Điểm đánh giá: <?php echo $app->score; ?> <br/>
						Lượt xem <?php echo $app->viewcount*2;?>  
				</div>
				<div class="info-2">
					<!--Aug 16, 2013 <br />-->
					<?php echo $app->filesize; ?>
				</div>
			</div>


			<div class="tip" style="">
				<div style="margin-bottom: 8px;">
					<img
						src="<?php echo base_url('themes/wap/temp_1/details_files/') ?>/error.png"
						style="vertical-align: top;" border="0"> <a href="#"><b>Báo lỗi
							ứng dụng</b> </a>
				</div>
				<div style="font-weight: bold;">
					<img
						src="<?php echo base_url('themes/wap/temp_1/details_files/') ?>/help_book.png"
						style="vertical-align: top; height: 16px;" border="0"> <a href="#"
						style="color: red;">Bạn không cài được ứng dụng ? Xem hướng dẫn
						cài đặt APK</a>
				</div>
			</div>

			<div id="app_desc_w">
				<div class="app-decs" id="app_desc"> 
					<b>Thông tin chi tiết</b>
					<p>
						 <?php echo $app->appdes;?>
					</p>
					<div class="gra_w"></div>
				</div>
			</div>
			  <?php endforeach;?>
			<div class="hot-list">
				<h3>Top ứng dụng hot</h3>
				<span class="header-more"><a
					href="#">Xem thêm</a> </span>
				<ul>
					<a href="#">
						<li><img
							src="<?php echo base_url('themes/wap/temp_1/details_files/') ?>/mXFBp.png"
							alt="Instagram">
							<h4>Instagram</h4>
							<div class="menu-top"></div>
							<div class="menu-bottom">Miễn phí</div>
					</li>
					</a>
					<a
						href="#">
						<li><img
							src="<?php echo base_url('themes/wap/temp_1/details_files/') ?>/fOJ6q.png"
							alt="Ứng dụng chia sẻ và lưu ảnh từ Magic Man Camera">
							<h4>Ứng dụng chia sẻ và lưu ảnh từ Magic Man Camera</h4>
							<div class="menu-top"></div>
							<div class="menu-bottom">Miễn phí</div>
					</li>
					</a>
					<a href="#">
						<li><img
							src="<?php echo base_url('themes/wap/temp_1/details_files/') ?>/LpHfG.png"
							alt="FxGuru: Movie FX Director - Tạo hiệu ứng hoành tráng cho video">
							<h4>FxGuru: Movie FX Director - Tạo hiệu ứng hoành tráng cho
								video</h4>
							<div class="menu-top"></div>
							<div class="menu-bottom">Miễn phí</div>
					</li>
					</a>
				</ul>
			</div>
			<div class="hot-list">
				<h3>Cùng thể loại</h3>
				<span class="header-more"><a
					href="#">Xem thêm</a> </span>
				<ul>
					<?php foreach($relates as $relate): ?>
					<?php $app_relate = explode("_", $relate->app_name); ?>
				<a href="http://<?php echo $sub.".vmob.vn/app/". mb_strtolower(url_title(removesign($app_relate[0] . "-" . $relate->id))) . ".html" ?>">
						<li><?php if($relate->appicon == null):?>
					<img
						src="<?php echo base_url('themes/wap/temp_1/details_files/') ?>/zqxCb.png"
						alt="<?php echo $relate->app_name?>">
				<?php else:?>
					<img width="85px" height="85px"
						src="<?php echo $relate->appicon?>"
						alt="<?php echo $relate->app_name?>">
				<?php endif;?>
							<h4><?php echo $relate->app_name; ?></h4>
							<div class="menu-top"></div>
							<div class="menu-bottom">Miễn phí</div>
					</li>
					</a>
					 <?php endforeach; ?>
				</ul>
			</div>
			<script
				src="<?php echo base_url('themes/wap/temp_1/details_files/') ?>/idangerous.js"></script>
			<script
				src="<?php echo base_url('themes/wap/temp_1/details_files/') ?>/idangerous_002.js"></script>
			<script>
		var mySwiper = new Swiper('.swiper-container', {
			pagination: '.pagination',
			//loop: true,
			grabCursor: true,
			paginationClickable: true,
			//centeredSlides: true,
			//slidesPerView: 'auto',
			//watchActiveIndex: true,
		})
		$('.arrow-left').on('click', function(e) {
			e.preventDefault()
			mySwiper.swipePrev()
		})
		$('.arrow-right').on('click', function(e) {
			e.preventDefault()
			mySwiper.swipeNext()
		})
    </script>

			<style>
.swiper-container,.swiper-slide {
	
}
</style>
		</div>
		
		<div id="footer">
			<div class="footer-text">
				© 2012-2014 <strong>Vmob.vn</strong>.- All rights reserved.
			</div>
		</div>
		<style>
.show_tip {
	background-color: #F2DEDE !important;
	border-color: #EED3D7;
	color: #B94A48;
	min-height: 50px;
	height: auto !important;
}

.show_tip .tip_on {
	margin: 0px auto;
	font-size: 14px;
	font-weight: bold;
	padding: 15px;
}

.show_tip .tip_on img {
	vertical-align: middle;
}

.show_tip a {
	color: #B94A48;
}
</style>



	</div>

</body>
<iframe src="" style="display: none;"></iframe>
</html>
