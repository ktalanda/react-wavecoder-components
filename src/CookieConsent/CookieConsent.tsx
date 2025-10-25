import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import localStorage from 'local-storage-fallback';
import './CookieConsent.css';

export const getCookieConsent = (): 'accepted' | 'declined' | null => {
  return localStorage.getItem('cookieConsent') as 'accepted' | 'declined' | null;
};

export const isCookiesAccepted = (): boolean => {
  return getCookieConsent() === 'accepted';
};

export interface CookieConsentProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onDecline }) => {
  const [showBanner, setShowBanner] = useState(getCookieConsent() === null);

  const handleAccept = (): void => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    onAccept?.();
  };

  const handleDecline = (): void => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    onDecline?.();
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent">
      <Box className="cookie-consent-content">
        <Typography variant="body2" className="cookie-consent-text">
          This website uses cookies to enhance your experience and analyze site traffic. 
          By clicking "Accept", you consent to our use of cookies.
        </Typography>
        <Box className="cookie-consent-buttons">
          <Button 
            variant="outlined" 
            size="small" 
            onClick={handleDecline}
            className="cookie-consent-decline-button"
          >
            Decline
          </Button>
          <Button variant="contained" size="small" onClick={handleAccept}>
            Accept
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default CookieConsent;
