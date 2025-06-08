<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<header>
		<div class="wrapper">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/sketches/loading">Loading</RouterLink>
				<RouterLink to="/sketches/save-style">Save Style</RouterLink>
				<!-- ---------------------------- Task 01 ---------------------------- -->
				<RouterLink to="/task/01/random-ball">Random Ball</RouterLink>
				<RouterLink to="/task/01/random-squares">Random Squares</RouterLink>
				<RouterLink to="/task/01/graphics">Graphic</RouterLink>
				<!-- ---------------------------- Task 02 ---------------------------- -->
				<RouterLink to="/task/02/image-manipulation">Image Manipulation</RouterLink>
				<RouterLink to="/task/02/brightness-sort">Brightness Sort</RouterLink>
				<RouterLink to="/task/02/dithering-effect">Dithering Effect</RouterLink>
				<RouterLink to="/task/02/interactive-image-resize"
					>Interactive Image Resize</RouterLink
				>
				<RouterLink to="/task/02/glitch-effect">Glitch Effect</RouterLink>
				<!-- ---------------------------- Task 03 ---------------------------- -->
				<RouterLink to="/task/l-system-fractals/crystal">Crystal</RouterLink>
				<RouterLink to="/task/markov-chain/text-generator">Text Generator</RouterLink>
				<RouterLink to="/task/game-of-life/original-ruleset">Original Ruleset</RouterLink>
			</nav>
		</div>
	</header>

	<RouterView />
</template>

<style scoped></style>
