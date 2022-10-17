import { updateProfile } from 'firebase/auth';
import { useUser } from 'reactfire';

interface UpdateProfilePictureOptions {
    photoUrl?: string;
}

export const useUpdateProfilePicture = () => {
    const { data: user } = useUser();

    if (!user) return;

    return async ({ photoUrl }: UpdateProfilePictureOptions) => {
        await updateProfile(user, { photoURL: photoUrl });
    };
};
