import { Authenticated, Unauthenticated } from '@/auth';
import { PropsWithChildren } from 'react';
import { AuthenticatedNavbar } from '@/components/AuthenticatedNavbar';
import { UnauthenticatedNavbar } from '@/components/UnauthenticatedNavbar';

type Properties = PropsWithChildren<{}>;

export const MainLayout = ({ children }: Properties) => {
    return (
        <>
            <Authenticated>
                <AuthenticatedNavbar />
            </Authenticated>
            <Unauthenticated>
                <UnauthenticatedNavbar />
            </Unauthenticated>

            <main className="w-full mx-auto max-w-7xl p-2 sm:p-4 lg:p-8">
                {children}
            </main>
        </>
    );
};
