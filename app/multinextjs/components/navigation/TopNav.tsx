import { useStytch, useStytchUser } from '@stytch/nextjs';
import { User } from '@stytch/vanilla-js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Logo } from '../branding';
import { Button } from '../Button';

function getEmail(user: User | null) {
    if (!user) return;

    return user.emails[0].email;
}

export const TopNav = () => {
    const router = useRouter();
    const stytch = useStytch();
    const { user } = useStytchUser();

    const email = useMemo(() => getEmail(user), [user]);

    async function signOut() {
        await stytch.session.revoke();

        router.push('/signin');
    }

    return (
        <nav className="flex border-b py-4 px-12 items-center">
            <Link href="/">
                <a>
                    <Logo size="sm" />
                </a>
            </Link>

            <span className="ml-auto mr-6">{email}</span>

            <Button color="blue" outline onClick={signOut}>Signout</Button>
        </nav>
    );
};
