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

// https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js
function myplugin_enqueue_styles() {
	wp_enqueue_style(
		'tiny-slider-css', // Handle name
		'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css', // CDN URL
		array(), // Dependencies (like other CSS handles)
		'2.9.4', // Version
		'all' // Media (all, screen, print, etc.)
	);
}

function myplugin_enqueue_scripts() {
    // Register & enqueue script from cdnjs
    wp_enqueue_script(
        'tiny-slider-js', // handle name (unique ID for script)
        'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js', // CDN URL
        array(), // dependencies (e.g. array('jquery'))
        '2.9.4', // version
        true // load in footer (true) or header (false)
    );
}

add_action('wp_enqueue_scripts', 'myplugin_enqueue_styles');
add_action('wp_enqueue_scripts', 'myplugin_enqueue_scripts');

// Generates a unique id for aria-controls.
$appId = 1025313766208961;
$appSecret = 'c774929297c376c49b5b24a2b97c42d7';

// $unique_id = wp_unique_id( 'p-' );

$businessPageId = 782289188304806;
$accessToken = 'EAAOkhHbRdcEBPbQaS7l0TFl853g1r3R5OBSAvWwqBnvb61TMPHKHHXBLbumyaaxUk2iWxGnEturCZALoPMfcqZA6W1TSeTi78DcqMVZBvU9EcuXg8dxRYj3ZAsQnlrA0va1yQA1ZAvndz8ZBuSuxrleCfNgVwJ8OcekflcfGuyKY438BqNaQuZAhSNpNw3hjAAg19Y0UkOe2psPe9YZCSz83fbdngZA93aMDXCU8y';
$longLivedAccessToken = 'EAAOkhHbRdcEBPcQYO8A2bZBK6DqLVodngutsRWKxcqN6mBHKDT3nykmtZAr7m8HGDv4hx5VWhDJ3GB1LifY6YCoN5vtfdKKiOvHNhpuRdZBlGWEcUokqHtu1psZC1Amtp5JC6NVcLpbvZBw0ochz0fkZB4vJvVSsNmB3oC4N75pgrkji7gif29R5TiJ9ItZAnJu';
$getUserPageFeed = '/feed?fields=attachments';
$userPageAccessToken = '&access_token=' . $accessToken;
$longLivedUserPageParamAccessToken = '&access_token=' . $longLivedAccessToken;
$limit = '&limit=6';

$facebookGraphUrl = 'https://graph.facebook.com/v23.0';

function convertShortLivedUserTokenToLongLived($appId, $appSecret, $shortLivedToken) {
	$url = sprintf(
		'https://graph.facebook.com/v23.0/oauth/access_token?grant_type=fb_exchange_token&client_id=%s&client_secret=%s&fb_exchange_token=%s',
		urlencode($appId),
		urlencode($appSecret),
		urlencode($shortLivedToken)
	);

	$response = wp_remote_get($url);

	if (is_wp_error($response)) {
		return 'Error: ' . $response->get_error_message();
	}

	$body = wp_remote_retrieve_body($response);
	$data = json_decode($body, true);

	if (json_last_error() !== JSON_ERROR_NONE) {
		return 'Error decoding JSON: ' . json_last_error_msg();
	}

	return isset($data['access_token']) ? $data['access_token'] : 'Error: Access token not found in response.';
}

function getUserAccesToken($facebookGraphUrl, $accessToken){
	
	$getFacebookUserAccountsUrl = $facebookGraphUrl . '/me/accounts?access_token=' . urlencode($accessToken);
	// $getFacebookUserAccountsUrl = $facebookGraphUrl . '/me/accounts?access_token=' . urlencode($accessToken);

	if (empty($getFacebookUserAccountsUrl)) {
    	error_log('Facebook Accounts URL is empty. Access token might be missing.');
	}

	// print_r( $getFacebookUserAccountsUrl );
	$response = wp_remote_get( $getFacebookUserAccountsUrl );

	if ( is_wp_error( $response ) ) {
		return 'Error: ' . $response->get_error_message();
	}

	$body = wp_remote_retrieve_body( $response );
	$data = json_decode( $body, true );

	if ( json_last_error() !== JSON_ERROR_NONE ) {
		return 'Error decoding JSON: ' . json_last_error_msg();
	}

	return $data;
}

function get_facebook_feed_data( $url ) {
	$response = wp_remote_get( $url );

	if ( is_wp_error( $response ) ) {
		return 'Error: ' . $response->get_error_message();
	}

	$body = wp_remote_retrieve_body( $response );
	$data = json_decode( $body, true );

	if ( json_last_error() !== JSON_ERROR_NONE ) {
		return 'Error decoding JSON: ' . json_last_error_msg();
	}

	return $data;
}

