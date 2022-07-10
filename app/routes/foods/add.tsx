/** @jsx h */
/** @jsxFrag h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import { formDataToObject } from "https://deno.land/x/form_data_to_object@0.1.0/mod.ts";
import { Button, CheckBox, Heading, Input, MainLayout, TextArea } from "@components/index.ts";
import { Food } from "@models/index.ts";

export const handler: Handlers<Food> = {
    async POST(request, context) {
        const formData = await request.formData();

        const model = formDataToObject<Food>(formData);

        return context.render(model);
    }
};

export default function AddFood({ data }: PageProps<Food>) {
    console.log(JSON.stringify(data, null, 4));

    return (
        <MainLayout>
            <Heading size="1">Add Food</Heading>

            <hr class={tw`my-6`} />

            <form method="post">
                <Input name="name" id="name" label="Name" />

                <TextArea name="description" id="description" label="Description" rows={10} />

                <CheckBox name="enabled" id="enabled" label="Enabled" />

                <Heading size="6" classes="mb-1">Tags</Heading>

                <Input name="tags[]" placeholder="tag" />
                <Input name="tags[]" placeholder="tag" />
                <Input name="tags[]" placeholder="tag" />
                <Input name="tags[]" placeholder="tag" />

                <Input type="number" name="nutrition.caloriesPerServing" id="nutrition.caloriesPerServing" label="Calories per Serving" />

                <Input type="number" name="nutrition.servingsPerContainer" id="nutrition.servingsPerContainer" label="Number of Servings" />

                <Heading size="6" classes="mb-1">Serving Size</Heading>

                <div class={tw`flex gap-4`}>
                    <Input name="nutrition.servingSizes[0].amount" placeholder="amount" />
                    <Input name="nutrition.servingSizes[0].measurement.name" placeholder="name, e.g. 'grams'" />
                    <Input name="nutrition.servingSizes[0].measurement.symbol" placeholder="symbol, shorthand e.g. 'g'" />
                </div>

                <div class={tw`flex gap-4`}>
                    <Input name="nutrition.servingSizes[1].amount" placeholder="amount" />
                    <Input name="nutrition.servingSizes[1].measurement.name" placeholder="name, e.g. 'grams'" />
                    <Input name="nutrition.servingSizes[1].measurement.symbol" placeholder="symbol, shorthand e.g. 'g'" />
                </div>

                <div class={tw`flex gap-4`}>
                    <Input name="nutrition.servingSizes[2].amount" placeholder="amount" />
                    <Input name="nutrition.servingSizes[2].measurement.name" placeholder="name, e.g. 'grams'" />
                    <Input name="nutrition.servingSizes[2].measurement.symbol" placeholder="symbol, shorthand e.g. 'g'" />
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </MainLayout>
    );
}
