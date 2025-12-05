<script lang="ts">
	import PetForm from './PetForm.svelte';
	import PetDisplay from './PetDisplay.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

{#if data.user}
	<h1>{data.user.username}</h1>

	{#if data.petError}
		<p>Error: {data.petError.message}</p>
	{:else if data.pet}
		<PetDisplay petData={data.pet} />
	{:else}
		<PetForm />
	{/if}
{:else}
	User Not Found
{/if}
