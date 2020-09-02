import React from 'react';
import Song from '../Song/Song';

const Songs = (props) => {
  return (
    <div>
      <h1>Your Playlist</h1>
      {props.songs.map(song => {
        return <Song song={song} key={song.id}/>
      })}
    </div>
  )
}

export default Songs;