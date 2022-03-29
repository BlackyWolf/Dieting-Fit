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
import { Footer, TopNav } from './ui';
import { getAuthenticatedUserAsync } from './data/user';

export const links: LinksFunction = () => {
    return [
        { rel: 'stylesheet', href: css }
    ];
};

export const loader: LoaderFunction = async ({ request }) => {
    const user = await getAuthenticatedUserAsync(request);
    const url = new URL(request.url);
    const path = url.pathname;

    if (!user && path !== '/signin' && path !== '/register') {
        return redirect('/signin');
    }

    if (user && (path === '/signin' || path === '/register')) {
        return redirect('/');
    }

    return {
        path,
        user
    };
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
                        <div className="flex flex-col flex-grow">
                            <TopNav />

                            <main className="flex-grow">
                                <Outlet />
                            </main>

                            <Footer margin="mt-auto" />
                        </div>
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
