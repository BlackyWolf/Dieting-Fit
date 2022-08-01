import { MainLayout } from '@/components';
import { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

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
 * An array of items used to build the React Router routes.
 */
export const appRoutes: AppRoute[] = [
    { path: '', element: <Navigate to='/dashboard' replace />, index: true },
    { path: 'dashboard', element: <Dashboard /> },
];

function buildRoute({ children, element, index, path }: AppRoute) {
    if (children && children.length > 0) {
        return (
            <Route path={path} element={element} key={crypto.randomUUID()}>
                {children.map(buildRoute)}
            </Route>
        );
    }

    return <Route path={path} element={element} key={crypto.randomUUID()} index={index} />;
}

/**
 * Builds the mapping of component pages to React Router routes for navigation.
 */
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                {appRoutes.map(buildRoute)}
            </Route>
        </Routes>
    );
}
