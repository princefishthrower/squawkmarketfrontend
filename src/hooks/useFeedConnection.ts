import { useAppDispatch } from "./useAppDispatch";
import { useEffect, useState } from "react";
import { setIsConnected } from "../redux/feedSlice";
import { setLocalStorageVolume } from "../utils/localStorage/setLocalStorageVolume";
import Hub from "../services/Hub";

export const useHub = () => {
  const dispatch = useAppDispatch();
  const [isHubStartError, setIsHubStartError] = useState(false);

  // on mount ensure that we are not connecting or connected, also set the onclose handler
  useEffect(() => {
    dispatch(setIsConnected(false));
    setLocalStorageVolume(5);
    const hub = Hub.getInstance(setIsHubStartError, dispatch);
      hub
        .start()
        .then(() => {
          dispatch(setIsConnected(true));
        })
        .catch(() => {
          setIsHubStartError(true);
          dispatch(setIsConnected(false));
        });
    return () => {
      dispatch(setIsConnected(false));
      setLocalStorageVolume(5);
    };
  }, []);

  return { isHubStartError };
};
