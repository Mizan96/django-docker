import { categoryActions } from "./category-list-reducer";
import axios from "axios";


const getCategoryFromServer = (category) => {
    return async (dispatch) => {
        const fetchCategory = async () => {
            const response = await axios.get(`/api/categories/${category}/`);
            return response.data
        }

        try{
            const data = await fetchCategory();
            dispatch(categoryActions.getCategory(data));
        }
        catch(error){
            console.log(error);
        }
    }
}

export default getCategoryFromServer;