/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import MainLayout from "../components/templates/MainLayout.tsx";

// class={tw`p-4 mx-auto max-w-screen-md`}

export default function Home() {
    return (
        <MainLayout>
            <h1>Dashboard</h1>
        </MainLayout>
    );
}
