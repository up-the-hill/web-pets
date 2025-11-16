import { writable } from 'svelte/store';
import { supabase } from '$lib/supabase';

export const user = writable({
  username: null,
  loading: true,
  error: null
});

export async function loadUser() {
  const {
    data: { user: userData },
    error
  } = await supabase.auth.getUser();
  if (error) {
    user.set({ username: null, loading: false, error });
  } else if (userData) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('username')
      .eq('id', userData.id)
      .single();
    user.set({ username: profile?.username, loading: false, error: null });
  } else {
    user.set({ username: null, loading: false, error: null });
  }
}


