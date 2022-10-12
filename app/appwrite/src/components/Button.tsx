import { joinClasses } from '@/utilities/css';
import { MouseEventHandler, PropsWithChildren } from 'react';
import { Link, To } from 'react-router-dom';

type ButtonColor = 'blue' | 'gray' | 'green';
type ButtonRadius = 'sm' | 'md' | 'lg' | 'full' | 'none';
type ButtonSize = 'sm' | 'md' | 'lg';

type Properties = PropsWithChildren<{
    className?: string;
    color: ButtonColor;
    fullWidth?: boolean;
    link?: To;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    outline?: boolean;
    radius?: ButtonRadius;
    size?: ButtonSize;
    type?: 'button' | 'reset' | 'submit';
}>;

function getBaseColor(color: ButtonColor) {
    switch (color) {
        case 'blue': return 'focus:ring-blue-400';
        case 'gray': return 'focus:ring-gray-400';
        case 'green': return 'focus:ring-green-400';
    }
}

function getBackgroundColor(color: ButtonColor, outline: boolean) {
    if (outline) return;

    switch (color) {
        case 'blue': return 'bg-blue-500 hover:bg-blue-600';
        case 'gray': return 'bg-gray-500 hover:bg-gray-600';
        case 'green': return 'bg-green-500 hover:bg-green-600';
    }
}

function getBorderColor(color: ButtonColor, outline: boolean) {
    if (!outline) return;

    switch (color) {
        case 'blue': return 'border-blue-500';
        case 'gray': return 'border-gray-500';
        case 'green': return 'border-green-500';
    }
}

function getRadius(radius: ButtonRadius) {
    switch (radius) {
        case 'sm': return 'rounded';
        case 'md': return 'rounded-md';
        case 'lg': return 'rounded-lg';
        case 'full': return 'rounded-full';
    }
}

function getSize(size: ButtonSize) {
    switch (size) {
        case 'sm': return 'px-2 py-1';
        case 'md': return 'px-4 py-2';
        case 'lg': return 'px-6 py-3';
    }
}

function getTextColor(color: ButtonColor, outline: boolean) {
    if (!outline) return 'text-white';

    switch (color) {
        case 'blue': return 'text-blue-500';
        case 'gray': return 'text-gray-500';
        case 'green': return 'text-green-500';
    }
}

export const Button = ({
    children,
    className,
    color,
    fullWidth = false,
    link,
    onClick,
    outline = false,
    radius = 'md',
    size = 'md',
    type = 'button'
}: Properties) => {
    const classes = joinClasses(
        'flex justify-center border border-transparent focus:outline-none text-sm',
        'focus:ring-2 focus:ring-offset-2 transition duration-150 font-semibold',
        getSize(size),
        getRadius(radius),
        getBaseColor(color),
        getBackgroundColor(color, outline),
        getBorderColor(color, outline),
        getTextColor(color, outline),
        fullWidth ? 'w-full' : '',
        className
    );

    if (link) {
        return (
            <Link to={link} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
