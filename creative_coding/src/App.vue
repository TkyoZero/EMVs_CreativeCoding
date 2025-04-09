<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<header>
		<div class="wrapper">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/sketch/demo">Demo</RouterLink>
				<RouterLink to="/sketch/random-ball">Random Ball</RouterLink>
				<RouterLink to="/sketch/loading">Loading</RouterLink>
				<RouterLink to="/sketch/graphic">Graphic</RouterLink>
				<RouterLink to="/task/image-filter">Image Filter</RouterLink>
				<RouterLink to="/task/sort-image-pixels"
					>Sort Image Pixels</RouterLink
				>
			</nav>
		</div>
	</header>

	<RouterView />
</template>

<style scoped></style>
