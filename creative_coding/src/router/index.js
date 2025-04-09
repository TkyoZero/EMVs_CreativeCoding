import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/sketch/demo",
			name: "demo",
			component: () => import("../components/sketch/Demo.vue"),
		},
		{
			path: "/sketch/random-ball",
			name: "random-ball",
			component: () => import("../components/sketch/RandomBall.vue"),
		},
		{
			path: "/sketch/loading",
			name: "loading",
			component: () => import("../components/sketch/Loading.vue"),
		},
		{
			path: "/sketch/save-stlye",
			name: "save-stlye",
			component: () => import("../components/sketch/SaveStyle.vue"),
		},
		{
			path: "/sketch/graphics",
			name: "Graphics",
			component: () => import("../components/sketch/Graphics.vue"),
		},
		{
			path: "/task/image-filter",
			name: "image-filter",
			component: () =>
				import("../components/task/imageManipulation1/ImageFilter.vue"),
		},
		{
			path: "/task/sort-image-pixels",
			name: "sort-image-pixels",
			component: () =>
				import(
					"../components/task/imageManipulation1/SortImagePixels.vue"
				),
		},
	],
});

export default router;
