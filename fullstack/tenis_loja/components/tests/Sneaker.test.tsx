import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/dist';
import Sneaker from '../Sneaker';

describe('Sneaker', () => {
  it('renders correctly', () => {
    const sneaker = {
      id: 1,
      name: 'Tênis 1',
      description: 'Descrição do tênis 1',
      price: 100,
      category: 'Categoria 1',
      image: 'https://via.placeholder.com/150x150',
      brand: 'Marca 1',
    };
    render(<Sneaker sneaker={sneaker} />);
    expect(screen.getByText(sneaker.name)).toBeInTheDocument();
    expect(screen.getByText(sneaker.description)).toBeInTheDocument();
    expect(screen.getByText(`R$ ${sneaker.price}`)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', sneaker.image);
  });
});