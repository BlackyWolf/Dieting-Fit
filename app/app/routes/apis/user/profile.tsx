import { ActionFunction, LoaderFunction } from 'remix';
import { db } from '~/data';
import { badRequest, noContent, notFound, notImplemented, ok } from '~/data/responses.server';
import { getUserProfileAsync } from '~/data/user';

export const loader: LoaderFunction = async ({ params }) => {
    const id = params.id;

    if (!id) return badRequest("The user ID is required.");

    const profile = await getUserProfileAsync(id);

    if (!profile) return notFound(`The profile for user '${id}' could not be located.`);

    return ok(profile);
};


export const action: ActionFunction = async ({ params, request }) => {
    const id = params.id;

    if (!id) return badRequest("The user ID is required.");

    const profile = await db.userProfile.findUnique({
        select: { id: true },
        where: { userId: id }
    });

    if (!profile) return notFound();

    if (request.method === 'DELETE') {
        await db.userProfile.delete({ where: { id: profile.id }});

        return noContent();
    }

    return notImplemented();
};
