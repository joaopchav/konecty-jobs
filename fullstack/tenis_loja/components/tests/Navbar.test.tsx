import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import '@testing-library/jest-dom';

describe('Navbar', () => {
  it('renders correctly', () => {
    render(<Navbar />);
    expect(screen.getByText('Konecty Store')).toBeInTheDocument();
  });
});