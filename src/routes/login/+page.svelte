<script lang="ts">
	let { data } = $props();

	let handleSignInWithGithub = async () => {
		let { data: response, error } = await data.supabase.auth.signInWithOAuth({
			provider: 'github'
		});
		if (error) console.log(error);
		else console.log(response);
	};
	let handleSignInWithGoogle = async () => {
		let { data: response, error } = await data.supabase.auth.signInWithOAuth({
			provider: 'google'
		});
		if (error) console.log(error);
		else console.log(response);
	};
</script>

<h1>login page</h1>
<button onclick={handleSignInWithGithub}>Sign in with GitHub</button>
<button onclick={handleSignInWithGoogle}>Sign in with Google</button>
