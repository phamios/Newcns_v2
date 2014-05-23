


<script type="text/javascript" src="<?php echo base_url('res_home/index_files'); ?>/dt-optimized-head-js-b01f1491305a136a71d8987915470f03.js"></script>

<!--Begin Define GPT Ad Slots-->


<!-- DT Variables (digitaltrends-2013/functions.php) -->
<script type="text/javascript">var ajaxurl="http://www.digitaltrends.com/wp-content/themes/digitaltrends-2013/ajax-actions.php";var ord=Math.random()*10000000000000000;</script>
<!-- End DT Variables -->





<script type="text/javascript">
    
    $(document).ready(function(){
        category_review();
        category_news(); 
        
        $('#rev_cate').hover(function(){
           //alert("asdasd");
        });
        
    });

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