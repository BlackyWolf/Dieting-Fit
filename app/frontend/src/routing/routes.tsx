import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHouse } from '@fortawesome/pro-duotone-svg-icons';
import { ReactElement } from 'react';

import {
    Dashboard
} from '../pages';

interface AppRoute {
    element: ReactElement;
    path: string;
}

interface NavLink {
    icon: IconDefinition;
    name: string;
    to: string;
}

/**
 * An array of items used to build the React Router routes.
 */
export const appRoutes: AppRoute[] = [
    { path: '/', element: <Dashboard /> }
];

/**
 * An array of items to use for building the navigation bar.
 */
export const navigation: NavLink[] = [
    { icon: faHouse, name: 'Dashboard', to: '/' }
];
