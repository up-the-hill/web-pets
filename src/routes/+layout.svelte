<script lang="ts">
	import { onMount } from 'svelte';
	import { loadUser } from '$lib/store';
	import '../app.css';
	import Header from './Header.svelte';

	let { children } = $props();

	onMount(() => {
		loadUser();
	});
</script>

<div class="app">
	<Header />
	<main>
		{@render children()}
	</main>
</div>

<style>
	main {
		padding: 1em;
	}
</style>
