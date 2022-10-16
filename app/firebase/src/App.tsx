import { Outlet } from 'react-router-dom';
import { AuthGuard } from './auth';
import { MainLayout } from './components';

const anonymousRoutes = [
    '/'
];

export const App = () => {
    return (
        <MainLayout>
            <AuthGuard anonymousRoutes={anonymousRoutes}>
                <Outlet />
            </AuthGuard>
        </MainLayout>
    )
};
