import React, { Component } from 'react';
import './App.css';
import Songs from '../Songs/Songs';
import NewSongForm from '../NewSongForm/NewSongForm';
import SongController from '../SongController/SongController';
import { getAllSongs } from '../../dataFetcher';

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <NewSongForm />
            <Songs songs={this.state.songQueue}/>
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
