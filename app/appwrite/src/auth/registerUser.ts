import { account } from '@/utilities/appwrite';
import { APP_DOMAIN_URL } from '@/variables';
import { ID } from 'appwrite';

interface RegisterUserRequest {
    email: string;
    name?: string;
    password: string;
}

export const registerUser = async ({ email, name, password }: RegisterUserRequest) => {
    return await account.create(
        ID.unique(),
        email,
        password,
        name
    );
};
