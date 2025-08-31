        
        <!-- Header  -->
        <?php get_header(); ?>
        <!-- Header end -->

        <div id="content" class="content-area">
            <div id="main" class="primary site-main">
                <main id="main" class="site-main">
                    <section class="hero">
                        hero
                    </section>
                    <section class="services">
                        services
                    </section>
                    <section class="home-blog">
                        <div class=container>
                            <div>                        
                                <?php 
                                    if( have_posts() ) {
                                        while ( have_posts() ) {
                                            the_post(); // <-- This is crucial, it advances to the next post
                                            the_title('<h2>', '</h2>');
                                            the_content();
                                        }
                                        // endwhile
                                    } else {
                                        echo '<p>No content found</p>';
                                    }
                                ?>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
        
        <!-- Footer -->
        <?php get_footer(); ?>
        <!-- Footer end -->
