import {useState} from 'react'
import { Link as RouterLink} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
// import Link from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
import { Button, Container, Stack,Link } from '@mui/material';
import PlaylistForm from '../playlist-form';
const Navbar = ({getPlaylistById}) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true); 
    };

    const handleClose = () => {
      setOpen(false);
    };

    const getPlayListId = (playlistId) =>{
      getPlaylistById(playlistId);
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color='default' sx={{py:2}}>
      <Container maxWidth='lg'>
          <Toolbar>
              <Stack sx={{flexGrow:1}}>
                  <Link to='/' component={RouterLink} sx={{textDecoration :'none' , color:'black'}}>

                    <Typography variant="h4" >
                        Clean Youtube
                    </Typography>
                  </Link>

                  <Link href='https://youtube.com'
                   target ={"_blank"}
                   sx={{textDecoration :'none' , color:'black'}}
                   >
                    <Typography variant="body1" >
                      Proshanto Saha
                    </Typography>
                  </Link>
              </Stack>
              <Button variant='contained' onClick={handleClickOpen} >
                Add playlist
              </Button>
              <PlaylistForm
                open={open}
                handleClose={handleClose}
                getPlayListId={getPlayListId}
              />
          
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}


export default Navbar