import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import localStorage from 'local-storage-fallback';
import './CookieConsent.css';

export const getCookieConsent = (): 'accepted' | 'declined' | null => {
  return localStorage.getItem('cookieConsent') as 'accepted' | 'declined' | null;
};

export const isCookiesAccepted = (): boolean => {
  return getCookieConsent() === 'accepted';
};

const shouldShowBannerAgain = (): boolean => {
  const consent = localStorage.getItem('cookieConsent');
  const declineTimestamp = localStorage.getItem('cookieConsentDeclineTime');
  
  if (consent === 'accepted') return false;
  if (!consent) return true;
  
  if (consent === 'declined' && declineTimestamp) {
    const daysSinceDecline = (Date.now() - parseInt(declineTimestamp)) / (1000 * 60 * 60 * 24);
    return daysSinceDecline > 30;
  }
  
  return true;
};

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(shouldShowBannerAgain());
  }, []);

  const handleAccept = (): void => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.removeItem('cookieConsentDeclineTime');
    setShowBanner(false);
  };

  const handleDecline = (): void => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDeclineTime', Date.now().toString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <Paper className="cookie-consent">
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
    </Paper>
  );
};

export default CookieConsent;
