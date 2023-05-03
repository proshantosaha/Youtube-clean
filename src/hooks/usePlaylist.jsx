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

        try {
            const playlist = await getPlaylist(playlistId);
            setError('')
            setState((prev)=>({
                ...prev,
                playlists:{
                    ...prev.playlists,
                    [playlistId]:playlist,
                }
            }))
        }catch(e){
            setError(e.response?.data?.error?.message || 'Something went wrong')
        }finally{
            setLoading(false)
        }

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