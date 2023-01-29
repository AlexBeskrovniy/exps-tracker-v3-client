import { useContext, createContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextValue {
    user: any;
    onLogIn: (user: any, token: string) => void;
    onLogOut: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null)

export const useAuthContext = () => {
    return useContext(AuthContext);
}

const GET_USER = gql`
    query user {
        user {
            email
            id
            name
            token
        }
    }
`
//NEED to FIX
const AuthProvider = (props: AuthProviderProps) => {
    const navigate = useNavigate();
    // const { error, data } = useQuery(GET_USER);

    const [user, setUser] = useState(null);
    // if (error) console.log(error);
    // if(data) () => {
    //     console.log(data);
    //     setUser(data.user);
    //     navigate('/main');
    // };


    const onLogIn = (user: any, token: string) => {
        localStorage.setItem('authToken', token);
        setUser(user);
        navigate('/main')
    }  

    const onLogOut = () => {
        localStorage.removeItem('authToken');
        setUser(null);
        console.log("you're logged out");
    }

    return (
        <AuthContext.Provider value={{user, onLogIn, onLogOut}}>
            { props.children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;