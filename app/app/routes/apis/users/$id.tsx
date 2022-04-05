import { ActionFunction, LoaderFunction } from 'remix';
import { db } from '~/data';
import { badRequest, noContent, notFound, notImplemented, ok } from '~/data/responses.server';
import { getUserByIdAsync } from '~/data/user';

export const loader: LoaderFunction = async ({ params }) => {
    const id = params.id;

    if (!id) return badRequest("The user ID is required.");

    const user = await getUserByIdAsync(id);

    if (!user) return notFound(`The user with id '${id}' could not be located.`);

    return ok(user);
};

export const action: ActionFunction = async ({ params, request }) => {
    const id = params.id;

    if (!id) return badRequest("The user ID is required.");

    const user = await db.user.findUnique({
        select: { id: true },
        where: { id }
    });

    if (!user) return notFound();

    if (request.method === 'DELETE') {
        await db.user.delete({ where: { id }});

        return noContent();
    }

    return notImplemented();
};
