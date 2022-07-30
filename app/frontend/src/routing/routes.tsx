import { MainLayout } from '../components';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faIdCard } from '@fortawesome/pro-duotone-svg-icons';
import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import {
    Dashboard
} from '../pages';

/**
 * Represents a displayable component navigable from the URI.
 */
export interface AppRoute {
    children?: AppRoute[];
    element: ReactElement;
    index?: boolean;
    path?: string;
}

/**
 * Represents a navigable link.
 */
export interface NavLink {
    icon: IconDefinition;
    name: string;
    to: string;
}

/**
 * An array of items used to build the React Router routes.
 */
export const appRoutes: AppRoute[] = [
    { path: '/', element: <MainLayout />, children: [
        { path: 'dashboard', element: <Dashboard /> },
        { path: '*', element: <Navigate to='/dashboard' replace /> }
    ] }

];

/**
 * An array of items to use for building the navigation bar.
 */
export const navigation: NavLink[] = [
    { icon: faHouse, name: 'Dashboard', to: '/' }
];

export const userMenu: NavLink[] = [
    { icon: faIdCard, name: 'Profile', to: '/user/profile' }
];
