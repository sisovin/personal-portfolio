import React from 'react';
import { Form as ShadcnForm, FormProps as ShadcnFormProps } from 'shadcn/ui';

interface FormProps extends ShadcnFormProps {
  variant?: 'default' | 'outlined' | 'elevated';
}

const Form: React.FC<FormProps> = ({ variant = 'default', ...props }) => {
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

  return <ShadcnForm className={className} {...props} />;
};

export default Form;
