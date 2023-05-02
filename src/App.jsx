
import { CssBaseline } from "@mui/material";
import Navbar from "./component/navbar";


 const App =() =>{
 


   return(
   <>

      <CssBaseline/>
      <div>
        <Navbar/>
      <h2>hi i am here</h2>
      </div>
       
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