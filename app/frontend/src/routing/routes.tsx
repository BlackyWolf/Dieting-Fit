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

export const appRoutes: AppRoute[] = [
    { path: '/', element: <Dashboard /> }
];

export const navigation: NavLink[] = [
    { icon: faHouse, name: 'Dashboard', to: '/' }
];
