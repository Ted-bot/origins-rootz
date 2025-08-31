<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Generates a unique id for aria-controls.
// $unique_id = wp_unique_id( 'p-' );

// Adds the global state.
// wp_interactivity_state(
// 	'create-block',
// 	array(
// 		'isDark'    => false,
// 		'darkText'  => esc_html__( 'Switch to Light', 'tkay-hero-component' ),
// 		'lightText' => esc_html__( 'Switch to Dark', 'tkay-hero-component' ),
// 		'themeText'	=> esc_html__( 'Switch to Dark', 'tkay-hero-component' ),
// 	)
// );

	$ourContext = array(
		'imageOne' => 'https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/original/image-manager/back-to-school-hero-1.jpg?t=1756248689',
		'imageTwo' => 'https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/original/image-manager/back-to-school-hero-2.jpg?t=1756248717',
	);

?>

<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="create-block"
	<?php echo wp_interactivity_data_wp_context( $ourContext ); ?>
	data-wp-watch="callbacks.logIsOpen"
	data-wp-class--dark-theme="state.isDark"
	data-wp-init="actions.initHeroActionButton"
>
	<div class="hero-component container">
		<div class="small-image-and-text">
			<div> 
				<img 
					class=""
					src="<?php echo esc_url( $ourContext['imageOne'] );  ?>"
				/>
			</div>
			<div>
				<div>
					<h3>Try something different</h3>
				</div>
				<div>
					<p>caslij cmsia clasim ncialsj cklasn clkasn cnasli casn
						caslij cmsia clasim ncialsj cklasn clkasn cnasli casn
						caslij cmsia clasim ncialsj cklasn clkasn cnasli casn
						caslij cmsia clasim ncialsj cklasn clkasn cnasli casn
						caslij cmsia clasim ncialsj cklasn clkasn cnasli casn
						caslij cmsia clasim ncialsj cklasn clkasn cnasli casn
					</p>
				</div>
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
				src="<?php echo esc_url( $ourContext['imageTwo'] );  ?>"
			/>
		</div>
	</div>

</div>
