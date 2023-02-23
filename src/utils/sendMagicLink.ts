import { supabase } from "../services/supabase";

export const sendMagicLink = async (email: string) => {
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${window.location.origin}/dashboard`,
    },
  });
  if (error) {
    return error;
  }
  return null;
};
