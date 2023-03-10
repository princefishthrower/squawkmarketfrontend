export const getLocalStorageNotificationsEnabled = (): string | null => {
    const enabled = localStorage.getItem("NOTIFICATIONS_ENABLED");
    return enabled;
}