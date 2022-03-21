import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

export interface UserData {
    email: string;
    imageUrl: string;
    name: string;
}

const defaultUser: UserData = {
    email: 'user@example.com',
    imageUrl: 'https://www.gravatar.com/avatar',
    name: 'Example User'
};

export const UserContext = createContext<[UserData, Dispatch<SetStateAction<UserData>>]>([
    defaultUser,
    () => {}
]);

type Properties = PropsWithChildren<{
    user?: UserData | null;
}>;

export const UserProvider = (properties: Properties) => {
    const [user, setUser] = useState<UserData>(
        properties.user || defaultUser
    );

    return (
        <UserContext.Provider value={[user, setUser]}>
            {properties.children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);
