import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { AppRoutes } from './routing';

export const App = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <AppRoutes />
            </MainLayout>
        </BrowserRouter>
    );
}
