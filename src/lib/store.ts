import type { Writable } from 'svelte/store';
import type { AuthError } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js';
import { writable } from 'svelte/store';

type userType = {
  username: null | string,
  loading: boolean,
  error: null | AuthError
}

export const user: Writable<userType> = writable({
  username: null,
  loading: true,
  error: null
});

export async function loadUser(supabase: SupabaseClient) {
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


