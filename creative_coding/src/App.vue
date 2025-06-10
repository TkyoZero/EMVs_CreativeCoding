<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
	<div class="flex flex-col min-h-screen">
		<Header />
		<NavBar />

		<main class="flex-grow font-display bg-blue-200">
			<div class="flex justify-center py-20">
				<RouterView />
			</div>
		</main>

		<Footer />
	</div>
</template>
