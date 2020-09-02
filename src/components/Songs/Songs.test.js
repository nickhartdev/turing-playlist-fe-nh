import React from 'react';
import Songs from './Songs';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Songs', () => {
  it('should render a header and all songs passed into it', () => {
    const songs = [
      {
        songName: "Swear",
        artistName: "Casiopea",
        link: "https://www.youtube.com/watch?v=6GEI3PpXEAo&t=1771s",
        id: 1,
      },
      {
        songName: "Autumn Leaves",
        artistName: "Bill Evans Trio",
        link: "https://www.youtube.com/watch?v=r-Z8KuwI7Gc",
        id: 2,
      },
      {
        songName: "Fair Weather",
        artistName: "Art Farmer",
        link: "https://www.youtube.com/watch?v=8-jfsUusSDQ",
        id: 3,
      },
      {
        songName: "Django",
        artistName: "The Modern Jazz Quartet",
        link: "https://www.youtube.com/watch?v=wXnkD7_5vqM",
        id: 4,
      }
    ];

    render(<Songs songs={songs}/>);

    const song1 = screen.getByText('Swear by Casiopea');
    const song2 = screen.getByText('Autumn Leaves by Bill Evans Trio');
    const song3 = screen.getByText('Fair Weather by Art Farmer');
    const song4 = screen.getByText('Django by The Modern Jazz Quartet');

    expect(song1).toBeInTheDocument();
    expect(song2).toBeInTheDocument();
    expect(song3).toBeInTheDocument();
    expect(song4).toBeInTheDocument();
  })
})

