/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import { Food } from "@models/index.ts";
import { getFoods } from "@data/index.ts";
import { Heading, MainLayout } from "@components/index.ts";

export const handler: Handlers<Food[]> = {
    async GET(request, context) {
        const url = new URL(request.url);

        const skip = url.searchParams.get("skip") || 0;
        const take = url.searchParams.get("take") || 20;

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

                <a href="/foods/add" class={tw`ml-auto text-green-500 text-lg font-semibold flex items-center hover:text-green-400 transition duration-150`}>
                    <i class={tw`fa-duotone fa-plus fa-lg mr-2`}></i>
                    Add new food
                </a>
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
                <p>There"s no food D:</p>
            )}
        </MainLayout>
    );
}
