import React from 'react';

const Songs = (props) => {
  return (
    <div>
      <h1>Songs</h1>
      {props.songs.map(song => {
        return <p>{song.songName}</p>
      })}
    </div>
  )
}

export default Songs;