import { newsActions } from "./article-reducer";
import axios from "axios";


const getNewsFromServer = () => {
    return async (dispatch) => {
        const fetchNews = async () => {
            const response  = await axios.get('/articleapi/');
            console.log(response.data)
            return response.data
        }

        try{
            const data = await fetchNews();
            dispatch(newsActions.getNews(data));
        }
        catch(error){
            console.log(error);
        }
    }
}

export default getNewsFromServer;