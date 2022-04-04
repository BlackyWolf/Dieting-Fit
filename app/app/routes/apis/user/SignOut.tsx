import { ActionFunction } from 'remix';
import { noContent, notImplemented } from '~/data/responses.server';
import { signOut } from '~/data/user';

export const action: ActionFunction = async ({ request }) => {
    if (request.method === 'DELETE') {
        await signOut(request);

        return noContent();
    }

    return notImplemented();
};
