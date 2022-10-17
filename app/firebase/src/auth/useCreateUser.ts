import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from 'reactfire';

interface CreateUserOptions {
    email: string;
    password: string;
}

export const useCreateUser = () => {
    const auth = useAuth();

    return async ({ email, password }: CreateUserOptions) => {
        try {
            const credential = await createUserWithEmailAndPassword(auth, email, password);

            return { user: credential.user };
        } catch (error) {
            return { error: error as FirebaseError };
        }
    };
};
