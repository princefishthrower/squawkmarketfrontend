import { MixpanelConstants } from './../constants/MixpanelConstants';
import { setIsLoggedIn } from "../redux/authSlice";
import { AppDispatch } from "../redux/store";
import { supabase } from "../services/supabase";
import mixpanel from 'mixpanel-browser';

export const logout = async (dispatch: AppDispatch) => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return error;
  }
  dispatch(setIsLoggedIn(false));
  mixpanel.track(MixpanelConstants.USER_LOGS_OUT)
  return null;
};
