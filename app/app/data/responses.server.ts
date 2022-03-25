import { json } from 'remix';

export function badRequest<TContent>(content: TContent) {
    return json(content, { status: 400 });
}
