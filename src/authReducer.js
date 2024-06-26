// authReducer.js

const initialState = {
    token: null,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload,
            };
        case 'CLEAR_TOKEN':
            return {
                ...state,
                token: null,
            };
        default:
            return state;
    }
};

export { initialState, authReducer };