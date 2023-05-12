import {action,persist,thunk} from 'easy-peasy';
import getPlaylist from '../api/index.js'


const playlistModel = persist({
    data :{},
    error:'',
    isLoading:'',

    addPlaylist : action((state, payload)=>{
        state.data [payload.playlistId] = payload
    }),


    setLoading : action ((state,payload)=>{
        state.isLoading = payload
    }),

    setError : action ((state,payload)=>{
        state.error = payload
    }),



    getPlaylist:thunk(async({addPlaylist,setLoading,setError},playlistId,{getState})=>{

        if(getState().data[playlistId]){
       
            return;
        }
        setLoading(true)
        try{
            const playlist = await getPlaylist(playlistId);
            addPlaylist(playlist);
        }catch(e){
            setError(e.response?.data?.error?.message || 'error');
        }finally{
            setLoading(false)
        }
      
     

    })

});


export default playlistModel



// items:[],
// id:'',
// description:'',
// title:'',
// thumbnails :'',
// channelId:'',
// channelTitle:'',

// setPlaylistData:action((state,payload)=>{
//     // state = {...payload};
//     // state.id = payload.id
//     // state.items = payload.items
//     // state.description= payload.description,
//     // state.title = payload.title
//     // state.thumbnails = payload.thumbnails
//     // state.channelId = payload.channelId
//     // state.channelTitle = payload.channelTitle

//     state = payload;
//     return state

// }),

// getPlaylistData: thunk(async({setPlaylistData},payload)=>{
//    const { playlistId,
//     playlistDescription,
//     playlistTitle,
//     playlistThumbnails,
//     channelId,
//     channelTitle: channelTitle,
//     playlistItems} = await getPlaylist(payload)
//    setPlaylistData({
//     items: playlistItems,
//     id:playlistId,
//     description:playlistDescription,
//     title:playlistTitle,
//     thumbnails :playlistThumbnails,
//     channelId,
//     channelTitle,

//    })


// }),
