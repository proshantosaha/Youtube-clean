import axios  from "axios";


const key = import.meta.env.VITE_YOUTUBE_API_KEY;

const getPlaylistItem = async (playlistId,pageToken = '', result = []) => {

  

  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?key=${key}
  &part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  
  if(data.nextPageToken){
    result =  getPlaylist(playlistId, data.nextPageToken,[...data.items]);
   
  }
  return result
};

const getPlaylist = async(playlistId)=>{

  const URL =`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`


  const {data} = await axios.get(URL);
  let playlistItems = await getPlaylistItem(playlistId);

 const {channelId,title:playlistTitle,description:playlistDescription,thumbnails,channelTitle: channelTitle } = data?.items[0]?.snippet

  playlistItems = playlistItems.map((item)=>{

      let {title,description,thumbnails:{medium}} = item.snippet;
      
      return { 
          
          title,
          description,
          thumbnails: medium, 
          contentDetails: item.contentDetails,
      };
  });


  return {
    playlistId,
    playlistDescription,
    playlistTitle,
    playlistThumbnails:thumbnails.default,
    channelId,
    channelTitle: channelTitle,
    playlistItems

  }
}


export default getPlaylist  