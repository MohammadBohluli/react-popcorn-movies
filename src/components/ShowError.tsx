import { Box, Alert, Typography } from '@mui/material';

const ShowError = () => {
  return (
    <Box
      mt={'200px'}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}
    >
      <Alert severity="error">
        <Typography fontSize={'17px'}>
          Somthing Wrong To Fetch Data 😪
        </Typography>
      </Alert>
    </Box>
  );
};

export default ShowError;
