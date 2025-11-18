<script lang="ts">
	import PetForm from './PetForm.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

{#if data.user}
	<h1>{data.user.username}</h1>

	{#if data.petError}
		<p>Error: {data.petError.message}</p>
	{:else if data.pet}
		<ul>
			<li>{data.pet.name}</li>
		</ul>
	{:else}
		<PetForm />
	{/if}
{:else}
	User Not Found
{/if}
