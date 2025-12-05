<script lang="ts">
	import { user } from '$lib/store';
</script>

<header>
	<a href="/">web-pets</a>
	<div>
		<a href="/leaderboard">leaderboard</a>
		{#if $user.loading}
			<span>Loading...</span>
		{:else if $user.error}
			<!-- {$user.error} -->
			<a href="/login">login</a>
		{:else if $user.username}
			<a href="/users/{$user.username}">home</a>
			<a href="/logout">logout</a>
		{:else}
			<a href="/login">login</a>
		{/if}
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		display: flex;
		padding: 1em;
		justify-content: space-between;
		grid-area: header;
		border-bottom: dashed 1px;
	}

	header * {
		padding-inline: 2px;
	}
</style>
