import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ConfirmationAlert({alertDetails, setAlertDetails}) {

  const { 
    openAlert, 
    alertContent, 
    severity, 
    background 
  } = alertDetails;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertDetails({
      ...alertDetails,
      openAlert: false,   
    })
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar 
        open={openAlert} 
        autoHideDuration={3000} 
        onClose={handleClose} 
        anchorOrigin={{vertical: "top", horizontal: "center"}}
      >
        <Alert 
          onClose={handleClose} 
          severity={severity} 
          sx={{ width: '100%', background: background }}
        >
          {alertContent}
        </Alert>
      </Snackbar>
    </Stack>
  );
}