import { account, client } from '@/utilities/appwrite';
import { Models, RealtimeResponseEvent } from 'appwrite';
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
    const [session, setSession] = useState<Models.Session>();
    const [user, setUser] = useState<Models.Account<Models.Preferences>>();

    async function getAccount() {
        const user = await account.get();

        setUser(user);
    }

    async function getSession() {
        const session = await account.getSession('current');

        setSession(session);
    }

    useEffect(() => {
        getAccount();
        getSession();

        const unsubscribe = client.subscribe('account', (event: RealtimeResponseEvent<Models.Session>) => {
            setSession(event.payload);
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
