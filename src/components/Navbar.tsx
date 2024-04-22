import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import { useState } from 'react';
import SearchInput from './SearchInput';

export default function SearchAppBar() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={() => setOpen(!open)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              🍿 Movies
            </Typography>
            <SearchInput />
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <div style={{ width: '20vw' }}>Test</div>
      </Drawer>
    </>
  );
}
