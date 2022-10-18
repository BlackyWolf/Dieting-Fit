import { useStytchUser, useStytch } from '@stytch/nextjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const OAUTH_TOKEN = 'oauth';
const MAGIC_LINKS_TOKEN = 'magic_links';
const RESET_LOGIN = 'login';

const Authenticate = () => {
    const { user, isInitialized } = useStytchUser();
    const stytch = useStytch();
    const router = useRouter();

    useEffect(() => {
        const stytchTokenType = router?.query?.stytch_token_type?.toString();
        const token = router?.query?.token?.toString();

        if (token && stytchTokenType === OAUTH_TOKEN) {
            stytch.oauth.authenticate(token, {
                session_duration_minutes: 30,
            });
        } else if (token && stytchTokenType && [MAGIC_LINKS_TOKEN, RESET_LOGIN].includes(stytchTokenType)) {
            stytch.magicLinks.authenticate(token, {
                session_duration_minutes: 30,
            });
        }
    }, [router, stytch]);

    useEffect(() => {
        if (!isInitialized) {
            return;
        }

        if (user) {
            router.replace('/');
        }
    }, [router, user, isInitialized]);

    return null;
};

export default Authenticate;
