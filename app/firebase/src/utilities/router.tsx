import { App } from '@/App';
import { SettingsLayout } from '@/components';
import {
    EmailVerify,
    ErrorPage,
    Home,
    ProfileSettings,
    SignIn,
    SignUp
} from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'account/settings',
                element: <SettingsLayout />,
                children: [
                    {
                        path: 'profile',
                        element: <ProfileSettings />
                    }
                ]
            },
            {
                path: 'account/email/verify',
                element: <EmailVerify />
            }
        ]
    },
    {
        path: 'account/signin',
        element: <SignIn />
    },
    {
        path: 'account/signup',
        element: <SignUp />
    }
]);
