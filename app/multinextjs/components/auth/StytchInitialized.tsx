import { useStytchUser } from '@stytch/nextjs';
import { PropsWithChildren } from 'react';

type Properties = PropsWithChildren<{

}>;

export const StytchInitialized = ({ children }: Properties) => {
    const { isInitialized } = useStytchUser();

    if (!isInitialized) return null;

    return (
        <>
            {children}
        </>
    );
};
