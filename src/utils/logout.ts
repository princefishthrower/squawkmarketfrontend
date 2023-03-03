import { MixpanelConstants } from './../constants/MixpanelConstants';
import { setIsLoggedIn, setIsPremium } from "../redux/authSlice";
import { AppDispatch } from "../redux/store";
import { supabase } from "../services/supabase";
import mixpanel from 'mixpanel-browser';
import { setIsLoading } from '../redux/authSlice';

export const logout = async (dispatch: AppDispatch) => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return error;
  }
  dispatch(setIsLoggedIn(false));
  dispatch(setIsPremium(false));
  dispatch(setIsLoading(false));
  mixpanel.track(MixpanelConstants.USER_LOGS_OUT)
  return null;
};
