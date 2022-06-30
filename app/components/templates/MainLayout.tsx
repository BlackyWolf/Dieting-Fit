/** @jsx h */
/** @jsxFrag h */
import { h, ComponentChildren, Fragment } from "preact";
import NavBar from "../navigation/NavBar.tsx";

interface Properties {
    children: ComponentChildren;
}

export default function MainLayout({ children }: Properties) {
    return (
        <Fragment>
            <NavBar />

            {children}

            <footer>
                <p>Copyright &copy; Blacky Wolf. All rights reserved.</p>
            </footer>
        </Fragment>
    );
}
