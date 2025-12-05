<script lang="ts">
	import { enhance } from '$app/forms';
	let { petData } = $props();
	// function calculateHunger(d: Date): number {
	// 	return d.getTime();
	// }
	type StageMap = {
		[petType: string]: {
			[stage: number]: string;
		};
	};

	const STAGE_MAP: StageMap = {
		bunny: {
			1: '1 bunny',
			2: '2 bunnies',
			3: '4 bunnies',
			4: '8 bunnies'
		},
		butterfly: {
			1: 'caterpillar',
			2: 'pupa',
			3: 'butterfly'
		},
		frog: {
			1: 'tadpole',
			2: 'frog',
			3: 'giant frog'
		}
	};

	export function getStageName(type: string, stage: number): string {
		const stages = STAGE_MAP[type];
		return stages[stage] ?? ''; // unknown stage for that type
	}
</script>

<div>
	<h3>{petData.name}</h3>
	<table>
		<tbody>
			<tr>
				<th>Type</th>
				<td>{getStageName(petData.pet_type, petData.stage)}</td>
			</tr>
			<!-- <tr> -->
			<!-- 	<th>Hunger</th> -->
			<!-- 	<td>{calculateHunger(new Date(petData.last_fed))}</td> -->
			<!-- </tr> -->
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
	<form
		method="POST"
		action="?/feed"
		use:enhance={() => {
			return async ({ result }) => {
				if (result.data?.feed_res == 'success') {
					// alert('pet fed!');
					location.reload();
				} else if (result.data?.feed_res == 'too_soon') {
					alert("I'm still full! Come back later.");
				}
			};
		}}
	>
		<input type="hidden" name="pet_name" value={petData.name} />
		<button type="submit">Feed</button>
	</form>
</div>

<style>
	table,
	table td,
	table th {
		text-align: left;
		border: 4px ridge;
		border-collapse: collapse;
	}
</style>
