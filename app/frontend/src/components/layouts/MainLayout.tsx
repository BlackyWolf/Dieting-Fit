import { Outlet } from 'react-router-dom';
import { NavBar } from '../navigation/NavBar';
import { Container } from './Container';

export const MainLayout = () => {
    return (
        <>
            <NavBar />

            <Container>
                <main>
                    <Outlet />
                </main>
            </Container>
        </>
    );
}
