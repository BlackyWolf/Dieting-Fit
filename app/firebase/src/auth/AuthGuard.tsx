import { previousUriKey } from '@/data';
import { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useIsAuthenticated } from './useIsAuthenticated';

type Properties = PropsWithChildren<{
    anonymousRoutes?: string[]
}>;

export const AuthGuard = ({ anonymousRoutes, children }: Properties) => {
    const location = useLocation();
    const isAuthenticated = useIsAuthenticated();

    if (isAuthenticated && (
            location.pathname === '/account/signin'
            || location.pathname === '/account/signup'
        )
    ) {
        const previousUri = window.localStorage.getItem(previousUriKey);

        window.localStorage.removeItem(previousUriKey);

        return <Navigate to={previousUri || '/'} replace={true} />
    }

    if (isAuthenticated || anonymousRoutes?.includes(location.pathname)) {
        return <>{children}</>;
    }

    window.localStorage.setItem(previousUriKey, location.pathname);

    return (
        <Navigate to="/account/signin" replace={true} />
    );
};
