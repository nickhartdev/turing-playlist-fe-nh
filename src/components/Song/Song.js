import React from 'react';
import './Song.css';

const Song = (props) => {
  const song = props.song;

  return (
    <div className="song-container">
      <p>{song.songName} by {song.artistName}</p>
      <a href={song.link}>Youtube Link</a>
    </div>
  )
}

export default Song;