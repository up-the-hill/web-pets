<script>
	import { supabase } from '$lib/supabase';
	let handleSignInWithGithub = async () => {
		let { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'github'
		});
		if (error) console.log(error);
		else console.log(data);
	};
</script>

<h1>login page</h1>
<button on:click={handleSignInWithGithub}>Sign in with GitHub</button>
