import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Background from './Background';
import type { ImageUrl, VideoUrl } from './types';

const mockImageUrl: ImageUrl = {
  jpg: 'test.jpg',
  webp: 'test.webp',
};

const mockVideoUrl: VideoUrl = {
  mp4: 'test.mp4',
  webm: 'test.webm',
};

describe('Background', () => {
  beforeEach(() => {
    Object.defineProperty(HTMLMediaElement.prototype, 'play', {
        configurable: true,
        value: jest.fn(),
    });
    Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
        configurable: true,
        value: jest.fn(),
    });
  });

  it('renders BackgroundImage and BackgroundVideo', () => {
    render(<Background imageUrl={mockImageUrl} videoUrl={mockVideoUrl} />);
    expect(screen.getByAltText('Background')).toBeInTheDocument();
    expect(screen.getByTestId('background-video')).toBeInTheDocument();
  });

  it('shows StopButton when video is playing', () => {
    render(<Background imageUrl={mockImageUrl} videoUrl={mockVideoUrl} />);
    expect(screen.getByRole('button')).toHaveClass('video-button');
    expect(screen.getByTestId('stop-button')).toBeInTheDocument();
  });

  it('shows PlayButton after stopping video', () => {
    render(<Background imageUrl={mockImageUrl} videoUrl={mockVideoUrl} />);
    fireEvent.click(screen.getByTestId('stop-button'));
    expect(screen.getByTestId('play-button')).toBeInTheDocument();
  });
});
