export const setLocalStorageVolume = (volume: number) => {
    localStorage.setItem("AUDIO_PLAYER_VOLUME", volume.toString());
}