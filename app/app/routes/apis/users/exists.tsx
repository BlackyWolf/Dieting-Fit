import { LoaderFunction } from 'remix';
import { doesEmailExistAsync, doesUsernameExistAsync } from '~/data/user';
import { badRequest, conflict, internalServerError, noContent } from '~/data/responses.server';

export const loader: LoaderFunction = async ({ params }) => {
    const email = params.email?.trim();
    const username = params.username?.trim();

    if (email && username) {
        return badRequest('You may select either username or email, not both.');
    }

    if (!email && !username) {
        return badRequest('You must select either username or email.');
    }

    if (email) {
        const emailExists = await doesEmailExistAsync(email);

        if (emailExists) {
            return conflict('This email already exists and cannot be reused.')
        } else {
            return noContent();
        }
    }

    if (username) {
        const usernameExists = await doesUsernameExistAsync(username);

        if (usernameExists) {
            return conflict('This username already exists and cannot be reused.')
        } else {
            return noContent();
        }
    }

    return internalServerError();
};
