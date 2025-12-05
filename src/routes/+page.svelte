<script lang="ts">
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>web pets</h1>
	<p>adopt a pet! feed them! watch them grow!</p>
	<!-- <img id="one" src="/caterpillar.gif" alt="Caterpillar GIF" width="300" /> -->
	<!-- <img id="two" src="/pupa.gif" alt="Pupa GIF" width="300" /> -->
	<!-- <img id="three" src="/butterfly.gif" alt="Butterfly GIF" width="300" /> -->
</section>

<style>
	section {
		height: 70vh;
		display: grid;
		place-content: center;
	}
	h1 {
		font-size: 9rem;
		letter-spacing: -0.05em;
	}
	/* #one { */
	/* 	position: absolute; */
	/* 	top: 10%; */
	/* 	left: 5%; */
	/* } */
	/* #two { */
	/* 	position: absolute; */
	/* 	top: 35%; */
	/* 	right: 00%; */
	/* } */
	/* #three { */
	/* 	position: absolute; */
	/* 	bottom: 5%; */
	/* 	left: 30%; */
	/* } */
</style>
