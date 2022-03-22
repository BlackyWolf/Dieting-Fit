import type { User } from '@prisma/client';
import { verifyPassword } from '~/utilities';
import { db } from './db.server';
import { destroySession, getUserSession } from './session.server';


export type { User };

export async function authenticateUser(userName: string, password: string) {
    const user = await db.user.findUnique({
        where: { userName }
    });

    if (!user) return null;

    const authenticated = await verifyPassword(user.passwordHash, password);

    if (!authenticated) return null;

    return user;
}

export async function registerUser(user: User) {

}

export async function getAuthenticatedUser(request: Request) {
    const cookie = request.headers.get('Cookie');

    if (!cookie) return null;

    try {
        const userId = await getUserSession(cookie);

        if (!userId) return null;

        return await getUserById(userId);
    } catch (error) {
        console.log(error);

        destroySession(cookie);
    }
}

export async function getUserById(id: string) {
    return await db.user.findUnique({
        where: { id }
    });
}
