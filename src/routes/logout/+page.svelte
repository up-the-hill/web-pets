<script lang="ts">
	import { supabase } from '$lib/supabase';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(async () => {
		await supabase.auth.signOut();
		goto('/');
	});
</script>

<h1>Logging out...</h1>
