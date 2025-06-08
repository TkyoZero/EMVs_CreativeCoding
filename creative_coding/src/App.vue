<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const isOpen = ref(false);

const toggleDropdown = () => {
	isOpen.value = !isOpen.value;
};
</script>

<template>
	<main class="font-display bg-blue-200">
		<Header />
		<header>
			<div class="wrapper">
				<nav>
					<!-- ---------------------------- Sketches ---------------------------- -->
					<div class="dropdown" @click.self="isOpen = false">
						<button @click.stop="toggleDropdown">Sketches</button>

						<ul v-if="isOpen" class="dropdown-menu">
							<li><RouterLink to="/sketches/loading">Loading</RouterLink></li>
							<li><RouterLink to="/sketches/save-style">Save Style</RouterLink></li>
						</ul>
					</div>

					<!-- ---------------------------- Task 01 ---------------------------- -->
					<div class="dropdown" @click.self="isOpen = false">
						<button @click.stop="toggleDropdown">Task 01</button>

						<ul v-if="isOpen" class="dropdown-menu">
							<li><RouterLink to="/task/01/random-ball">Random Ball</RouterLink></li>
							<li><RouterLink to="/task/01/random-squares">Random Squares</RouterLink></li>
							<li><RouterLink to="/task/01/graphics">Graphic</RouterLink></li>
						</ul>
					</div>

					<!-- ---------------------------- Task 02 ---------------------------- -->
					<div class="dropdown" @click.self="isOpen = false">
						<button @click.stop="toggleDropdown">Task 02</button>

						<ul v-if="isOpen" class="dropdown-menu">
							<li><RouterLink to="/task/02/image-manipulation">Image Manipulation</RouterLink></li>
							<li><RouterLink to="/task/02/brightness-sort">Brightness Sort</RouterLink></li>
							<li><RouterLink to="/task/02/dithering-effect">Dithering Effect</RouterLink></li>
							<li><RouterLink to="/task/02/glitch-effect">Glitch Effect</RouterLink></li>
							<li><RouterLink to="/task/02/image-resize">Image Resize</RouterLink></li>
							<li><RouterLink to="/task/02/image-overlay">Image Overlay</RouterLink></li>
						</ul>
					</div>

					<!-- ---------------------------- Task 03 ---------------------------- -->
					<div class="dropdown" @click.self="isOpen = false">
						<button @click.stop="toggleDropdown">Task 03</button>

						<ul v-if="isOpen" class="dropdown-menu">
							<li><RouterLink to="/task/03/pipe-shape">Pipe Shape</RouterLink></li>
							<li><RouterLink to="/task/03/circle-packing">Circle Packing</RouterLink></li>
							<li><RouterLink to="/task/03/abstract-algorithm">Abstract Algoritm</RouterLink></li>
						</ul>
					</div>

					<!-- ---------------------------- Task 04 ---------------------------- -->
					<div class="dropdown" @click.self="isOpen = false">
						<button @click.stop="toggleDropdown">Task 04</button>

						<ul v-if="isOpen" class="dropdown-menu">
							<li><RouterLink to="/task/04/crystal">Crystal</RouterLink></li>
							<li><RouterLink to="/task/04/sierpinski-arrowhead">Sierpinski Arrowhead</RouterLink></li>
							<li><RouterLink to="/task/04/fern">Fern</RouterLink></li>
							<li><RouterLink to="/task/04/board">Board</RouterLink></li>
						</ul>
					</div>

					<!-- ---------------------------- Task 05 ---------------------------- -->
					<div class="dropdown" @click.self="isOpen = false">
						<button @click.stop="toggleDropdown">Task 05</button>

						<ul v-if="isOpen" class="dropdown-menu">
							<li><RouterLink to="/task/05/text-generator">Text Generator</RouterLink></li>
						</ul>
					</div>

					<!-- ---------------------------- Task 06 ---------------------------- -->
					<div class="dropdown" @click.self="isOpen = false">
						<button @click.stop="toggleDropdown">Task 01</button>

						<ul v-if="isOpen" class="dropdown-menu">
							<li><RouterLink to="/task/06/original-ruleset">Game of Life</RouterLink></li>
						</ul>
					</div>

					<!-- ---------------------------- Task 07 ---------------------------- -->
					<div class="dropdown" @click.self="isOpen = false">
						<button @click.stop="toggleDropdown">Project</button>

						<ul v-if="isOpen" class="dropdown-menu">
							<li><RouterLink to="/task/07/mandel-brot">Mandel Brot</RouterLink>s</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
		<RouterView />
		<Footer />
	</main>
</template>

<style scoped></style>
