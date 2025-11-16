<script lang="ts">
	let { data } = $props();
</script>

{#if data.user}
	<h1>{data.userId}</h1>

	{#if data.petsError}
		<p>Error: {data.petsError.message}</p>
	{:else if data.pets && data.pets.length > 0}
		<ul>
			{#each data.pets as pet}
				<li>{pet.name}</li>
			{/each}
		</ul>
	{:else}
		<p>No pets found.</p>
	{/if}
{:else}
	User Not Found
{/if}
