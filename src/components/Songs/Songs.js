import React from 'react';
import Song from '../Song/Song';

const Songs = (props) => {
  return (
    <div>
      <h1>Songs</h1>
      {props.songs.map(song => {
        return <Song song={song} />
      })}
    </div>
  )
}

export default Songs;