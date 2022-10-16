import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './assets/css/main.css';
import { Firebase } from './firebase';
import { router } from './utilities/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Firebase>
            <RouterProvider router={router} />
        </Firebase>
    </React.StrictMode>
);
