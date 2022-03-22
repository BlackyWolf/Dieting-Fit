import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    redirect,
    Scripts,
    ScrollRestoration,
    useActionData
} from 'remix';
import type { ActionFunction, LinksFunction, MetaFunction } from 'remix';
import css from './styles/main.css';
import { UserProvider } from './providers';
import { MainLayout } from './ui';
import { getAuthenticatedUser } from './data';

export const links: LinksFunction = () => {
    return [
        { rel: 'stylesheet', href: css }
    ];
};

export const action: ActionFunction = ({ request }) => {
    const user = getAuthenticatedUser(request);
    const url = new URL(request.url);

    if (!user && url.pathname !== '/login') {
        return redirect('/login');
    }

    return {
        user
    };

    // return {
    //     user: {
    //         email,
    //         imageUrl: 'https://www.gravatar.com/avatar/' + md5(email || ''),
    //         name
    //     }
    // };
};

export const meta: MetaFunction = () => {
    return { title: 'Dieting Fit' };
};

export default function App() {
    const data = useActionData();

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />

                <meta name="viewport" content="width=device-width,initial-scale=1" />

                <Meta />

                <Links />
            </head>

            <body>
                {data.user && (
                    <UserProvider user={data.user}>
                        <MainLayout>
                            <Outlet />
                        </MainLayout>
                    </UserProvider>
                )}

                {!data.user && (
                    <Outlet />
                )}

                <ScrollRestoration />

                <Scripts />

                <LiveReload />
            </body>
        </html>
    );
}
