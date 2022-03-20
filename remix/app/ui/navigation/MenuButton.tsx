import { Menu as HuiMenu } from '@headlessui/react';
import { PropsWithChildren } from 'react';

type Properties = PropsWithChildren<{
    className?: string;
}>;

export const MenuButton = ({ children, className }: Properties) => {
    return (
        <HuiMenu.Button className={className}>
            {children}
        </HuiMenu.Button>
    );
}
