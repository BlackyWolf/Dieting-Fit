import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from 'reactfire';

interface SignInOptions {
    email: string;
    password: string;
}

export const useSignIn = () => {
    const auth = useAuth();

    return async ({ email, password }: SignInOptions) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            return error as FirebaseError;
        }
    };
};
