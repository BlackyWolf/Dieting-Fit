import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from 'remix';
import type { LinksFunction, MetaFunction } from 'remix';
import { MainLayout } from './ui';
import css from './styles/main.css';

export const links: LinksFunction = () => {
    return [
        { rel: 'stylesheet', href: css }
    ];
};

export const meta: MetaFunction = () => {
    return { title: 'New Remix App' };
};

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />

                <meta name="viewport" content="width=device-width,initial-scale=1" />

                <Meta />

                <Links />
            </head>

            <body>
                <MainLayout>
                    <Outlet />
                </MainLayout>

                <ScrollRestoration />

                <Scripts />

                <LiveReload />
            </body>
        </html>
    );
}
