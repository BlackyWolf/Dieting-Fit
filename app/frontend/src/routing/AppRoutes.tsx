import { Route, Routes } from 'react-router-dom';
import { appRoutes } from './routes';

/**
 * Builds the mapping of component pages to React Router routes for navigation.
 */
export const AppRoutes = () => {
    return (
        <Routes>
            {appRoutes.map(({ element, path }) => (
                <Route path={path} element={element} key={path} />
            ))}
        </Routes>
    );
}
