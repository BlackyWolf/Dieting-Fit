import { Configuration, PublicClientApplication } from '@azure/msal-browser';
import {
    B2C_AUTHORITY,
    B2C_POLICY,
    B2C_CLIENT_ID,
    B2C_POST_LOGOUT_REDIRECT_URI,
    B2C_REDIRECT_URI,
    B2C_TENANT_ID
} from '@/variables';

const configuration: Configuration = {
    auth: {
        authority: `https://${B2C_AUTHORITY}/${B2C_TENANT_ID}/${B2C_POLICY}`,
        clientId: B2C_CLIENT_ID,
        knownAuthorities: [B2C_AUTHORITY],
        postLogoutRedirectUri: B2C_POST_LOGOUT_REDIRECT_URI,
        redirectUri: B2C_REDIRECT_URI
    }
};

/**
 * The client configured to use with Azure AD B2C.
 */
export const msal = new PublicClientApplication(configuration);

/**
 * Default scopes to use for login.
 */
export const scopes = [
    'openid',
    'profile',
    'email'
];
