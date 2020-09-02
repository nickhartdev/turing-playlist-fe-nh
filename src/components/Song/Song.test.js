import React from 'react';
import Song from './Song';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Song', () => {
  it('should render with song info and a link to the song', () => {
    const song = {
      songName: 'Africa',
      artistName: 'Toto',
      link: ''
    }
  
    render(<Song song={song}/>)
  
    const songInfo = screen.getByText('Africa by Toto');
    const link = screen.getByText('Play');
  
    expect(songInfo).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  })
})