import { useSendEmailVerification, useUpdateProfilePicture } from '@/auth';
import { Button } from '@/components';
import { faCircleUser } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useState } from 'react';
import { useUser } from 'reactfire';

export const ProfileSettings = () => {
    const [emailSent, setEmailSent] = useState(false);
    const { data: user } = useUser();
    const sendEmailVerification = useSendEmailVerification();
    const updateProfilePicture = useUpdateProfilePicture();

    if (!user) return null;

    async function sendEmail() {
        if (emailSent) return;

        await sendEmailVerification({ user });

        setTimeout(() => setEmailSent(false), 1000)
    }

    async function uploadProfilePicture(event: FormEvent<HTMLInputElement>) {
        console.log(event);
    }

    return (
        <>
            <div>
                <h6 className="font-semibold text-xl mb-6">Profile Picture</h6>

                {!user.photoURL && (
                    <FontAwesomeIcon icon={faCircleUser} size="8x" className="text-slate-500 h-32 w-32" />
                )}

                {user.photoURL && (
                    <img src={user.photoURL} title="Profile picture" className="overflow-hidden h-32 w-32 rounded-full" />
                )}

                <div>
                    <input type="file" className="mt-6" onInput={uploadProfilePicture} />
                </div>
            </div>

            <div className="mt-10">
                <h6 className="font-semibold text-xl flex items-center">
                    Email
                    {user.emailVerified ? (
                        <small className="ml-2 px-1 block bg-green-500 text-white rounded-md text-sm">Verified</small>
                    ) : (
                        <small className="ml-2 px-1 block bg-yellow-400 rounded-md text-sm">Unverified</small>
                    )}
                </h6>

                <p className="">{user.email}</p>

                {!user.emailVerified && !emailSent && (
                    <Button color="blue" className="mt-2" onClick={sendEmail}>Verify email</Button>
                )}

                {!user.emailVerified && emailSent && (
                    <Button color="blue" className="mt-2" disabled onClick={sendEmail}>Verify email</Button>
                )}
            </div>
        </>
    );
};
