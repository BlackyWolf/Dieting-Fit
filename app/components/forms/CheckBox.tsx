/** @jsx h */
/** @jsxFrag h */
import { h } from "preact";
import { tw } from "@twind";

interface Properties {
    classes?: string;
    id?: string;
    label?: string;
    name: string;
    readonly?: boolean;
    required?: boolean;
}

export const CheckBox = ({ classes = "", id, label, name, readonly, required }: Properties) => {
    return (
        <div class={classes + " " + tw`mb-4`}>
            {label && (
                <label for={id || name} class={tw`block mb-1 text-sm font-medium text-gray-700`}>{label}</label>
            )}

            <input
                type="checkbox"
                name={name}
                value="true"
                id={label ? id || name : undefined}
                readonly={readonly}
                required={required}
                class={tw`block p-2 rounded-md shadow-sm border border-gray-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent block transition duration-150`}
            />
        </div>
    );
}
