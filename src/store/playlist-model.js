import {action,thunk} from 'easy-peasy';
import getPlaylist from '../api/index.js'


const playlistModel ={


    items:[],
    id:'',
    description:'',
    title:'',
    thumbnails :'',
    channelId:'',
    channelTitle:'',

    setPlaylistData:action((state,payload)=>{
        // state = {...payload};
        // state.id = payload.id
        // state.items = payload.items
        // state.description= payload.description,
        // state.title = payload.title
        // state.thumbnails = payload.thumbnails
        // state.channelId = payload.channelId
        // state.channelTitle = payload.channelTitle

        state = payload;
        return state

    }),

    getPlaylistData: thunk(async({setPlaylistData},payload)=>{
       const { playlistId,
        playlistDescription,
        playlistTitle,
        playlistThumbnails,
        channelId,
        channelTitle: channelTitle,
        playlistItems} = await getPlaylist(payload)
       setPlaylistData({
        items: playlistItems,
        id:playlistId,
        description:playlistDescription,
        title:playlistTitle,
        thumbnails :playlistThumbnails,
        channelId,
        channelTitle,
    
       })


    }),

};


export default playlistModel


