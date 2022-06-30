/** @jsx h */
import { h } from "preact";
import { tw } from "../../utils/twind.ts";

export default function NavBar() {
    return (
        <nav class={tw`flex items-center gap-4`}>
            <a href="/">Dashboard</a>
            <a href="/foods">Foods</a>
        </nav>
    );
}
