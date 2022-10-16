import { PropsWithChildren } from 'react';
import { useIsAuthenticated } from './useIsAuthenticated';

type Properties = PropsWithChildren<{}>;

export const Unauthenticated = ({ children }: Properties) => {
    const isAuthenticated = useIsAuthenticated();

    if (isAuthenticated) return null;

    return <>{children}</>;
};
