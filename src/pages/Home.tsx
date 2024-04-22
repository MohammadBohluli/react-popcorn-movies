import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Box>
        <Typography component={'h1'} fontSize={'60px'}>
          Home Page Popcorn Movie
        </Typography>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </div>
  );
};

export default Home;
