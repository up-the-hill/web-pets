<script lang="ts">
	import { user } from '$lib/supabase';
</script>

<header>
	<a href="/">web-pets</a>
	<div>
		{#if $user}
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
