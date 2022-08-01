import { joinClasses } from '@/utilities';
import { faUserChef } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';

interface Properties {
    className?: string;
    loading?: boolean;
}

export const Loader = ({ className, loading }: Properties) => {
    if (!loading) return null;

    const css = joinClasses(
        'text-lime-500',
        className
    );

    return (
        <FontAwesomeIcon icon={faUserChef} size="3x" className={css} beatFade />
    );
}
