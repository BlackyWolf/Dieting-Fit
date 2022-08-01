import { Button, Logo } from '@/components';
import { B2C_REDIRECT_URI } from '@/variables';
import { useMsal } from '@azure/msal-react';
import { scopes } from './msal';

export const SignedOut = () => {
    const { instance } = useMsal();

    function signIn() {
        instance.loginRedirect({ redirectUri: B2C_REDIRECT_URI, scopes });
    }

    return (
        <div className="flex flex-grow bg-gray-50">
            <div className="flex flex-col bg-white m-auto p-8 rounded-md shadow">
                <Logo className="mb-6 mx-auto" />

                <p className="text-2xl mb-6">
                    You have signed out successfully
                </p>

                <Button color="primary" full onClick={signIn}>
                    Log back in
                </Button>
            </div>
        </div>
    );
}
