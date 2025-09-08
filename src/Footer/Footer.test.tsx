import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the copyright text with current year', () => {
    render(<Footer name="Test Testerson" />);
    const year = new Date().getFullYear();
    expect(screen.getByText(`© ${year} Test Testerson. All rights reserved.`)).toBeInTheDocument();
  });

  it('has the correct class name', () => {
    render(<Footer name="Test Testerson" />);
    expect(screen.getByText(/Test Testerson/)).toHaveClass('footer-text');
  });
});
