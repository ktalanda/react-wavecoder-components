import React from "react";

interface PlayButtonProps {
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ onClick, className = "", ariaLabel = "Replay Video" }) => (
  <button
    className={className}
    onClick={onClick}
    aria-label={ariaLabel}
    data-testid="play-button"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="6,4 20,12 6,20" />
    </svg>
  </button>
);

export default PlayButton;
