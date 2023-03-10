import * as React from "react";
import { requestPermission } from "../../utils/notifications/requestPermission";

import { getLocalStorageNotificationsEnabled } from "../../utils/localStorage/getLocalStorageNotificationsEnabled";
import { useState } from "react";
import { setLocalStorageNotificationsEnabled } from "../../utils/localStorage/setLocalStorageNotificationsEnabled";
import { showBrowserNotification } from "../../utils/notifications/showBrowserNotification";

export function NotificationControls() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(
    getLocalStorageNotificationsEnabled() === "TRUE"
  );
  const onChangeNotifications = async () => {
    // they want to activate but have not granted permission
    if (!notificationsEnabled && Notification.permission !== "granted") {
      const permission = await requestPermission();
      if (permission === "granted") {
        setNotificationsEnabled(true);
        setLocalStorageNotificationsEnabled("TRUE");
        showBrowserNotification(
          "Notifications Enabled!",
          "You'll see squawk appear in these browser notifications, organized by feed."
        );
      }
      return;
    }
    // they want to deactivate
    if (notificationsEnabled) {
      setNotificationsEnabled(false);
      setLocalStorageNotificationsEnabled("FALSE");
      return;
    }
    if (!notificationsEnabled) {
      setNotificationsEnabled(true);
      setLocalStorageNotificationsEnabled("TRUE");
      showBrowserNotification(
        "Notifications Enabled!",
        "You'll see squawk appear in these browser notifications, organized by feed."
      );
      return;
    }
  };

  const labelText = notificationsEnabled
    ? "Click to Disable Browser Notifications"
    : "Click to Enable Browser Notifications";

  const buttonClass = notificationsEnabled
    ? "btn btn-secondary"
    : "btn btn-success";

  return (
    <div className="d-flex flex-row justify-content-center align-items-center my-3">
      <button className={buttonClass} onClick={onChangeNotifications}>
        {labelText}
      </button>
    </div>
  );
}
