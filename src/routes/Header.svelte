<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabase';
	import type { User } from '@supabase/supabase-js';

	let user: User | null;

	onMount(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			user = session?.user ?? null;
		});

		const {
			data: { subscription: authListener }
		} = supabase.auth.onAuthStateChange((_, session) => {
			const currentUser = session?.user;
			user = currentUser ?? null;
		});

		return () => {
			authListener?.unsubscribe();
		};
	});
</script>

<header>
	<a href="/">web-pets</a>
	<div>
		{#if user}
			<a href="/logout">logout</a>
		{:else}
			<a href="/login">login</a>
		{/if}
	</div>
</header>

<style>
	header {
		position: sticky;
		display: flex;
		padding: 1em;
		justify-content: space-between;
	}
</style>
