import { useEffect } from "react";
import { supabase } from "../services/supabase";
import { useAppDispatch } from "./useAppDispatch";
import { setIsLoading, setIsLoggedIn, setIsPremium } from "../redux/authSlice";
import { useAppSelector } from "./useAppSelector";
import mixpanel from "mixpanel-browser";
import { MixpanelConstants } from "../constants/MixpanelConstants";

export const useSupabaseSession = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const getPremiumStatus = async () => {
    const { data: user } = await supabase.auth.getUser();
    const userId = user.user?.id;
    const { data, error } = await supabase
      .from("profile")
      .select("*")
      .eq("id", userId);
    if (error) {
      console.error(error);
      dispatch(setIsLoading(false));
      dispatch(setIsLoggedIn(false));
      dispatch(setIsPremium(false));
      return;
    }
    if (data) {
      dispatch(setIsLoading(false));
      dispatch(setIsLoggedIn(true));
      dispatch(setIsPremium(data[0].is_subscribed));
    }
  };

  const getLoginFromUrl = async () => {
    // try to parse out the access token and refresh token from the url
    // url is like #access_token=<<token>>&expires_in=3600&refresh_token=<<token>>&token_type=bearer&type=magiclink
    const url = window.location.hash;
    // remove the hash from the url
    window.location.hash = "";
    const queryVersion = url.replace("#", "?");
    const urlParams = new URLSearchParams(queryVersion);
    const access_token = urlParams.get("access_token");
    const refresh_token = urlParams.get("refresh_token");
    if (access_token && refresh_token) {
      // set the access token and refresh token in the session
      const { error } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });
      if (error) {
        console.error(error);
        return;
      }
      dispatch(setIsLoggedIn(true));
      mixpanel.track(MixpanelConstants.USER_IS_LOGGED_IN_VIA_MAGIC_LINK);
    }
    dispatch(setIsLoading(false));
  };

  const getSession = async () => {
    // get user
    // see if this user is logged in
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session) {
      dispatch(setIsLoggedIn(true));
    }
  };

  useEffect(() => {
    // if there is a token in the url, try to get the session
    getLoginFromUrl();

    // else try to get the existing session
    getSession();

    // also try to get the premium status
    getPremiumStatus();
  }, []);
};
