<!DOCTYPE html>
<html <?php language_attributes(); ?> lang="en">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <!-- <title>Origins Rootz</title> -->
</head>
<body <?php body_class(); ?> >
    <div id="page" class="site">
        <header>
            <section class="top-bar">
                <div class="container">
                    <div class="logo">
                        logo
                    </div>
                    <div class="searchbox">
                        searchbox
                    </div>
                </div>
            </section>
            <section class="menu-area">
                <div class="container">
                    <nav class="main-menu">
                        <button class="check-button">
                            <div class="menu-icon">
                                <div class="bar1"></div>
                                <div class="bar2"></div>
                                <div class="bar3"></div>
                            </div>
                        </button>
                        <?php wp_nav_menu( array(
                            'theme_location' => 'wp_origins_rootz_main_menu',
                            'depth' => 2,
                            'menu_id'        => 'primary-menu',
                            'menu_class'     => 'menu',
                            'fallback_cb'    => 'wp_page_menu', // fallback if no menu is assigned
                            )); ?>
                    </nav>
                </div>
            </section>
        </header>