import type { PageServerLoadEvent } from './$types';
import { supabase } from '$lib/supabase';

export async function load({ params }: PageServerLoadEvent) {
  const { userId } = params;

  const { data: user, error: userError } = await supabase
    .from('users')
    .select("*")
    .eq('id', userId)

  const { data: pets, error: petsError } = await supabase
    .from('pets')
    .select("*")
    .eq('owner', userId)

  return { userId, user, userError, pets, petsError };
}
