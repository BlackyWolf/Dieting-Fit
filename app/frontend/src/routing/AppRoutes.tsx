import { Route, Routes } from 'react-router-dom';
import { AppRoute, appRoutes } from './routes';

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
            {appRoutes.map(buildRoute)}
        </Routes>
    );
}
