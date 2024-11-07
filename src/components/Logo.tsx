import React from 'react';
import './Logo.css';

const Logo: React.FC = () => (
  <div className="logo-container">
    <img src="logo.svg" alt="ChatGPT Logo" className="logo" />
  </div>
);

export default Logo;