import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/dist';
import SneakerList from '../SneakerList';
import { sneakers } from '../../src/data';

describe('SneakerList', () => {
  it('renders correctly', () => {
    render(<SneakerList />);
    expect(screen.getAllByRole('listitem')).toHaveLength(sneakers.length);
  });
});