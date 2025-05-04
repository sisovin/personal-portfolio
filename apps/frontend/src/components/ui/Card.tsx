import React from 'react';
import { Card as ShadcnCard, CardProps as ShadcnCardProps } from 'shadcn/ui';

interface CardProps extends ShadcnCardProps {
  variant?: 'default' | 'outlined' | 'elevated';
}

const Card: React.FC<CardProps> = ({ variant = 'default', ...props }) => {
  let className = '';

  switch (variant) {
    case 'default':
      className = 'bg-white shadow-md';
      break;
    case 'outlined':
      className = 'bg-white border border-gray-300';
      break;
    case 'elevated':
      className = 'bg-white shadow-lg';
      break;
    default:
      className = 'bg-white shadow-md';
  }

  return <ShadcnCard className={className} {...props} />;
};

export default Card;
