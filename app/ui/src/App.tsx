import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from '@azure/msal-react';
import { BrowserRouter } from 'react-router-dom';
import { msalClient } from './auth';
import { MainLayout } from './components';
import { SignIn } from './pages/SignIn';

export const App = () => {
    return (
        <MsalProvider instance={msalClient}>
            <AuthenticatedTemplate>
                <BrowserRouter>
                    <MainLayout />
                </BrowserRouter>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <SignIn />
            </UnauthenticatedTemplate>
        </MsalProvider>
    );
}
