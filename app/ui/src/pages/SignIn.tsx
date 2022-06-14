import { InteractionType } from '@azure/msal-browser';
import { useMsal, useMsalAuthentication } from '@azure/msal-react';
import { scopes } from '../auth';

export const SignIn = () => {
    // useMsalAuthentication(InteractionType.Redirect, { scopes });
    const { instance } = useMsal();

    function signIn() {
        instance.loginRedirect({ scopes });
    }

    return (
        <>
            <h1 className="text-4xl">Redirecting...</h1>

            <button onClick={signIn}>Login</button>
        </>
    );
}
