import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

export interface UserData {
    name: string;
    email: string;
    cpf: string;
}

interface Data {
    token: string;
    setToken: any;
    signed: boolean;
    user: UserData | null;
}

export const AuthContext = createContext<Data>({} as Data);

const AuthProvider = (props: any) => {
    const [authorization, setAuthorization] = useState('');
    const [checkLogIn, setCheckLogIn] = useState(false);
    const [userData, setUserData] = useState<UserData | null>(null);

    const userToken = async () => {
        let token = ' ';
        try {
            const value = await AsyncStorage.getItem('token');
            if (value != null) {
                token = 'Bearer '.concat(value);
                return token;
            }
        } catch (e) {
            console.log('sem token');
        }
        return token;
    };

    function checkIsLoggedIn(){
        if( authorization){
            setCheckLogIn(true);
        }else{
            setCheckLogIn(false);
        }
    }

    useEffect(() => {
        userToken().then(value => {
            setAuthorization(value)
        });
    }, []);

    useEffect(() => {
        checkIsLoggedIn();
    }, [authorization, checkLogIn]);

    return (
        <AuthContext.Provider value={{ token: authorization, setToken: setAuthorization, signed: checkLogIn, user: userData }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
