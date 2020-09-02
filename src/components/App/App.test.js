import React from 'react';
import App from './App';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
  it('should render without crashing', () => {
    render(<App />);

    const header = screen.getByText('Turing Playlist');

    expect(header).toBeInTheDocument();
  })
})
