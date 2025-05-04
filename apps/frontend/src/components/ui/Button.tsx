import React from 'react';
import { Button as ShadcnButton, ButtonProps as ShadcnButtonProps } from 'shadcn/ui';

interface ButtonProps extends ShadcnButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  let className = '';

  switch (variant) {
    case 'primary':
      className = 'bg-blue-500 text-white hover:bg-blue-600';
      break;
    case 'secondary':
      className = 'bg-gray-500 text-white hover:bg-gray-600';
      break;
    case 'danger':
      className = 'bg-red-500 text-white hover:bg-red-600';
      break;
    default:
      className = 'bg-blue-500 text-white hover:bg-blue-600';
  }

  return <ShadcnButton className={className} {...props} />;
};

export default Button;
