import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const PlaylistForm = ({open,handleClose,getPlayListId}) =>{

    const {state,setState} = useState('')

    const handleSubmit = () =>{
        // todo handle url later 
        if(!state){
            alert ('Invalid State')
        }else{
            getPlayListId(state)
            setState('')
            handleClose()

        }


    };

    
  return ( 
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
           if you are add playlist please insert the playlist id or playlist link
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="playlist Id or link" 
            fullWidth
            variant="standard"
            onChange={(e)=>setState(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Playlist</Button>
        </DialogActions>
      </Dialog>
  );
}


export default PlaylistForm 
