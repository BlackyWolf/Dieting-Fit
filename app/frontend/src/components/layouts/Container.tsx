import { joinClasses } from '../../utilities';
import { PropsWithChildren } from 'react';

type Alignment = '' | 'center';

type Properties = PropsWithChildren<{
    alignment?: Alignment;
    center?: boolean;
    flex?: boolean;
    padding?: string;
}>;

function getAlignment(alignment: Alignment) {
    switch (alignment) {
        case 'center': return 'items-center';

        default: return '';
    }
}

/**
 * Wraps the child components for styling consistency.
 *
 * @param properties Used to configure the container.
 */
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
