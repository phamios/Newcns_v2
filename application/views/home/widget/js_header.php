

<script type="text/javascript" src="<?php echo base_url('res_home/index_files'); ?>/dt-optimized-head-js-b01f1491305a136a71d8987915470f03.js"></script>
 
<!--Begin Define GPT Ad Slots-->
 

<!-- DT Variables (digitaltrends-2013/functions.php) -->
<script type="text/javascript">var ajaxurl="http://www.digitaltrends.com/wp-content/themes/digitaltrends-2013/ajax-actions.php";var ord=Math.random()*10000000000000000;</script>
<!-- End DT Variables -->
<<<<<<< HEAD

 
<script type="text/javascript">
    
    $(document).ready(function(){
        category_review();
        category_news(); 

        $(document).on('mouseover', '.sub-menu #a-hover', function(e) {
            var cateid = $(e.target).attr('cateid');
            rev_cate_sub(cateid);
        });
    });

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
    
    
</script>
=======
<script src="<?php echo base_url('res_home/index_files'); ?>/322026.js" defer="defer" async=""></script>
<script src="<?php echo base_url('res_home/index_files'); ?>/pubads_impl_39.js" type="text/javascript" async=""></script>
<script src="<?php echo base_url('res_home/index_files'); ?>/osd.js" type="text/javascript"></script>
<script src="<?php echo base_url('res_home/index_files'); ?>/seg" type="text/javascript" async=""></script>
<script src="<?php echo base_url('res_home/index_files'); ?>/nonSecureAnonymousFramework.js"></script>
>>>>>>> parent of 0940dfd... Merge pull request #16 from phamios/pr/5
