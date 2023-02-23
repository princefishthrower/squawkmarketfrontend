import { supabase } from "../services/supabase";

export const getAccessToken = async () => {
  const { data } = await supabase.auth.getSession();
  if (data && data.session) {
    return data.session.access_token;
  }
  return "";
};
