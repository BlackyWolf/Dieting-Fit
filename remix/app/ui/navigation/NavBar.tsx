import { Children, PropsWithChildren, ReactElement, ReactNode } from 'react';
import { NavLink } from './NavLink';

type Properties = PropsWithChildren<{}>;

export const NavBar = ({ children }: Properties) => {
    return (
        <nav className="ml-8">
            <ul>
                {Children.map(children, (child, index) => (
                    <li key={index}>
                        {child}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
