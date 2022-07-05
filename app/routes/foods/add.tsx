/** @jsx h */
/** @jsxFrag h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import MainLayout from "@components/templates/MainLayout.tsx";
import { Input } from "@components/forms/Input.tsx";
import { TextArea } from "@components/forms/TextArea.tsx";
import { Heading } from "@components/typography/Heading.tsx";
import { tw } from "@twind";

export default function AddFood(props: PageProps) {
    return (
        <MainLayout>
            <Heading size="1">Add Food</Heading>

            <hr class={tw`my-6`} />

            <form>
                <Input name="name" id="name" label="Name" />
                <TextArea name="description" id="description" label="Description" rows={10} />
            </form>
        </MainLayout>
    );
}
