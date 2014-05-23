<ul id="menu-menu" class="dropmenu main-menu">

    <?php foreach ($all_cate as $cate): ?>
        <li id="menu-item-2552" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2552">
            <a class="a-navbar" href='<?php echo site_url("cate/" . mb_strtolower(url_title(removesign($cate->cate_name . "-" . $cate->id))) . ".html") ?>'>
                <?php echo ucfirst($cate->cate_name) ?>
            </a>
            <ul class="sub-menu">
                <?php foreach ($listcontent as $content): ?>
                    <?php if ($content->cateid == $cate->id): ?>
                        <li id="menu-item-1959" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1959">
                            <a   href="<?php echo site_url("news/" . mb_strtolower(url_title(removesign($content->post_title . "-" . $content->id))) . ".html") ?>"  >
                                <?php echo ucfirst($content->post_title) ?>
                            </a>
                        </li>
                    <?php endif; ?>
                <?php endforeach; ?>
            </ul>

        </li>
    <?php endforeach; ?>

</ul>



