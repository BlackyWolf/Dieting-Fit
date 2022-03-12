import { To } from 'history';
import { PropsWithChildren } from 'react';
import { Link } from 'remix';

type Properties = PropsWithChildren<{
    to: To;
}>;

export const NavLink = ({ children, to }: Properties) => {
    return (
        <Link to={to}>
            {children}
        </Link>
    );
}
