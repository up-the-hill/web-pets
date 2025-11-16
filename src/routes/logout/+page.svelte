<script lang="ts">
	import { supabase } from '$lib/supabase';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { loadUser } from '$lib/store';

	onMount(async () => {
		await supabase.auth.signOut();
		loadUser();
		goto('/');
	});
</script>

<h1>Logging out...</h1>
