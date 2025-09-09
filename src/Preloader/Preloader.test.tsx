import React from 'react';
import { render, screen } from '@testing-library/react';
import Preloader from './Preloader';

describe('Preloader', () => {
  it('renders top and bottom lines', () => {
    render(<Preloader topLine="Loading..." bottomLine="Please wait" loaded={false} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByText('Please wait')).toBeInTheDocument();
  });

  it('applies loaded class when loaded is true', () => {
    const { container } = render(<Preloader topLine="Top" bottomLine="Bottom" loaded={true} />);
    expect(container.firstChild).toHaveClass('Preloader loaded');
  });

  it('does not apply loaded class when loaded is false', () => {
    const { container } = render(<Preloader topLine="Top" bottomLine="Bottom" loaded={false} />);
    expect(container.firstChild).toHaveClass('Preloader');
    expect(container.firstChild).not.toHaveClass('loaded');
  });
});
