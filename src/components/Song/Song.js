import React from 'react';

const Song = (props) => {
  return (
    <div>
      <p>{props.song.songName}</p>
    </div>
  )
}

export default Song;