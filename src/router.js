//import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Ad from '@/components/Ads/Ad.vue'
import AdList from '@/components/Ads/AdList.vue'
import NewAd from '@/components/Ads/NewAd.vue'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders.vue'

//Vue.use(VueRouter)

export default new Router({
	routes: [
		{
			path: '',
			mame: 'home',
			component: Home
		},
		{
			path: '/ad/:id',
			mame: 'ad',
			component: Ad
		},
		{
			path: '/list',
			mame: 'list',
			component: AdList
		},
		{
			path: '/new',
			mame: 'newAd',
			component: NewAd
		},
		{
			path: '/login',
			mame: 'login',
			component: Login
		},
		{
			path: '/registration',
			mame: 'reg',
			component: Registration
		},
		{
			path: '/orders',
			mame: 'orders',
			component: Orders
		},
	],
	mode: 'history'
})