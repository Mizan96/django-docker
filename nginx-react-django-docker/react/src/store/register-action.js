import { resgisterActions } from "./register-reducer"
import axios from "axios"


const sendUserInfoIntoServer = (userInfo) => {
    return async (dispatch) => {
        const insertUserData = async () => {
             
            const response = await axios.post('/registration/', userInfo, {headers: {"Content-Type": "application/json"}})
            return response.data
        }

        try 
        {
            const data = await insertUserData()
            dispatch(resgisterActions.getRegistrationInfo(data))
        }
        catch(error) 
        {
            console.log(error)
        }
    }
}

export default sendUserInfoIntoServer;