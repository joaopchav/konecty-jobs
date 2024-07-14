import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import '@testing-library/jest-dom/dist';

describe('Hero', () => {
  it('renders correctly', () => {
    const title = 'Descubra os melhores tênis para você';
    const description = 'Os produtos mais confortáveis e estilosos para seu dia a dia';
    const image = 'https://via.placeholder.com/1500x500';
    render(<Hero title={title} description={description} image={image} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', image);
  });
});