import { account } from "@/utilities/appwrite";

interface UserSessionRequest {
    email: string;
    password: string;
}

export const createUserSession = async ({ email, password }: UserSessionRequest) => {
    return await account.createEmailSession(email, password);
};
