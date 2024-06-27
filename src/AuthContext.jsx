// AuthContext.js
import React, { createContext, useReducer, useEffect } from 'react';
import { initialState, authReducer } from './authReducer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const setToken = (token) => {
        console.log('Setting token:', token); // Add this line
        localStorage.setItem('token', token);
        dispatch({ type: 'SET_TOKEN', payload: token });
    };

    const clearToken = () => {
        console.log('Clearing token'); // Add this line
        localStorage.removeItem('token');
        dispatch({ type: 'CLEAR_TOKEN' });
    };

    useEffect(() => {
        console.log('Current token:', state.token); // Add this line
    }, [state.token]);

    return (
        <AuthContext.Provider value={{ token: state.token, setToken, clearToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };