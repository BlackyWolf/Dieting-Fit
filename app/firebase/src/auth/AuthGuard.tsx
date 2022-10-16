import { PropsWithChildren, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'reactfire';
import { useIsAuthenticated } from './useIsAuthenticated';

type Properties = PropsWithChildren<{
    anonymousRoutes?: string[]
}>;

export const AuthGuard = ({ anonymousRoutes, children }: Properties) => {
    const auth = useAuth();
    const location = useLocation();
    const isAuthenticated = useIsAuthenticated();

    if (isAuthenticated && location.pathname === '/account/signin') {
        return <Navigate to="/" replace={true} />
    }

    if (isAuthenticated || anonymousRoutes?.includes(location.pathname)) {
        return <>{children}</>;
    }

    return (
        <Navigate to="/account/signin" replace={true} />
    );
};
