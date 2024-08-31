import { artticleDetialActions } from "./artcile-detail-reducer";
import axios from "axios";

const getArtticleDetailFromServer = (id) => {
    return async (dispatch) => {
        const fetchArticleDetail = async () => {
            const request = await axios.get(`/articleapi/${id}/`);
            // console.log(request.data.author.name)
            return request.data
        }

        try{
            const data = await fetchArticleDetail();
            dispatch(artticleDetialActions.getArticleDetail(data));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}

export default getArtticleDetailFromServer;