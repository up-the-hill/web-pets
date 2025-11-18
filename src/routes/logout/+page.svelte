<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { loadUser } from '$lib/store';

	let { data } = $props();
	let { supabase } = $derived(data);

	onMount(async () => {
		await supabase.auth.signOut();
		loadUser(supabase);
		goto('/');
	});
</script>

<h1>Logging out...</h1>
