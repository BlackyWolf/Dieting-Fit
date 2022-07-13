/** @jsx h */
/** @jsxFrag h */
import { h } from "preact";
import { tw } from "@twind";

interface Properties {
    autocomplete?: string;
    autofocus?: boolean;
    classes?: string;
    cols?: number;
    disabled?: boolean;
    id?: string;
    label?: string;
    maxlength?: number;
    minlength?: number;
    name: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    rows?: number;
    spellcheck?: boolean;
    wrap?: "hard" | "off" | "soft"
}

export const TextArea = ({
    autocomplete,
    autofocus,
    classes = "",
    cols,
    disabled,
    maxlength,
    minlength,
    id,
    label,
    name,
    placeholder,
    readonly,
    required,
    rows,
    spellcheck,
    wrap
}: Properties) => {
    return (
        <div class={classes + " " + tw`mb-4`}>
            {label && (
                <label for={id || name} class={tw`block mb-1 text-sm font-medium text-gray-700`}>{label}</label>
            )}

            <textarea
                autoComplete={autocomplete}
                autoFocus={autofocus}
                class={tw`block p-2 rounded-md shadow-sm border border-gray-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent block w-full transition duration-150`}
                cols={cols}
                disabled={disabled}
                id={label ? id || name : undefined}
                maxLength={maxlength}
                minLength={minlength}
                name={name}
                placeholder={placeholder}
                readonly={readonly}
                required={required}
                rows={rows}
                spellCheck={spellcheck}
                wrap={wrap}
            ></textarea>
        </div>
    );
}
