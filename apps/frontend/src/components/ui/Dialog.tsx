import React from 'react';
import { Dialog as ShadcnDialog, DialogProps as ShadcnDialogProps } from 'shadcn/ui';

interface DialogProps extends ShadcnDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children, ...props }) => {
  return (
    <ShadcnDialog isOpen={isOpen} onClose={onClose} {...props}>
      {children}
    </ShadcnDialog>
  );
};

export default Dialog;
