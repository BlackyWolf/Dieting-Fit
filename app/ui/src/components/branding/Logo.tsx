import { PropsWithChildren } from 'react';

type LogoSize = 'sm' | 'md' | 'lg';

interface Properties {
    className?: string;
    size?: LogoSize;
    title?: boolean;
}

export const Logo = ({ className, size = 'md', title = true }: Properties) => {
    return (
        <div className={className}>

        </div>
    );
}
