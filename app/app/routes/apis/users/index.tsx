import { LoaderFunction } from 'remix';
import { db } from '~/data';
import { ok } from '~/data/responses.server';

export const loader: LoaderFunction = async () => {
    const users = await db.user.findMany();

    return ok(users);
};
