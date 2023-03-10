export const showBrowserNotification = (
  title: string,
  body: string
) => {
  if (typeof window !== "undefined" && !("Notification" in window)) {
    // Check if the browser supports notifications
    console.log("This browser does not support desktop notification");
    // do nothing more
    return;
  }
  // if granted, show notification!
  if (Notification.permission === "granted") {
    new Notification(title, { body, icon: `${window.location.href}logo.png` });
  }
};
