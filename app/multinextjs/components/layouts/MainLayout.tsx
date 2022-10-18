import { useStytchUser } from '@stytch/nextjs';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { SideNav, TopNav } from '../navigation';

type Properties = PropsWithChildren<{}>;

export const MainLayout = ({ children }: Properties) => {
    const { user } = useStytchUser();

    if (!user) return <>{children}</>

    return (
        <>
            <Head>
                <title>DietingFit</title>

                <meta name="description" content="Take control of your health!" />

                <link rel="icon" href="/favicon.png" />
            </Head>

            <TopNav />

            <div className="flex flex-grow">
                <SideNav className="md:w-64 lg:w-96 shadow-md bg-slate-50" />

                <main className="p-8">
                    {children}
                </main>
            </div>
        </>
    );
};
