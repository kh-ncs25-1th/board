import React from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  Typography,
  Box
} from '@mui/material';

const BaseModal = ({ 
  open, 
  onClose, 
  title,
  children,
  actions,
  maxWidth = "sm",
  fullWidth = true
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
    >
      <DialogTitle>
        <Typography variant="h6" component="div" align="center">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
      </DialogContent>
      {actions && (
        <DialogActions sx={{ p: 2 }}>
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default BaseModal; 