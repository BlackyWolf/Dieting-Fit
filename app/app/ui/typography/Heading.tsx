import { PropsWithChildren, ReactNode } from 'react';
import { joinClasses } from '~/utilities';

type Size = '1' | '2' | '3' | '4' | '5' | '6';

type Properties = PropsWithChildren<{
    divider?: boolean;
    margin?: string;
    size: Size;
}>;

function getHeadingElement(size: Size, classes: string, children: ReactNode) {
    switch (size) {
        case '1': return <h1 className={classes}>{children}</h1>;
        case '2': return <h2 className={classes}>{children}</h2>;
        case '3': return <h3 className={classes}>{children}</h3>;
        case '4': return <h4 className={classes}>{children}</h4>;
        case '5': return <h5 className={classes}>{children}</h5>;
        case '6': return <h6 className={classes}>{children}</h6>;
    }
}

function getSize(size: Size) {
    switch (size) {
        case '1': return 'text-6xl';
        case '2': return 'text-5xl';
        case '3': return 'text-4xl';
        case '4': return 'text-3xl';
        case '5': return 'text-2xl';
        case '6': return 'text-lg';
    }
}

export const Heading = ({ children, divider = false, margin, size }: Properties) => {
    const classes = joinClasses(
        'font-medium',
        getSize(size),
        margin
    );

    return (
        <>
            {getHeadingElement(size, classes, children)}

            {divider && <hr className="my-4" />}
        </>
    )
}
