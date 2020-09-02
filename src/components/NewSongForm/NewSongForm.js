import React, { Component } from 'react';

class NewSongForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Add a song!</legend>
          <input type="text" name="song-name" placeholder="Song name" />
          <input type="text" name="artist-name" placeholder="Artist name" />
          <input type="text" name="link" placeholder="Link" />
        </fieldset>
      </form>
    )
  }
}

export default NewSongForm;