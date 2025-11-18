<script lang="ts">
	let { petData, supabase } = $props();
	function calculateHunger(d: Date): number {
		return 0;
	}
	let pet = async () => {
		const { data, error } = await supabase.rpc('feed_pet', {
			pet_name: petData.name,
			owner_name: petData.owner
		});
		if (error) alert(error);
		if (data == 'success') alert('pet fed!');
		else if (data == 'too_soon') alert("I'm still full! Come back later.");
	};
</script>

<div>
	<h3>{petData.name}</h3>
	<table>
		<tbody>
			<tr>
				<th>Hunger</th>
				<td>{calculateHunger(petData.last_fed)}</td>
			</tr>
			<!-- <tr> -->
			<!-- 	<th>Friendship</th> -->
			<!-- 	<td>{petData.friendship}</td> -->
			<!-- </tr> -->
			<tr>
				<th>Times Fed</th>
				<td>{petData.times_fed}</td>
			</tr>
			<tr>
				<th>Times Pet</th>
				<td>{petData.times_pet}</td>
			</tr>
		</tbody>
	</table>
	<button onclick={pet}>Feed</button>
</div>
