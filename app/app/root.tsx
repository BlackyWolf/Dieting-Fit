import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from 'remix';
import type { LinksFunction, LoaderFunction, MetaFunction } from 'remix';
import { md5 } from './utilities';
import css from './styles/main.css';
import { UserProvider } from './providers';
import { MainLayout } from './ui';

export const links: LinksFunction = () => {
    return [
        { rel: 'stylesheet', href: css }
    ];
};

export const loader: LoaderFunction = () => {
    // TODO: Change to use authenticated user
    const email = process.env.TEST_USER_EMAIL;
    const name = process.env.TEST_USER_NAME;

    return {
        user: {
            email,
            imageUrl: 'https://www.gravatar.com/avatar/' + md5(email || ''),
            name
        }
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
                <UserProvider user={data.user}>
                    <MainLayout>
                        <Outlet />
                    </MainLayout>
                </UserProvider>

                <ScrollRestoration />

                <Scripts />

                <LiveReload />
            </body>
        </html>
    );
}
