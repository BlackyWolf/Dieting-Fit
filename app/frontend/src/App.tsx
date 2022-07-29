import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { BrowserRouter } from 'react-router-dom';
import { scopes } from './auth';
import { AppRoutes } from './routing';

/**
 * The starting component for building out the UI of the application.
 */
export const App = () => {
    const { accounts, instance } = useMsal();

    if (accounts.length > 0) {
        console.log(accounts[0]);
    }

    return (
        <>
            <AuthenticatedTemplate>
                <button className="bg-slate-500 text-white px-4 py-2 rounded-md" onClick={() => instance.logoutRedirect()}>Logout</button>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => instance.loginRedirect({ scopes })}>Login</button>
            </UnauthenticatedTemplate>
        </>
    );
}
