<script lang="ts">
	let petName = '';
	let petType = 'bunny';
</script>

<h2>Adopt a Pet</h2>
<form method="post" action="?/create">
	<div>
		<label for="pet-name">Pet Name:</label>
		<input id="pet-name" name="name" type="text" bind:value={petName} />
	</div>
	<div>
		<label for="pet-type">Pet Type:</label>
		<select name="type" id="pet-type" bind:value={petType}>
			<option value="bunny">Bunny</option>
			<option value="butterfly">Butterfly</option>
			<option value="frog">Frog</option>
		</select>
	</div>
	<button type="submit">Adopt Pet</button>
</form>
