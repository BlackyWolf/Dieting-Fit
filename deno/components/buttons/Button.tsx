/** @jsx h */
/** @jsxFrag h */
import { ComponentChildren, h } from "preact";
import { tw } from "@twind";
import { joinClasses } from "@utilities/css.ts";

type ButtonColor = "primary" | "secondary" | "info" | "success" | "warning" | "danger";
type ButtonRadius = "sm" | "md" | "lg" | "full" | "none";
type ButtonSize = "sm" | "md" | "lg";
type ButtonType = "button" | "reset" | "submit";

interface Properties {
    children?: ComponentChildren;
    classes?: string;
    color?: ButtonColor;
    href?: string;
    radius?: ButtonRadius;
    size?: ButtonSize;
    type?: ButtonType;
}

function getColor(color: ButtonColor) {
    switch (color) {
        case "primary": return "bg-blue-500 text-white focus:ring-blue-400 focus:ring-opacity-75";
        case "secondary": return "bg-gray-500 text-white focus:ring-gray-400 focus:ring-opacity-75";
        case "info": return "bg-cyan-500 text-white focus:ring-cyan-400 focus:ring-opacity-75";
        case "success": return "bg-green-500 text-white focus:ring-green-400 focus:ring-opacity-75";
        case "warning": return "bg-orange-500 text-white focus:ring-orange-400 focus:ring-opacity-75";
        case "danger": return "bg-red-500 text-white focus:ring-red-400 focus:ring-opacity-75";
        default: return "";
    }
}

function getRadius(radius: ButtonRadius) {
    switch (radius) {
        case "sm": return "rounded";
        case "md": return "rounded-md";
        case "lg": return "rounded-lg";
        case "full": return "rounded-full";
        default: return "";
    }
}

function getSize(size: ButtonSize) {
    switch (size) {
        case "sm": return "px-2 py-1";
        case "md": return "px-4 py-2";
        case "lg": return "px-6 py-3";
        default: return "";
    }
}

export const Button = ({ classes = "",children, color = "primary", href, radius = "md", size = "md", type = "button" }: Properties) => {
    const css = tw(joinClasses(
        "focus:outline-none focus:ring-2 transition duration-150",
        getColor(color),
        getRadius(radius),
        getSize(size),
        classes,
    ));

    return href ? (
        <a href={href} class={css}>
            {children}
        </a>
    ) : (
        <button type={type} class={css}>{children}</button>
    );
}
