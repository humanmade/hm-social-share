/**
 * WordPress dependencies
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, PanelBody, Disabled } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { ReactComponent as FacebookIcon } from './svg/social-facebook-blue.svg';
import { ReactComponent as TwitterIcon } from './svg/social-twitter-blue.svg';
import { ReactComponent as LinkedInIcon } from './svg/social-linkedin-blue.svg';
import { ReactComponent as EmailIcon } from './svg/mail-blue.svg';
import { ReactComponent as LinkIcon } from './svg/social-link.svg';
import { ReactComponent as ShareIcon } from './svg/social-share.svg';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
		const {
			enableTwitter,
			enableFacebook,
			enableLinkedIn,
			enableEmail,
			enableCopyLink,
		} = attributes;

		const blockProps = useBlockProps( {
			className: 'hm-share-article-block',
		} );

	return (
			<div { ...blockProps }>
				{ ( ! enableTwitter && ! enableFacebook && ! enableLinkedIn && ! enableEmail && ! enableCopyLink ) && (
					<small>{ __( '(No social share will be shown)', 'shiro-admin' ) }</small>
				) }
				<div className="share-button-container share-article">
					<button
						className="share-button"
						aria-expanded="false"
						aria-controls="shareOptionsList"
					>
						<span className="share-icon" aria-hidden="true">
							<ShareIcon /> { __( 'Share', 'shiro-admin') }
						</span>
					</button>
					<Disabled>
						<div
							className="share-options"
							role="menu"
							aria-labelledby="shareButton"
							hidden
						>
							{ enableTwitter && (
								<div className="share-article__link">
									<a
										href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<TwitterIcon />
									</a>
								</div>
							) }

							{ enableFacebook && (
								<div className="share-article__link">
									<a
										href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FacebookIcon />
									</a>
								</div>
							) }

							{ enableLinkedIn && (
								<div className="share-article__link">
									<a
										href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<LinkedInIcon />
									</a>
								</div>
							) }

							{ enableEmail && (
								<div className="share-article__link">
									<a
										href={`mailto:?subject=${encodeURIComponent(document.title)}&body=${encodeURIComponent(window.location.href)}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<EmailIcon />
									</a>
								</div>
							) }

							{ enableCopyLink && (
								<div
									className="share-article__link share-article__copy-link"
									role="button"
									tabIndex="0"
								>
									<LinkIcon />
									<span className="screen-reader-text">
										{ __( 'Copy Link', 'shiro-admin' ) }
									</span>
								</div>
							) }
						</div>
				</Disabled>
				</div>
				<InspectorControls>
					<PanelBody initialOpen title={ __( 'Social settings', 'shiro-admin' ) }>
						<ToggleControl
							checked={ enableTwitter }
							label={ __( 'Enable Twitter share', 'shiro-admin' ) }
							onChange={ ( enableTwitter ) => setAttributes( { enableTwitter } ) }
						/>
						<ToggleControl
							checked={ enableFacebook }
							label={ __( 'Enable Facebook share', 'shiro-admin' ) }
							onChange={ ( enableFacebook ) => setAttributes( { enableFacebook } ) }
						/>
						<ToggleControl
							checked={ enableLinkedIn }
							label={ __( 'Enable LinkedIn share', 'shiro-admin' ) }
							onChange={ ( enableLinkedIn ) => setAttributes( { enableLinkedIn } ) }
						/>
						<ToggleControl
							checked={ enableEmail }
							label={ __( 'Enable Email share', 'shiro-admin' ) }
							onChange={ ( enableEmail ) => setAttributes( { enableEmail } ) }
						/>
						<ToggleControl
							checked={ enableCopyLink }
							label={ __( 'Enable Copy Link', 'shiro-admin' ) }
							onChange={ ( enableCopyLink ) => setAttributes( { enableCopyLink } ) }
						/>
					</PanelBody>
				</InspectorControls>
			</div>
		);
}