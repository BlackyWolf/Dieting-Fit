import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from '@azure/msal-react';
import { BrowserRouter } from 'react-router-dom';
import { msalClient } from './auth';
import { SignIn } from './pages/SignIn';

export const App = () => {
    return (
        <MsalProvider instance={msalClient}>
            <AuthenticatedTemplate>
                <BrowserRouter>
                    <h1>Yo</h1>
                </BrowserRouter>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <SignIn />
            </UnauthenticatedTemplate>
        </MsalProvider>
    );
}
