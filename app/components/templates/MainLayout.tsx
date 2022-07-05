/** @jsx h */
/** @jsxFrag h */
import { Head } from "https://deno.land/x/fresh@1.0.0/runtime.ts";
import { h, ComponentChildren, Fragment } from "preact";
import { apply, css, tw } from "twind/css";
import NavBar from "../navigation/NavBar.tsx";

interface Properties {
    children: ComponentChildren;
    title?: string;
}

export default function MainLayout({ children, title = "DietingFit" }: Properties) {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
            </Head>

            <NavBar />

            <main class={tw`p-4`}>
                {children}
            </main>

            <footer class={tw`mt-auto`}>
                <p>Copyright &copy; Blacky Wolf. All rights reserved.</p>
            </footer>
        </Fragment>
    );
}
