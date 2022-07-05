import { IS_BROWSER } from "$fresh/runtime.ts";
import { apply, Configuration, setup } from "twind";
import { css } from "twind/css";
export * from "twind";

export const config: Configuration = {
    darkMode: "class",
    mode: "silent",
    preflight: (preflight) => css(
        preflight,
        {
            body: apply`min-h-full flex flex-col flex-grow`,
            html: apply`min-h-full flex flex-col`
        }
    )
};

if (IS_BROWSER) setup(config);
