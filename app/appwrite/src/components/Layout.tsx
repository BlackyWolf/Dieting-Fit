import { Authenticated, Unauthenticated } from '@/auth';
import { PropsWithChildren } from 'react';
import { AuthenticatedNavbar } from './AuthenticatedNavbar';
import { UnauthenticatedNavbar } from './UnauthenticatedNavbar';

type Properties = PropsWithChildren<{}>;

export const Layout = ({ children }: Properties) => {
    return (
        <>
            <Authenticated>
                <AuthenticatedNavbar />
            </Authenticated>
            <Unauthenticated>
                <UnauthenticatedNavbar />
            </Unauthenticated>

            <main className="mx-auto max-w-7xl p-2 sm:p-4 lg:p-8">
                {children}
            </main>
        </>
    );
};
