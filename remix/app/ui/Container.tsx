import { PropsWithChildren } from 'react';
import { joinClasses } from '~/utilities';

type Alignment = '' | 'center';

type Properties = PropsWithChildren<{
    alignment?: Alignment;
    center?: boolean;
    flex?: boolean;
    padding?: string;
}>;

function getAlignment(alignment: Alignment) {
    switch (alignment) {
        case 'center':
            return 'items-center';

        default:
            return '';
    }
}

export const Container = ({
    alignment = '',
    center = true,
    children,
    flex = false,
    padding = 'p-4'
}: Properties) => {
    const classes = joinClasses(
        'container',
        getAlignment(alignment),
        center ? 'mx-auto' : '',
        flex ? 'flex' : '',
        padding
    );

    return (
        <div className={classes}>
            {children}
        </div>
    );
}
