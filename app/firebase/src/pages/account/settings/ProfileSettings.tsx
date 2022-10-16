import { useSendEmailVerification } from '@/auth';
import { Button } from '@/components';
import { useState } from 'react';
import { useUser } from 'reactfire';

export const ProfileSettings = () => {
    const [emailSent, setEmailSent] = useState(false);
    const { data: user } = useUser();
    const sendEmailVerification = useSendEmailVerification();

    if (!user) return null;

    async function sendEmail() {
        if (emailSent) return;

        await sendEmailVerification({ user });

        setTimeout(() => setEmailSent(false), 1000)
    }

    return (
        <>
            <div>
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
