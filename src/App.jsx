import { Container, CssBaseline, Grid } from "@mui/material";
import Navbar from "./component/navbar";
import usePlaylist from "./hooks/usePlaylist";
import PlaylistCardItem from './component/playlist-CardI-tem'



 const App =() =>{
 
  const{playlists,getPlaylistById} = usePlaylist();
  // error,
  const playlistArray = Object.values(playlists);

   return(
   <>  

      <CssBaseline/>



      <Container maxWidth={'lg'} sx={{my:16}}>
        <Navbar getPlaylistById={getPlaylistById}/>

        {playlistArray.length > 0 && (
              <Grid container alignItems="stretch">
                  {playlistArray.map((item) => (
                    <Grid item xs={12} md={6} lg={4} mb={2}>
                        <PlaylistCardItem
                          key ={item.id}
                          playlistThumbnails ={item.playlistThumbnails}
                          playlistTitle ={item.playlistTitle}
                          channelTitle = {item.channelTitle}
                        
                        /> 
                      </Grid>
                    ))}
            </Grid>
          )}
      </Container>
       
    </>
   );
};


export default App














// import { useEffect } from "react";
// import usePlaylist from "./hooks/usePlaylist";
// // import getPlaylist from "./api";

// const App = () =>{
//     const {getPlaylistById,playlists,error,loading} = usePlaylist();


//     // useEffect (()=>{
//     // getPlaylistById('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl')
//     // }, []);

    // return(
    //     <div>
    //         <h1> hello world </h1>
    //     </div>
    // )

// }

// export default App