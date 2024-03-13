import { createContext, useEffect, useState } from 'react';
import React from "react";
export interface UserData {
    name: string;
    email: string;
    cpf: string;
}

interface Data {
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
    signed: boolean;
    user: UserData | null;
}

interface Props {
    children: React.ReactNode;
  }
  

export const AuthContext = createContext<Data>({} as Data);

const AuthProvider: React.FC<Props> = ({ children }) => {
    const [authorization, setAuthorization] = useState<string>('');
    const [checkLogIn, setCheckLogIn] = useState<boolean>(false);
    const [userData, setUserData] = useState<UserData | null>(null);

    const userToken = async () => {
        let token = ' ';
        try {
            const value = localStorage.getItem('token');
            if (value !== null) {
                token = 'Bearer '.concat(value);
                return token;
            }
        } catch (e) {
            console.log('sem token');
        }
        return token;
    };

    function checkIsLoggedIn() {
        if (authorization) {
            setCheckLogIn(true);
        } else {
            setCheckLogIn(false);
        }
    }

    useEffect(() => {
        userToken().then(value => {
            setAuthorization(value);
        });
    }, []);

    useEffect(() => {
        checkIsLoggedIn();
    }, [authorization, checkLogIn]);

    return (
        <AuthContext.Provider value={{ token: authorization, setToken: setAuthorization, signed: checkLogIn, user: userData }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
