<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<header>
		<div class="wrapper">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/practice/demo">Demo</RouterLink>
				<RouterLink to="/practice/random-ball">Random Ball</RouterLink>
				<RouterLink to="/practice/loading">Loading</RouterLink>
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
