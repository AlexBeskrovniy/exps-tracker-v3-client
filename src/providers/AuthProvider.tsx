import { useContext, createContext, useReducer } from 'react';
import jwt_decode from "jwt-decode";

interface AuthContextValue {
    user: any;
    onLogin: (userData: string) => void;
    onLogout: () => void;
}

interface InitStateInterface {
    user: any
}

const initialState = {
    user: null
}

if (localStorage.getItem('authToken')) {
    const token = localStorage.getItem('authToken');
    const decodedToken = token && jwt_decode(token);
    console.log(decodedToken);
    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('authToken');
    } else {
        initialState.user = decodedToken
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

const authReducer = (state, action) => {
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

const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const onLogin = (userData) => {
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

// import { useContext, createContext, useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import { gql, useQuery } from '@apollo/client';

// interface AuthProviderProps {
//     children: React.ReactNode;
// }

// interface AuthContextValue {
//     user: any;
//     onLogIn: (user: any, token: string) => void;
//     onLogOut: () => void;
// }

// const AuthContext = createContext<AuthContextValue | null>(null)

// export const useAuthContext = () => {
//     return useContext(AuthContext);
// }

// const GET_USER = gql`
//     query user {
//         user {
//             email
//             id
//             name
//             token
//         }
//     }
// `
// //NEED to FIX
// const AuthProvider = (props: AuthProviderProps) => {
//     const navigate = useNavigate();
//     const { error, data } = useQuery(GET_USER);

//     const [user, setUser] = useState(null);
//     if (error) console.log(error);
//     if(data) {
//         console.log(data);
//         setUser(data.user);
//         navigate('/main');
//     };


//     const onLogIn = (user: any, token: string) => {
//         localStorage.setItem('authToken', token);
//         setUser(user);
//         navigate('/main')
//     }  

//     const onLogOut = () => {
//         localStorage.removeItem('authToken');
//         setUser(null);
//         console.log("you're logged out");
//     }

//     return (
//         <AuthContext.Provider value={{user, onLogIn, onLogOut}}>
//             { props.children }
//         </AuthContext.Provider>
//     );
// }

// export default AuthProvider;