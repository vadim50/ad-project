export default {
	state: {
		ads: [
          {
          	title: 'First Ad',
          	description: 'Hello I am description',
          	promo: false,
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            id: '1'
          },
          {
          	title: 'Second Ad',
          	description: 'Hello I am description',
          	promo: true,
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            id: '2'
          },
          {
          	title: 'Third Ad',
          	description: 'Hello I am description',
          	promo: true,
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            id: '3'
          },
          {
          	title: 'Fourth Ad',
          	description: 'Hello I am description',
          	promo: false,
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            id: '4'
          },
        ], 
	},
	mutations: {},
	actions: {},
	getters: {
		ads (state) {
			return state.ads
		},
		promoAds (state) {
			return state.ads.filter(ad => {
				return ad.promo
			})
		},
		myAds (state) {
			return state.ads
		}
	},
}