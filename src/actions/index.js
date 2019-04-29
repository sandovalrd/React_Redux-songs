// Actions Creator

export const selectSong = song =>  {
    // Return to action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};