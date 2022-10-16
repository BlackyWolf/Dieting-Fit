import { APP_URL } from '@/variables';
import { FirebaseError } from 'firebase/app';
import { sendEmailVerification, User } from 'firebase/auth';

interface SendEmailVerificationOptions {
    user: User | null;
}

export const useSendEmailVerification = () => {
    return async ({ user }: SendEmailVerificationOptions) => {
        if (!user) return;

        try {
            await sendEmailVerification(user, {
                handleCodeInApp: true,
                url: APP_URL
            });
        } catch (error) {
            return error as FirebaseError;
        }
    };
};
