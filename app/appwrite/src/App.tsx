import { Outlet } from 'react-router-dom';
import { AuthGuard } from './auth';
import { Layout } from './components';

export const anonymousRoutes = [
    '/',
    '/login'
];

export const App = () => {
    return (
        <AuthGuard anonymousRoutes={anonymousRoutes}>
            <Layout>
                <Outlet />
            </Layout>
        </AuthGuard>
    );
};
