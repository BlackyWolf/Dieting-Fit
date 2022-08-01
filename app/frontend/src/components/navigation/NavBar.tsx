import { navigation, userMenu } from '@/routing';
import { joinClasses } from '@/utilities';
import { useMsal } from '@azure/msal-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faBell,
    faCircleUser,
    faMagnifyingGlass,
    faRightFromBracket,
    faTimes
} from '@fortawesome/pro-duotone-svg-icons';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../branding';
import { Button } from '../buttons';
import { Container } from '../layouts';

export const NavBar = () => {
    const { accounts, instance } = useMsal();

    let user = {
        imageUrl: '',
        username: ''
    };

    if (accounts.length > 0) {
        var account = accounts[0];

        user.username = account.username;
    }

    return (
        <Disclosure as="header" className="bg-white shadow">
            {({ open }) => (
                <Container padding="py-0">
                    <div className="lg:divide-y lg:divide-gray-200">
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
                                            className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-sky-400 focus:border-sky-400 sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10 flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-400"
                                >
                                    <span className="sr-only">Open menu</span>

                                    {open ? (
                                        <FontAwesomeIcon icon={faTimes} size="lg" className="text-gray-400" />
                                    ) : (
                                        <FontAwesomeIcon icon={faBars} size="lg" className="text-gray-400" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                                <Button color="transparent" roundness="pill" size="sm">
                                    <span className="sr-only">View notifications</span>

                                    <FontAwesomeIcon icon={faBell} size="lg" />
                                </Button>

                                <Menu as="div" className="flex-shrink-0 relative ml-4">
                                    <div>
                                        <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400">
                                            <span className="sr-only">Open user menu</span>

                                            {user?.imageUrl && (
                                                <img className="h-12 w-12 rounded-full" src={user.imageUrl} alt="" />
                                            )}

                                            {!user?.imageUrl && (
                                                <FontAwesomeIcon icon={faCircleUser} size="2x" className="text-gray-500" />
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
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                                            {userMenu.map(({ icon, name, to }) => (
                                                <Menu.Item key={name}>
                                                    {({ active }) => (
                                                        <NavLink
                                                            to={to}
                                                            className={joinClasses(
                                                                active ? 'bg-gray-100' : '',
                                                                'flex items-center block py-2 px-4 text-gray-700'
                                                            )}
                                                        >
                                                            {icon && (
                                                                <FontAwesomeIcon icon={icon} size="lg" fixedWidth className="mr-2" />
                                                            )}

                                                            {name}
                                                        </NavLink>
                                                    )}
                                                </Menu.Item>
                                            ))}

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        type="button"
                                                        className={joinClasses(
                                                            active ? 'bg-gray-100' : '',
                                                            'flex items-center block py-2 px-4 text-gray-700 w-full'
                                                        )}
                                                        onClick={() => instance.logoutRedirect()}
                                                    >
                                                        <FontAwesomeIcon icon={faRightFromBracket} size="lg" fixedWidth className="mr-2" />
                                                        Sign out
                                                    </button>
                                                )}
                                            </Menu.Item>

                                            <hr />
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                        <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
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
                        <div className="pt-2 pb-3 px-2 space-y-1">
                            {navigation.map(({ name, to }) => (
                                <Disclosure.Button
                                    key={name}
                                    as={NavLink}
                                    to={to}
                                    className={({
                                        isActive
                                    }) => joinClasses(
                                        isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                        'block rounded-md py-2 px-3 text-base font-medium'
                                    )}
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

                                <Button color="transparent" className="ml-auto">
                                    <span className="sr-only">View notifications</span>

                                    <FontAwesomeIcon icon={faBell} size="lg" />
                                </Button>
                            </div>

                            <div className="mt-3 px-2 space-y-1">
                                {userMenu.map(({ icon, name, to }) => (
                                    <Disclosure.Button
                                        key={name}
                                        as={NavLink}
                                        to={to}
                                        className="block flex items-center rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        {icon && (
                                            <FontAwesomeIcon icon={icon} size="lg" fixedWidth className="mr-2" />
                                        )}

                                        {name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </div>
                    </Disclosure.Panel>
                </Container>
            )}
        </Disclosure>
    );
}
