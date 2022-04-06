import { MouseEventHandler, PropsWithChildren } from 'react';
import { joinClasses } from '~/utilities';

type Color = 'gray' | 'sky' | 'transparent';
type Roundness = 'sm' | 'md' | 'lg' | 'pill' | 'none';
type Size = 'sm' | 'md' | 'lg';

function getColor(color: Color, disabled: boolean) {
    let classes = '';

    switch (color) {
        case 'gray':
            classes = 'text-white ';
            classes += disabled
                ? 'bg-gray-300 text-white'
                : 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400';
            break;
        case 'sky':
            classes = 'text-white ';
            classes += disabled
                ? 'bg-sky-300 text-white'
                : 'bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-400';
            break;
        case 'transparent':
            classes = '';
            classes += disabled
                ? ''
                : 'focus:ring-gray-400';
            break;
        default:
            classes = getColor('sky', false);
            break;
    }

    return classes;
}

function getFullness(full: boolean) {
    return full ? 'w-full' : '';
}

function getRoundness(roundness: Roundness) {
    switch (roundness) {
        case 'sm':
            return 'rounded';

        case 'md':
            return 'rounded-md';

        case 'lg':
            return 'rounded-lg';

        case 'pill':
            return 'rounded-full';

        default:
            return '';
    }
}

function getSize(size: Size) {
    switch (size) {
        case 'sm':
            return 'px-2 py-1 text-sm';

        case 'lg':
            return 'px-6 py-3';

        default:
            return 'px-4 py-2 text-sm';
    }
}

export type ButtonProperties = PropsWithChildren<{
    className?: string;
    color?: Color;
    disabled?: boolean;
    full?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    roundness?: Roundness;
    size?: Size;
    type?: 'button' | 'reset' | 'submit';
}>;

export const Button = ({
    children,
    className,
    color = 'sky',
    disabled = false,
    full = true,
    onClick,
    roundness = 'md',
    size = 'md',
    type
}: ButtonProperties) => {
    const classes = joinClasses(
        'flex justify-center shadow-sm transition duration-150 font-bold border',
        'border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2',
        getColor(color, disabled),
        getFullness(full),
        getRoundness(roundness),
        getSize(size),
        className
    );

    return (
        <button type={type} className={classes} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}
