import React from 'react';
import { Box, Typography } from '@mui/material';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box className="footer">
      <Typography variant="body2" className="footer-text">
        © {currentYear} Kamil Talanda. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
