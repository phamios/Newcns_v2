 
<script type="text/javascript" src="<?php echo base_url('res_home/index_files'); ?>/dt-optimized-head-js-b01f1491305a136a71d8987915470f03.js"></script>

<!--Begin Define GPT Ad Slots--> 
<!-- DT Variables (digitaltrends-2013/functions.php) -->
<script type="text/javascript">var ajaxurl="http://www.digitaltrends.com/wp-content/themes/digitaltrends-2013/ajax-actions.php";var ord=Math.random()*10000000000000000;</script>
<!-- End DT Variables -->

<script type="text/javascript">
    
    $(document).ready(function(){
        jQuery('body').removeClass('stick-nav stuck-nav');
        jQuery('body').addClass('stick-nav stuck-nav');
        category_review();
        category_news(); 
        get_last_rev();
        get_last_features();
        get_trend();
        get_news_trend();
        review_category_autoload();
        news_category_autoload();
		get_footer();
		get_logosite();

        $(document).on('mouseover', '.sub-menu #a-hover', function(e) {
            var cateid = parseInt($(e.target).attr('cateid'));
            rev_cate_sub(cateid);
        });
        
        $(document).on('mouseover', '.sub-menu #a-hover2', function(e) {
            var cateid = parseInt($(e.target).attr('cateid'));
            new_cate_sub(cateid);
        });
    });
    
    function new_cate_sub(cateid){
        $.ajax({ 
            url: '<?php echo site_url('ajax/news_cate_sub_ajax'); ?>' + '/' +  cateid,
            type:'POST',
            data: cateid,
            success: function(response){
                $("#news_cate_sub").html(response);
            },
            error: function (x, status, error) {
                alert("Error code: " + x + "\nAn error occurred: " + status + "\nError: " + error);
            }
        });
    }
    

    function rev_cate_sub(cateid){
        $.ajax({ 
            url: '<?php echo site_url('ajax/rev_cate_sub_ajax'); ?>' + '/' +  cateid,
            type:'POST',
            data: cateid,
            success: function(response){
                $("#rev_cate_sub").html(response);
            },
            error: function (x, status, error) {
                alert("Error code: " + x + "\nAn error occurred: " + status + "\nError: " + error);
            }
        });
    }

    function category_review(){
        $.ajax({
            url: '<?php echo site_url('ajax/rev_cate_ajax'); ?>',
            type:'POST',
            success: function(response){ 
                $("#rev_cate").html(response);
            },
            error: function (x, status, error) {
                alert("Error code: " + x + "\nAn error occurred: " + status + "\nError: " + error);
            }
        });
    };
    
    function get_last_rev(){
        
        $.ajax({
            url: '<?php echo site_url('ajax/last_review'); ?>',
            type:'POST',
            success: function(response){ 
                $("#review_last_get").html(response);
            },
            error: function (x, status, error) {
                alert("Error code: " + x + "\nAn error occurred: " + status + "\nError: " + error);
            }
        });
    }
    
    function get_last_features(){
        $.ajax({
            url: '<?php echo site_url('ajax/last_features'); ?>',
            type:'POST',
            success: function(response){ 
                $("#features_last_get").html(response);
            },
            error: function (x, status, error) {
                alert("Error code: " + x + "\nAn error occurred: " + status + "\nError: " + error);
            }
        });
    }
    
    function category_news(){
        $.ajax({
            url: '<?php echo site_url('ajax/new_cate_ajax'); ?>',
            type:'POST',
            success: function(response){ 
                $("#new_cate").html(response);
            },
            error: function (x, status, error) {
                alert("Error code: " + x + "\nAn error occurred: " + status + "\nError: " + error);
            }
        });
    };
    
    
    function get_trend(){ 
        $.ajax({
            url: '<?php echo site_url('ajax/trend_ajax'); ?>',
            type:'POST',
            success: function(response){ 
                $("#trend_load").html(response);
            },
            error: function (x, status, error) {
                alert("Error code: " + x + "\nAn error occurred: " + status + "\nError: " + error);
            }
        });
    }
    
    
    function get_news_trend(){ 
        $.ajax({
            url: '<?php echo site_url('ajax/news_hot_ajax'); ?>',
            type:'POST',
            success: function(response){ 
                $("#news_trend_load").html(response);
            },
            error: function (x, status, error) {
                alert("Error code: " + x + "\nAn error occurred: " + status + "\nError: " + error);
            }
        });
    }
    
    function review_category_autoload(){ 
        $.ajax({
            url: '<?php echo site_url('ajax/review_category_autoload'); ?>',
            type:'POST',
            success: function(response){ 
                $("#menu-footer-links").html(response);
            },
            error: function (x, status, error) {
                alert("Error code: " + x + "\nAn error occurred: " + status + "\nError: " + error);
            }
        });
    }
    
    function news_category_autoload(){ 
        $.ajax({
            url: '<?php echo site_url('ajax/news_category_autoload'); ?>',
            type:'POST',
            success: function(response){ 
                $("#menu-footer-links-2").html(response);
            },
            error: function (x, status, error) {
                alert("Error code: " + x + "\nAn error occurred: " + status + "\nError: " + error);
            }
        });
    }
    
    function get_footer(){ 
        $.ajax({
            url: '<?php echo site_url('ajax/get_footer'); ?>',
            type:'POST',
            success: function(response){ 
                $("#footer_ajax").html(response);
            },
            error: function (x, status, error) {
                alert("Error code: " + x + "\nAn error occurred: " + status + "\nError: " + error);
            }
        });
    }
	
    function get_logosite(){ 
        $.ajax({
            url: '<?php echo site_url('ajax/get_logoheader'); ?>',
            type:'POST',
            success: function(response){ 
                $("#logosite").html(response);
            },
            error: function (x, status, error) {
                alert("Error code: " + x + "\nAn error occurred: " + status + "\nError: " + error);
            }
        });
    }
	
	
	
	
    
    
    
    
    
    
    
</script>
