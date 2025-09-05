<?php
/**
 * The sidebar for WooCommerce shop pages
 *
 * @package YourThemeName
 */

if ( is_active_sidebar( "shop-sidebar" ) ) : ?>
    <aside id="secondary" class="widget-area shop-sidebar">
        <?php dynamic_sidebar( "shop-sidebar" ); ?>
    </aside>
<?php else: ?>
    <aside id="secondary" class="widget-area shop-sidebar">
        <p>No widgets added yet. Add some from Appearance → Widgets → Shop Sidebar.</p>
    </aside>
<?php endif; ?>