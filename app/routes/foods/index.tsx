/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from '@twind';
import { Food } from "@models/foods/Food.ts";
import { getFoods } from "@data/foods/getFoods.ts";
import { Heading } from "@components/typography/Heading.tsx";
import MainLayout from "@components/templates/MainLayout.tsx";

export const handler: Handlers<Food[]> = {
    async GET(_, context) {
        const { skip, take } = context.params;

        const foods = await getFoods(+skip, +take);

        return context.render(foods);
    }
};

export default function FoodsPage({ data }: PageProps<Food[]>) {
    console.log(data);

    return (
        <MainLayout>
            <div class={tw`flex items-center`}>
                <Heading size="1">Foods</Heading>

                <a href="/foods/add" class={tw`ml-auto bg-green-500 px-4 py-2 text-sm font-semibold text-white rounded-md`}>Add</a>
            </div>

            <hr class={tw`my-6`} />

            {data?.length > 0 && (
                <ul>
                    {data.map(({ name }) => (
                        <li>{name}</li>
                    ))}
                </ul>
            )}

            {(!data || data.length < 1) && (
                <p>There's no food D:</p>
            )}
        </MainLayout>
    );
}
