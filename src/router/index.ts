import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const Home = () => import('../views/Home.vue');

const Login = () => import('../views/Login.vue');

const ApplyList = () => import('../views/ApplyList/ApplyList.vue');

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		children: [
			{
				path: '/home',
				name: 'Home',
				component: () => import('../views/InitHome.vue')
			},
			{
				path: '/my-loan',
				name: 'MyLoan',
				component: () => import('../views/MyLoan.vue')
			},
			{
				path: '/personal',
				name: 'Personal',
				component: () => import('../views/Personal.vue')
			}
		]
	},
	//
	{
		path: '/apply-list',
		name: 'ApplyList',
		component: ApplyList
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
