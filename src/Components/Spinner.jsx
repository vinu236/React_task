import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

 const Spinner=()=> {
  return (
    <Stack sx={{ bgcolor: '#f4f4f4' }} spacing={2} direction="row" height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}> 
      <CircularProgress color="primary" size={70} />
    </Stack>
  );
}

export default Spinner;