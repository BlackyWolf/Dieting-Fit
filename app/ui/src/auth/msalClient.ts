import { Configuration, PublicClientApplication } from '@azure/msal-browser';
import { AUTHORITY, CLIENT_ID, REDIRECT_URI } from '../variables';

const configuration: Configuration = {
    auth: {
        authority: AUTHORITY,
        clientId: CLIENT_ID,
        postLogoutRedirectUri: REDIRECT_URI,
        redirectUri: REDIRECT_URI
    },
    cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: false
    }
};

export const msalClient = new PublicClientApplication(configuration);
