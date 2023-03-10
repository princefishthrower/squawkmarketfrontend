export const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    return permission;
}