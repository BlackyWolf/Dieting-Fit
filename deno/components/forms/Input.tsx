/** @jsx h */
/** @jsxFrag h */
import { h } from "preact";
import { tw } from "@twind";

interface Properties {
    autocomplete?: string;
    autofocus?: boolean;
    classes?: string;
    disabled?: boolean;
    id?: string;
    inputmode?: string;
    label?: string;
    list?: string;
    max?: number;
    maxlength?: number;
    min?: number;
    minlength?: number;
    name: string;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    step?: number;
    type?: string;
    value?: string | number | string[];
}

export const Input = ({
    autocomplete,
    autofocus,
    classes = "",
    disabled,
    id,
    inputmode,
    label,
    list,
    max,
    maxlength,
    min,
    minlength,
    name,
    pattern,
    placeholder,
    readonly,
    required,
    step,
    type,
    value
}: Properties) => {
    return (
        <div class={classes + " " + tw`mb-4`}>
            {label && (
                <label for={id || name} class={tw`block mb-1 text-sm font-medium text-gray-700`}>{label}</label>
            )}

            <input
                autoComplete={autocomplete}
                autoFocus={autofocus}
                class={tw`block p-2 rounded-md shadow-sm border border-gray-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent block w-full transition duration-150`}
                disabled={disabled}
                id={label ? id || name : undefined}
                inputMode={inputmode}
                list={list}
                max={max}
                maxLength={maxlength}
                min={min}
                minLength={minlength}
                name={name}
                pattern={pattern}
                placeholder={placeholder}
                readonly={readonly}
                required={required}
                step={step}
                type={type}
                value={value}
            />
        </div>
    );
}
