import React from 'react';
import { Box, Typography } from '@mui/material';
import './Footer.css';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box className="footer">
      <Typography variant="body2" className="footer-text">
        © {currentYear} {name}. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
