import { Authenticated, Unauthenticated } from './auth';

export const App = () => {
    return (
        <>
            <Authenticated>
                Hi der
            </Authenticated>
            <Unauthenticated>
                Logged out
            </Unauthenticated>
        </>
    );
};
