/** @jsx h */
/** @jsxFrag h */
import { ComponentChildren, h } from "preact";
import { tw } from '@twind';

type HeadingSize = "1" | "2" | "3" | "4" | "5" | "6";

interface Properties {
    children: ComponentChildren;
    size: HeadingSize;
}

export const Heading = ({ children, size }: Properties) => {
    switch (size) {
        case "1": return <h1 class={tw`font-semibold text-6xl`}>{children}</h1>;
        case "2": return <h2 class={tw`font-semibold text-5xl`}>{children}</h2>;
        case "3": return <h3 class={tw`font-semibold text-4xl`}>{children}</h3>;
        case "4": return <h4 class={tw`font-semibold text-3xl`}>{children}</h4>;
        case "5": return <h5 class={tw`font-semibold text-2xl`}>{children}</h5>;
        case "6": return <h6 class={tw`font-semibold text-lg`}>{children}</h6>;
        default: return null;
    }
}
