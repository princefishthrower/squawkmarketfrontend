import {createClient} from '@supabase/supabase-js';

export const supabase = createClient(
    process.env.GATSBY_SUPABASE_URL || '',
    process.env.GATSBY_SUPABASE_ANON_KEY || '',
    {
      db: {
        schema: 'public',
      },
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      },
    },
  );