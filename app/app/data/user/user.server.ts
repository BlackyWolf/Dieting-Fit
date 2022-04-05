import type { User, UserProfile } from '@prisma/client';
import { hashPassword, md5, verifyPassword } from '~/utilities';
import { db } from '~/data/db.server';
import { destroySession, getUserSession } from './session.server';
import type { CreateUserData } from './CreateUserData';
import { FormModel, isFormValid } from '~/data/form';
import { validateEmail, validatePassword, validateRememberMe, validateUsername } from '~/utilities/forms/validation';
import type { AuthenticatedUser } from './AuthenticatedUser';
import { SignInUserData } from './SignInUserData';

export type { User, UserProfile };

export async function authenticateUserAsync(username: string, password: string): Promise<User | undefined> {
    const user = await db.user.findUnique({
        where: { username }
    });

    if (!user) return;

    const authenticated = await verifyPassword(user.passwordHash, password);

    if (!authenticated) return;

    user.passwordHash = '';

    return user;
}

export function buildCreateUserData(form: FormData): CreateUserData {
    const email = form.get('email')?.toString() || '';
    const password = form.get('password')?.toString() || '';
    const username = form.get('username')?.toString() || '';

    return {
        email,
        password,
        username
    };
}

export function buildSignInUserData(form: FormData): SignInUserData {
    const password = form.get('password')?.toString() || '';
    const rememberMe = form.get('remember-me')?.valueOf() === 'true';
    const username = form.get('username')?.toString() || '';

    return {
        password,
        rememberMe,
        username
    };
}

export async function doesEmailExistAsync(email: string): Promise<boolean> {
    const user = await db.user.findUnique({
        select: { id: true },
        where: { email }
    });

    return !!user;
}

export async function doesUsernameExistAsync(username: string): Promise<boolean> {
    const user = await db.user.findUnique({
        select: { id: true },
        where: { username }
    });

    return !!user;
}

export async function getAuthenticatedUserAsync(request: Request): Promise<AuthenticatedUser | undefined> {
    const cookie = request.headers.get('Cookie');

    if (!cookie) return;

    try {
        const userId = await getUserSession(cookie);

        if (!userId) return;

        const username = await getUsername(userId);

        if (!username) return;

        const imageUrl = await getProfilePicture(userId);

        if (!imageUrl) return;

        return {
            imageUrl,
            username
        };
    } catch (error) {
        console.log(error);

        destroySession(cookie);
    }
}

export async function getProfilePicture(userId: string): Promise<string | undefined> {
    const profile = await db.userProfile.findUnique({
        select: { imageUrl: true },
        where: { userId }
    });

    return profile?.imageUrl;
}

export async function getUserByIdAsync(id: string): Promise<User | null> {
    return await db.user.findUnique({
        where: { id }
    });
}

export async function getUsername(id: string): Promise<string | undefined> {
    const user = await db.user.findUnique({
        select: { username: true },
        where: { id }
    });

    return user?.username;
}

export async function getUserProfileAsync(userId: string): Promise<UserProfile | null> {
    return await db.userProfile.findFirst({
        where: { userId }
    });
}

export async function signIn() {

}

export async function signOut(request: Request) {
    const cookie = request.headers.get('Cookie');

    if (!cookie) return '';

    return destroySession(cookie);
}

export async function registerUserAsync({ email, password, username }: CreateUserData): Promise<User> {
    const passwordHash = await hashPassword(password);

    const user = await db.user.create({
        data: { email, passwordHash, username }
    });

    await db.userProfile.create({
        data: {
            imageUrl: 'https://www.gravatar.com/avatar/' + md5(email),
            userId: user.id
        }
    });

    user.passwordHash = '';

    return user;
}

export async function validateRegisterUserFormAsync(user: CreateUserData): Promise<FormModel<CreateUserData> | undefined> {
    const formModel: FormModel<CreateUserData> = {
        fieldErrors: {
            email: validateEmail(user.email),
            password: validatePassword(user.password),
            username: validateUsername(user.username)
        },
        fields: user
    };

    const emailExistsPromise = doesEmailExistAsync(user.email);
    const usernameExistsPromise = doesUsernameExistAsync(user.username);

    const emailExists = await emailExistsPromise;
    const usernameExists = await usernameExistsPromise;

    if (usernameExists) {
        formModel.fieldErrors.username = 'This username is already in use by another account.'
    }

    if (emailExists) {
        formModel.fieldErrors.email = 'This email is already in use by another account.'
    }

    if (!isFormValid(formModel)) return formModel;

    return;
}

export async function validateSignInUserFormAsync(user: SignInUserData): Promise<FormModel<SignInUserData> | undefined> {
    const formModel: FormModel<SignInUserData> = {
        fieldErrors: {
            password: validatePassword(user.password, false),
            rememberMe: validateRememberMe(user.rememberMe),
            username: validateEmail(user.username)
        },
        fields: user
    };

    if (!isFormValid(formModel)) return formModel;

    return;
}
