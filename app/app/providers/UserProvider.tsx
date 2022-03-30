import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';
import { AuthenticatedUser } from '~/data/user';

const defaultUser: AuthenticatedUser = {
    imageUrl: 'https://www.gravatar.com/avatar',
    username: 'ExampleUser'
};

export const UserContext = createContext<[AuthenticatedUser, Dispatch<SetStateAction<AuthenticatedUser>>]>([
    defaultUser,
    () => {}
]);

type Properties = PropsWithChildren<{
    user?: AuthenticatedUser | null;
}>;

export const UserProvider = (properties: Properties) => {
    const [user, setUser] = useState<AuthenticatedUser>(
        properties.user || defaultUser
    );

    return (
        <UserContext.Provider value={[user, setUser]}>
            {properties.children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);
