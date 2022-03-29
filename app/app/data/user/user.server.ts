import type { User } from '@prisma/client';
import { hashPassword, verifyPassword } from '~/utilities';
import { db } from '~/data/db.server';
import { destroySession, getUserSession } from './session.server';
import { CreateUserData } from './CreateUserData';
import { FormModel, isFormValid } from '~/data/form';
import { validateEmail, validatePassword, validateUsername } from '~/utilities/forms/validation';

export type { User };

export async function authenticateUserAsync(username: string, password: string): Promise<User | null> {
    const user = await db.user.findUnique({
        where: { username }
    });

    if (!user) return null;

    const authenticated = await verifyPassword(user.passwordHash, password);

    if (!authenticated) return null;

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

export async function getAuthenticatedUserAsync(request: Request) {
    const cookie = request.headers.get('Cookie');

    if (!cookie) return null;

    try {
        const userId = await getUserSession(cookie);

        if (!userId) return null;

        const userPromise = getUserByIdAsync(userId);

        // TODO: Create user profile method
        const profilePromise = getUserProfileAsync(userId);
    } catch (error) {
        console.log(error);

        destroySession(cookie);
    }
}

export async function getUserByIdAsync(id: string) {
    return await db.user.findUnique({
        where: { id }
    });
}

export async function registerUserAsync({ email, password, username }: CreateUserData): Promise<User> {
    const passwordHash = await hashPassword(password);

    const newUser = await db.user.create({
        data: { email, passwordHash, username }
    });

    newUser.passwordHash = '';

    return newUser;
}

export async function validateRegisterUserFormAsync(user: CreateUserData): Promise<FormModel<CreateUserData> | null> {
    const formModel: FormModel<CreateUserData> = {
        fieldErrors: {
            email: validateEmail(user.email),
            password: validatePassword(user.password),
            username: validateUsername(user.username)
        },
        fields: user
    };

    if (!isFormValid(formModel)) return formModel;

    const emailExistsPromise = doesEmailExistAsync(user.email);
    const usernameExistsPromise = doesUsernameExistAsync(user.email);

    const emailExists = await emailExistsPromise;
    const usernameExists = await usernameExistsPromise;

    if (emailExists) {
        formModel.fieldErrors.email = 'This email is already in use by another account.'
    }

    if (usernameExists) {
        formModel.fieldErrors.username = 'This username is already in use by another account.'
    }

    if (!isFormValid(formModel)) return formModel;

    return null;
}
