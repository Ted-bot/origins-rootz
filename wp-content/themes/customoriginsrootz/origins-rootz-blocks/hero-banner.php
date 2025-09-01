<?php
    if(!isset($attributes['imgUrl_One'])){
        $attributes['imgUrl_One'] = 'https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/original/image-manager/back-to-school-hero-1.jpg?t=1756248689';
    }
    if(!isset($attributes['imgUrl_Two'])){
        $attributes['imgUrl_Two'] = 'https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/original/image-manager/back-to-school-hero-1.jpg?t=1756248689';
    }
?>

<!-- <?php echo get_theme_file_uri('https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/original/image-manager/back-to-school-hero-1.jpg?t=1756248689' ) ?> -->
<div class="hero-component container">
    <div class="small-image-and-text">
        <div> 
            <img 
                class=""
                src="<?php echo $attributes['imgUrl_One'] ?>"
            />
        </div>
        <div>
            <?php echo $content ?>
        </div>
    </div>		
    <div class="big-image">
        <div class="action-button">
            <a href="">
                <img 
                    class="rotate-img"
                    src="https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/original/image-manager/shop-now-circle.png?t=1737980465"
                />
                <img class="pointer-img" src="https://store-8466dwhhql.mybigcommerce.com/content/svg/arrow-spin.svg"/>
            </a>
        </div>
        <img
            class="main-image"
            src="<?php echo $attributes['imgUrl_Two'] ?>"
        />
    </div>
</div>