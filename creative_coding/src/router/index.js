import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
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
			path: "/task/04/crystal",
			name: "l-system-crystal",
			component: () => import("../components/task/04/Crystal.vue"),
		},
		{
			path: "/task/04/sierpinski-arrowhead",
			name: "l-system-sierpinski-arrowhead",
			component: () => import("../components/task/04/SierpinskiArrowhead.vue"),
		},
		{
			path: "/task/04/fern",
			name: "l-system-fern",
			component: () => import("../components/task/04/Fern.vue"),
		},
		{
			path: "/task/04/board",
			name: "l-system-board",
			component: () => import("../components/task/04/Board.vue"),
		},

		// ------------------------------------ Task 05 ------------------------------------
		{
			path: "/task/05/text-generator",
			name: "markov-chain-text-generator",
			component: () => import("../components/task/05/TextGenerator.vue"),
		},

		// ------------------------------------ Task 06 ------------------------------------
		{
			path: "/task/06/original-ruleset",
			name: "game-of-life-original-ruleset",
			component: () => import("../components/task/06/OriginalRuleset.vue"),
		},

		// ------------------------------------ Task 07 ------------------------------------
		{
			path: "/task/07/mandel-brot",
			name: "mandel-brot",
			component: () => import("../components/task/07/MandelBrot.vue"),
		},
	],
});

export default router;
