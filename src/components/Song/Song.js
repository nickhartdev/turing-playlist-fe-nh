import React from 'react';
import './Song.css';

const Song = (props) => {
  const song = props.song;

  return (
    <div class="song-container">
      <p>{song.songName} by {song.artistName}</p>
      <a href={song.link}>Play</a>
    </div>
  )
}

export default Song;