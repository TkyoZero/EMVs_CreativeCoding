<script setup>
import Dropdown from "@/components/Dropdown.vue";
import { ref } from "vue";

const openDropdown = ref(null);

const toggleDropdown = (title) => {
	openDropdown.value = openDropdown.value === title ? null : title;
};

const dropdowns = [
	{
		title: "Sketches",
		items: [
			{ label: "Loading", link: "/sketches/loading" },
			{ label: "Save Style", link: "/sketches/save-style" },
		],
	},
	{
		title: "Task 01",
		items: [
			{ label: "Random Ball", link: "/task/01/random-ball" },
			{ label: "Random Squares", link: "/task/01/random-squares" },
			{ label: "Graphic", link: "/task/01/graphics" },
		],
	},
	{
		title: "Task 02",
		items: [
			{ label: "Image Manipulation", link: "/task/02/image-manipulation" },
			{ label: "Brightness Sort", link: "/task/02/brightness-sort" },
			{ label: "Dithering Effect", link: "/task/02/dithering-effect" },
			{ label: "Glitch Effect", link: "/task/02/glitch-effect" },
			{ label: "Image Resize", link: "/task/02/image-resize" },
			{ label: "Image Overlay", link: "/task/02/image-overlay" },
		],
	},
	{
		title: "Task 03",
		items: [
			{ label: "Pipe Shape", link: "/task/03/pipe-shape" },
			{ label: "Circle Packing", link: "/task/03/circle-packing" },
			{ label: "Abstract Algorithm", link: "/task/03/abstract-algorithm" },
		],
	},
	{
		title: "Task 04",
		items: [
			{ label: "Crystal", link: "/task/04/crystal" },
			{ label: "Sierpinski Arrowhead", link: "/task/04/sierpinski-arrowhead" },
			{ label: "Fern", link: "/task/04/fern" },
			{ label: "Board", link: "/task/04/board" },
		],
	},
	{
		title: "Task 05",
		items: [{ label: "Text Generator", link: "/task/05/text-generator" }],
	},
	{
		title: "Task 06",
		items: [{ label: "Game of Life", link: "/task/06/original-ruleset" }],
	},
	{
		title: "Project",
		items: [{ label: "Mandel Brot", link: "/task/07/mandel-brot" }],
	},
];
</script>

<template>
	<div class="wrapper p-4 px-20 bg-amber-600 text-white">
		<nav class="flex justify-between">
			<Dropdown
				v-for="(dropdown, index) in dropdowns"
				:key="index"
				:title="dropdown.title"
				:items="dropdown.items"
				:isOpen="openDropdown === dropdown.title"
				:onToggle="toggleDropdown"
			/>
		</nav>
	</div>
</template>
