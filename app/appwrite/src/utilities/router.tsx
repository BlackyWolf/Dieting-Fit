import { App } from '@/App';
import { EmailSent, ErrorPage, Home, Login, Signup, VerifyEmail } from '@/pages';
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
            }
        ]
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'signup',
        element: <Signup />
    },
    {
        path: 'email-sent',
        element: <EmailSent />
    },
    {
        path: 'account/email/verification',
        element: <VerifyEmail />
    }
]);
