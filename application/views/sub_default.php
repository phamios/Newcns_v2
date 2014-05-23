 

<?php foreach ($posts as $post): ?>
    
    <div class="breadcrumb">
        <nav>
            <ul>
                <li><a href="<?php echo site_url(); ?>" title="Trang chủ">Trang chủ</a></li>
                <li><?php echo $post->post_title; ?></li>
            </ul>

        </nav>
    </div>
    <div class="sidebar-wrap">
        <h2>
            <?php echo $post->post_title ?>
        </h2>
        <div class="content">
            <p></p><p><?php echo $post->post_short ?></p> 
            <p><?php echo $post->post_content ?></p>
            <p></p>
        </div>
    </div>
<?php endforeach; ?>
