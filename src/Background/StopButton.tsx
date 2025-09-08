import React from "react";

interface StopButtonProps {
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
}

const StopButton: React.FC<StopButtonProps> = ({ onClick, className = "", ariaLabel = "Stop Video" }) => (
  <button
    className={className}
    onClick={onClick}
    aria-label={ariaLabel}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="2" />
    </svg>
  </button>
);

export default StopButton;
