/** @jsx h */
import { h } from "preact";
import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
    return (
        <div>
            <h1>404 Not found D:</h1>

            <p>{url.pathname}</p>
        </div>
    );
}
