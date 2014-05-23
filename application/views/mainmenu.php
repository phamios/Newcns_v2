<ul class="global-nav">
    <?php foreach ($all_cate as $cate): ?>
        <li>
            <a href="#" title="Dịch vụ tên miền" class="cufon">
                <?php echo ucfirst($cate->cate_name) ?>

            </a> 
            <div class="dedicated"> 
                <ul class="sub"> 
                    <?php foreach ($listcontent as $content): ?>
                        <?php if ($content->cateid == $cate->id): ?>
                            <li><a href="<?php echo site_url("news/" . mb_strtolower(url_title(removesign($content->post_title . "-" . $content->id))) . ".html") ?>" title="Thủ tục đăng ký và thu hồi tên miền">
                                    <i class="larrow-pixel"></i> <?php echo ucfirst($content->post_title) ?>
                                </a>
                            </li>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </ul>
            </div> 
        </li>    
    <?php endforeach; ?>
    <!--
    <li>
        <a href="#" title="Vmob.vn" class="cufon"><cufon style="width: 34px; height: 14.95px;" alt="Liên " class="cufon cufon-canvas"><canvas style="width: 46px; height: 21px; top: -5px; left: -1px;" height="21" width="46"></canvas><cufontext>Liên </cufontext></cufon><cufon style="width: 20px; height: 14.95px;" alt="hệ" class="cufon cufon-canvas"><canvas style="width: 26px; height: 21px; top: -5px; left: -1px;" height="21" width="26"></canvas><cufontext>hệ</cufontext></cufon></a>
    </li>
    -->
</ul>