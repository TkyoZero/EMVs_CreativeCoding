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
			path: "/sketches/random-ball",
			name: "random-ball",
			component: () => import("../components/task/01/RandomBall.vue"),
		},
		{
			path: "/sketches/random-squares",
			name: "random-squares",
			component: () => import("../components/task/01/RandomSquares.vue"),
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
			component: () => import("../components/task/01/Graphics.vue"),
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
		{
			path: "/task/markov-chain/text-generator",
			name: "markov-chain-text-generator",
			component: () => import("../components/task/markov-chain/TextGenerator.vue"),
		},
		{
			path: "/task/game-of-life/original-ruleset",
			name: "game-of-life-original-ruleset",
			component: () => import("../components/task/game-of-life/OriginalRuleset.vue"),
		}
	],
});

export default router;
