import { AppRoutes } from '../routing';
import { NavBar } from './NavBar';

export const MainLayout = () => {
    return (
        <>
            <NavBar />

            <main>
                <AppRoutes />
            </main>
        </>
    );
}
