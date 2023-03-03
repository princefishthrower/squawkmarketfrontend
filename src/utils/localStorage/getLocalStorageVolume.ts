export const getLocalStorageVolume = (): number => {
    const volume = localStorage.getItem("AUDIO_PLAYER_VOLUME");
    if (volume) {
        return parseInt(volume, 10);
    }
    return 5;
}