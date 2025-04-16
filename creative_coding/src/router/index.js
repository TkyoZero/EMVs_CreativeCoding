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
			path: "/sketches/demo",
			name: "demo",
			component: () => import("../components/sketches/Demo.vue"),
		},
		{
			path: "/sketches/random-ball",
			name: "random-ball",
			component: () => import("../components/sketches/RandomBall.vue"),
		},
		{
			path: "/sketches/loading",
			name: "loading",
			component: () => import("../components/sketches/Loading.vue"),
		},
		{
			path: "/sketches/save-style",
			name: "save-style",
			component: () => import("../components/sketches/SaveStyle.vue"),
		},
		{
			path: "/sketches/graphics",
			name: "Graphics",
			component: () => import("../components/sketches/Graphics.vue"),
		},
		{
			path: "/task/image-filter",
			name: "image-filter",
			component: () => import("../components/task/image-manipulation-1/ImageFilter.vue"),
		},
		{
			path: "/task/sort-image-pixels",
			name: "sort-image-pixels",
			component: () => import("../components/task/image-manipulation-1/SortImagePixels.vue"),
		},
		{
			path: "/task/l-system-fractals/crystal",
			name: "l-system-crystal",
			component: () => import("../components/task/l-system-fractals/Crystal.vue"),
		},
	],
});

export default router;
