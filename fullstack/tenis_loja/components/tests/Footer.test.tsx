import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import '@testing-library/jest-dom/dist';

describe('Footer', () => {
  it('renders correctly', () => {
    render(<Footer />);
    expect(screen.getByText('© 2024 João Paulo Chaves. Teste Konecty')).toBeInTheDocument();
  });
});