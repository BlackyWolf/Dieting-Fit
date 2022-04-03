import { createCookieSessionStorage } from 'remix';

const userSessionKey = 'userId';
const sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
    throw new Error('Unable to properly store user session without secret.')
}

const shortTermStorage = createCookieSessionStorage({
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

const longTermStorage = createCookieSessionStorage({
    cookie: {
        httpOnly: true,
        // maxAge: seconds * minutes * hours * days
        maxAge: 60 * 60 * 24 * 30,
        name: 'UserSession',
        path: '/',
        sameSite: 'strict',
        secrets: [sessionSecret],
        secure: process.env.NODE_ENV === 'production'
    }
});

function getStorage(rememberMe: boolean = false) {
    return rememberMe ? longTermStorage : shortTermStorage;
}


export async function createUserSession(userId: string, rememberMe: boolean = false): Promise<string> {
    const storage = getStorage(rememberMe);
    const session = await storage.getSession();

    session.set(userSessionKey, userId);

    return await storage.commitSession(session);
}

export async function destroySession(cookie: string) {
    const storage = getStorage();
    const session = await storage.getSession(cookie);

    await storage.destroySession(session);
}

export async function getUserSession(cookie: string) {
    const storage = getStorage();
    const session = await storage.getSession(cookie);

    const userId = session.get(userSessionKey);

    if (!userId || typeof userId !== 'string') return null;

    return userId;
}
