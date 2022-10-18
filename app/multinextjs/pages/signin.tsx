import { StytchLogin, useStytchUser } from '@stytch/nextjs';
import { Products, StytchEvent, StytchEventType, StytchLoginConfig } from '@stytch/vanilla-js';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import '../styles/SignIn.module.css';
import { APP_URL } from '../utilities/variables';

interface Properties {

}

const configuration: StytchLoginConfig = {
    passwordOptions: {
        loginExpirationMinutes: 30,
        loginRedirectURL: APP_URL,
        resetPasswordExpirationMinutes: 30,
        resetPasswordRedirectURL: APP_URL
    },
    products: [Products.emailMagicLinks, Products.otp, Products.passwords]
};

const SignIn: NextPage<Properties> = ({ }: Properties) => {
    const { user } = useStytchUser();
    const router = useRouter();

    function onEvent({ type }: StytchEvent) {
        if ([StytchEventType.PasswordAuthenticate, StytchEventType.PasswordCreate].includes(type)) {
            const returnUrl = router.query.returnUrl as string;

            router.push(returnUrl || '/');
        }
    }

    if (user) {
        router.push('/');

        return null;
    }

    return (
        <div className="flex bg-slate-50 flex-grow">
            <div className="m-auto bg-white p-8 rounded-md shadow-md">
                <StytchLogin config={configuration} callbacks={{ onEvent }} />
            </div>
        </div>
    );
};

export default SignIn
