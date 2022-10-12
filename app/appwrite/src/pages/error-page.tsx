import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
    const error = useRouteError() as any;

    console.log(error);

    return (
        <div>
            <h1>Oops!</h1>

            <p>An unexpected error has occurred.</p>

            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};
