import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { useLocation } from 'react-router-dom';
import { SignedOut, SignInRedirect } from './auth';
import { AppRoutes } from './routing';

/**
 * The starting component for building out the UI of the application.
 */
export const App = () => {
    const { accounts } = useMsal();
    const location = useLocation();

    if (accounts.length > 0) {
        console.log(accounts[0]);
    }

    return (
        <>
            <AuthenticatedTemplate>
                <AppRoutes />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                {location.pathname !== '/signedout' && (
                    <SignInRedirect />
                )}

                {location.pathname === '/signedout' && (
                    <SignedOut />
                )}
            </UnauthenticatedTemplate>
        </>
    );
}
