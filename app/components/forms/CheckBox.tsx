/** @jsx h */
/** @jsxFrag h */
import { h } from "preact";
import { tw } from "@twind";

interface Properties {
    autofocus?: boolean;
    classes?: string;
    checked?: boolean;
    disabled?: boolean;
    id?: string;
    label?: string;
    name: string;
    required?: boolean;
    value?: string | number | string[];
}

export const CheckBox = ({
    autofocus,
    classes = "",
    checked,
    disabled,
    id,
    label,
    name,
    required,
    value = "true"
}: Properties) => {
    return (
        <div class={classes + " " + tw`mb-4`}>
            {label && (
                <label for={id || name} class={tw`block mb-1 text-sm font-medium text-gray-700`}>{label}</label>
            )}

            <input
                autoFocus={autofocus}
                class={tw`block p-2 rounded-md shadow-sm border border-gray-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent block transition duration-150`}
                checked={checked}
                disabled={disabled}
                id={label ? id || name : undefined}
                name={name}
                required={required}
                type="checkbox"
                value={value}
            />
        </div>
    );
}
