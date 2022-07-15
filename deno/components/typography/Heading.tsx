/** @jsx h */
/** @jsxFrag h */
import { ComponentChildren, h } from "preact";
import { tw } from "@twind";
import { joinClasses } from "@utilities/css.ts";

type HeadingSize = "1" | "2" | "3" | "4" | "5" | "6";

interface Properties {
    children: ComponentChildren;
    classes?: string;
    size: HeadingSize;
}

export const Heading = ({ children, classes = "", size }: Properties) => {
    const commonCss = joinClasses(
        "font-montserrat font-semibold",
        classes
    );

    switch (size) {
        case "1": return <h1 class={tw`${commonCss} text-5xl`}>{children}</h1>;
        case "2": return <h2 class={tw`${commonCss} text-4xl`}>{children}</h2>;
        case "3": return <h3 class={tw`${commonCss} text-3xl`}>{children}</h3>;
        case "4": return <h4 class={tw`${commonCss} text-2xl`}>{children}</h4>;
        case "5": return <h5 class={tw`${commonCss} text-xl`}>{children}</h5>;
        case "6": return <h6 class={tw`${commonCss} text-lg`}>{children}</h6>;
        default: return null;
    }
}
