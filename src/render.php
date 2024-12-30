<?php
/**
 * Callback para renderização do bloco hm/social-share.
 *
 * @param array $attributes Atributos do bloco.
 *
 * @return string HTML renderizado do bloco.
 */
function hm_render_share_block( $attributes ) {
    $enable_twitter = $attributes['enableTwitter'] ? true : false;
    $enable_facebook = $attributes['enableFacebook'] ? true : false;
    $enable_linkedin = $attributes['enableLinkedIn'] ? true : false;
    $enable_mail = $attributes['enableEmail'] ? true : false;
    $enable_link = $attributes['enableCopyLink'] ? true : false;

    ob_start();
    ?>
    <div class="share-button-container share-article">
        <button
            class="share-button"
            aria-expanded="false"
            aria-controls="shareOptionsList"
        >
            <span class="share-icon" aria-hidden="true">
            Share
            </span>
        </button>
        <div
            class="share-options"
            role="menu"
            aria-labelledby="shareButton"
            hidden
        >
            <?php if ( $enable_facebook ) : ?>
            <a href="#" class="share-option" role="menuitem" tabindex="-1" data-platform="Facebook" target="_blank" rel="noreferrer noopener">
                Facebook
            </a>
            <?php endif; ?>
            <?php if ( $enable_twitter ) : ?>
            <a href="#" class="share-option" role="menuitem" tabindex="-1" data-platform="Twitter" target="_blank" rel="noreferrer noopener">
                Twitter
            </a>
            <?php endif; ?>
            <?php if ( $enable_linkedin ) : ?>
            <a href="#" class="share-option" role="menuitem" tabindex="-1" data-platform="LinkedIn" target="_blank" rel="noreferrer noopener">
                LinkedIn
            </a>
            <?php endif; ?>
            <?php if ( $enable_mail ) : ?>
            <a href="#" class="share-option" role="menuitem" tabindex="-1" data-platform="Email" target="_blank" rel="noreferrer noopener">
                Email
            </a>
            <?php endif; ?>
            <?php if ( $enable_link ) : ?>
                <button class="share-option copy-link" role="menuitem" tabindex="-1">
                    <?php echo esc_html__( 'Copy Link', 'hm-social-share' ); ?>
                </button>
                <span class="copy-feedback" aria-live="polite" hidden><?php echo esc_html__( 'Link copied!', 'hm-social-share' ); ?></span>
            <?php endif; ?>
        </div>
    </div>
    <?php
    return ob_get_clean();
}
