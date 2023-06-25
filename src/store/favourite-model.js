import {action, persist} from 'easy-peasy'


const favouriteModel = persist({
    items :[],
    addToFavourite : action((state,playlistId)=>{
        state.items.push(playlistId)
    }),
    removeFavourite : action((state,playlistId)=>{
       state.items = state.items.filter((pId)=> playlistId !== pId);
    }),
})


export default favouriteModel