/**
 * WordPress dependencies
 */
import { store, getContext, getActions } from '@wordpress/interactivity';
// import { controls } from '@wordpress/data';

const { state } = store( 'facebookCarousel', {
	state: {
		currentIndex: 0,
		get themeText() {
			return state.isDark ? state.darkText : state.lightText;
		},
	},
	actions: {
		moveBack() {
			const context = getContext();
			const itemsTotal = context.totalItems;
			const itemsPerView = context.itemsPerView;

			// extra effect change the order of feed items
			// if (context.feed && context.feed.length > 0) {
			// 	context.feed.unshift(context.feed.pop());
			// }
			// context.currentIndex = (context.currentIndex - 1) % context.feed.length;

			// extra effect
			// console.log(context);

			// const orderOfFacebookFeed = context.feed;
			// if ( orderOfFacebookFeed && orderOfFacebookFeed.length > 0) {
			// 	orderOfFacebookFeed.unshift(orderOfFacebookFeed.pop());
			// 	console.log({changehappend: orderOfFacebookFeed});
			// }
			// context.feed = orderOfFacebookFeed;

			// console.log(context.feed);

			context.currentIndex = (context.currentIndex - 1) % context.feed.length;
				const offset = -context.currentIndex * (100 / itemsPerView);
				context.transform = `translateX(${offset}%)`;


			// context.currentIndex = (context.currentIndex + itemsPerView) % itemsTotal;
			// const offset = -context.currentIndex * (100 / itemsPerView);
			// context.transform = `translateX(${offset}%)`;
			console.log( {'tranform backward' : context.transform } );

		},
		moveForward() {
			const context = getContext();
			const itemsTotal = context.totalItems;
			const itemsPerView = context.itemsPerView;

			// extra effect change the order of feed items
			// if (context.feed && context.feed.length > 0) {
			// 	context.feed.push(context.feed.shift());
			// }

			// context.currentIndex = (context.currentIndex + 1) % context.feed.length;

			// console.log(context);

			// const orderOfFacebookFeed = context.feed;
			// if ( orderOfFacebookFeed && orderOfFacebookFeed.length > 0) {
			// 	orderOfFacebookFeed.push(orderOfFacebookFeed.shift());
			// 	console.log({changehappend: orderOfFacebookFeed});
			// }
			// context.feed = orderOfFacebookFeed;

			context.currentIndex = (context.currentIndex + 1) % context.feed.length;
				const offset = -context.currentIndex * (100 / itemsPerView);
				context.transform = `translateX(${offset}%)`;

			// context.currentIndex = (context.currentIndex - itemsPerView) % itemsTotal;
			// const offset = -context.currentIndex * (100 / itemsPerView);
			// context.transform = `translateX(${offset}%)`;
			console.log( {'tranform backward' : context.transform } );
			
			// console.log(context.feed);
		},
	},	
	callbacks: {
		initializeCarousel() {
			console.log("Store initialized!");
			const context = getContext();
			const itemsTotal = context.totalItems;
			const itemsPerView = context.itemsPerView;
			
			setInterval(() => {
				// extra effect change the order of feed items
				// if (context.feed && context.feed.length > 0) {
				// 	context.feed.push(context.feed.shift());
				// }
				context.currentIndex = (context.currentIndex + 1) % context.feed.length;
				const offset = -context.currentIndex * (100 / itemsPerView);
				context.transform = `translateX(${offset}%)`;
			}, 3000);
		},
	},
} );
