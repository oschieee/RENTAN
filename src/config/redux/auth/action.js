import axios from "axios"
import { API_LOCAL } from "../../API"
import { Login, SetUser, Logout } from "./actionType"


export const LoginAction = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios({
                method: 'post',
                url: `${API_LOCAL}/auth/login`, // Adjust API_LOCAL to your actual backend URL
                data: {
                    email: payload.email,
                    password: payload.password
                }
            });

            // Save the token to localStorage
            localStorage.setItem('token', response.data.token);

            // Extract and dispatch user details
            const { username, role_id } = response.data.payload;
            dispatch({ 
                type: Login, 
                payload: { 
                    username, 
                    role_id, 
                    token: response.data.token 
                } 
            });

            // Return success response
            return {
                error: false,
                message: 'Successfully Logged In'
            };

        } catch (error) {
            // Handle specific error codes or default to a generic message
            if (error.response && error.response.status === 404) {
                return {
                    error: true,
                    message: error.response.data
                };
            }

            return {
                error: true,
                message: error.message || 'An error occurred during login'
            };
        }
    };
};


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