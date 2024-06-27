import * as actionType from './actionType'

const userToken = localStorage.getItem("token") ?? null

const initialState = {
    user: {
        username: "",
        token: userToken,
        isLoggedIn: false,
        role_id: ""
    }
}

const AuthReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case actionType.Login:
            return{
                ...state,
                user: {
                    ...state.user,
                    ...payload,
                    isLoggedIn: true
                }
            }
        case actionType.SetUser:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...payload
                }
            }

        default:
            return { ...state}
    }
}

export default AuthReducer