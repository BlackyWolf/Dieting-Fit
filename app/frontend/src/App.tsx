import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routing';

export const App = () => {
    const { instance } = useMsal();

    return (
        <>
            <AuthenticatedTemplate>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <button onClick={() => instance.loginRedirect()}>Login</button>
            </UnauthenticatedTemplate>
        </>
    );
}
