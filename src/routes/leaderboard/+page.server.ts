import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  const { supabase } = locals;


  const { data: pets, error } = await supabase
    .from('pets')
    .select('*')
    .order("times_fed", { ascending: false })

  return { pets, error }
}
