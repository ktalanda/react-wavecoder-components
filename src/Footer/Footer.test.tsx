import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the copyright text with current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(`© ${year} Kamil Talanda. All rights reserved.`)).toBeInTheDocument();
  });

  it('has the correct class name', () => {
    render(<Footer />);
    expect(screen.getByText(/Kamil Talanda/)).toHaveClass('footer-text');
  });
});
