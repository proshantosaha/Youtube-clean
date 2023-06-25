import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import { BrowserRouter,Routes,Route,useParams } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import Navbar from "./component/navbar";
import usePlaylist from "./hooks/usePlaylist";
import PlaylistCardItem from './component/playlist-CardI-tem'
import { useEffect } from "react";
// import { useEffect } from "react";


const playlistID = 'PL_XxuZqN0xVBfji5SwKd-CQijtdmcUTMU'

const HomePage = ({playlistArray}) =>{

  // const playlist = useStoreActions (actions => actions.playlist)

  // useEffect(()=>{
  //   playlist.getPlaylist(playlistID)
  // },[])

   return (
    <Container maxWidth={'lg'} sx={{my:16}}>
    {playlistArray.length > 0 && (
          <Grid container alignItems="stretch"> 
              {playlistArray.map((item) => (
                <Grid item xs={12} md={6} lg={4} mb={2}>
                    <PlaylistCardItem
                      key={item.playlistId}
                      playlistId={item.playlistId}
                      playlistThumbnails ={item.playlistThumbnails}
                      playlistTitle ={item.playlistTitle}
                      channelTitle = {item.channelTitle}
                    
                    /> 
                  </Grid>
                ))}
        </Grid>
      )}
  </Container> 
   );
};

const PlayerPage =({playlists }) =>{

 const {playlistId}= useParams()


 const current = playlists[playlistId]
 console.log('current course' , current );

 if (!current)return;

//  useEffect()

  return(
  <Container maxWidth={'lg'} sx={{my:16}}>
    <Typography variant="h2" align="center"> {current.playlistTitle}</Typography>
    <Typography variant="body1" align="center"> {current.playlistDescription}</Typography>
  </Container>

    )
  }

const NotFound = () =>(
  <Container maxWidth={'lg'} sx={{my:16}}>
    <Typography variant="h2" align="center"> 404 page not found</Typography>
  </Container>
)

 const App =() =>{
 
  const{playlists,getPlaylistById} = usePlaylist();
  // error,
  const playlistArray = Object.values(playlists);

   return(
   <BrowserRouter>
      <CssBaseline/>
      <Navbar getPlaylistById={getPlaylistById}/>
        <Routes>
          <Route path="/" element={<HomePage playlistArray={playlistArray}/>}/>
          <Route path="/player/:playlistId" element={<PlayerPage playlists={playlists}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
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