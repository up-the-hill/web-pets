<script lang="ts">
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import '../app.css';
	import Header from './Header.svelte';
	import { loadUser } from '$lib/store.js';

	let { data, children } = $props();
	let { supabase, session } = $derived(data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});
		loadUser(supabase);
		return () => data.subscription.unsubscribe();
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
