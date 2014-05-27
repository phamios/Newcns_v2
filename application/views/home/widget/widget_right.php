<aside class="sidebar-block">

    <!-- Front Page Sidebar --><!-- Deployed 2014-03-19 10:09:57 by bclark --><!-- Last Rendered 2014-05-11 09:23:20 -->

    <div class="widget trending-tabbed ">

        <div class="tab tab-1 trending on active">
            <h3><a href="javascript:void(0)">Xu thế<span class="icon"></span></a></h3>

            <div class="expand">
                <div class="wrap" id="trend_load">
                      
                </div>
            </div>
        </div>

        <div class="tab tab-2 most-commented  active">
            <h3><a href="javascript:void(0)">Chủ đề được quan tâm nhất<span class="icon"></span></a></h3>

            <div style="display: none;" class="expand">
                <div class="wrap" id="news_trend_load">
                     
                </div>
            </div>
        </div>

        <div class="tab tab-3 most-shared  active">
            <h3><a href="javascript:void(0)">Nhiều chia sẻ nhất<span class="icon"></span></a></h3>

            <div style="display: none;" class="expand">
                <div class="wrap">
                    <div class="item">
                        <h4><a href="#">45 problems with iOS 7.1, and how to fix them</a></h4>
                        <span class="count">
                            <span class="icon"></span>
                            8K											</span>
                        <div class="gauge standard" data-percent="100">
                            <span style="width: 100%"></span>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        <script>jQuery(document).ready(function($){var tabs=$('.widget.trending-tabbed .tab');tabs.each(function(){var self=$(this);var container=self.find('.expand');var items=container.find('.item');if(!self.hasClass('on'))
                                    container.hide();self.addClass('active');self.find('h3 a').click(function(){if(self.hasClass('on')||tabs.find('.expand').is(':animated'))
                                            return false;tabs.removeClass('on');tabs.find('.expand').slideUp(350,function(){tabs.find('.gauge span').css('width',0);});self.addClass('on');container.slideDown(350,function(){self.find('.gauge').each(function(){var percent=$(this).attr('data-percent');var duration=((126-parseInt(percent))*.02)*1200;if(percent){$(this).find('span').animate({width:percent+'%'},duration);}});});return false;});});});</script>

    </div>

    <!-- Last Rendered 2014-05-11 09:32:49 -->
    <div class="widget standard latest-reviews">

        <h3>Bài viết mới nhất</h3>

       <div id="new_last_get">     
           
       </div>
 
        <a href="#" class="button flat icon more"><span>Xem thêm</span></a>

    </div>

    <!-- Last Rendered 2014-05-10 03:00:56 -->
    <div class="widget standard latest-posts">

        <h3>Latest Features</h3>
        <div id="features_last_get">     
           
       </div>

        <a href="#" class="button flat icon more"><span>Xem thêm</span></a>
    </div>

</aside>