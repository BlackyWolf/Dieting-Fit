import { Loader } from '@/components';
import { InteractionType } from '@azure/msal-browser';
import { useMsalAuthentication } from '@azure/msal-react';
import { scopes } from './msal';

export const SignInRedirect = () => {
    const silentResult = useMsalAuthentication(InteractionType.Silent, { scopes });

    let silentSignInSuccess = true;

    if (silentResult.error) {
        silentSignInSuccess = false;

        silentResult.login(InteractionType.Redirect, { scopes });
    }

    return (
        <div className="flex flex-grow bg-gray-50">
            <div className="flex flex-col bg-white m-auto p-8 rounded-md shadow">
                <p className="text-2xl">
                    {silentSignInSuccess ? 'Signing user in...' : 'Redirecting to sign-in..'}
                </p>

                <Loader loading className="mt-4" />
            </div>
        </div>
    );
}
