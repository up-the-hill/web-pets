import type { LayoutLoad } from './$types'
import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr'

const PUBLIC_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const PUBLIC_SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_KEY;

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
  depends('supabase:auth')

  const supabase = isBrowser()
    ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
      global: {
        fetch,
      },
    })
    : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
      global: {
        fetch,
      },
      cookies: {
        getAll() {
          return data.cookies
        },
      },
    })

  /**
   * It's fine to use `getSession` here, because on the client, `getSession` is
   * safe, and on the server, it reads `session` from the `LayoutData`, which
   * safely checked the session using `safeGetSession`.
   */
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { supabase, session }
}
