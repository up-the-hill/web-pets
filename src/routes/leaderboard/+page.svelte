<script>
	let { data } = $props();
</script>

<h1>global leaderboard</h1>
<table>
	<tbody>
		<tr>
			<td>Owner</td>
			<td>Pet Name</td>
			<td>Times Fed</td>
		</tr>
		{#each data.pets as pet}
			<tr>
				<td><a href="/users/{pet.owner}">{pet.owner}</a></td>
				<td>{pet.name}</td>
				<td>{pet.times_fed}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table,
	table tr,
	table td {
		border: 1px solid;
		border-collapse: collapse;
	}
</style>
