import { account } from '@/utilities/appwrite';
import { APP_DOMAIN_URL } from '@/variables';

export const sendEmailVerification = async () => {
    const emailRedirectUrl = new URL(`${APP_DOMAIN_URL}/account/email/verification`);

    await account.createVerification(emailRedirectUrl.href);
};
