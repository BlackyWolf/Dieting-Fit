import { NavLink } from 'react-router-dom';
import { Logo } from './branding';
import { Container } from './Container';
import { NavBar } from './navigation';

export const TopNav = () => {
    return (
        <div className="bg-gray-100 shadow">
            <Container padding="py-4" flex alignment="center">
                <Logo />

                <NavBar>
                    <NavLink to="/">Home</NavLink>
                </NavBar>
            </Container>
        </div>
    );
}
