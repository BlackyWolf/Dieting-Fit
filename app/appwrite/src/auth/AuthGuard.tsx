import { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useIsAuthenticated } from './useIsAuthenticated';

type Properties = PropsWithChildren<{
    anonymousRoutes?: string[]
}>;

export const AuthGuard = ({ anonymousRoutes, children }: Properties) => {
    const location = useLocation();
    const isAuthenticated = useIsAuthenticated();

    if (isAuthenticated || anonymousRoutes?.includes(location.pathname)) {
        return <>{children}</>;
    }

    return (
        <Navigate to="/login" replace={true} />
    );
};
