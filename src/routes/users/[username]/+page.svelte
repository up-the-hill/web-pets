<script lang="ts">
	import PetForm from './PetForm.svelte';
	import PetDisplay from './PetDisplay.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

{#if data.user}
	<h1>{data.user.username}</h1>

	{#if data.petError}
		<div class="error">Error: {data.petError.message}</div>
	{:else if data.pet}
		<PetDisplay petData={data.pet} />
	{:else}
		<PetForm />
	{/if}
{:else}
	<div class="error">User Not Found</div>
{/if}

<style>
	h1 {
		border-bottom: 2px double;
	}
</style>
