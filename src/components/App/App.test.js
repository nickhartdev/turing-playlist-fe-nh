import MutationObserver from '@sheerun/mutationobserver-shim';
window.MutationObserver = MutationObserver;
import React from 'react';
import App from './App';
import { getAllSongs } from '../../dataFetcher';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
jest.mock('../../dataFetcher.js');

describe('App', () => {
  it('should display all songs from the server on load', async () => {
    getAllSongs.mockResolvedValueOnce([
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
      },
    ]);

    render(<App />);

    const song1 = await waitFor(() => screen.getByText('Swear by Casiopea'));
    const song2 = await waitFor(() => screen.getByText('Autumn Leaves by Bill Evans Trio'));
    const song3 = await waitFor(() => screen.getByText('Fair Weather by Art Farmer'));
    const song4 = await waitFor(() => screen.getByText('Django by The Modern Jazz Quartet'));

    expect(song1).toBeInTheDocument();
    expect(song2).toBeInTheDocument();
    expect(song3).toBeInTheDocument();
    expect(song4).toBeInTheDocument();
  })

  it('should allow the user to add a song', async () => {
    getAllSongs.mockResolvedValueOnce([
      {
        "songName": "Swear",
        "artistName": "Casiopea",
        "link": "https://www.youtube.com/watch?v=6GEI3PpXEAo&t=1771s",
        "id": 1
      },
      {
        "songName": "Autumn Leaves",
        "artistName": "Bill Evans Trio",
        "link": "https://www.youtube.com/watch?v=r-Z8KuwI7Gc",
        "id": 2
      },
      {
        "songName": "Fair Weather",
        "artistName": "Art Farmer",
        "link": "https://www.youtube.com/watch?v=8-jfsUusSDQ",
        "id": 3
      },
      {
        "songName": "Django",
        "artistName": "The Modern Jazz Quartet",
        "link": "https://www.youtube.com/watch?v=wXnkD7_5vqM",
        "id": 4
      }
    ])

    getAllSongs.mockResolvedValue([
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
      },
      {
        songName: "Africa",
        artistName: "Toto",
        link: "some link",
        id: 5,
      },
    ]);

    render(<App />);

    const songNameField = screen.getByPlaceholderText('Song name');
    const artistNameField = screen.getByPlaceholderText('Artist name');
    const linkField = screen.getByPlaceholderText('Link');
    const addSongButton = screen.getByRole('button', {name: 'Add'});

    fireEvent.change(songNameField, { target: { value: 'Africa' } })
    fireEvent.change(artistNameField, { target: { value: 'Toto' } })
    fireEvent.change(linkField, { target: { value: 'some link' } })

    fireEvent.click(addSongButton);

    const newSongInfo = await waitFor(() => screen.getByText('Africa by Toto'));

    expect(newSongInfo).toBeInTheDocument();
  })
})
