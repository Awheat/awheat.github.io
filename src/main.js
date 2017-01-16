// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import Home from './view/home.vue'
import Life from './view/life.vue'
import Work from './view/work.vue'
import About from './view/about.vue'

import TabChat from './components/tab_chat.vue'
import TabAlbum from './components/tab_album.vue'
import TabSound from './components/tab_sound.vue'

import './assets/css/base.min.css'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component:Home
	},
	{
		path: '/home',
		component:Home
	},
	{
		path: '/life',
		component: Life,
		children: [
			{path: '/',component: TabChat},
			{path: 'chat',component: TabChat},
		    {path: 'album',component: TabAlbum},
		    {path: 'sound',component: TabSound}
		]
	},
	{
		path: '/work',
		component: Work
	},
	{
		path: '/about',
		component: About
	}
]

const router = new VueRouter({
	linkActiveClass: 'cur',
	routes: routes
});

/* eslint-disable no-new */
new Vue({
  	router,
  	el: '#app',
  	template: '<App/>',
  	components: { App }
})