<?php
/**
 * Plugin Name:       HM Social Share
 * Description:       HM Social Share Block
 * Requires at least: 5.0
 * Requires PHP:      7.2
 * Version:           1.0.0
 * Author:            Human Made
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hm-social-share
 *
 * @package HM\SocialShare
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function hm_render_share_block() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'hm_render_share_block' );

/**
 * Display SVG Icon based on title.
 *
 * @param string $name    Name of SVG in sprite.
 * @param string $classes Classes to add to icon.
 */
function hm_show_icon( $name, $classes = '' ) {
	// Substituir por uma função válida caso wmf_get_gulp_asset_uri não esteja definida.
	if ( ! function_exists( 'wmf_get_gulp_asset_uri' ) ) {
		$sprite_path = plugin_dir_url( __FILE__ ) . 'assets/icons.svg';
	} else {
		return null;
	}

	// Verificar se o sprite_path foi definido corretamente.
	if ( ! $sprite_path ) {
		return;
	}

	?>
	<svg class="i icon icon-<?php echo esc_attr( $name ); ?> <?php echo esc_attr( $classes ); ?>">
		<use xlink:href="<?php echo esc_url( $sprite_path . '#' . esc_attr( $name ) ); ?>"></use>
	</svg>
	<?php
}
