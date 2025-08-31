/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state } = store( 'create-block', {
	state: {
		get themeText() {
			return state.isDark ? state.darkText : state.lightText;
		},
	},
	actions: {
		initHeroActionButton() {
			const context = getContext();
			context.transformRotation
		},
	},
	callbacks: {
	},
} );
