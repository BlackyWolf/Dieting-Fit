import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, appRoutes } from './routes';

function buildAppRoutes({ children, element, index, path }: AppRoute): any {
    if (children && children.length > 0) {
        return (
            children.map(buildAppRoutes)
        );
    }

    return (
        <Route element={element} index={index} path={path} key={path} />
    );
}

export const AppRoutes = () => {
    return (
        <Routes>
            {appRoutes.map(buildAppRoutes)}
        </Routes>
    );
}