// $feedData = get_facebook_feed_data( $facebookGraphUrl . $businessPageId . $getUserPageFeed . $userPageAccessToken );
// print_r( $feedData );
$appId_appSecret_token = convertShortLivedUserTokenToLongLived($appId, $appSecret, $accessToken);
// print_r( [ 'convertId' => $appId_appSecret_token] );

$userAccount = getUserAccesToken($facebookGraphUrl, $longLivedAccessToken);
$json_encode = $userAccount;
$page_access_token_long_lived = $userAccount['data'][0]['access_token'];

// print_r( [ 'access_token_xx' => $page_access_token_long_lived ]);
// print_r( [ 'user_accounts_full_dataxx' => $userAccount ]);

$feed_results = get_facebook_feed_data( $facebookGraphUrl . '/' . $businessPageId . $getUserPageFeed  . $limit . '&access_token=' . $page_access_token_long_lived );

// print_r([ 'feed_data' => $feed_results['data']]);

// Adds the global state.
// wp_interactivity_state(
// 	'create-block',
// 	array(
// 		'isDark'    => false,
// 		'darkText'  => esc_html__( 'Switch to Light', 'facebook-api-feed' ),
// 		'lightText' => esc_html__( 'Switch to Dark', 'facebook-api-feed' ),
// 		'themeText'	=> esc_html__( 'Switch to Dark', 'facebook-api-feed' ),
// 	)
// );

$facebookFeed = array();
for ($i =0; $i < count($feed_results['data']); $i++){
	$facebookFeed[$i] = $feed_results['data'][$i];
}
$ourContext = array(
	'feed' => $facebookFeed,
	'itemsPerView' => 3,
	"transform" => 'translateX(0%)',
	"currentIndex" => 0,
	"totalItems" => count($facebookFeed),
	"itemWidth" => 100 / 3,
	"maxIndex" => count($facebookFeed) - 3,
);

$style = sprintf( '--items-per-view: %d', $ourContext['itemsPerView'] );

//  print_r( [ 'attributes' => $attributes ]);
// $additional_attributes = [
// 	'data-wp-interactive' => 'create-block',
// ];
?>

<!-- data-wp-watch="callbacks.logIsOpen"
data-wp-class--dark-theme="state.isDark" -->
<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="create-block"
	<?php echo wp_interactivity_data_wp_context( $ourContext ); ?>
	style="<?php echo esc_attr( $style ); ?>"
>
	<section 
		id="slider"
		class="carousel"
		role="region"
	>
		<div class="container">			
			<div class="subcontainer margin-container" >
				<div class="carousel-navigation">
					<button data-wp-on--click="actions.moveForward">
						<<
					</button>
					<button data-wp-on--click="actions.moveBack">
						>>
					</button>
				</div>

				<div class="slider-wrapper">
					<!-- <ul> -->
					<h2 id="carousel-1-title"> Origins Rootz Blog</h2>

					<div data-wp-style--transform="context.transform" class="my-slider">
						
						<?php 
							foreach($ourContext['feed'] as $key => $feedItem):{
								$description = isset( $feedItem['attachments']['data'][0]['description'] ) ? $feedItem['attachments']['data'][0]['description'] : $feedItem['attachments']['data'][0]['title'];
								$split = explode(",", $description);
								// print_r(["key" => $key]);
								if($split[0]){
									$splitTitleAndDescription = explode(":", $split[0]);
									$title = $splitTitleAndDescription[0] ?? '';
									$description = $splitTitleAndDescription[1] ?? '';
								} else {
									$splitTitleAndDescription = explode(":", $description);
									$title = $splitTitleAndDescription[0] ?? '';
									$description = $splitTitleAndDescription[1] ?? '';
								}
						?>

						<div class="slide">
							<div class="slide-img">		
								<a href="">
								<!-- <h3 style="position:relative;"><?php echo $title ?? 'Good Rising'; ?></h3> -->
								<?php 
									if ( isset( $feedItem['attachments'] ) && isset( $feedItem['attachments']['data'][0]['media']['image']['src'] ) ) {
										$imageUrl = esc_url( $feedItem['attachments']['data'][0]['media']['image']['src'] );
										echo '<img src="' . $imageUrl . '" alt="Facebook Feed Image" style="object-fit: cover; width:100%; height:100%" />';
									} else {
										echo 'No image available';
									}
								?>
								</a>						
								<!-- <p style="position:relative;"><?php echo $description ?? '' ?></p> -->
							</div>

							<div class="facebook-content">
								<h3 class="slide-caption"><?php echo $title ?? 'Good Rising'; ?></h3>
								<p class="slide-content"><?php echo $description ?? '' ?></p>
							</div>
						</div>

						<?php
							}endforeach;
						?>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
