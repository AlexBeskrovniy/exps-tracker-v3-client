import { useContext, createContext, useReducer } from 'react';
import jwt_decode from "jwt-decode";

type TokenData = {
    id: string;
    name: string;
    email: string;
    exp: number;
    iat: number;   
}

type User = {
    id: string;
    name: string;
    email: string;
    token: string;
}

interface AuthContextValue {
    user: TokenData | User | null;
    onLogin: (userData: User) => void;
    onLogout: () => void;
}

const initialState: {user: TokenData | User | null} = {
    user: null
}

if (localStorage.getItem('authToken')) {
    const token = localStorage.getItem('authToken');
    const decodedToken: any = token && jwt_decode(token);
    console.log(decodedToken);
    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('authToken');
    } else {
        initialState.user = decodedToken;
    }
}

const AuthContext = createContext<AuthContextValue>({
    user: null,
    onLogin: (userData) => {},
    onLogout: () => {}
});

export const useAuthContext = () => {
    return useContext(AuthContext);
}

const authReducer = (state: any, action: { type: string; payload?: TokenData | User; }) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
}

const AuthProvider = (props: JSX.IntrinsicAttributes) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const onLogin = (userData: User) => {
        localStorage.setItem('authToken', userData.token);
        dispatch({
            type: 'LOGIN',
            payload: userData
        });
    }

    const onLogout = () => {
        localStorage.removeItem('authToken');
        dispatch({ type: 'LOGOUT' });
    }

    return (
        <AuthContext.Provider
            value={{ user: state.user, onLogin, onLogout }}
            {...props}
        />
    );
}

export default AuthProvider;
