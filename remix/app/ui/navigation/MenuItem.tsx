import { Menu as HuiMenu } from '@headlessui/react';
import { PropsWithChildren } from 'react';

type Properties = PropsWithChildren<{}>

function getActiveClass(isActive: boolean) {
    return isActive
        ? 'bg-lime-500 text-white'
        : 'text-gray-900';
}

export const MenuItem = ({ children }: Properties) => {
    const classes = 'group flex rounded-md items-center w-full px-2 py-2 text-sm';

    return (
        <HuiMenu.Item>
            {({ active }) => (
                <button className={getActiveClass(active) + ' ' + classes}>
                    {children}
                </button>
            )}
        </HuiMenu.Item>
    );
}
