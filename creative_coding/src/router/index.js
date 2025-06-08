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
			path: "/sketches/loading",
			name: "loading",
			component: () => import("../components/sketches/Loading.vue"),
		},
		{
			path: "/sketches/save-style",
			name: "save-style",
			component: () => import("../components/sketches/SaveStyle.vue"),
		},
		// ------------------------------------ Task 01 ------------------------------------
		{
			path: "/task/01/random-ball",
			name: "random-ball",
			component: () => import("../components/task/01/RandomBall.vue"),
		},
		{
			path: "/task/01/random-squares",
			name: "random-squares",
			component: () => import("../components/task/01/RandomSquares.vue"),
		},
		{
			path: "/task/01/graphics",
			name: "Graphics",
			component: () => import("../components/task/01/Graphics.vue"),
		},
		// ------------------------------------ Task 02 ------------------------------------
		{
			path: "/task/02/image-manipulation",
			name: "image-manipulation",
			component: () => import("../components/task/02/ImageManipulation.vue"),
		},
		{
			path: "/task/02/brightness-sort",
			name: "brightness-sort",
			component: () => import("../components/task/02/BrightnessSort.vue"),
		},
		{
			path: "/task/02/dithering-effect",
			name: "dithering-effect",
			component: () => import("../components/task/02/DitheringEffect.vue"),
		},
		{
			path: "/task/02/glitch-effect",
			name: "glitch-effect",
			component: () => import("../components/task/02/GlitchEffect.vue"),
		},
		{
			path: "/task/02/image-resize",
			name: "image-resize",
			component: () => import("../components/task/02/ImageResize.vue"),
		},
		{
			path: "/task/02/image-overlay",
			name: "image-overlay",
			component: () => import("../components/task/02/ImageOverlay.vue"),
		},
		// ------------------------------------ Task 03 ------------------------------------
		{
			path: "/task/03/pipe-shape",
			name: "pipe-shape",
			component: () => import("../components/task/03/PipeShape.vue"),
		},
		{
			path: "/task/03/circle-packing",
			name: "circle-packing",
			component: () => import("../components/task/03/CirclePacking.vue"),
		},
		{
			path: "/task/03/abstract-algorithm",
			name: "abstract-algorithm",
			component: () => import("../components/task/03/AbstractAlgorithm.vue"),
		},

		// ------------------------------------ Task 04 ------------------------------------
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
		},
	],
});

export default router;
