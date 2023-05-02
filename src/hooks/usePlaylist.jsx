import { useState } from "react";
import getPlaylist from "../api";

const usePlaylist =() =>{
    const [state,setState] = useState({
        playlists:{},
        recentPlaylists:[],
        favorites:[],
    })

    const [error,setError] = useState('')
    const [loading,setLoading] = useState('false')

    const getPlaylistById = async (playlistId,force=false) =>{

        if(state.playlists[playlistId] && !force){
            return;

        }
        setLoading(true)

        let result;

        try {
            result = await getPlaylist(playlistId);
            setError('')
        }catch(e){
            setError(e.response?.data?.error?.message || 'Something went wrong')
        }finally{
            setLoading(false)
        }
         
        let cid,ct;

        result = result.map((item)=>{

            const {channelId,title,description,thumbnails:{medium},channelTitle } = item.snippet;
            
            if(!cid){
                cid = channelId
            }

            if(!ct){
                ct = channelTitle
            }
            
            
            return { 
                
                title,
                description,
                thumbnails: medium, 
                contentDetails: item.contentDetails,
            };
        });

        setState((prev)=>({
            ...prev, 
            playlists: {
                ...prev.playlists,
                [playlistId]:{
                    items:result,
                    playlistId:playlistId,  
                    channelId:cid,  
                    channelTitle:ct,
                },
            },
        }));

    };

    const addToFavorites = (playlistId) =>{

        setState((prev) =>({
            ...prev,
            favorites:[...prev,playlistId]
        }))
    };

    const addToRecent = (playlistId) =>{

        setState((prev )=>({
            ...prev,
            recentPlaylists:[...prev,playlistId]
        }))
    }


    const getPlaylistByIds=(ids=[])=>{

        return ids.map(id=>state.playlists[id])
    }


    return {
        playlists : state.playlists,
        favorites:getPlaylistByIds(state.favorites),
        recentPlaylists:getPlaylistByIds(state.recentPlaylists),
        error,
        loading,
        getPlaylistById,
        addToFavorites,
        addToRecent
    }

}

export default usePlaylist