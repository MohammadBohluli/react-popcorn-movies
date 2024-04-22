import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Navbar />

      <Box>
        <Outlet />
      </Box>
    </div>
  );
};

export default Home;
