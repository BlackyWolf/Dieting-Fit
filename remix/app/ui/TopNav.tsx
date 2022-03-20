import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRightFromBracket,
    faRightToBracket,
    faUserChef
} from '@fortawesome/pro-duotone-svg-icons';
import { faCircle } from '@fortawesome/pro-light-svg-icons';
import { Logo } from './branding';
import { Container } from './Container';
import { MenuButton, MenuItem, NavBar } from './navigation';
import { Menu } from './navigation';
import { Link } from 'remix';

interface Properties {
    isAuthenticated: boolean;
}

export const TopNav = ({ isAuthenticated }: Properties) => {
    return (
        <div className="bg-gray-100 shadow">
            <Container padding="py-4" flex alignment="center">
                <Logo />

                <NavBar>
                    <NavLink to="/">Home</NavLink>
                </NavBar>

                <div className="ml-auto">
                    {isAuthenticated
                        ? (
                            <Menu>
                                <MenuButton className="text-lime-500 hover:text-lime-600 transition duration-150">
                                    <span className="fa-layers fa-fw fa-3x">
                                        <FontAwesomeIcon icon={faCircle} aria-hidden={true} />
                                        <FontAwesomeIcon icon={faUserChef} aria-hidden={true} transform="shrink-6" />
                                    </span>
                                </MenuButton>

                                <MenuItem>
                                    <FontAwesomeIcon icon={faRightFromBracket} size="lg" className="mr-2" />

                                    Logout
                                </MenuItem>
                            </Menu>
                        ) : (
                            <Link to="/login">
                                <FontAwesomeIcon icon={faRightToBracket} size="2x" className="mr-2" />
                            </Link>
                        )}
                </div>
            </Container>
        </div>
    );
}
