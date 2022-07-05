/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface NavLink {
    href: string;
    name: string;
}

function buildLinks(links: NavLink[]) {
    const navLinkCss = tw`px-4 py-2 hover:bg-gray-200 transition duration-150 md:rounded-md`;

    return links.map(({ href, name }) => (
        <a href={href} class={navLinkCss}>{name}</a>
    ))
}

export default function NavBar() {

    return (
        <nav class={tw`relative flex items-center bg-gray-50 p-4 border-b`}>
            <a href="/">
                <img src="/images/logo.png" title="DietingFit" alt="DietingFit" class={tw`w-48 mr-8`} />
            </a>

            <div class={tw`hidden md:flex items-center`}>
                {buildLinks([
                    { name: "Dashboard", href: "/" },
                    { name: "Foods", href: "/foods" }
                ])}
            </div>
        </nav>
    );
}
