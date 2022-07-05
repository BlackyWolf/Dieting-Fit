/** @jsx h */
/** @jsxFrag h */
import { ComponentChildren, h } from "preact";

interface Properties {
    children?: ComponentChildren;
    href?: string;
}

export const Button = ({ children, href }: Properties) => {
    return href ? (
        <a>{children}</a>
    ) : (
        <button>{children}</button>
    );
}
