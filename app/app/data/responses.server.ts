import { json } from 'remix';

export function badRequest<TContent>(content: TContent) {
    return json(content, { status: 400 });
}

export function conflict<TContent>(content: TContent) {
    return json(content, { status: 409 });
}

export function internalServerError() {
    return json(
        {
            message: "The app was unable to process your request. Please contact support if this problem persists.",
            timestamp: new Date().toISOString()
        },
        { status: 500 }
    );
}

export function noContent() {
    return json(null, { status: 204 });
}

export function ok<TContent>(content: TContent) {
    return json(content, { status: 200 });
}
