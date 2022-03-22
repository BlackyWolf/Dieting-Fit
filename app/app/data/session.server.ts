import { createCookieSessionStorage } from 'remix';

const userSessionKey = 'userId';
const sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
    throw new Error('Unable to properly store user session without secret.')
}

const storage = createCookieSessionStorage({
    cookie: {
        httpOnly: true,
        // maxAge: seconds * minutes * hours * days
        maxAge: 60 * 60 * 1 * 1,
        name: 'UserSession',
        path: '/',
        sameSite: 'strict',
        secrets: [sessionSecret],
        secure: process.env.NODE_ENV === 'production'
    }
});

export async function createUserSession(userId: string) {
    const session = await storage.getSession();

    session.set(userSessionKey, userId);
}

export async function destroySession(cookie: string) {
    const session = await storage.getSession(cookie);

    await storage.destroySession(session);
}

export async function getUserSession(cookie: string) {
    const session = await storage.getSession(cookie);

    const userId = session.get(userSessionKey);

    if (!userId || typeof userId !== 'string') return null;

    return userId;
}
