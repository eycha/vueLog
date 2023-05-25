import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/index',
	},
	{
		path: '/index',
		component: () => import('../layouts/HomeLayout.vue'),
		children: [],
	},
	{
		path: '/signin',
		component: () => import('../pages/SignIn.vue'),
		children: [],
	},
	{
		path: '/signup',
		component: () => import('../pages/SignUp.vue'),
		children: [],
	},
	{
		path: '/posting',
		component: () => import('../components/PostingModal.vue'),
		children: [],
	},
	{
		path: '/postingedit',
		component: () => import('../components/PostingEditModal.vue'),
		children: [],
	},
	{
		path: '/:catchAll(.*)*',
		component: () => import('../pages/common/404.vue'),
	},
	{
		path: '/404',
		component: () => import('../pages/common/404.vue'),
	},
];
