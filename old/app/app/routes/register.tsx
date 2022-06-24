import { Form, Link, redirect, useActionData, useTransition } from 'remix';
import { useState } from 'react';
import type { ActionFunction } from 'remix';
import { badRequest, internalServerError } from '~/data/responses.server';
import { buildCreateUserData, createUserSession, registerUserAsync, validateRegisterUserFormAsync } from '~/data/user';
import { Logo, PrimaryButton } from '~/ui';

// Photo by Burst from Pexels
import backgroundImage from '~/images/pexels-burst-374052.jpg';
import { joinClasses } from '~/utilities';

export const action: ActionFunction = async ({ request }) => {
    const form = await request.formData();

    const createUserData = buildCreateUserData(form);

    const formModel = await validateRegisterUserFormAsync(createUserData);

    if (formModel) return badRequest(formModel);

    const user = await registerUserAsync(createUserData);

    if (!user) return internalServerError();

    const sessionCookie = await createUserSession(user.id);

    return redirect('/', {
        headers: {
            'Set-Cookie': sessionCookie
        }
    });
};

export default function Login() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [useEmailAsUsername, setUseEmailAsUsername] = useState(false);
    const transition = useTransition();
    const action = useActionData();

    const submitting = transition.state === 'submitting';

    function toggleEmailAsUsername() {
        const newStatus = !useEmailAsUsername;
        setUseEmailAsUsername(newStatus);

        setUsername(newStatus ? email : '');
    }

    function updateEmail(event: any) {
        setEmail(event.target.value);

        if (useEmailAsUsername) setUsername(event.target.value);
    }

    function updateUsername(event: any) {
        setUsername(event.target.value);
    }

    return (
        <div className="min-h-full flex flex-grow">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="flex flex-col items-center">
                        <Logo />

                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Register a new account</h2>

                        <p className="mt-2 text-sm text-gray-600">
                            Or{' '}
                            <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                                sign in to your existing account
                            </Link>
                        </p>
                    </div>

                    <div className="mt-8">
                        <div className="mt-6">
                            <Form method="post">
                                <fieldset disabled={submitting} className="space-y-6">
                                    {action?.formError && (
                                        <p className="bg-red-100 border border-red-200 px-4 py-2 rounded-md">
                                            <small className="text-red-500 font-bold">{action?.formError}</small>
                                        </p>
                                    )}

                                    <div>
                                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                            Username
                                        </label>

                                        <div className="mt-1">
                                            <input
                                                id="username"
                                                name="username"
                                                type="username"
                                                required
                                                readOnly={useEmailAsUsername}
                                                value={useEmailAsUsername ? email : username}
                                                onInput={updateUsername}
                                                className={joinClasses(
                                                    'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
                                                    useEmailAsUsername ? 'bg-gray-200' : ''
                                                )}
                                            />
                                        </div>

                                        <p><small className="text-red-500 font-bold">{action?.fieldErrors?.username}</small></p>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email address
                                        </label>

                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                onInput={updateEmail}
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <p><small className="text-red-500 font-bold">{action?.fieldErrors?.email}</small></p>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="email-as-username"
                                            name="email-as-username"
                                            type="checkbox"
                                            className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                                            value="true"
                                            checked={useEmailAsUsername}
                                            onChange={toggleEmailAsUsername}
                                        />

                                        <label htmlFor="email-as-username" className="ml-2 block text-sm text-gray-900">
                                            Use email as username
                                        </label>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>

                                        <div className="mt-1">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <p><small className="text-red-500 font-bold">{action?.fieldErrors?.password}</small></p>
                                    </div>

                                    <PrimaryButton disabled={submitting}>
                                        {submitting ? 'Submitting...' : 'Register'}
                                    </PrimaryButton>
                                </fieldset>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block relative w-0 flex-1">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={backgroundImage}
                    alt="Registration Background, original photo taken by Burst"
                    title="Registration Background, original photo taken by Burst"
                />
            </div>
        </div>
    );
}