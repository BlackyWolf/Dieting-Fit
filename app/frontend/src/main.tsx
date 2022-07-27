import { MsalProvider } from '@azure/msal-react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './assets/css/main.css';
import { msal } from './auth/msal';

const root = createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode>
        <MsalProvider instance={msal}>
            <App />
        </MsalProvider>
    </StrictMode>
);
