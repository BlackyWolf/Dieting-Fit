import { useSigninCheck } from 'reactfire';

export const useIsAuthenticated = () => {
    const { status, data } = useSigninCheck();

    if (status === 'loading') return false;

    return data.signedIn;
};
