import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
  const { username } = params;
  const { supabase } = locals;

  // get data about user, i.e. if user exists
  const { data: user, error: userError } = await supabase
    .from('profiles')
    .select("*")
    .eq('username', username)
    .single()

  // get user's pet
  const { data: pet, error: petError } = await supabase
    .from('pets')
    .select("*")
    .eq('owner', username)
    .maybeSingle()

  return { user, userError, pet, petError };
}

// methods for pet creation
export const actions: Actions = {
  feed: async ({ request, params, locals }) => {
    const data = await request.formData();
    const { supabase } = locals;
    const { username } = params;

    const { data: res, error } = await supabase.rpc('feed_pet', {
      pet_name: data.get('pet_name'),
      owner_name: username
    });

    return { feed_res: res };
  },
  create: async ({ request, params, locals }) => {
    const data = await request.formData();
    const { username } = params;
    const { supabase } = locals;

    const { data: res, error } = await supabase
      .from('pets')
      .insert([
        { name: data.get('name'), pet_type: data.get('type'), owner: username },
      ])
      .select()
  }
};
