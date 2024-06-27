// authReducer.js

const userToken = localStorage.getItem("token") ?? null

const initialState = {
    token: null,
    // user: { 
    //     username: "",
    //     email: "",
    //     token: userToken,
    //     isLoggedIn: false,
    //     Role_ID: ""
    // }
};

const authReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload,
                // user: {
                //     ...state.user,
                //     ...action.payload,
                //     isLoggedIn: true
                // }
            };
        case 'CLEAR_TOKEN':
            return {
                ...state,
                token: null
                // user: {
                //     ...state.user,
                //     ...action.payload,
                //     isLoggedIn: false
                // }
            };
        default:
            return state;
    }
};

export { initialState, authReducer };