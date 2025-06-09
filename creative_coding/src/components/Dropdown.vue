<template>
	<div class="relative" @click.self="onToggle(null)">
		<button
			@click.stop="onToggle(title)"
			class="px-4 py-2 bg-teal-800 text-white rounded-md shadow-md hover:bg-teal-900 focus:outline-none"
		>
			{{ title }}
		</button>

		<ul v-if="isOpen" class="absolute mt-2 w-35 bg-teal-700 rounded-md shadow-lg focus:outline-none z-20">
			<li v-for="(item, index) in items" :key="index" class="border-b border-teal-700 last:border-b-0">
				<RouterLink
					:to="item.link"
					class="block px-4 py-2 text-white hover:bg-teal-900 transition-colors duration-150"
					@click="onToggle(null)"
				>
					{{ item.label }}
				</RouterLink>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
	title: String,
	items: Array,
	isOpen: Boolean,
	onToggle: Function,
});
</script>
