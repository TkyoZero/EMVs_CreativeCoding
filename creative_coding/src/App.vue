<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
	<Header />
	<NavBar />
	<main class="font-display bg-blue-200">
		<div class="flex justify-center py-20">
			<RouterView />
		</div>
	</main>
	<Footer />
</template>
