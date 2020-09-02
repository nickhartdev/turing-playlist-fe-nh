import React, { Component } from 'react';

class NewSongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  } 

  updateText = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Add a song!</legend>
          <input type="text" id="song-name" placeholder="Song name" onChange={this.updateText}/>
          <input type="text" id="artist-name" placeholder="Artist name" onChange={this.updateText}/>
          <input type="text" id="link" placeholder="Link" onChange={this.updateText}/>
          <button>Add</button>
        </fieldset>
      </form>
    )
  }
}

export default NewSongForm;