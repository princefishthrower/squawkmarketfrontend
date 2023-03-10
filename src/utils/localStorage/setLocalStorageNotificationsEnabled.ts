export const setLocalStorageNotificationsEnabled = async (enabled: "TRUE" | "FALSE") => {
    localStorage.setItem("NOTIFICATIONS_ENABLED", enabled);
}