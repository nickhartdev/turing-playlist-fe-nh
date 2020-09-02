import React from 'react';

const Song = (props) => {
  const song = props.song;

  return (
    <div>
      <p>{song.songName} by {song.artistName}</p>
      <a href={song.link}>Play</a>
    </div>
  )
}

export default Song;