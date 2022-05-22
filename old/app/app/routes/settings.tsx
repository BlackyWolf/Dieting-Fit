import { Link, Outlet } from 'remix';
import { Container, Heading } from '~/ui';

export default function Settings() {
    return (
        <Container>
            <Heading size="1" divider>Settings</Heading>

            <div className="flex">
                <nav className="flex flex-col flex-shrink">
                    <Link to="/settings/profile">Profile</Link>
                    <Link to="/settings/advanced">Advanced</Link>
                </nav>

                <div className="flex-grow">
                    <Outlet />
                </div>
            </div>
        </Container>
    );
}
