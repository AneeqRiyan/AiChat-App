// src/components/FeatureCard.tsx
import React from 'react';
import './FeatureCard.css';

interface FeatureCardProps {
  icon: string;
  text: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, text }) => (
  <div className="feature-card">
    <img src={icon} alt="" className="feature-icon" />
    <p>{text}</p>
  </div>
);

export default FeatureCard;
