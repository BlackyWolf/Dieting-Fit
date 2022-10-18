import { StytchProvider } from '@stytch/nextjs';
import type { AppProps } from 'next/app';
import { AuthGuard, MainLayout, StytchInitialized } from '../components';
import '../styles/globals.css';
import { stytch } from '../utilities/stytch';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StytchProvider stytch={stytch}>
            <StytchInitialized>
                <AuthGuard>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </AuthGuard>
            </StytchInitialized>
        </StytchProvider>
    );
}

export default MyApp;
