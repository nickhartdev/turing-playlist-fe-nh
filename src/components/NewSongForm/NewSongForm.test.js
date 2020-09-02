import React from 'react';
import NewSongForm from './NewSongForm';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('NewSongForm', () => {
  it('should render 3 fields and a button', () => {
    render(<NewSongForm />);

    const songNameField = screen.getByPlaceholderText('Song name');
    const artistNameField = screen.getByPlaceholderText('Artist name');
    const linkField = screen.getByPlaceholderText('Link');
    const addSongButton = screen.getByRole('button');

    expect(songNameField).toBeInTheDocument();
    expect(artistNameField).toBeInTheDocument();
    expect(linkField).toBeInTheDocument();
    expect(addSongButton).toBeInTheDocument();
  })
})