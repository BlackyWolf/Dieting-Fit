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
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            return error as FirebaseError;
        }
    };
};
