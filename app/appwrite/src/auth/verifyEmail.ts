import { account } from '@/utilities/appwrite';

interface EmailVerificationOptions {
    secret: string;
    userId: string;
}

export const verifyEmail = async ({ userId, secret }: EmailVerificationOptions) => {
    await account.updateVerification(userId, secret);
};
