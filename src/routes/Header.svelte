<script lang="ts">
	import { supabase } from '$lib/supabase';
</script>

<header>
	<a href="/">web-pets</a>
	<div>
		{#await supabase.auth.getUser()}
			Loading...
		{:then { data }}
			{#if data.user}
				<a href="/users/{data.user?.id}">home</a>
				<a href="/logout">logout</a>
			{:else}
				<a href="/login">login</a>
			{/if}
		{/await}
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
