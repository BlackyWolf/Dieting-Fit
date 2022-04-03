import { Fragment } from 'react';
import { Link } from 'remix';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faBell,
    faMagnifyingGlass,
    faTimes
} from '@fortawesome/pro-duotone-svg-icons';
import { Disclosure, Menu as HuiMenu, Transition } from '@headlessui/react';
import { joinClasses } from '~/utilities';
import { Logo } from './branding';
import { useUser } from '~/providers';

interface UiLink {
    current?: boolean;
    name: string;
    onClick?: () => void;
    to?: string;
}

export const TopNav = () => {
    const [user] = useUser();

    const navigation: UiLink[] = [
        { current: true, name: 'Home', to: '/' },
        { current: false, name: 'About', to: '/about' }
    ];

    const userNavigation: UiLink[] = [
        { name: 'Logout', onClick: () => {

        } }
    ];

    return (
        <Disclosure as="header" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
                        <div className="relative h-16 flex justify-between">
                            <div className="relative z-10 px-2 flex lg:px-0">
                                <Link to="/" className="flex-shrink flex items-center">
                                    <Logo size="sm" resize />
                                </Link>
                            </div>
                            <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                                <div className="w-full sm:max-w-xs">
                                    <label htmlFor="search" className="sr-only">
                                        Search
                                    </label>

                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="text-gray-400" />
                                        </div>

                                        <input
                                            id="search"
                                            name="search"
                                            className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10 flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>

                                    {open ? (
                                        <FontAwesomeIcon icon={faTimes} size="lg" className="text-gray-400" />
                                    ) : (
                                        <FontAwesomeIcon icon={faBars} size="lg" className="text-gray-400" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                                <button
                                    type="button"
                                    className="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="sr-only">View notifications</span>

                                    <FontAwesomeIcon icon={faBell} size="lg" className="text-gray-400" />
                                </button>

                                <HuiMenu as="div" className="flex-shrink-0 relative ml-4">
                                    <div>
                                        <HuiMenu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <span className="sr-only">Open user menu</span>

                                            <img className="h-12 w-12 rounded-full" src={user.imageUrl} alt="" />
                                        </HuiMenu.Button>
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
                                        <HuiMenu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                                            {userNavigation.map(({ name, to }) => (
                                                <HuiMenu.Item key={name}>
                                                    {({ active }) => (
                                                        to ? (
                                                            <Link
                                                                to={to}
                                                                className={joinClasses(
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block py-2 px-4 text-sm text-gray-700'
                                                                )}
                                                            >
                                                                {name}
                                                            </Link>
                                                        ) : (
                                                            <span className="block py-2 px-4 text-sm text-gray-700">
                                                                {name}
                                                            </span>
                                                        )
                                                    )}
                                                </HuiMenu.Item>
                                            ))}
                                        </HuiMenu.Items>
                                    </Transition>
                                </HuiMenu>
                            </div>
                        </div>
                        <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
                            {navigation.map(({ current, name, to }) => (
                                <Link
                                    key={name}
                                    to={to}
                                    className={joinClasses(
                                        current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                        'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
                                    )}
                                    aria-current={current ? 'page' : undefined}
                                >
                                    {name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
                        <div className="pt-2 pb-3 px-2 space-y-1">
                            {navigation.map(({ current, name, to }) => (
                                <Disclosure.Button
                                    key={name}
                                    as={Link}
                                    to={to}
                                    className={joinClasses(
                                        current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                        'block rounded-md py-2 px-3 text-base font-medium'
                                    )}
                                    aria-current={current ? 'page' : undefined}
                                >
                                    {name}
                                </Disclosure.Button>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pt-4 pb-3">
                            <div className="px-4 flex items-center">
                                <div className="flex-shrink-0">
                                    <img className="h-12 w-12 rounded-full" src={user.imageUrl} alt="" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">{user.username}</div>
                                </div>
                                <button
                                    type="button"
                                    className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="sr-only">View notifications</span>

                                    <FontAwesomeIcon icon={faBell} size="lg" className="text-gray-400" />
                                </button>
                            </div>
                            <div className="mt-3 px-2 space-y-1">
                                {userNavigation.map(({ name, to }) => (
                                    <Disclosure.Button
                                        key={name}
                                        as={Link}
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
}
