import { joinClasses } from '@/utilities/css';
import { faBars, faBell, faCircleUser, faMagnifyingGlass, faXmark } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useUser } from 'reactfire';
import { Logo } from './branding';

interface UiLink {
    name: string;
    to: string;
}

const navigation: UiLink[] = [
    { name: 'Home', to: '/' }
];

const userMenu: UiLink[] = [
    { name: 'Profile', to: '/account/profile' },
    { name: 'Settings', to: '/account/settings/profile' },
    { name: 'Logout', to: '/account/signout' }
];

export const AuthenticatedNavbar = () => {
    const { data: user } = useUser();

    return (
        <Disclosure as="header" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
                        <div className="relative flex h-16 justify-between">
                            <div className="relative z-10 flex px-2 lg:px-0">
                                <div className="flex flex-shrink-0 items-center">
                                    <Logo size="sm" />
                                </div>
                            </div>
                            <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                                <div className="w-full sm:max-w-xs">
                                    <label htmlFor="search" className="sr-only">
                                        Search
                                    </label>

                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="text-gray-400" />
                                        </div>

                                        <input
                                            id="search"
                                            name="search"
                                            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10 flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    {open ? (
                                        <FontAwesomeIcon icon={faXmark} size="lg" className="block" />
                                    ) : (
                                        <FontAwesomeIcon icon={faBars} size="lg" className="block" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                                <button
                                    type="button"
                                    className="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="sr-only">View notifications</span>

                                    <FontAwesomeIcon icon={faBell} size="lg" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-4 flex-shrink-0">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            <span className="sr-only">Open user menu</span>

                                            {user?.photoURL && (
                                                <img className="h-8 w-8 rounded-full" src={user.photoURL || ''} alt="" />
                                            )}

                                            {(!user || !user.photoURL) && (
                                                <FontAwesomeIcon icon={faCircleUser} size="2x" className="text-slate-500" />
                                            )}
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {userMenu.map(({ name, to }) => (
                                                <Menu.Item key={name}>
                                                    {({ active }) => (
                                                        <Link
                                                            to={to}
                                                            className={joinClasses(
                                                                active ? 'bg-gray-100' : '',
                                                                'block py-2 px-4 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            {name}
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                        <nav className="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
                            {navigation.map(({ name, to }) => (
                                <NavLink
                                    key={name}
                                    to={to}
                                    className={({ isActive }) => joinClasses(
                                        isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                        'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
                                    )}
                                >
                                    {name}
                                </NavLink>
                            ))}
                        </nav>
                    </div>

                    <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map(({ name, to }) => (
                                <Disclosure.Button
                                    key={name}
                                    as={NavLink}
                                    to={to}
                                    className={({ isActive }: { isActive: boolean }) => joinClasses(
                                        isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                        'block rounded-md py-2 px-3 text-base font-medium'
                                    )}
                                >
                                    {name}
                                </Disclosure.Button>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pt-4 pb-3">
                            <div className="flex items-center px-4">
                                <div className="flex-shrink-0">
                                    {user?.photoURL && (
                                        <img className="h-8 w-8 rounded-full" src={user.photoURL || ''} alt="" />
                                    )}

                                    {(!user || !user.photoURL) && (
                                        <FontAwesomeIcon icon={faCircleUser} size="2x" className="text-slate-500" />
                                    )}
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">{user?.displayName}</div>
                                    <div className="text-sm font-medium text-gray-500">{user?.email}</div>
                                </div>
                                <button
                                    type="button"
                                    className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="sr-only">View notifications</span>

                                    <FontAwesomeIcon icon={faBell} size="lg" />
                                </button>
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                                {userMenu.map(({ name, to }) => (
                                    <Disclosure.Button
                                        key={name}
                                        as={NavLink}
                                        to={to}
                                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        {name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};
