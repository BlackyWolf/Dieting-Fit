import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
    const error = useRouteError() as any;

    console.log(error);

    return (
        <div className="bg-slate-50 flex flex-col flex-grow items-center justify-center">
            <h1 className="text-8xl font-semibold text-slate-300">Oops!</h1>

            <h3 className="text-3xl text-slate-400 mt-9 mb-6 font-thin">An unexpected error has occurred.</h3>

            <p className="text-slate-500 font-semibold text-xl">
                <em>{error.statusText || error.message}</em>
            </p>
        </div>
    );
};
