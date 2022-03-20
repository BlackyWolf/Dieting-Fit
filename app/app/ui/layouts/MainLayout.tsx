import { PropsWithChildren } from 'react';
import { Footer } from '../Footer';
import { TopNav } from '../TopNav';

type Properties = PropsWithChildren<{}>;

export const MainLayout = ({ children }: Properties) => {
    return (
        <div className="flex flex-col flex-grow">
            <TopNav isAuthenticated={false} />

            <main className="flex-grow">
                {children}
            </main>

            <Footer margin="mt-auto" />
        </div>
    );
}
