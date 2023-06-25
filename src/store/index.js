import { createStore } from 'easy-peasy';
import playlistModel from './playlist-model';
import favouriteModel from './favourite-model';
import recentModel from './recent-model';

const store = createStore({
    playlist:playlistModel,
    favourite : favouriteModel,
    reacent : recentModel,

  
});

export default store