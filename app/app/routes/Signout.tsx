import { ActionFunction, redirect, useNavigate } from 'remix';
import { signOut } from '~/data/user';
import { Logo } from '~/ui';

export const action: ActionFunction = async ({ request }) => {
    const cookie = await signOut(request);

    return redirect('/signin', {
        headers: {
            'Set-Cookie': cookie
        }
    });
};

export default function SignOut() {
    const navigate = useNavigate();

    return (
        <div className="flex-grow flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex flex-col items-center">
                    <Logo />

                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign out of your account</h2>
                </div>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" action="#" method="POST">
                        <p>
                            Are you sure you want to sign out of your account?
                        </p>

                        <div className="flex space-x-4">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign out
                            </button>

                            <button
                                type="button"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={() => navigate(-1)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
