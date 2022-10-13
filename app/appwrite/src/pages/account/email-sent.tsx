import { PropsWithChildren } from 'react';

type Properties = PropsWithChildren<{

}>;

export const EmailSent = ({ }: Properties) => {
    return (
        <div>
            <h1>A verification email has been sent</h1>

            <p>Please verify your email address.</p>
        </div>
    );
};
