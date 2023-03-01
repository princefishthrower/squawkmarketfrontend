import mixpanel from "mixpanel-browser";
import { useEffect } from "react";
import { MixpanelConstants } from "../constants/MixpanelConstants";

export const useMixpanel = () => {
// init mixpanel
  mixpanel.init(process.env.GATSBY_MIXPANEL_TOKEN || "");
  useEffect(() => {
    // track they opened app
    mixpanel.track(MixpanelConstants.USER_OPENS_THE_APP);

    // also track relevant page depending on window.location.pathname
    if (typeof window !== "undefined") {
      switch (window.location.pathname) {
        case "/pricing":
          mixpanel.track(MixpanelConstants.USER_IS_ON_PRICING_PAGE);
          break;

        case "/subscribe":
          mixpanel.track(MixpanelConstants.USER_IS_ON_SUBSCRIBE_PAGE);
          break;

        case "/contact":
          mixpanel.track(MixpanelConstants.USER_IS_ON_CONTACT_PAGE);
          break;

        // no match, no track!
        default:
          break;
      }
    }

    return () => {
      // track they closed app
      mixpanel.track(MixpanelConstants.USER_CLOSES_THE_APP);
    };
  }, []);
};
