import { client } from '@/utilities/appwrite';
import { Models } from 'appwrite';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

interface AuthState {
    session?: Models.Session;
    user?: Models.Account<Models.Preferences>;
}

const defaultState: AuthState = {};

const AuthContext = createContext<AuthState>(defaultState);

export const useAuth = () => useContext(AuthContext);

type Properties = PropsWithChildren<{}>;

export const AuthProvider = ({ children }: Properties) => {
    const [user, setUser] = useState<Models.Account<Models.Preferences>>();
    const [session, setSession] = useState<Models.Session>();

    useEffect(() => {
        const unsubscribe = client.subscribe('account', (payload) => {
            console.log(payload)
        });

        return unsubscribe;
    }, []);

    const state: AuthState = {
        session,
        user
    };

    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    );
};
