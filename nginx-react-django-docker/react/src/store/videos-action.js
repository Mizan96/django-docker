import { videosActions } from "./videos-reducer";
import axios from "axios";


const getVideosFromServer = () => {
    return async (dispatch) => {
        const fetchVideos = async () => {
            const response = await axios.get('api/videos/');
            return response.data;
        }

        try
        {
            const data = await fetchVideos();
            dispatch(videosActions.getVideos(data));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}

export default getVideosFromServer;