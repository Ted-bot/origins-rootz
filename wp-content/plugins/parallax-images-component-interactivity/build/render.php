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
// 		'darkText'  => esc_html__( 'Switch to Light', 'parallax-images-component-interactivity' ),
// 		'lightText' => esc_html__( 'Switch to Dark', 'parallax-images-component-interactivity' ),
// 		'themeText'	=> esc_html__( 'Switch to Dark', 'parallax-images-component-interactivity' ),
// 	)
// );

	$ourContext = array(
		'imageOne' => 'https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/original/image-manager/parallax-5-350.jpg?t=1727832095',
		'imageTwo' => 'https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/original/image-manager/parallax-4-350.jpg?t=1727832102',
		'title' => 'Origns Rootz',
		'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		"imageHeight" => '250%',
	);
?>

<!-- data-wp-watch="callbacks.initializeInfoComponent" -->
<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="create-block/parallax-images-component-interactivity"
	<?php echo wp_interactivity_data_wp_context( $ourContext ); ?>
	data-wp-class--dark-theme="state.isDark"
	data-wp-init="actions.initScroll"
>
	<div class="hero-component">
		<div class="hero-component__container container">
			<div class="hero-component__image-container"  data-wp-interactive="create-block/parallax-images-component-interactivity" >
				<div>
					<div class="image-1" style="display:block;clip-path: url(#content-columns-clip-path-1);-webkit-clip-path: url(#content-columns-clip-path-1);">
						<!-- data-wp-bind-style='{"clipPath": "url(#content-columns-clip-path-1)"}' -->
						<!-- transform: translate(0%, 5.5408%)  -->
						<img
							loading="lazy"
							data-wp-style--height="context.imageHeight"
							style="translate: none; rotate: none; scale: none;transform: translate3d(0px, 0px, 0px);"
							src="<?php echo esc_url( $ourContext['imageOne'] ); ?>"
							alt="Hero Image One"
							class="hero-component__image hero-component__image--one"
						/>						
					</div>
					<div class="image-2" style="margin-top:90px;clip-path: url(#content-columns-clip-path-1);-webkit-clip-path: url(#content-columns-clip-path-1);">
							<svg class="svg" >
								<clipPath id="content-columns-clip-path-1" clipPathUnits="objectBoundingBox">
									<path d="M0.088,0.882 A0.118,0.068,0,0,1,0,0.816 V0.068 A0.118,0.068,0,0,1,0.118,0 h0.765 a0.118,0.068,0,0,1,0.118,0.068 v0.864 c0,0.045,-0.073,0.077,-0.147,0.066 l-0.765,-0.116">
									</path>
								</clipPath>
							</svg>
							<img
								loading="lazy"
								data-wp-style--height="context.imageHeight"
								style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 0px, 0px);"
								src="<?php echo esc_url( $ourContext['imageTwo'] ); ?>"
								alt="Hero Image Two"/>
					</div>
				</div>
			</div>
			<div class="hero-component__text-container">
				<h1 class="hero-component__title"><?php echo esc_html( $ourContext['title'] ); ?></h1>
				<p class="hero-component__description"><?php echo esc_html( $ourContext['description'] ); ?></p>
				<a href="#shop-now" class="hero-component__button">Shop Now</a>
			</div>
		</div>
	</div>
</div>
