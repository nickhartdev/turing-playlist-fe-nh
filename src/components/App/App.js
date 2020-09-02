import React, { Component } from 'react';
import './App.css';
import Songs from '../Songs/Songs';
import NewSongForm from '../NewSongForm/NewSongForm';
import { getAllSongs, postNewSong } from '../../dataFetcher';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: []
    }
  }

  componentDidMount = async () => {
    const songs = await getAllSongs();
    this.setState({ songQueue: songs })
  }

  updatePlaylist = async (song) => {
    await postNewSong(song);
    const songs = await getAllSongs();
    
    this.setState({ songQueue: songs });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <NewSongForm updatePlaylist={this.updatePlaylist} />
            <Songs songs={this.state.songQueue} />
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
