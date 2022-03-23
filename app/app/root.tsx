import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    redirect,
    Scripts,
    ScrollRestoration,
    useLoaderData
} from 'remix';
import type { LinksFunction, LoaderFunction, MetaFunction } from 'remix';
import css from './styles/main.css';
import { UserProvider } from './providers';
import { MainLayout } from './ui';
import { getAuthenticatedUser } from './data';

export const links: LinksFunction = () => {
    return [
        { rel: 'stylesheet', href: css }
    ];
};

export const loader: LoaderFunction = async ({ request }) => {
    const user = await getAuthenticatedUser(request);
    const url = new URL(request.url);

    if (!user && url.pathname !== '/login') {
        return redirect('/login');
    }

    if (user && (url.pathname === '/login' || url.pathname === '/register')) {
        return redirect('/');
    }

    return { user };
};

export const meta: MetaFunction = () => {
    return { title: 'Dieting Fit' };
};

export default function App() {
    const data = useLoaderData();

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />

                <meta name="viewport" content="width=device-width,initial-scale=1" />

                <Meta />

                <Links />
            </head>

            <body>
                {data?.user && (
                    <UserProvider user={data.user}>
                        <MainLayout>
                            <Outlet />
                        </MainLayout>
                    </UserProvider>
                )}

                {!data?.user && (
                    <Outlet />
                )}

                <ScrollRestoration />

                <Scripts />

                <LiveReload />
            </body>
        </html>
    );
}
