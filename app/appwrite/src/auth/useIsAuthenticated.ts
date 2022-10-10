import { useAuth } from './AuthProvider';

export const useIsAuthenticated = () => {
    const { session } = useAuth();

    return !!session;
};
