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
            "@import": `url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap)`,
            ".font-montserrat": {
                "font-family": "Montserrat, sans-serif"
            },
            body: apply`min-h-full flex flex-col flex-grow`,
            html: apply`min-h-full flex flex-col`
        }
    )
};

if (IS_BROWSER) setup(config);
