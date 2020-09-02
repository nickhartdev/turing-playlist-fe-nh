import React, { Component } from 'react';
import './NewSongForm.css';

class NewSongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  } 

  updateText = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  addSong = () => {
    const song = {
      songName: this.state.song,
      artistName: this.state.artist,
      link: this.state.link
    }

    this.props.updatePlaylist(song);
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Add a song!</legend>
          <input type="text" id="song" placeholder="Song name" onChange={this.updateText}/>
          <input type="text" id="artist" placeholder="Artist name" onChange={this.updateText}/>
          <input type="text" id="link" placeholder="Link" onChange={this.updateText}/>
          <button onClick={this.addSong} type="button">Add</button>
        </fieldset>
      </form>
    )
  }
}

export default NewSongForm;