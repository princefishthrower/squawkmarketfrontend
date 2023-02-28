import { setIsLoggedIn } from "../redux/authSlice";
import { AppDispatch } from "../redux/store";
import { supabase } from "../services/supabase";

export const logout = async (dispatch: AppDispatch) => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return error;
  }
  dispatch(setIsLoggedIn(false));
  return null;
};
