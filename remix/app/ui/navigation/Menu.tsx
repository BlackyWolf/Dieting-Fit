import { Children, Fragment, PropsWithChildren } from 'react';
import { Menu as HuiMenu, Transition } from '@headlessui/react';

type Properties = PropsWithChildren<{

}>;

export const Menu = ({ children }: Properties) => {
    const menuNodes = Children.toArray(children);
    const menuButton = menuNodes[0];
    const menuItems = menuNodes.slice(1);

    return (
        <HuiMenu as="div" className="relative inline-block text-left">
            {menuButton}

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <HuiMenu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-1">
                        {menuItems}
                    </div>
                </HuiMenu.Items>
            </Transition>
        </HuiMenu>
    );
}
