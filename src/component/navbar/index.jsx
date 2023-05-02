import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button, Container, Stack } from '@mui/material';

const Navbar = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color='default' sx={{py:2}}>
      <Container maxWidth='lg'>
          <Toolbar>
          
              <Stack>
                    <Typography variant="h4" >
                        Clean Youtube
                    </Typography>
                    
                    <Typography variant="body1" >
                      Proshanto Saha
                    </Typography>
              </Stack>
              <Button variant='contained'>
                Add playlist
              </Button>
          
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}


export default Navbar