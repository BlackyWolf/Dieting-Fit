import { faGauge, faGear, IconDefinition } from '@fortawesome/pro-duotone-svg-icons';
import { ReactElement } from 'react';
import { Dashboard } from '../pages';

export interface AppRoute {
    children?: AppRoute[];
    element: ReactElement;
    index?: boolean;
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
    { to: '/', name: 'Dashboard', icon: faGauge }
];

export const userMenu: NavLink[] = [
    { to: '/user/settings', name: 'Settings', icon: faGear }
];
