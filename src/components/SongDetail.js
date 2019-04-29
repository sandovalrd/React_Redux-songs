import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


const SongDetail = ({song}) => {
    if (!song){
        return <div><h3>Select a song!</h3></div>
    };

    return (
        <div>
            <h3>Detail Song:</h3>
            <p>Title: {song.title}
            <br/>
            Duration: {song.duration}</p>
        </div>
    );
}

const mapStateProps = state => {
    return {song: state.selectedSong};
};

export default connect(mapStateProps,{selectSong})(SongDetail);