import { MsalProvider } from '@azure/msal-react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { msal } from './auth';
import { App } from './App';
import './assets/css/main.css';

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
