import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
	},
	{
		path: '/home',
		name: 'home',
		component: resolve => { require(['@/components/home/home.vue'], resolve); }
	},
	{
		path: '/active',
		name: 'active',
		component: resolve => { require(['@/components/active/active.vue'], resolve); }
	}
	]
})
