<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<header>
		<div class="wrapper">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/sketches/demo">Demo</RouterLink>
				<RouterLink to="/sketches/random-ball">Random Ball</RouterLink>
				<RouterLink to="/sketches/loading">Loading</RouterLink>
				<RouterLink to="/sketches/graphics">Graphic</RouterLink>
				<RouterLink to="/task/image-filter">Image Filter</RouterLink>
				<RouterLink to="/task/sort-image-pixels">Sort Image Pixels</RouterLink>
				<RouterLink to="/sketches/save-style">Save Style</RouterLink>
				<RouterLink to="/task/l-system-fractals/crystal">Crystal</RouterLink>
				<RouterLink to="/task/markov-chain/text-generator">Text Generator</RouterLink>
				<RouterLink to="/task/game-of-life/original-ruleset">Original Ruleset</RouterLink>
			</nav>
		</div>
	</header>

	<RouterView />
</template>

<style scoped></style>
