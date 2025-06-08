<template>
	<div class="dropdown" @click.self="onToggle(null)">
		<button @click.stop="onToggle(title)">
			{{ title }}
		</button>

		<ul v-if="isOpen" class="dropdown-menu">
			<li v-for="(item, index) in items" :key="index">
				<RouterLink :to="item.link">{{ item.label }}</RouterLink>
			</li>
		</ul>
	</div>
</template>

<script setup>
defineProps({
	title: String,
	items: Array,
	isOpen: Boolean,
	onToggle: Function,
});
</script>
