import { joinClasses } from '../utilities/css';
import { MouseEventHandler, PropsWithChildren } from 'react';

type ButtonColor = 'blue' | 'gray' | 'green';
type ButtonRadius = 'sm' | 'md' | 'lg' | 'full' | 'none';
type ButtonSize = 'sm' | 'md' | 'lg';

type Properties = PropsWithChildren<{
    className?: string;
    color: ButtonColor;
    disabled?: boolean;
    fullWidth?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    outline?: boolean;
    radius?: ButtonRadius;
    size?: ButtonSize;
    type?: 'button' | 'reset' | 'submit';
}>;

function getBaseColor(color: ButtonColor, disabled: boolean) {
    if (disabled) return;

    switch (color) {
        case 'blue': return 'focus:ring-blue-400';
        case 'gray': return 'focus:ring-gray-400';
        case 'green': return 'focus:ring-green-400';
    }
}

function getBackgroundColor(color: ButtonColor, outline: boolean, disabled: boolean) {
    if (outline) {
        switch (color) {
            case 'blue': return 'hover:bg-blue-500';
            case 'gray': return 'hover:bg-gray-500';
            case 'green': return 'hover:bg-green-500';
        }
    }

    if (disabled) {
        switch (color) {
            case 'blue': return 'bg-blue-200';
            case 'gray': return 'bg-gray-200';
            case 'green': return 'bg-green-200';
        }
    }

    switch (color) {
        case 'blue': return 'bg-blue-500 hover:bg-blue-600';
        case 'gray': return 'bg-gray-500 hover:bg-gray-600';
        case 'green': return 'bg-green-500 hover:bg-green-600';
    }
}

function getBorderColor(color: ButtonColor, outline: boolean, disabled: boolean) {
    if (!outline) return;

    if (disabled) {
        switch (color) {
            case 'blue': return 'border-blue-200';
            case 'gray': return 'border-gray-200';
            case 'green': return 'border-green-200';
        }
    }

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

function getTextColor(color: ButtonColor, outline: boolean, disabled: boolean) {
    if (!outline) return 'text-white';

    if (disabled) {
        switch (color) {
            case 'blue': return 'text-blue-300';
            case 'gray': return 'text-gray-300';
            case 'green': return 'text-green-300';
        }
    }

    switch (color) {
        case 'blue': return 'text-blue-500 hover:text-white';
        case 'gray': return 'text-gray-500 hover:text-white';
        case 'green': return 'text-green-500 hover:text-white';
    }
}

export const Button = ({
    children,
    className,
    color,
    disabled = false,
    fullWidth = false,
    onClick,
    outline = false,
    radius = 'md',
    size = 'md',
    type = 'button'
}: Properties) => {
    const classes = joinClasses(
        'flex justify-center border focus:outline-none text-sm',
        'focus:ring-2 focus:ring-offset-2 transition duration-150 font-semibold',
        getSize(size),
        getRadius(radius),
        getBaseColor(color, disabled),
        getBackgroundColor(color, outline, disabled),
        getBorderColor(color, outline, disabled),
        getTextColor(color, outline, disabled),
        fullWidth ? 'w-full' : '',
        outline ? 'border' : 'border-transparent',
        className
    );

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
