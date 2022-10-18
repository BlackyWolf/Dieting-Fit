import { useStytchUser } from '@stytch/nextjs';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect, useState } from 'react';

type Properties = PropsWithChildren<{}>;

export const AuthGuard = ({ children }: Properties) => {
    const [authorized, setAuthorized] = useState(false);
    const router = useRouter();
    const { user } = useStytchUser();

    function authCheck(url: string) {
        // redirect to login page if accessing a private page and not logged in
        const publicPaths = ['/signin'];

        const path = url.split('?')[0];

        if (!user && !publicPaths.includes(path)) {
            setAuthorized(false);

            router.push({
                pathname: '/signin',
                query: { returnUrl: router.asPath }
            });
        } else {
            setAuthorized(true);
        }
    }

    useEffect(() => {
        // on initial load - run auth check
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false
        const hideContent = () => setAuthorized(false);

        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (authorized ? <>{children}</> : null);
};
