import { MouseEventHandler, PropsWithChildren } from 'react';
import { joinClasses } from '../../utilities';

export type ButtonColor = 'primary' | 'secondary' | 'transparent';
export type ButtonRoundness = 'sm' | 'md' | 'lg' | 'pill' | 'none';
export type ButtonSize = 'sm' | 'md' | 'lg';

function getButtonColor(color: ButtonColor, disabled: boolean, outline?: boolean) {
    if (disabled) {
        return 'text-gray-400 focus:ring-gray-200 ' + outline
            ? 'border-gray-300'
            : 'border-bg-300';
    }

    switch (color) {
        case 'primary': return 'focus:ring-blue-400 ' + outline
            ? 'border-blue-500 text-blue-600'
            : 'bg-blue-500 hover:bg-blue-600 text-white';

        case 'transparent': return 'focus:ring-slate-200 text-slate-400 ' + outline
            ? 'border-slate-300'
            : '';

        default: return;
    }
}

function getButtonRoundness(roundness: ButtonRoundness) {
    switch (roundness) {
        case 'sm': return 'rounded';
        case 'md': return 'rounded-md';
        case 'lg': return 'rounded-lg';
        case 'pill': return 'rounded-full';

        default: return;
    }
}

function getButtonSize(size: ButtonSize) {
    switch (size) {
        case 'sm': return 'px-2 py-1 text-sm';
        case 'md': return 'px-4 py-2 text-sm';
        case 'lg': return 'px-6 py-3';

        default: return;
    }
}

type ButtonProperties = {
    className?: string;
    color: ButtonColor;
    disabled?: boolean;
    full?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    outline?: boolean;
    roundness?: ButtonRoundness;
    size?: ButtonSize;
    type?: 'button' | 'reset' | 'submit';
};

const buildButtonCss = ({
    className,
    color,
    disabled = false,
    full = true,
    outline,
    roundness = 'md',
    size = 'md'
}: ButtonProperties) => joinClasses(
    'flex justify-center transition duration-150 font-bold border font-medium',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    full ? 'w-full' : '',
    outline ? 'border-transparent shadow-sm' : '',
    getButtonColor(color, disabled, outline),
    getButtonRoundness(roundness),
    getButtonSize(size),
    className
);

type Properties = PropsWithChildren<ButtonProperties>;

export const Button = (properties: Properties) => {
    const css = buildButtonCss(properties);

    const { children, disabled, onClick, type } = properties;

    return (
        <button type={type} className={css} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}
