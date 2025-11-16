import { createClient } from '@supabase/supabase-js'
// import { writable } from 'svelte/store';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey);

// manage user state
// export const user = writable<User | null>(null);
//
// supabase.auth.getUser().then(({ data }) => {
//   user.set(data.user);
// });
//
// supabase.auth.onAuthStateChange((event, session) => {
//   if (event == 'SIGNED_IN' && session) {
//     user.set(session.user);
//   } else if (event == 'SIGNED_OUT') {
//     user.set(null);
//   }
// });
//
