import { verifyEmail } from '@/auth';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const VerifyEmail = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        (async function () {
            const userId = searchParams.get('userId');
            const secret = searchParams.get('secret');

            if (userId && secret) {
                await verifyEmail({ userId, secret });

                navigate('/');
            }
        }());
    }, []);

    return (
        <h1>Email verification complete!</h1>
    );
};
