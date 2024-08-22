import axios from "axios"
import { API_LOCAL } from "../../API"
import { Login, SetUser, Logout } from "./actionType"


export const LoginAction = (payload) => {
    return async (dispatch) => {
        try{
            let response = await axios({
                method: "post",
                url: `${API_LOCAL}/auth/login`,
                data: {
                    email: payload.email,
                    password: payload.password
                }
            })

            localStorage.setItem("token", response.data.token)
            const {username, role_id} = response.data.payload;
            dispatch({type: Login, payload: {username, role_id, token: response.data.token}})

            return {
                error: false,
                message: "Successfully Login"
            }
        }catch(error){
            if(error.response.status == 404){
                return{
                    error: true,
                    message: error.response.data
                }
            }
            return {
                error: true,
                message: error.message
            }
        }
    }
}

export const GetUserDetails = (payload) => {
    return async (dispatch) => {
        console.log("token action", payload.token);
        try {
            let response = await axios({
                method: "get",
                url: `${API_LOCAL}/auth/user`,
                headers: {
                    "Authorization" : `Bearer ${payload.token}`
                }
            })

            console.log("response", response);
            console.log("response data", response.data);
            const {username, role_id, id, email} = response.data

            dispatch({type: SetUser, payload: {
                username: username,
                email: email,
                isLoggedIn: true,
                role_id: role_id,
                id: id
            }})
        } catch(error) {
            console.log(error);
        }
    }
}

export const logoutUser = () => ({
    type: Logout,
});