import React from 'react';
import SongController from './SongController';
import { fireEvent, screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SongController', () => {
  it('should fire a function when the button is pressed', () => {
    const mockMoveToNextSong = jest.fn();

    render(<SongController moveToNextSong={mockMoveToNextSong}/>);

    const nextSongButton = screen.getByRole('button', {name: 'Next Song'});

    fireEvent.click(nextSongButton);

    expect(mockMoveToNextSong).toHaveBeenCalledTimes(1)
  })
})