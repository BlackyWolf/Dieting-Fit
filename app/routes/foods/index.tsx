/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import MainLayout from "../../components/templates/MainLayout.tsx";

export default function FoodsPage(props: PageProps) {
    return (
        <MainLayout>
            <h1>Foods</h1>
        </MainLayout>
    );
}
