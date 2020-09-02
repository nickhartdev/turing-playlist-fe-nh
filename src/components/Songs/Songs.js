import React from 'react';
import Song from '../Song/Song';
import SongController from "../SongController/SongController";

const Songs = (props) => {
  return (
    <div>
      <h1>Your Playlist</h1>
      <SongController moveToNextSong={props.moveToNextSong} />
      {props.songs.map(song => {
        return <Song song={song} key={song.id}/>
      })}
    </div>
  )
}

export default Songs;