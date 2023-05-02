import axios  from "axios";



const getPlaylist = async (playlistId, pageToken = '', result = []) => {

  
  const key = import.meta.env.VITE_YOUTUBE_API_KEY;

  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?key=${key}
  &part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  
  if(data.nextPageToken){
    result =  getPlaylist(playlistId, data.nextPageToken,[...data.items]);
   
  }
  return result

}

export default getPlaylist  