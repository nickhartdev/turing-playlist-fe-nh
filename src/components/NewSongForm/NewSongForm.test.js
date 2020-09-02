import React from 'react';
import NewSongForm from './NewSongForm';
import { render, screen, fireEvent } from '@testing-library/react';
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

  it('should accept text inputs', () => {
    render(<NewSongForm />);

    const songNameField = screen.getByPlaceholderText('Song name');
    const artistNameField = screen.getByPlaceholderText('Artist name');
    const linkField = screen.getByPlaceholderText('Link');

    fireEvent.change(songNameField, { target: { value: 'Africa'} })
    fireEvent.change(artistNameField, { target: { value: 'Toto'} })
    fireEvent.change(linkField, { target: { value: 'some link'} })

    expect(songNameField.value).toBe('Africa');
    expect(artistNameField.value).toBe('Toto');
    expect(linkField.value).toBe('some link');
  })
})